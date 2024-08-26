import { Link, Outlet } from "react-router-dom";
import NavbarComp from "./NavbarComp";

const Layout = () => {
    return (
        <>
            <NavbarComp />
            <Outlet />
        </>
    )
};

export default Layout;