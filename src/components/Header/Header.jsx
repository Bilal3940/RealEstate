import {useState} from "react";
import {BiMenuAltRight} from 'react-icons/bi'
import './Header.css'
const Header = () => {
  const [menuopened, setmenuopened] = useState(false)
  const getmenustyled=()=>{
    if(document.documentElement.clientWidth<=800){
      return{right:!menuopened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings h-container innerWidth">
        <img src="./ESLogo.png" className="image" alt="Mostro" width={200}  />
        <div className="flexCenter h-menu" style={getmenustyled(menuopened)}>
        <a href="">Residencies</a>
        <a href="">Our Value</a>
        <a href="">Contact Us</a>
        <a href="">Get Started</a>
        <button className="button">
        <a href="">Contact</a>
        </button>
      </div>

      <div className="menu-icon" onClick={()=>setmenuopened((prev)=>!prev)} >
        <BiMenuAltRight size={30} />
      </div>
      
      </div>

      
    </section>
  );
};

export default Header;
