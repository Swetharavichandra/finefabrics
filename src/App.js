import './App.css';
import Homepage from './page/Homepage';
import {Route ,Switch} from 'react-router-dom';
import Fabrics from './page/Fabrics';
import Heading from './Components/Heading';
import Navbar from './Components/Navbar';
import Accesories from './page/Accesories';
import Men from './page/Men';
import Women from './page/Women';
import Furnishing from './page/Furnishing';
import Secondnavbar from './Components/Secondnavbar';
import Cart from './Components/Cart';
import Login from './page/Login';
import Footer from './Components/Footer';










function App() {
  
  return (
    <div className="App">
      <Heading/>
      <Navbar/>
      <Secondnavbar/>
      <Switch>


<Route path='/fabrics'>
        <Fabrics/>
        </Route>
        <Route path='/women'>
        <Women/>
        </Route>
        <Route path='/men'>
        <Men/>
        </Route>
        <Route path='/accesories'>
        <Accesories/>
        </Route>
        <Route path='/furnishing'>
        <Furnishing/>
        </Route>
        <Route path='/cart'>
        <Cart/>
        </Route>
        <Route path='/login'>
        <Login/>
        </Route>
        

        
        
        <Route path='/'>
        <Homepage/>

        </Route>
        
        </Switch>
        
        
        
        
        
        
      
      
      
    </div>
  );
}

export default App;