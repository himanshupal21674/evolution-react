import AllRoutes from "./Routes/AllRoutes";
import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Route } from "teact-router-dom";
import Home from "./Components/Routes/Home";
import Login from "./Components/Routes/Login";
import Dashboard from "./Components/Routes/Dashboard";


const App = () => {
  return (
    <Router>
      <Route exact path="/" Component={Home} />
      <Route path="/Login" Component={Login} />
      <Route path="/Dashboard" Component={Dashboard} />
    </Router>
  )
};

export default App;


// export default function App() {
//   return (
//     <div className="App">
//       <AllRoutes />
//     </div>
//   );
// }

// authentication: reqres.in
//
