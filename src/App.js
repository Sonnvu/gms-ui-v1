import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./component/page/dashboard/DashBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
