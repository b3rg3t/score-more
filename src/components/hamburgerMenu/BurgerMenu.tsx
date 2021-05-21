import React, { useState } from "react";

import { slide as Menu } from "react-burger-menu";
import "./burgermenu-style.scss";

// import { Link } from "react-router-dom";
import { FaCog } from "react-icons/fa";

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Menu
        isOpen={isMenuOpen}
        right
        disableAutoFocus
        onClose={() => setIsMenuOpen(false)}
        onOpen={() => setIsMenuOpen(true)}
        customBurgerIcon={<FaCog color="white" size="0.8rem" />}
      >
        <section className="d-flex flex-column h-100 justify-content-between align-items-center">
          <div className="d-flex flex-column align-items-center burger-heading px-2"></div>
        </section>
      </Menu>
    </>
  );
};

export default BurgerMenu;
