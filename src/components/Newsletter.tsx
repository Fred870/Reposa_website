import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideInFromLeft } from "@/lib/motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterForm = z.infer<typeof newsletterSchema>;

export default function Newsletter() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: NewsletterForm) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("form-name", "newsletter");
      formData.append("email", data.email);

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          Object.fromEntries(formData as any),
        ).toString(),
      });

      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Subscription failed",
        description:
          "There was a problem subscribing to the newsletter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-accent/50 rounded-2xl p-8 md:p-12"
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Stay Updated
              </h2>
              <p className="text-gray-700">
                Subscribe to our newsletter to get notified when the app
                launches.
              </p>
            </div>

            <motion.div
              variants={slideInFromLeft(0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="max-w-md mx-auto"
            >
              {/* Netlify Form */}
              <Form {...form}>
                <form
                  name="newsletter"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-3"
                >
                  <input type="hidden" name="form-name" value="newsletter" />
                  <div className="hidden">
                    <label>
                      Don’t fill this out: <input name="bot-field" />
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="flex-grow">
                          <FormControl>
                            <Input
                              placeholder="Your email address"
                              {...field}
                              className="px-4 py-6 rounded-full border border-gray-300 focus:border-primary focus:outline-none"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="bg-primary text-white px-6 py-6 h-auto rounded-full font-medium hover:bg-primary/90 transition-colors"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Subscribing..." : "Subscribe"}
                    </Button>
                  </div>

                  <p className="text-xs text-gray-500 mt-3 text-center">
                    We respect your privacy and will never share your
                    information.
                  </p>
                </form>
              </Form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
