import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import CoffeNews from "./CoffeNews";
import About from "./About";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
// import Contact from "./Contact";
const App=()=> {
  return (
    <>
   <BrowserRouter>
      <Routes>
           <Route path="/" element={<Layout/>} >
           <Route index element={<Home/>} />
           <Route path="Home"  element={<Home/>} />
           <Route path="CoffeNews" element={< CoffeNews />} />
           <Route path="About" element={< About />} >
              <Route index element={< Page1 />} />
              <Route path="Page1" element={< Page1 />} />
              <Route path="Page2" element={< Page2 />} />
              <Route path="Page3" element={< Page3 />} />
           </Route> 
           </Route>           
      </Routes>

   </BrowserRouter>
     </>
  );
}
export default App;



