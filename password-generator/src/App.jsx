import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [length, setLength] = useState(6);
  const [password, setPassword] = useState("");
  const [charAllowed, setcharAllowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);
  const pwdRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (charAllowed === true) str += "!@#$%^&*()_+?><[]|";
    if (numAllowed === true) str += "0123456789";
    console.log(str);

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, charAllowed, numAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  const copyPwdToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    pwdRef.current?.select();
  }, [password]);

  return (
    <>
      <div className="box">
        <h1>Password Generator</h1>
        <div className="copy">
          {" "}
          <input
            type="text"
            name="pwd-generator"
            id="pwd-generator"
            readOnly
            value={password}
            ref={pwdRef}
          />
          <button onClick={copyPwdToClipboard}>copy</button>
        </div>
        <div className="len">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            id="leng"
          />
          <label htmlFor="leng">Length: {length}</label>
        </div>
        <div className="checkboxes">
          <input
            type="checkbox"
            value={charAllowed}
            onClick={() => {
              setcharAllowed((prev) => !prev);
            }}
            id="chk"
          />
          <label htmlFor="chk"> Characters</label>
          <input
            type="checkbox"
            value={numAllowed}
            onClick={() => {
              setNumAllowed((prev) => !prev);
            }}
            id="chars"
          />
          <label htmlFor="chars"> Numbers</label>
        </div>
      </div>
    </>
  );
}

export default App;
