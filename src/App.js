import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alerts from "./components/Alerts";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const ToggleMode = () => {
    if (mode === 'light') {
      document.body.style.color = 'white';
      document.body.style.backgroundColor = 'black'
      setMode('dark');
      showAlert('Dark mode is Enabled', 'success');

    } else {
      document.body.style.color = 'black'
      document.body.style.backgroundColor = 'white'
      setMode('light');
      showAlert('Light mode is Enabled', 'success');

    }
  };

  const colourMode = () => {
    // Coded by Dhokebaz
    let parent = document.activeElement;
    let labelValue = parent.nextElementSibling.textContent;
    document.body.style.color = 'black'
    document.body.style.backgroundColor = labelValue.toString()
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      {/* <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} ToggleMode={ToggleMode} colourMode={colourMode} />

      <Alerts alert={alert} />

      <Routes>
        <Route excat path="/" element={<TextForm heading="Enter text here Nigga!" mode={mode} showAlert={showAlert} />}/>
        <Route excat path="/about" element={<About />}/>
      </Routes>
      </BrowserRouter> */}
      <Navbar title="TextUtils" mode={mode} ToggleMode={ToggleMode} colourMode={colourMode} />
      <TextForm heading="Enter text here Nigga!" mode={mode} showAlert={showAlert} />
      <Alerts alert={alert} />

    </>
  );
}

export default App;
