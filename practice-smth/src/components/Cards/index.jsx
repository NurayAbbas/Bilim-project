import { Card } from "./data";
import "./style.css";
export const Cards = () => {
  return (
    <div className="card">
      {Card.map(
        (
          { title, content, vector, righticon, color, backgroundcolor },
          index
        ) => (
          <div
            key={index}
            className="card-telim"
            style={{ background: backgroundcolor }}
          >
            <div className="card-telim__icon">
              <img src={vector} alt="vector" />
            </div>
            <p className="card-telim__title">{title}</p>
            <p className="card-telim__content">{content}</p>
            <div className="card-telim__link">
              <a href="#" style={{ color: color }}>
                Bax
              </a>
              <a href="#">
                <img src={righticon} alt="rigt" />
              </a>
            </div>
          </div>
        )
      )}
    </div>
  );
};
