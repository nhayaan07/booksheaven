import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";

const Layout = () => {
    
    return ( 
<div>
<Nav />

<Outlet />

<Footer />

</div>

     );
}
 
export default Layout;