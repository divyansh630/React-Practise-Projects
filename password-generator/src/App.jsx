import { useCallback, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbersallowed, setNumbersallowed] = useState(false);
  const [charallowed, setCharsallowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbersallowed) str += "0123456789";
    if (charallowed) str += "*&%$#@(){}[]";

    for (let i = 1; i <= Array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbersallowed, charallowed, setPassword]);
  return (
    <>
      <div className="w-full max-w-md mx-auto my-auto shadow-md rounded-lg px-4  text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex  shadow rounded-lg overflow-hidden  mb-4 bg-amber-50">
          <input
            type="text"
            value={password}
            className="outline-none w-full  py-1 px-3 "
            placeholder="password"
            readOnly
          ></input>
        </div>
      </div>
    </>
  );
}

export default App;
