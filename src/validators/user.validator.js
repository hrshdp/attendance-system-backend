import { z } from "zod";

// Zod schema for user input validation

export const userSchema = z.object({
    name: z.string()
    .min(2, "Name must be at least 2 characters long")
    .max(100, "Name must not be more than 100 characters long")
    .trim()
    .toLowerCase(),

    email: z.string()
    .email("Invalid email format")
    .max(100, "email must not be more than 100 characters long"),

    phone_number: z.string()
    .regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),

    password: z.string()
    .min(8, "Password must be at least 8 characters long"),

    role: z.enum(["student", "teacher", "admin"]).default("student"),
});

/* We use "import {...} from "./a/xyz.js" if we use export const function

but use import ... from "./a/xyz.js" if we use export default statement at last

*/