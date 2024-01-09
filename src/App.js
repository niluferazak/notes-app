import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import NotesListPages from "./pages/NotesListPages";
import NotePages from "./pages/NotePages";

function App() {
  return (
    <div className="container dark">
      <div className="app">
      <Header />
      
        <BrowserRouter>
          <Routes>


          <Route exact path="/" element={<NotesListPages />} />
          <Route exact path="/note/:id" element={<NotePages />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
