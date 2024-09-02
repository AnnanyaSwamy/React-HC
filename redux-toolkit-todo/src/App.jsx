import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#FFA41B] pl-10 pr-10 rounded-md">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
