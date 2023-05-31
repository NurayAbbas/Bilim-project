
import "./style.css";

// eslint-disable-next-line react/prop-types
export const Dublimg = ({ img1, img2, imgPbtn }) => {
  return (
    <div className="About_images">
      <img className="About_images__1" src={img2} />
      <img className="About_images__2" src={img1} />
      <button className="About_images__button" style={{fontWeight:"bolder"}}>
        <img src={imgPbtn} /> Videonu izlə
      </button>
    </div>
  );
};
