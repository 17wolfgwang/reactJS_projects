import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "../src/routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

import { checkUserSession, setCurrentUser } from "./store/user/user.reducer";
import { createUserDocumentFromAuth, onAuthStateChangedListner } from "./utils/firebase/firebase.utils";

// const Shop = () => {
//   return <h1>shop page!!</h1>;
// };

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if(user) {
        createUserDocumentFromAuth(user);
      }
      const pickedUser = user && (({accessToken, email}) => ({accessToken, email}))(user);
      console.log(setCurrentUser(pickedUser));
      dispatch(setCurrentUser(pickedUser));
      // dispatch(checkUserSession());

    })
    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />;
        <Route path="auth" element={<Authentication />} />;
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
