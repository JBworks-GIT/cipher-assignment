import { useState } from "react";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const loginPageStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
    margin: "auto",
    padding: "24px",
    maxWidth: "400px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
  };

  const inputStyles = {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    boxSizing: "border-box",
    outline: "none",
  };

  const buttonStyles = {
    padding: "12px 24px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    outline: "none",
    transition: "background-color 0.3s ease",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { signup } = useSignup();

  const handleSubmit = () => {
    const validation = true; 
    if (validation) {
      signup({ name ,email, password });
    } else {
      alert("Validation Failed");
    }
  };

  return (
    <>
    <div style={loginPageStyles}>
      <h1>Sign Up</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyles}
        placeholder="Enter your name"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyles}
        placeholder="Enter your email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyles}
        placeholder="Choose a password"
      />
      <button onClick={handleSubmit} style={buttonStyles}>
        Sign Up
      </button>
    </div>
    <div className="signup-login">
    <footer >
      Already have an Account? <a onClick={() => (navigate('/login'))} > Login</a>
    </footer>
  </div>
  </>
  );
};

export default Signup;
