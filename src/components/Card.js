import React from "react";
import "../styles/Card.css";
import arrow from "../res/arrow_left.png";

function Card({ card }) {
  return (
    <div className="card">
      <div className="card_img">
        <img src={card.picture} alt="" />
      </div>
      <div className="see_more_container">
        <p className="see_more">voir détails</p>
        <div className="arrow">
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="detail_container">
        <div className="detail_content">
          <p className="name">{card.product_name}</p>
          <p className="price">{card.price}</p>
        </div>
      </div>
      {(card.id === 1 || card.id == 5) && (
        <div className="sticker_container">
          <p className="sticker_title">SUR COMMANDE</p>
        </div>
      )}
    </div>
  );
}

export default Card;
