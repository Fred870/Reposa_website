import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      // Validate the request body
      const newsletterData = insertNewsletterSchema.parse(req.body);
      
      // Check if email already exists
      const existingNewsletter = await storage.getNewsletterByEmail(newsletterData.email);
      
      if (existingNewsletter) {
        return res.status(409).json({ 
          message: "This email is already subscribed to our newsletter." 
        });
      }
      
      // Create new newsletter subscription
      const newNewsletter = await storage.createNewsletter(newsletterData);
      
      res.status(201).json({
        message: "Successfully subscribed to the newsletter!",
        data: newNewsletter
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: validationError.message 
        });
      }
      
      res.status(500).json({ 
        message: "Internal server error. Please try again later." 
      });
    }
  });

  // Get all newsletter subscribers (for admin purposes)
  app.get("/api/newsletter", async (_req, res) => {
    try {
      const newsletters = await storage.getAllNewsletters();
      res.status(200).json(newsletters);
    } catch (error) {
      res.status(500).json({ 
        message: "Internal server error. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
