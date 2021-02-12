import React from "react";

function App({ name = "Snowpack" }) {
  return <h1>Welcome to {name}!</h1>;
}

export default App;
