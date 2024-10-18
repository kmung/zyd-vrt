import React from "react";

const Button = ({ children, onClick, className = '', variant = 'primary' }) => {
    const variantClass = `button-${variant}`;

    return (
        <button
            className={`px-6 py-2 rounded-md text-white font-semibold transition-transform duration-300 transform hover:scale-105 border border-blue-secondary bg-blue-primary shadow-md hover:shadow-lg ${variantClass} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;