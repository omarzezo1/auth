import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import UserProfile from "./UserProfile";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage/>}/>
          <Route path="/profile" element={<UserProfile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
