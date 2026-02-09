import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  sendContact: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
      message: z.string().min(5),
    }),
    handler: async (input) => {
      // AQUÍ: Conectar con tu BD (Astro DB) o enviar email (Resend/Nodemailer)
      console.log("Nuevo mensaje:", input);

      // Simular delay
      await new Promise((r) => setTimeout(r, 1000));

      return { success: true };
    },
  }),
};
