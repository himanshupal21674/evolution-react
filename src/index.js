import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
    </div>
    // <div>
    //   <Link to="/login">
    //     <h3 data-testid="login-link">Login Page</h3>
    //   </Link>
    //   <Link to="/dashboard">
    //     <h3 data-testid="home-link">Home</h3>
    //   </Link>
    // </div>
  );
}
export default Home;

;
