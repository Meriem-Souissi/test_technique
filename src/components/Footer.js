import React from "react";
import "../styles/Footer.css";
import logo from "../res/logo.jpg";
import time from "../res/time.png";

function Footer() {
  return (
    <div id="footer">
      <div className="footer_container">
        <div className="green_fence"></div>

        <div className="info_container">
          <div className="logo_footer">
            <img src={logo} alt="" />
          </div>
          <div className="description_footer">
            <ul className="links">
              <li className="header_links">Lien Utiles</li>
              <li className="body_links">Configurateur</li>
              <li className="body_links">Notre magazin</li>
              <li className="body_links">Notice et installation</li>
              <li className="body_links">Livraison Transport</li>
            </ul>

            <ul className="contact">
              <li className="header_contact">Nous contacter</li>
              <li className="body_contact">
                Adress:
                <p>
                  3 rue du champ de verger <br /> Allonnes, Pays de la Loire,
                  <br />
                  France
                </p>
              </li>
              <li className="body_contact">
                Telephone:
                <p>+33 2 43 57 00 87</p>
              </li>
            </ul>

            <ul className="hours">
              <li className="header_hours">Horaires</li>
              <li className="body_hours">
                Lundi à vendredi
                <ul className="work_hours">
                  <li>
                    <img src={time} alt="" />
                  </li>
                  <li className="time"> 7:30-12</li>
                </ul>
                <ul className="work_hours">
                  <li>
                    <img src={time} alt="" />
                  </li>
                  <li className="time"> 13:30-18</li>
                </ul>
              </li>

              <li className="body_hours">
                Samedi
                <p className="note">
                  (Fermé les samedis de janvier et février)
                </p>
                <ul className="work_hours">
                  <li>
                    <img src={time} alt="" />
                  </li>
                  <li className="time"> 7:30-12</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
