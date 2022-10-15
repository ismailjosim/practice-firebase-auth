import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Ac mattis
                            <span className="dark:text-violet-400">senectus</span>erat pharetra
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                            <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link rel="noopener noreferrer" to="/login" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Subscribe Now</Link>
                            <Link rel="noopener noreferrer" to="/services" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">learn More</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src='./assets/Business_SVG.svg' alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
            <section className="py-6 dark:bg-gray-500 dark:text-gray-50">
                <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
                    <h1 className="text-5xl font-bold leading-none text-center">Sign up now</h1>
                    <p className="text-xl font-medium text-center">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
                    <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
                        <button className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</button>
                        <button className="px-8 py-3 text-lg font-normal border rounded dark:bg-gray-100 dark:text-gray-900 dark:border-gray-300">Learn more</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
