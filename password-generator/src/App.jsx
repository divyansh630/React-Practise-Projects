import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbersallowed, setNumbersallowed] = useState(false);
  const [charallowed, setCharsallowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbersallowed) str += "0123456789";
    if (charallowed) str += "*&%$#@(){}[]";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbersallowed, charallowed, setPassword]);

  const copyPasswordtoClipboard = useCallback(() => {
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersallowed, charallowed, setPassword]);
  return (
    <>
      <div className="w-full max-w-md mx-auto my-auto shadow-md rounded-lg px-4 py-4 mt-5 text-gray-900 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex  shadow rounded-lg overflow-hidden  mb-4 bg-amber-50">
          <input
            type="text"
            value={password}
            className="outline-none w-full  py-1 px-3 "
            placeholder="Password"
            readOnly
            ref={passwordref}
          />
          <button
            onClick={copyPasswordtoClipboard}
            className="outline-none bg-red-600 text-white px-3 py-3 shrink-0 cursor-pointer hover:bg-red-400"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-orange-500">Length : {length} </label>
          </div>
          <div className="flex items-center gap-x-1 mx-2 ">
            <input
              type="checkbox"
              defaultChecked={numbersallowed}
              id="forNumbers"
              onChange={() => {
                setNumbersallowed((prev) => !prev);
              }}
            />
            <label htmlFor="forNumbers" className="text-orange-500">
              Numbers
            </label>
          </div>
          <div className="flex items-center gap-x-1 mx-1 ">
            <input
              type="checkbox"
              defaultChecked={charallowed}
              id="forChar"
              onChange={() => {
                setCharsallowed((prev) => !prev);
              }}
            />
            <label htmlFor="forChar" className="text-orange-500">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
