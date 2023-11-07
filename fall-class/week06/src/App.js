import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Day from './Day';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home />} >
        <Route path='/day/:day' element={<Day />} />
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
