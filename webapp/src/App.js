import { useEffect, useState } from "react";
import noteService from "./services/notes";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

const App = () => {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  const [groups, setGroups] = useState([]);
  const [groupView, setGroupView] = useState('Notes');

  const hook = () => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes);
      })
  }
  useEffect(hook, []);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      text: text,
      date: date.toLocaleDateString()
    }
    noteService
      .create(newNote)
      .then(() => {
        console.log('added new note');
      })
      .catch((error) => console.error(error));
    
    hook();
  }

  const deleteNote = (id) => {
    noteService
      .remove(id)
      .then(() => {
        console.log('successfully deleted selected note');
      })
      .catch((error) => console.error(error));
    
    hook();
  }


  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>
      <SideBar groups={groups} handleGroupShow={setGroupView} />
      <NotesList notes={notes.filter((note) => note.group === groupView)} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
    </div>
  ) 
}

export default App;