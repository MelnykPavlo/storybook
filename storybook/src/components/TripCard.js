import React from 'react';
import PropTypes from 'prop-types';

const TripCard = ({ destination, image, date, price, onClick }) => (
    <div onClick={onClick}>
        <img src={image} alt={destination} />
        <h2>{destination}</h2>
        <p>{date}</p>
        <p>{price}</p>
    </div>
);

TripCard.propTypes = {
    destination: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default TripCard;
