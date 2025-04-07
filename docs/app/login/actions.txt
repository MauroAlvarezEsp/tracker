### Authentication Functions Documentation

**Description:**
This file contains server-side functions for handling user authentication in a Next.js application. It includes functionality for logging in (`login`) and signing out (`signout`) users. The logic uses session management, form validation, and redirects based on authentication status.

---

**Functions:**
1. **`login(prevState: any, formData: FormData): Promise<object | void>`**
   - **Purpose:** Handles the login process by validating user input, verifying credentials, creating a session, and redirecting to the dashboard upon success.
   - **Parameters:**
     - `prevState`: (any) Represents the previous state, currently unused but can be extended for future needs.
     - `formData`: (FormData) Contains the user-provided login data (email and password).
   - **Workflow:**
     1. Validates the form data using `loginSchema`.
     2. Searches for a user in `testUsers` by matching the provided email.
     3. Compares the provided password with the stored password.
     4. On successful authentication:
        - Creates a session for the user using `createSession`.
        - Redirects to the `/dashboard` route.
     5. On failure:
        - Returns error messages for invalid email/password or validation failures.
   - **Return Value:** Object containing error messages if validation or authentication fails; otherwise, redirects the user.

2. **`signout(): Promise<void>`**
   - **Purpose:** Logs out the user by deleting the session and redirecting to the login page.
   - **Workflow:**
     1. Deletes the current session using `deleteSession`.
     2. Redirects the user to the `/login` route.

---

**Dependencies:**
1. **Session Management:**
   - `createSession`: Creates a session for an authenticated user.
   - `deleteSession`: Deletes the current session for logging out.

2. **Validation:**
   - `loginSchema`: A Zod schema used to validate the login form data.

3. **Mocks:**
   - `testUsers`: A mock data array of users for testing purposes. Contains user credentials for authentication.

4. **Navigation:**
   - `redirect`: Used to perform server-side redirection to different routes (`/dashboard` or `/login`).

---

**Error Handling:**
- Returns detailed error messages for:
  - Invalid email format, password length, or missing fields.
  - Incorrect email or password during login.

---

**Usage Example:**
```typescript
// Example usage of login function
const formData = new FormData();
formData.append("email", "user@example.com");
formData.append("password", "password123");

const result = await login(null, formData);

if (result?.errors) {
  console.error("Login failed:", result.errors);
} else {
  console.log("Login successful");
}

// Example usage of signout function
await signout();
