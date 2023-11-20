import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { useAuth0} from "@auth0/auth0-react";
import ProfileMenu from "../Profilemenu/ProfileMenu";
const Header = () => {
  const { loginWithRedirect, isAuthenticated, user, logout  } = useAuth0();
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyled = () => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened ? "-100%" : "0" };
    }
  };

  // Function to close the menu when clicking outside of it
  const handleCloseMenu = () => {
    setMenuOpened(false);
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings h-container innerWidth">
        <Link to="/">
          <img src="./ESLogo.png" className="image" alt="Mostro" width={200} />
        </Link>
        <OutsideClickHandler onOutsideClick={handleCloseMenu}>
          <div className="flexCenter h-menu" style={getMenuStyled()}>
            <NavLink to="/properties">Properties</NavLink>
            <a href="mailto:bilalj3940@gmail.com">Contact</a>
            {
              !isAuthenticated ?

              <button className="button" onClick={loginWithRedirect}>
                Login
              </button>
              :
              <ProfileMenu  user={user} logout = {logout} />
            }
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
