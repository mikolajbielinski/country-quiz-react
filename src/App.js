import H1 from "./components/H1";
import Main from "./components/Main";
import "./styles/General/general.css";
import StartPage from "./containers/StartPage";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Main>
      <H1>Country quiz</H1>
      <Routes>
        <Route path="/start" element={<StartPage />} />
        <Route path="*" element={<Navigate to="/start" replace />} />
      </Routes>
    </Main>
  );
}

export default App;
