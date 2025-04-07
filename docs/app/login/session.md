### Session Management Functions Documentation

**Description:**
This file contains server-side session management functions for a Next.js application. It handles session creation, deletion, encryption, and decryption using JSON Web Tokens (JWT) for secure user authentication.

---

**Functions:**
1. **`createSession(user: User): Promise<void>`**
   - **Purpose:** Creates a new session for the specified user and stores it in a secure, HTTP-only cookie.
   - **Parameters:**
     - `user`: (User) The user object containing authentication details.
   - **Workflow:**
     1. Calculates the session expiration date (7 days from the current time).
     2. Encrypts the session payload (`user` and `expiresAt`) using `encrypt`.
     3. Stores the encrypted session in a cookie with properties:
        - `httpOnly`: Ensures the cookie is inaccessible to client-side scripts.
        - `secure`: Ensures the cookie is sent over HTTPS.
        - `expires`: Sets the cookie expiration to match the session expiration.
   - **Dependencies:**
     - Relies on the `encrypt` function and `cookies` from Next.js.

2. **`deleteSession(): Promise<void>`**
   - **Purpose:** Deletes the current session by removing the session cookie.
   - **Workflow:**
     1. Accesses the cookie store using the `cookies` API.
     2. Deletes the "session" cookie.
   - **Dependencies:**
     - Utilizes the `cookies` API from Next.js.

3. **`encrypt(payload: SessionPayload): Promise<string>`**
   - **Purpose:** Encrypts a session payload into a JSON Web Token (JWT).
   - **Parameters:**
     - `payload`: (SessionPayload) The session data to be encrypted.
   - **Workflow:**
     1. Signs the payload using `jose`'s `SignJWT` with:
        - Header: `alg: "HS256"`
        - Expiration: 7 days
     2. Uses the `SESSION_SECRET` environment variable as the signing key.
   - **Return Value:** A signed JWT string.

4. **`decrypt(session: string | undefined): Promise<SessionPayload | null>`**
   - **Purpose:** Decrypts and verifies a session token to retrieve its payload.
   - **Parameters:**
     - `session`: (string | undefined) The encrypted session token (default: an empty string).
   - **Workflow:**
     1. Verifies the token's signature and expiration using `jose`'s `jwtVerify`.
     2. Returns the decrypted session payload if verification is successful.
     3. Logs an error and returns `null` if verification fails.
   - **Return Value:** The decrypted session payload or `null` if verification fails.

---

**Key Variables:**
1. **`secretKey`:**  
   - Retrieved from the environment variable `SESSION_SECRET` for signing and verifying JWTs.
   - Converted into a Uint8Array using `TextEncoder` for compatibility with `jose`.

2. **`encodedKey`:**  
   - A UTF-8 encoded representation of `secretKey`.

---

**Error Handling:**
- **`decrypt` Function:** Logs an error message (`"Failed to verify session"`) if token verification fails.

---

**Usage Example:**
```typescript
import { createSession, deleteSession, encrypt, decrypt } from "./session";
import { User } from "@/types/User";

// Example User
const user: User = { id: "123", name: "John Doe", email: "john@example.com", roles: ["admin"] };

// Create Session
await createSession(user);

// Delete Session
await deleteSession();

// Encrypt Payload
const sessionToken = await encrypt({ user, expiresAt: new Date() });
console.log("Encrypted Token:", sessionToken);

// Decrypt Token
const sessionPayload = await decrypt(sessionToken);
if (sessionPayload) {
  console.log("Decrypted Payload:", sessionPayload);
} else {
  console.error("Failed to decrypt session token.");
}
