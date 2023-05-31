import "./style.css";
import img1 from "./img1.png";
import img2 from "./img2.png";
import Group from "./Group.png";
import { Dublimg } from "../../../../DublImg/DublImg";

export const About = () => {
  return (
    <div className="about">
      <Dublimg  img1={img1} img2={img2} imgPbtn={Group}/>
  
      <div className="about__heading">
        <p className="about__title">Haqqımızda</p>
        <h1 className="about__exp">Bilim Bakı Haqqında Məlumat</h1>
        <p className="about__text">
          Varius nulla id enim, ante nisl, elementum lobortis tincidunt leo.
          Nisl, tincidunt feugiat dictum consequat faucibus volutpat tristique.
        </p>
        <div className="about__alt__text">
          <p>
            Morbi elementum condimentum risus mauris eu. Mauris, tincidunt
            aliquam adipiscing ut platea turpis aenean massa. Viverra lobortis
            malesuada pharetra, leo lacinia.
          </p>
          <p>
            Lectus auctor sed id magna aliquam quam. Ultrices faucibus facilisi
            velit purus neque. Risus id auctor mauris ut duis eu felis tortor.
          </p>
          <p>
            Odio ante blandit egestas sed arcu. Sit tellus ac amet sit
            vulputate. Euismod pellentesque morbi libero, montes, nulla.
          </p>
        </div>
        <button className="about__button">Ətraflı bax</button>
      </div>
    </div>
  );
};
