import Companies from "../components/Companies/Companies";
import Contact from "../components/Contact/Contact";
import Getstarted from "../components/Getstarted/Getstarted";
import Hero from "../components/Hero/Hero";
import Properties from "../components/Properties/Properties";
import Value from '../components/Value/Value'
const webpages = () => {
  return (
    <div className="App">
      <div>
    <Hero/>
    </div>
    <Companies/>
    <Properties/>
    <Value/>
    <Contact/>
    <Getstarted/>
    </div>
  )
}

export default webpages