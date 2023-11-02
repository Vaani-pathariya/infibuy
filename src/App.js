import { Routes,Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Search from "./pages/Search";
import "./app.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
