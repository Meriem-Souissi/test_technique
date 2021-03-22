import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Shop.css";
import banner_shop from "../res/banner_shop.png";
import toolbox from "../res/toolbox.png";
import Card from "../components/Card";
import arrow from "../res/arrow_left.png";
import { getCards } from "../actions/cardsAction";

function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCards());
  }, []);
  const CardsReducer = useSelector((state) => state.CardsReducer);

  return (
    <div id="shop">
      <div className="shop_header">
        <div className="banner_shop">
          <img src={banner_shop} alt="" />
          <div className="banner_detail">
            <h2 className="banner_title">Nos produits</h2>
            <p className="banner_description">Acceuil &gt; Boutique</p>
          </div>
        </div>
      </div>
      <div className="shop_body_container">
        <div className="shop_body">
          <div className="menu">
            <ul className="categories_header">
              <li className="categories">CATEGORIES</li>
              <li>
                <ul className="categories_body">
                  <li className="lame_bois">Lame Bois</li>
                  <li>Lame Composite</li>
                  <li>Panneau Bois</li>
                  <li>Grille Regide</li>
                  <li>Gabion</li>
                </ul>
              </li>
            </ul>
            <div className="configuration_container">
              <div className="configuration">
                <div className="toolbox">
                  <img src={toolbox} alt="" />
                </div>
                <div className="configuration_detail_shop">
                  <h2 className="configuration_title">
                    Configurez votre espace
                  </h2>
                  <p className="configuration_description">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidu.
                  </p>
                </div>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42.09"
                height="62.734"
                viewBox="0 0 42.09 62.734"
                className="svg_shop"
              >
                <defs></defs>
                <g transform="translate(-122.347 -60.728)">
                  <path
                    className="a"
                    d="M223.7,23.548V12.186H181.611V23.548Z"
                    transform="translate(-59.264 48.542)"
                  />
                  <path
                    class="a"
                    d="M223.7,59.515H193.773V44.631H223.7V33.909h-42.09V70.877H223.7Z"
                    transform="translate(-59.264 52.585)"
                  />
                </g>
              </svg>
              <div className="configuration_arrow_shop">
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
          <div className="products">
            <ul className="navbar_products">
              <li className="clicked">Nouveautés</li>
              <li className="unclicked">Populaire</li>
              <li className="unclicked">Meilleurs Ventes</li>
            </ul>

            <div className="boxes_cards">
              {CardsReducer.cards.map((el, i) => (
                <Card key={i} card={el} />
              ))}
            </div>
            <div className="display_bttn">
              <p>afficher plus</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
