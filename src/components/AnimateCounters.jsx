import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function AnimateCounters({ counters }) {
    return (
        <section className="bg-white py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {counters.map((counter, index) => (
                        <Counter key={index} end={counter.end} text={counter.text} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Counter({ end, text }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 4000; // 4 seconds
        const increment = end / (duration / 100);

        const counterInterval = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(counterInterval);
            }
            setCount(Math.ceil(start));
        }, 100);

        return () => clearInterval(counterInterval);
    }, [end]);

    return (
        <div className="flex flex-col items-center p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center w-24 h-24 bg-blue-primary text-white rounded-full mb-4">
                <h3 className="text-4xl font-bold">{count}</h3>
            </div>
            <p className="text-lg text-gray-700">{text}</p>
        </div>
    );
}

AnimateCounters.propTypes = {
    counters: PropTypes.arrayOf(
        PropTypes.shape({
            end: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired
};

Counter.propTypes = {
    end: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
};

export default AnimateCounters;