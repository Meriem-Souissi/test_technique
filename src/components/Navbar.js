import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../res/logo.jpg";
import search_icon from "../res/search_icon.png";
import map_icon from "../res/map_icon.png";
import conf_icon from "../res/conf_icon.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="top_navbar">
        <ul className="wrapper">
          <li className="logo">
            <img src={logo} alt="" />
          </li>

          <li className="search">
            <div className="default_state">
              <img src={search_icon} alt="" />

              <input type="text" name="" placeholder="Recherche" />
            </div>
            <div className="hover_state">
              <img src={search_icon} alt="" />
            </div>
          </li>
          <li className="map">
            <div className="default_state">
              <div className="default_state_img">
                <img src={map_icon} alt="" />
              </div>
              <p>Notre magasin</p>
            </div>
            <div className="hover_state">
              <img src={map_icon} alt="" />
            </div>
          </li>
          <li className="configurator">
            <div className="default_state">
              <img src={conf_icon} alt="" />
              <p>Configurateur</p>
            </div>
            <div className="hover_state">
              <img src={conf_icon} alt="" />
            </div>
          </li>
        </ul>
      </div>

      <div className="bottom_navbar">
        <div className="wrapper">
          <ul className="bottom_navbar_list">
            <li className="reception">
              <Link to="/">Acceuil</Link>
            </li>
            <li className="shop">
              <div className="shop_list_wrapper">
                <ul className="shop_list">
                  <li>Lame composite</li>
                  <li>Lame en bois</li>
                  <li>
                    <Link to="/shop">Panneau bois</Link>
                  </li>
                  <li>Grille rigide</li>
                  <li>Gabion</li>
                </ul>
                <div className="shop_bttn">Boutique</div>
              </div>
            </li>
            <li className="our_achievements">Nos réalisations</li>
            <li className="contact_us">Contactez-nous</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
