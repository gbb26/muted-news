/* eslint-disable react/prop-types */
const Card = ({ imageSrc, userId, userName, description }) => {
    return (
      <div className="card">
        <img src={imageSrc} alt="User" className="card-image" />
        <div className="card-content">
          <h2>User ID: {userId}</h2>
          <h3>Name: {userName}</h3>
          <p>Description: {description}</p>
        </div>
      </div>
    );
  };
  export default Card;