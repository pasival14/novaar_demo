import React from 'react';
import './arrow.css'

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-next-arrow`}
            style={{ ...style, right: 20, zIndex: 1 }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-prev-arrow`}
            style={{ ...style, left: 20, zIndex: 1 }}
            onClick={onClick}
        />
    );
};

export { NextArrow, PrevArrow };
