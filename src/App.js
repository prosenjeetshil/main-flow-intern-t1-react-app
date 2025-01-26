import { BrowserRouter, Routes , Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import AddCustomer from './Components/Pages/AddCustomer';
import ShowCustomers from './Components/Pages/ShowCustomers';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import HomePage from './Components/Pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/add'element={<AddCustomer/>}/>
          <Route path='/show' element={<ShowCustomers/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
