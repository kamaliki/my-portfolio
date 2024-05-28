"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().nonempty({ message: "Message is required" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const { handleSubmit, formState: { errors }, reset } = form;

  const onSubmit = async (data: ContactFormValues) => {
    console.log(data);
    //reset();
  };

  return (
    <section id="contact"
    className="mb-10 max-w-[103rem] scroll-mt-28 text-center sm:mb-40"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Contact Me
      </motion.h2>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                {errors.email && <FormMessage>{errors.email.message}</FormMessage>}
              </FormItem>
            )}
          />
          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <textarea
                    className="w-full h-32 p-2 border rounded-lg"
                    {...field}
                  />
                </FormControl>
                {errors.message && (
                  <FormMessage>{errors.message.message}</FormMessage>
                )}
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full text-white py-2 rounded-lg">
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
}
