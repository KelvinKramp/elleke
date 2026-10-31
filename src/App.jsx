import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import ConnectCard from "./components/ConnectCard.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";
import CV from "./pages/CV.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  const isCv = pathname === "/cv";

  return (
    <>
      <ScrollToTop />
      {isCv ? null : <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<CaseStudy />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
      {isCv ? null : (
        <>
          <Footer />
          <ConnectCard />
        </>
      )}
    </>
  );
}
