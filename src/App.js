import './App.css';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import MealDetail from './components/MealDetail/MealDetail';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurant from './components/Restaurant/Restaurant';
import CategoryMeals from './components/CategoryMeals/CategoryMeals';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/meal-details/:id' element={<MealDetail/>}></Route>
        <Route path='/restaurant' element={<Restaurant/>}></Route>
        <Route path='/restaurant/:category' element={<CategoryMeals/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
