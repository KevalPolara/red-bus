import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserRoute from './routes/UserRoute/UserRoute';
import AdminRoute from './routes/AdminRoute/AdminRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<UserRoute/>}></Route>
        <Route path='/admin/*' element={<AdminRoute/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
