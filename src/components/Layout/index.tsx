
import { Outlet } from "react-router";
import { Header } from "../Header";
import { Footer } from "../footer";


export function Layout() {
 return (
   <>
        <Header />
        <Outlet />
        <Footer />
   </>
 );
}