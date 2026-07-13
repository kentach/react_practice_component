import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Top from '../components/pages/Top';
import Users from '../components/pages/Users';
import DefaultLayout from '../components/templates/DefaultLayout';
import HeaderOnly from '../components/templates/HeaderOnly';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Top />} />
        </Route>

        <Route element={<HeaderOnly />}>
          <Route path="/users" element={<Users />} />
        </Route>
      
      </Routes>
    </BrowserRouter>
  )
}

export default Router
