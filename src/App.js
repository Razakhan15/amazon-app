import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () =>{
      unsubscribe();
    }
  }, []);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header /> <Home />
              </>
            }
          ></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route
            exact
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
