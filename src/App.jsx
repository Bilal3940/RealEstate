import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Getstarted from "./components/Getstarted/Getstarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Properties from "./components/Properties/Properties";
import Value from './components/Value/Value'
function App() {
  return (
    <div className="App">
   <Header/>
   <Hero/>
   <Companies/>
   <Properties/>
   <Value/>
   <Contact/>
   <Getstarted/>
   <Footer/>
   </div>
  );
}

export default App;
		