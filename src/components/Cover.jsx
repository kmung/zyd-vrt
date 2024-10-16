import React from "react";
import PropTypes from 'prop-types';

function Cover({ title, backgroundImage }) {
    return (
        <div className="h-[90vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1 className="text-4xl font-bold text-white">{title}</h1>
        </div>
    );
};

Cover.propTypes = {
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired
};

export default Cover;