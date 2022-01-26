import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      // document.body.style.backgroundColor = '#04213e'
      document.body.style.backgroundColor = '#1B1D32 '
      showAlert("Dark mode enabled","success")
      // document.title = 'TextUtils - Dark Mode'
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now'
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled","success")
      // document.title = 'TextUtils'
    }
  }
  return (
      // <>
      //   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      //   <Alert alert={alert} />
      //   <TextForm showAlert={showAlert} heading="Try Textutils - word counter, character counter, remove extra spaces" mode={mode} />
      // </>


      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try Textutils - word counter, character counter, remove extra spaces" mode={mode} />}></Route>
        </Routes>
      </Router>
      
  );
}

export default App;
