import { Outlet, Link } from "react-router-dom";
const About = () => {
    return (
        <>

            <div>
                <ul>
                    <li> <Link to="Page1">page1</Link> </li>
                    <li><Link to="Page2">Page2</Link></li>
                    <li><Link to="Page3">Page3</Link></li>
                </ul>

            </div>
<br /><br />
            <div>
                <Outlet/>
            </div>
        </>

    );
}

export default About;

