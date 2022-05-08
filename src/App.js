
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AboutUs from './components/Page/AboutUs/AboutUs';
import AllPerfumeDetail from './components/Page/AllPerfumeDetail/AllPerfumeDetail';
import Blog from './components/Page/Blog/Blog';
import Footer from './components/Page/Footer/Footer';
import Home from './components/Page/Home/Home';
import InventoreItem from './components/Page/InventoreItem/InventoreItem';
import Login from './components/Page/Login/Login';
import NotFound from './components/Page/NotFound/NotFound';
import Register from './components/Page/Register/Register';
import RequierAuth from './components/Page/RequierAuth/RequierAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventore"
          element={<InventoreItem></InventoreItem>}
        ></Route>
        <Route
          path="/AllPerfume/:perfumeId"
          element={
            <RequierAuth>
              <AllPerfumeDetail></AllPerfumeDetail>
            </RequierAuth>
          }
        ></Route>
        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
