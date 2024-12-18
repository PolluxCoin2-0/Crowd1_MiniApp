import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConfirmPin from "./pages/pin/ConfirmPin";
import GeneratePin from "./pages/pin/GeneratePin";
function App() {

  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<ConfirmPin/>}/>
          <Route path="/confirmPin" element={<ConfirmPin/>}/>
          <Route path="/GeneratePin" element={<GeneratePin/>}/>
     </Routes>
     </Router>
    </div>
  )
}

export default App
