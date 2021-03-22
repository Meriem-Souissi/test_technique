import React from "react";
import "../styles/Home.css";
import banner from "../res/banner.png";
import img1 from "../res/img1.png";
import img2 from "../res/img2.png";
import img3 from "../res/img3.png";
import img4 from "../res/img4.png";
import img5 from "../res/img5.png";
import fence from "../res/fence.png";
import arrow from "../res/arrow_left.png";
import icon from "../res/icon.png";
import arrow_right from "../res/arrow-right-line.png";
import arrow_left from "../res/arrow-left-line.png";
import our_achievements from "../res/our_achievements.png";
import gallery_1 from "../res/gallery_1.png";
import gallery_2 from "../res/gallery_2.png";
import gallery_3 from "../res/gallery_3.png";
import gallery_4 from "../res/gallery_4.png";
import gallery_5 from "../res/gallery_5.png";
import store from "../res/store.png";
import store_bg from "../res/store_bg.png";

function Home() {
  return (
    <div id="home">
      <div className="home_header">
        <div className="banner">
          <img src={banner} alt="" />
        </div>
        <div className="shop_items">
          <div className="box">
            <div className="box_img">
              <img src={img1} alt="" />
              <div className="detail">
                <p>Lame </p>
                <p>commposite</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box_img">
              <img src={img2} alt="" />
              <div className="detail">
                <p>Lame </p>
                <p> en bois</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box_img">
              <img src={img3} alt="" />
              <div className="detail">
                <p>Panneau </p>
                <p> bois</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box_img">
              <img src={img4} alt="" />
              <div className="detail">
                <p>Grille </p>
                <p>rigide</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box_img">
              <img src={img5} alt="" />
              <div className="detail">
                <p>Gabion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_body">
        <div className="configuration_home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42.09"
            height="62.734"
            viewBox="0 0 42.09 62.734"
            className="svg_home"
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
          <div className="configuration_img">
            <img src={fence} alt="" />
          </div>
          <div className="configuration_detail">
            <h2 className="configuration_title">Configurez votre espace </h2>
            <p className="configuration_description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidu.
            </p>
          </div>
          <div className="configuration_arrow">
            <img src={arrow} alt="" />
          </div>
        </div>

        <div className="our_achievements_home">
          <div className="our_achievements_right">
            <div>
              <img src={our_achievements} alt="" />
            </div>
            <div className="our_achievements_right_hover">
              <img src={icon} alt="" />
            </div>
          </div>

          <div className="our_achievements_left">
            <div className="title">
              <h1>Nos réalisations</h1>
            </div>
            <div className="content">
              <div className="content_description">
                <h2>Panneau bois</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasdundefined
                </p>
              </div>
              <div className="content_arrows">
                <div className="content_left">
                  <div className="arrow_left">
                    <img src={arrow_left} alt="" />
                  </div>
                  <div className="cercles">
                    <div></div>
                    <div className="cercle_two"></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="arrow_right">
                  <img src={arrow_right} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gallery">
          <div className="gallery_box_presentation">
            <div className="gallery_description">
              <h1>Notice & Installation</h1>
              <p>
                <span>Avant de commencer, calculez la quantité de bois,</span>
                <span>de béton et de quincaillerie dont</span>
                <span>vous aurez besoin.</span>
              </p>
            </div>
            <div className="gallery_description_hover">
              <p className="know_more">EN SAVOIR PLUS</p>
              <div className="gallery_arrow">
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
          <div className="gallery_box">
            <div className="gallery_img">
              <img src={gallery_1} alt="" />
            </div>
            <div className="img_hover">
              <img src={icon} alt="" />
            </div>
          </div>
          <div className="gallery_box">
            <div className="gallery_img">
              <img src={gallery_2} alt="" />
            </div>
            <div className="img_hover">
              <img src={icon} alt="" />
            </div>
          </div>
          <div className="gallery_box">
            <div className="gallery_img">
              <img src={gallery_3} alt="" />
            </div>
            <div className="img_hover">
              <img src={icon} alt="" />
            </div>
          </div>
          <div className="gallery_box">
            <div className="gallery_img">
              <img src={gallery_4} alt="" />
            </div>
            <div className="img_hover">
              <img src={icon} alt="" />
            </div>
          </div>
          <div className="gallery_box">
            <div className="gallery_img">
              <img src={gallery_5} alt="" />
            </div>
            <div className="img_hover">
              <img src={icon} alt="" />
            </div>
          </div>
        </div>

        <div className="our_store">
          <div className="our_store_left">
            <div className="store_img">
              <img src={store_bg} alt="" />
            </div>
            <div className="our_store_left_hover">
              <img src={icon} alt="" />
            </div>
          </div>
          <div className="our_store_right">
            <div className="our_store_right_title">
              <h1>Notre magazin</h1>
            </div>
            <div className="our_store_right_content">
              <div className="our_store_right_content_img">
                <img src={store} alt="" />
              </div>
              <div className="our_store_right_content_description">
                <div className="description">
                  <p>
                    Dolores et ea rebum. Stet clita kasd gubergren, no sea
                    takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>
                <div className="description_hover">
                  <p className="know_more_store">EN SAVOIR PLUS</p>
                  <div className="store_arrow">
                    <img src={arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
