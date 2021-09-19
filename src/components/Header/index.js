import React from 'react';
import TopHeader from './TopHeader';
import Navigation from './Navigation';
const Header = () => {
    return(
        <div className="absolute top-0 left-0 right-0 w-full z-20">
            <div className="container mx-auto px-16">
                <TopHeader/>
                <Navigation/>
            </div>
        </div>
    )
}
export default Header;