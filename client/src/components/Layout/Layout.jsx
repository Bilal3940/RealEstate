import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../UserContext/UserDetailContext";
import { useMutation } from "react-query";
import { CreateUser} from "../../utils/api";
import jwt_decode from 'jwt-decode'

const Layout = () => {
  const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
  const { setuserDetails } = useContext(UserDetailContext);

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => CreateUser(user?.email, token),
  });
  useEffect(() => { 
    const getTokenAndRegister = async () => {

      const res = await getAccessTokenWithPopup({
          audience: "http://localhost:8000",
          scope: "openid profile email",
      });
      localStorage.setItem("access_token", res);
      setuserDetails((prev) => ({ ...prev, token: res }));
      // mutate()
      mutate(res)
    };


    isAuthenticated && getTokenAndRegister();
  }, [isAuthenticated]);
  return (
    <>
      <div style={{ background: "var(--white)", overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;