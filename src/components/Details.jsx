/* eslint-disable react/prop-types */
const Details = ({ imageUrl, userId, userName, description }) => {
  return (
    <div className="custom-card">
      <img src={imageUrl} alt="Card" className="custom-card-image" />
      <div className="custom-card-content">
        <h3 className="user-id">{userId}</h3>
        <h4 className="user-name">{userName}</h4>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Details;
