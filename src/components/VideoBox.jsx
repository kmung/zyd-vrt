import React from 'react';
import PropTypes from 'prop-types';

const VideoBox = ({ src, title }) => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-900 p-4 rounded-lg shadow-lg">
            <div className="w-full md:w-3/4">
                <iframe
                    src={src}
                    title={title}
                    className="w-full h-64 md:h-96 rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                ></iframe>
            </div>
            <div className="w-full md:w-1/4 md:pl-4 mt-4 md:mt-0 text-white">
                {title && <h2 className="text-xl font-bold">{title}</h2>}
            </div>
        </div>
    );
};

VideoBox.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string,
};

export default VideoBox;