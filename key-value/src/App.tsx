import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [input, setInput] = useState("");
  const [keycode, setKeycode] = useState<number | string>("");
  const [altKeyIndicator, setAltKeyIndicator] = useState<string>("");
  const [controlKeyIndicator, setControlKeyIndicator] = useState<string>("");
  const [commandKeyIndicator, setCommandKeyIndicator] = useState<string>("");
  const [shiftKeyIndicator, setShiftKeyIndicator] = useState<string>("");

  const handleKeyDown = (event: KeyboardEvent) => {
    setInput(event.key);
    setKeycode(event.keyCode);
    setAltKeyIndicator(event.altKey.toString());
    setControlKeyIndicator(event.ctrlKey.toString());
    setCommandKeyIndicator(event.metaKey.toString());
    setShiftKeyIndicator(event.shiftKey.toString());
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);

  function clear() {
    setInput("");
    setKeycode("");
  }

  return (
    <>
      <p>入力したキー</p>
      <textarea value={input}></textarea>
      <p>キーコード</p>
      <textarea value={keycode}></textarea>
      <p>インジケーター</p>
      <p>
        alt:<input value={altKeyIndicator}></input>
      </p>
      <p>
        control:<input value={controlKeyIndicator}></input>
      </p>
      <p>
        command:<input value={commandKeyIndicator}></input>
      </p>
      <p>
        shift:<input value={shiftKeyIndicator}></input>
      </p>
      <button onClick={() => clear()}>clear</button>
    </>
  );
};

export default App;
