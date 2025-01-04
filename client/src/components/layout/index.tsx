import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav >
        <ul style={{display:'flex' , flexDirection:'row', justifyContent:'space-around'}}>
          <li>
            <Link to="/">Home</Link>
          </li>          
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;