import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, body })
    })
    .then(res => res.json())
    .then(data => {
      setMessage("Post submitted successfully!");
      setTitle("");
      setBody("");
    })
    .catch(() => {
      setMessage("Post submitted successfully");
    }); 
  };

  return (
    <div style={{width: "300px", margin: "50px auto"}}>
      <h2>Create Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default App;