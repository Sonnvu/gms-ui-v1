import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./component/page/dashboard/DashBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/gms-ui-v1" element={<DashBoard />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
