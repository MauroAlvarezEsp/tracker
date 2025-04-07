### Middleware Documentation

**Description:**
This middleware function serves as an access control layer for routing in a Next.js application. It uses cookies and session decryption to determine whether a user has access to certain routes or should be redirected based on authentication status.

---

**Features:**
1. **Protected Routes:**
   - Routes requiring authentication (`/dashboard`, `/monitor`) are included in the `protectedRoutes` array.
   - Redirects unauthenticated users to the `/login` route.

2. **Public Routes:**
   - Routes accessible without authentication (`/login`) are included in the `publicRoutes` array.
   - Redirects authenticated users to the `/dashboard` route.

3. **Session Management:**
   - Retrieves session data from cookies.
   - Decrypts the session using the `decrypt` function to access user authentication information.

---

**Key Variables and Functions:**
1. **`protectedRoutes`:**  
   An array of routes requiring authentication.

2. **`publicRoutes`:**  
   An array of routes accessible without authentication.

3. **`cookieStore`:**  
   Uses Next.js's `cookies` API to retrieve stored cookies.

4. **`decrypt`:**  
   A function for decrypting the session cookie to access user data.

5. **Routing Logic:**  
   - Redirects unauthenticated users from protected routes to `/login`.
   - Redirects authenticated users from public routes to `/dashboard`.

6. **Default Response:**  
   Returns `NextResponse.next()` for all other cases, allowing the request to proceed.

---

**Implementation Details:**
1. **Authentication Check:**
   - Checks if a session exists and if the user is authenticated (`session?.user?.id`).
   - Protects routes using conditional logic based on authentication status.

2. **Environment Flexibility:**
   - Relies on Next.js's `cookies` API and `NextRequest`/`NextResponse` for seamless server-side handling.

---

**Code Example:**
```typescript
import middleware from "./middleware";

export async function handler(req: NextRequest) {
  return middleware(req);
}
