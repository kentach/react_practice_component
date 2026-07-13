import Header from '../atoms/layout/Header';
import Footer from '../atoms/layout/Footer';
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
    <Header/>
      <Outlet/>
    <Footer/>
    </>
  )
}

export default DefaultLayout
