import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' bg-slate-400'>
            <div className="navbar w-11/12 mx-auto bg-slate-400">
                <div className="flex-1">
                    <Link to='/' className="font-bold text-xl text-white">Firebase</Link>
                </div>
                <div className="flex-none">
                    <ul className="flex gap-6 p-0 font-semibold text-white">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
