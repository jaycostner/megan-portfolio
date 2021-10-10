import React from 'react';
import  { Link }  from 'react-router-dom';

const Showcase = () => {
    return (
        <section className="showcase">
         <div className="overlay flex flex-col items-center justify-center text-white px-5">
            <h1 className="text-3xl font-bold text-right mb-10 lg:text-center lg:text-4xl lg:px-56">
               Welcome to my portfolio!<span className="text-purple-600"> let me make your dreams a reality </span>Feel free to contact for work
            </h1>

            <div className="ml-auto lg:ml-0">
                <Link to="/hire" className="mr-5 bg-purple-600 p-2 px-4 rounded-full font-semibold transition-all hover:bg-purple-800">Get Started</Link>
                <Link to="/projects" className="mr-5 bg-white text-purple-600 p-2 px-4 rounded-full font-semibold transition-all hover:bg-purple-800 hover:text-white">Projects</Link>
            </div>
         </div>
        </section>
    )
}

export default Showcase
