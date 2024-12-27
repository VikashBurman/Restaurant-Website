import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    // console.log(props);
    const {resData} = props;
    const{cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwo} = resData?.data;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={CDN_URL+cloudinaryImageId}
          alt="Meghana Food"
        />
        <div className="res-details">
          <h3 className="res-title">{name}</h3>
          <p className="res-cuisine">{cuisines.join(",")}</p>
          <p className="res-cuisine">${costForTwo/100} For Two</p>
          <div className="res-info">
            <span className="res-rating">⭐ {avgRating}</span>
            <span className="res-delivery-time">⏱ {deliveryTime}</span>
          </div>
        </div>
      </div>
    );
  };

  export default RestaurantCard;