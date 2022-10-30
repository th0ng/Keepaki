import { useEffect, useState } from "react";
import noteService from "./services/notes";
import loginService from "./services/login";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Login from "./components/Login";

const App = () => {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);



  const [groups, setGroups] = useState([]);
  const [groupView, setGroupView] = useState('Notes');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const hook = () => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes);
      });
    console.log(notes)
  }
  useEffect(hook, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      noteService.setToken(user.token);
      console.log(user);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await loginService.login({username, password});

      window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user));

      noteService.setToken(user.token);
      setUser(user);
      setUsername('');
      setPassword('');
    } catch (err) {
      console.log(err);
    }
  }

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

  const loginForm = () => (
    <Login handleLogin={handleLogin} setUsername={setUsername} setPassword={setPassword}/>
  );

  const notesForm = () => {
    return (
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <SideBar groups={groups} handleGroupShow={setGroupView} />
        <NotesList notes={notes.filter(note => note.user.username === user.username)} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
      </div>
    );
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      {user === null ? loginForm() : notesForm()}
    </div>
  ) 
}

export default App;