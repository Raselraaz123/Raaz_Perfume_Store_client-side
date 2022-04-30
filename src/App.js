
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Page/Home/Home';
import Login from './components/Page/Login/Login';
import NotFound from './components/Page/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login'element={<Login></Login>}></Route>
        <Route path='*'element={<NotFound></NotFound>}></Route>
   </Routes>
    </div>
  );
}

export default App;
