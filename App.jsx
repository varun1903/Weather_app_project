
import './App.css'
import HeroSection from './comp/hero';
const App=()=> {

  return (
    <div>
       <nav >
        <div className="logo">
        <img src="images/brand_logo (1).png" alt="logo"/>
        </div>

        <ul>
          <li href="#">Menu</li>
          <li href="#">locations</li>
          <li href="#">about</li>
          <li href="#">contract</li>
        </ul>
        <button> Login</button>
      </nav> 
      <HeroSection />c
    </div>
  );
};

export default App;
