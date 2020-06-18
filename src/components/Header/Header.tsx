import * as React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type HeaderProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

function Header({ isOpen, onOpen, onClose }: HeaderProps) {
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <a href="/">BOW</a>
        </div>
        {isOpen ? (
          <nav className="header-nav">
            <div onClick={onClose} className="header-close">
              <FontAwesomeIcon
                className="header-times"
                icon="times"
                size="2x"
              />
            </div>
            <ul className="header-links">
              <li className="header-category">
                <a href="/books">Book</a>
                <a href="#">Record</a>
                <a href="#">DVD</a>
              </li>
            </ul>
          </nav>
        ) : (
          <div onClick={onOpen} className="header-menu">
            <FontAwesomeIcon icon="bars" />
            <span className="header-menu-text">Menu</span>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
