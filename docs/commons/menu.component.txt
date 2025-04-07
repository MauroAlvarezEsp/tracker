### MenuComponent Documentation

**Description:**
The `MenuComponent` is a reusable menu component designed for dynamic rendering of navigation options based on the user roles specified in the `session`. It filters and displays links (`pages`) that are accessible to the user, providing a role-based menu system.

---

**Features:**
1. **Dynamic Rendering:**  
   - Filters menu links (`pages`) based on the `requiredRoles` of each link and the roles assigned to the user in the `session`.
   - Uses the `session.user?.roles` property to determine the user's access.

2. **Role-Based Access Control:**  
   - Ensures that only links relevant to the user's roles are displayed.

3. **Styling and Interactivity:**  
   - Styled with CSS classes to provide a visually appealing and interactive menu:
     - Default background (`bg-gray-500`) and dark mode support (`dark:bg-gray-700`).
     - Hover effect for better user experience (`hover:bg-gray-600`).

---

**Props:**
1. **`session` (`SessionPayload`):**  
   - Contains user data, including roles used for filtering menu links.

2. **`pages` (`MenuPages[]`):**  
   - An array of menu link objects. Each object includes:
     - `path`: The navigation path.
     - `title`: The display title for the menu link.
     - `requiredRoles`: An array of roles required to access the link.

---

**Implementation Details:**
1. **Filtering Logic:**  
   - The `filter()` method checks whether the `session.user?.roles` array includes any role required by the `link.requiredRoles`.

2. **Rendering:**  
   - The `map()` method renders filtered links using the `Next.js` `<Link