import React, { useEffect, useState } from 'react';
import aiLogo from "./assets/logo.png";
import "./App.css";
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [storeCommand, setStoreCommand] = useState<string[]>([]);
  const [command, setCommand] = useState<string>("");
  const [stacked, setStacked] = useState<boolean>(false);

  useEffect(() => {
    if (stacked){      
      toast.dismiss();
      fillToast();
    }else{
      toast.dismiss();
      fillToast();
    }
  }, [stacked])


  function fillToast(){
    storeCommand.map((command) => {
      toast(command, {
        containerId: "message-container",
        autoClose: false,
        position: "top-center",
      });
    })
  }
  
  function handleCommands() {
    setStoreCommand((prevCommands) => [...prevCommands, command]);
    toast(command, {
      containerId: "message-container", 
      autoClose: false,
      position: "top-center",
   });
  }

  return (
    <div className="container">
      <div className="row" style={{ flexDirection: "column" }}>
        <h1>Magi (E)</h1>
        <a target="_blank" href="#">
          <img src={aiLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="message-container">
        <ToastContainer
          containerId="message-container"
          draggable={false}
          closeOnClick={false}
          stacked={stacked}
          transition={Slide}
        />
      </div>

      <form
        className="row"
        style={{ marginTop: "auto" }}
        onSubmit={(e) => {
          e.preventDefault();
          handleCommands();
        }}
      >
        <input
          id="greet"
          value={command}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCommand(e.target.value)
          }
          placeholder="Type a command"
          spellCheck="false"
        />
        <button type="submit">Execute</button>
      </form>
      <button className="toggle" onClick={() => setStacked(!stacked)}>
        {stacked ? "Toggle": "Un-toggle"} recent tasks
      </button>
    </div>
  );
}

export default App;

