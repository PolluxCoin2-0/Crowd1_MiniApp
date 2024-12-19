import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConfirmPin from "./pages/pin/ConfirmPin";
import GeneratePin from "./pages/pin/GeneratePin";
import WelcomeScreen from "./pages/connectWallet/WelcomeScreen";
import ImportWallet from "./pages/connectWallet/ImportWallet";
import HomePage from "./pages/HomePage";
function App() {

  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<ConfirmPin/>}/>
          <Route path="/confirmPin" element={<ConfirmPin/>}/>
          <Route path="/generatePin" element={<GeneratePin/>}/>
          <Route path="/welcomescreen" element={<WelcomeScreen/>}/>
          <Route path="/importWallet" element={<ImportWallet/>}/>
          <Route path="/homepage" element={<HomePage/>}/>
     </Routes>
     </Router>
    </div>
  )
}

export default App
