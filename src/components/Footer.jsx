import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='bg-gray-800 text-white py-4 flex justify-center items-center space-x-2'>
            <p>©2024 
                <Link to='/' className='text-blue-400 hover:text-blue-600'> Zomi YD</Link>
            </p>
            <span> | </span>
            <p>
                Made with <span className='text-red-500'>❤️</span> by
                <a href='https://kmung.github.io/' target='_blank' rel='noreferrer nofollow' className='text-blue-400 hover:text-blue-600'>&nbsp;KM</a>
            </p>
        </footer>
    );
}

export default Footer;