import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "abcde",
    age: 20,
  };

  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-10 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card username="myUsername" btnText="Click Me" />
      <Card username="myUsername2" />
    </>
  );
}

export default App;
