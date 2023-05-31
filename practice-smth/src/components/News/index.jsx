import { CardImgs } from "../CardImgs";
import './style.css'
export const News = () => {
  return (
    <div>
      <div className="news__new">
       <div className="news__new__title">
        <div className="news__new__text">
          <h3>Xəbərlər</h3>
          <h1>Ən son yeniliklər</h1>
        </div>
        <div className="news__new__button">
          <button>Hamısına bax</button>
        </div>
       </div>
       <div className="news__new__imgs">
        <CardImgs/>
       </div>
    </div>
    </div>
  );
};
