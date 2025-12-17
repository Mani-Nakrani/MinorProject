import About1 from "./Components/About1";
import About2 from "./Components/About2";
import Available from "./Components/Available";
import Book from "./Components/Book";
import Contact from "./Components/Contact";
import Gallery1 from "./Components/Gallery1";
import Home1 from "./Components/Home1";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Team from "./Components/Team";
import Teamd1 from "./Components/Teamd1";
import Teamd2 from "./Components/Teamd2";
import Teamd3 from "./Components/Teamd3";
import Footer from "./Global/Footer";
import Navbar from "./Global/Navbar";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallary from "./Pages/Gallary";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route element={<PrivateRoute/>}>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/about2" element={<About2/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Gallary" element={<Gallary/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/teamd1" element={<Teamd1/>}/>
          <Route path="/teamd2" element={<Teamd2/>}/>
          <Route path="/teamd3" element={<Teamd3/>}/>
          <Route path="/Reservation" element={<Book/>}/>
        </Route>

        <Route path="/reg" element={<Registration/>}/>
        <Route path="/log" element={<Login/>}/>
      </Routes>
      <Footer/>



      {/* <Home1/> */}
      {/* <About1/> */}
      {/* <About2/>  */}
      {/* <Gallery1/> */}
      {/* <Available/> */}
      {/* <Team/> */}
      {/* <Teamd1/> */}
      {/* <Teamd2/> */}
      {/* <Teamd3/> */}
      {/* <Book/> */}
      {/* <Contact/> */}
      {/* <Registration/>
      <Login/> */}
    </>
  );
}

export default App;
