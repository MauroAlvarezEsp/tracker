### loginSchema Documentation

**Description:**
The `loginSchema` is a Zod schema used for validating user login data. It ensures that the email and password fields meet the required format and constraints, providing clear error messages when validation fails.

---

**Features:**
1. **Email Validation:**  
   - Ensures the `email` field contains a valid email address.
   - Provides a custom error message: "Invalid email address".

2. **Password Validation:**  
   - Ensures the `password` field has a minimum length of 8 characters.
   - Provides a custom error message: "Password must be at least 8 characters".

3. **Trimming Input:**  
   - Automatically removes leading and trailing whitespace from both the `email` and `password` fields.

---

**Usage Example:**
```typescript
import { loginSchema } from "./path/to/schema";

const loginData = {
  email: "user@example.com",
  password: "password123",
};

try {
  const validatedData = loginSchema.parse(loginData);
  console.log("Validation successful:", validatedData);
} catch (error) {
  console.error("Validation failed:", error.errors);
}
