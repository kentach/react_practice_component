import Header from '../atoms/layout/Header';
import { Outlet } from "react-router-dom";

const HeaderOnly = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default HeaderOnly
