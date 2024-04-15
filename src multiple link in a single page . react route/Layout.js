import img1 from "./image/coffe.jpg"
import { Outlet,Link } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <div id="wrapper">
                <div id="topmenu">
                    <ul>
                        <li> <Link to="Home">Home</Link> </li>
                        <li><Link to="CoffeNews">News</Link></li>
                        <li><Link to="Contact">Conatct</Link></li>
                        <li><Link to="About">About</Link></li>
                    </ul>
                    <div id="banner">
                        <img src={img1} style={{width:"1518px" ,height:"300px"} } />
                    </div>

                    <div id="content">

                        
                        <Outlet/>


                    </div>

                    <br /><br /><br /><br /><br />
                    
                     <div id="footer">
                         <h1> this is footer </h1>
                     </div>

 

                </div>
            </div>
        </>

    );
}

export default Layout;
