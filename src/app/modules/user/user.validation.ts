import { z } from "zod";

export const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
    phone: z.string().min(10),
    address: z.string().min(1),
  }),
});

export const UserValidations = {
  createUserValidationSchema,
};
