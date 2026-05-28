import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createContactSubmission, getContactSubmissions, createQuoteRequest, getQuoteRequests } from "./db";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Contact Form Router
  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email"),
        phone: z.string().optional(),
        company: z.string().optional(),
        subject: z.string().min(1, "Subject is required"),
        message: z.string().min(10, "Message must be at least 10 characters"),
      }))
      .mutation(async ({ input }) => {
        try {
          await createContactSubmission({
            name: input.name,
            email: input.email,
            phone: input.phone || null,
            company: input.company || null,
            subject: input.subject,
            message: input.message,
            status: "new",
          });
          return { success: true, message: "Form submitted successfully" };
        } catch (error) {
          console.error("Contact form submission error:", error);
          throw new Error("Failed to submit form");
        }
      }),
  }),

  // Quote Request Router
  quote: router({
    request: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email"),
        phone: z.string().min(1, "Phone is required"),
        company: z.string().optional(),
        productCategory: z.string().min(1, "Product category is required"),
        productName: z.string().min(1, "Product name is required"),
        quantity: z.number().int().positive("Quantity must be positive"),
        description: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        try {
          await createQuoteRequest({
            name: input.name,
            email: input.email,
            phone: input.phone,
            company: input.company || null,
            productCategory: input.productCategory,
            productName: input.productName,
            quantity: input.quantity,
            description: input.description || null,
            status: "pending",
          });
          return { success: true, message: "Quote request submitted successfully" };
        } catch (error) {
          console.error("Quote request submission error:", error);
          throw new Error("Failed to submit quote request");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
