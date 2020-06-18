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
            <a onClick={onClose} className="header-close">
              <FontAwesomeIcon icon="times" size="2x" />
            </a>
            <ul className="header-links">
              <li>
                <a href="/books">Book</a>
              </li>
            </ul>
          </nav>
        ) : (
          <a onClick={onOpen} className="header-menu" href="#">
            <FontAwesomeIcon icon="bars" />
            <span className="header-menu-text">Menu</span>
          </a>
        )}
      </header>
    </>
  );
}

export default Header;
