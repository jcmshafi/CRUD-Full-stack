import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import ReadPage from './pages/ReadPage';
import UpdatePage from './pages/UpdatePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReadPage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
        <Route path="/update/:id" element={<UpdatePage/>}/>
  
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  );
};

export default App;