### SignOutButton Documentation

**Description:**
The `SignOutButton` is a client-side React component that provides a button for signing out a user. It uses the `useActionState` hook to manage the state and trigger the `signout` action.

---

**Features:**
1. **State Management:**  
   - Utilizes the `useActionState` hook to manage the signing-out process and its associated state.

2. **Styling and Interactivity:**  
   - Styled with CSS classes for a visually appealing button:
     - Background (`bg-gray-500`) and dark mode support (`dark:bg-gray-700`).
     - Hover effect (`hover:bg-gray-600`) and cursor indication (`hover:cursor-pointer`).
     - Responsive text alignment (`text-center`) and rounded corners (`rounded`).

3. **Action Trigger:**  
   - On button click, triggers the `signout` function to perform the sign-out process.

---

**Props:**
This component does not accept any external props. All functionality is handled internally.

---

**Implementation Details:**
1. **Client-Side Rendering:**  
   - Uses the `'use client'` directive to ensure the component is rendered on the client.

2. **Signout Action:**  
   - The `signout` function is imported from the `../app/login/actions` module and executed on button click.

3. **Global Styles:**  
   - Includes global styles by importing `../app/globals.css`.

4. **Hook Usage:**  
   - The `useActionState` hook is used to manage the state of the `signout` action.

---

**Code Example:**
```typescript
import { SignOutButton } from "./SignOutButton";

function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <SignOutButton />
    </div>
  );
}
