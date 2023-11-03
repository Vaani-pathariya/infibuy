import { Routes,Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Search from "./pages/Search";
import "./app.css"
import NodeState from "./context/notes/NoteState";

function App() {
  return (
    
    <div className="App">
      <NodeState>
      <Routes>
        <Route exact path="/" element={<Landing/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
      </Routes>
      </NodeState>
    </div>
  );
}

export default App;
