import { useState } from "react";

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "dhaka";
      if (shouldError) {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      } else {
        resolve();
      }
    }, 3000);
  });
}

export default function Form() {
  // 'empty', 'typing', 'submitting', 'error', 'success':
  //  mandatory states
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing"); // submitting, typing, success

  if (status === "success") {
    return <h1>That's right!</h1>;
  }

  const handleTextAriaChange = async (event) => {
    setError(null);
    setAnswer(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await submitForm(answer);
      setStatus("success");
    } catch (error) {
      setError(error.message);
      setStatus("typing");
    }
  };
  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextAriaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
}
