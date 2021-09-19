import React from 'react';
import Header from '../../components/Header';
import Banner from './Banner';
import Featured from './Featured';
import Offers from './Offers';
import Why from './Why';
import Testimonials from './Testimonials';
import DealsOfTheDay from './DealsOfTheDay';
import HotelBooking from './HotelBooking';
import DiscountBlock from './Discount';
import Footer from '../../components/Footer';
const Homepage = () => {
    return (
        <div className="">
            <Header/>
            <Banner/>
            <Offers/>
            <Featured/>
            <Why/>
            <div className="container mx-auto px-16">
                <div className="-mx-16 flex flex-wrap">
                    <div className="px-16 w-full lg:w-5/12"><Testimonials/></div>
                    <div className="px-16 w-full lg:w-7/12">
                        <DealsOfTheDay/>
                    </div>
                </div>
            </div>
            <HotelBooking/>
            <DiscountBlock/>
            <Footer/>
        </div>
    )
}
export default Homepage;