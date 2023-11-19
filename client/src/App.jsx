import Webpage from "./Webpages/Webpage";
import Layout from "./components/Layout/Layout";
import Allproperties from "./Webpages/AllProperties/Allproperties";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import {ReactQueryDevtools} from 'react-query/devtools'
import "react-toastify/dist/ReactToastify.css"
import Property from "./Property/Property";
import { useState } from "react";
import UserDetailContext from "./components/UserContext/UserDetailContext";
function App() {
  const [userDetails, setuserDetails] = useState({
    favorites :[],
    bookings :[],
    token :null
  })
  const queryClient = new QueryClient();
  return (
    <UserDetailContext.Provider value={{userDetails, setuserDetails}}>
    <QueryClientProvider  client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Webpage />} />
            <Route path="/properties">
              <Route index element={<Allproperties />}   />
              <Route path=":id" element={<Property />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
      <ReactQueryDevtools/>
    </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;
