### LoginForm Documentation

**Description:**
The `LoginForm` is a client-side React component for handling user login. It uses the `useActionState` hook for managing login actions and displays a form with input fields for email and password. The `SubmitButton` component handles the form submission state.

---

**Features:**
1. **User-Friendly Login Form:**
   - Accepts email and password inputs with real-time error feedback.

2. **State Management:**
   - Uses the `useActionState` hook to handle the state of the login action.

3. **Form Status Feedback:**
   - The `SubmitButton` component displays feedback during submission (`pending` state).

4. **Styling:**
   - Styled with responsive and accessible CSS classes for an intuitive user experience:
     - Dark background theme (`bg-gray-800`) with light text (`text-white`).
     - Focus and hover effects for better interactivity.

---

**Components:**
1. **`LoginForm`:**
   - Displays the login form with input fields for email and password.
   - Validates the inputs and shows error messages if validation fails.

2. **`SubmitButton`:**
   - A button for submitting the form.
   - Dynamically updates its state to reflect whether the form is being submitted.

---

**Props:**
This file does not accept any external props. It internally manages the login action and state.

---

**Implementation Details:**
1. **Email and Password Inputs:**
   - Email input:
     - Validates if the email format is correct.
     - Displays error messages using `state?.errors?.email`.
   - Password input:
     - Ensures a valid password is entered.
     - Displays error messages using `state?.errors?.password`.

2. **SubmitButton Component:**
   - Uses the `useFormStatus` hook to track the form's pending state.
   - Disables itself during form submission.

3. **Action Handling:**
   - `useActionState` initializes the `login` action and its state.

4. **Styling:**
   - Responsive layout with a maximum width of `400px` for input fields.
   - Consistent design with rounded corners and hover effects.

---

**Usage Example:**
```typescript
import LoginForm from "./LoginForm";

function App() {
  return (
    <div>
      <h1>Welcome Back</h1>
      <LoginForm />
    </div>
  );
}
