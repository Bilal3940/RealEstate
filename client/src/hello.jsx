import React, { useState } from "react";
import { useAuth } from "./AuthContext"; // Import the useAuth hook

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useAuth(); // Use the useAuth hook to get the user and token

  const handleRegistration = async () => {
    try {
      // Make sure to replace "YOUR_REGISTRATION_API_ENDPOINT" with the actual URL
      const response = await fetch("YOUR_REGISTRATION_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Include the token in the Authorization header (if required)
          Authorization: `Bearer ${user.token}`, // Replace "user.token" with the actual token
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        // Registration was successful
        // You can handle success as needed (e.g., redirect to login page)
      } else {
        // Handle registration error here
        console.error("Registration failed:", response.status);
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error during registration:", error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
}

export default Registration;
