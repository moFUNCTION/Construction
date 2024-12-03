import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Layout/Header/Header";
import { lazy } from "react";
import { LazyPageWrapper } from "./Components/Common/LazyPageWrapper/LazyPageWrapper";
import { Footer } from "./Components/Layout/Footer/Footer";
const Landing = lazy(() => import("./Pages/Landing/Index"));
const Services = lazy(() => import("./Pages/Services/Index"));
const Service = lazy(() => import("./Pages/Service_ID/Index"));
const About = lazy(() => import("./Pages/About/Index"));
const Contact = lazy(() => import("./Pages/Contact/Index"));
const Vision = lazy(() => import("./Pages/Vision/Vision"));
function App() {
  return (
    <>
      <Header />
      <LazyPageWrapper>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services" element={<Services />} />
          <Route path="/Services/:id" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="vision" element={<Vision />} />
        </Routes>
      </LazyPageWrapper>
      <Footer />
    </>
  );
}

export default App;
