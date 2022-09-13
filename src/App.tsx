import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


function App(props: any) {

  return (
    <div className="app-wrapper">

      <Header />
      <Navbar />
      <Routes>
        <Route path='/profile/*' element={<Profile state={props.state.profilePage} addPost={props.addPost}/>}></Route>
        <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} />}></Route>
        <Route path='/news' element={<Dialogs />}></Route>
        <Route path='/music' element={<Dialogs />}></Route>
        <Route path='/settings' element={<Dialogs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
