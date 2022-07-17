import {useState} from "react";
import './index.css'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import { Provider} from "./context/Context";

function App() {
  const [hiddenLogin, setHiddenLogin] = useState(false)
  const [hiddenRegister, setHiddenRegister] = useState(false)
  const [blocks, setBlocks] = useState(
    {
      latest: true,
      popular: false,
      about: false,
      users: false,
      post: false
    }
  )


  return (
    <Provider>
      <Login handleLoginBar={[hiddenLogin, setHiddenLogin]} />
      <Register handleRegisterBar={[hiddenRegister, setHiddenRegister]} />
      <Navbar
        visibleLogin={() => setHiddenLogin(prev => !prev)}
        visibleRegister={() => setHiddenRegister(prev => !prev)}
        blocks={[blocks, setBlocks]}
      />
      <Body blocks={blocks}/>
    </Provider>
  );
}

export default App;
