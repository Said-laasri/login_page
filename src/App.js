import React, { useContext} from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import Authcontext from "./components/store/auth-context";


function App() {
  const Authcont = useContext(Authcontext)
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!Authcont.isLoggedIn && <Login />}
        {Authcont.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
