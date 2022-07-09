import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Header() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="header">
      <header data-aos="zoom-in">
        <h1>Tobias Persson</h1>
        <h2>Fullstack developer .NET</h2>
      </header>
    </section>
  );
}

export default Header;
