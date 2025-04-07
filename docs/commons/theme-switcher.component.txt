### ThemeSwitcher Documentation

**Description:**
The `ThemeSwitcher` is a client-side React component that allows users to toggle between light and dark themes. It uses the `useState` and `useEffect` hooks to manage and apply the theme dynamically by adding or removing a CSS class from the root HTML element.

---

**Features:**
1. **Theme Toggling:**  
   - Toggles between light and dark modes by modifying the `classList` of the root `<html>` element.

2. **Icon-Based Interaction:**  
   - Displays the `BulbOutlined` icon from `@ant-design/icons` for a user-friendly toggle experience.

3. **Responsive Design:**  
   - Automatically updates the UI theme in real-time based on the `darkMode` state.

---

**Implementation Details:**
1. **State Management:**  
   - The `darkMode` state is initialized to `true` (dark mode by default).
   - The `setDarkMode` function updates the state when the user clicks the icon.

2. **Effect Hook:**  
   - The `useEffect` hook listens for changes to the `darkMode` state.
   - Applies or removes the `"dark"` CSS class from the root `<html>` element accordingly.

3. **Styling Support:**  
   - Assumes dark mode styles are defined in the global CSS under the `"dark"` class.

---

**Props:**
This component does not accept any external props. It functions independently using internal state.

---

**Usage Example:**
```typescript
import ThemeSwitcher from "./ThemeSwitcher";

function App() {
  return (
    <div>
      <h1>Welcome to the Theme Toggle App</h1>
      <ThemeSwitcher />
    </div>
  );
}
