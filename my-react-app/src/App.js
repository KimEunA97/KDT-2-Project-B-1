import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setMessage(`Hello ${data}`));
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default App;
