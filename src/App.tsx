import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {

  let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 15 },
    { id: 2, message: 'My first post?', likesCount: 20 },
    { id: 3, message: 'Bla bla bla', likesCount: 5 }
  ]

  let dialogs = [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Lera' },
    { id: 3, name: 'Tania' },
    { id: 4, name: 'Marina' },
    { id: 5, name: 'Nixie' }
  ]

  let messages = [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'Bla bla' },
    { id: 3, message: 'Hi Nixie.' }
  ]

  return (
    <div className="app-wrapper">

      <Header />
      <Navbar />
      <Routes>
        <Route path='/profile/*' element={<Profile posts={posts} />}></Route>
        <Route path='/dialogs/*' element={<Dialogs dialogs={dialogs} messages={messages}/>}></Route>
        <Route path='/news' element={<Dialogs />}></Route>
        <Route path='/music' element={<Dialogs />}></Route>
        <Route path='/settings' element={<Dialogs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
