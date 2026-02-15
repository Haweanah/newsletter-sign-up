import { useState } from "react";

export default function Form({ setSuccess, setEmail }) {
  const [emailInput, setEmailInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput)) {
      setError("Valid email required");
    } else {
      setError("");
      setEmail(emailInput);
      setSuccess(true);
    }
    console.log(error);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>

      <p className="error-display">
        <label>Email address</label>

        {error && <span className="error">{error}</span>}
      </p>
     
      <input
        type="email"
        value={emailInput}
        onChange={(e) => {setEmailInput(e.target.value);
        setError("")}
        }
        placeholder="email@company.com"
        className={error ? "input-error" : ""}
      />

     
      <button type="submit">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
}
