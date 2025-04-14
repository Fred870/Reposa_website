import { newsletters, type Newsletter, type InsertNewsletter } from "@shared/schema";

export interface IStorage {
  getNewsletterByEmail(email: string): Promise<Newsletter | undefined>;
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getAllNewsletters(): Promise<Newsletter[]>;
}

export class MemStorage implements IStorage {
  private newsletters: Map<number, Newsletter>;
  currentId: number;

  constructor() {
    this.newsletters = new Map();
    this.currentId = 1;
  }

  async getNewsletterByEmail(email: string): Promise<Newsletter | undefined> {
    return Array.from(this.newsletters.values()).find(
      (newsletter) => newsletter.email === email,
    );
  }

  async createNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = this.currentId++;
    const newsletter: Newsletter = { ...insertNewsletter, id };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async getAllNewsletters(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }
}

export const storage = new MemStorage();
