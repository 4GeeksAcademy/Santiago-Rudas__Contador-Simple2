import React from 'react';
import { FaClock } from 'react-icons/fa';

const Contador = ({ digits = [] }) => {
    return (
        <div className="d-flex justify-content-center align-items-center gap-2 counter-container">
            <div className="counter-box icon-box">
                <FaClock />
            </div>
            {digits.map((digit, index) => (
                <div key={index} className="counter-box">
                    {digit}
                </div>
            ))}
        </div>
    );
};

export default Contador;
