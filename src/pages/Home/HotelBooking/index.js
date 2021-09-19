import React from 'react';
import { Link } from 'react-router-dom';



const HotelBooking = () => {
    const hotelList = [
        {
            image: 'https://storage.googleapis.com/static-content-hc/sites/default/files/cataloina_porto_doble_balcon2_2.jpg',
            title: "20% off On Dubai to Sydney",
            offer: "Validity: Feb 26, 2020"
        },
        {
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg',
            title: "20% off On Kathmandu to Tokyo",
            offer: "Validity: Feb 26, 2020"
        },
        {
            image: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/c8/65/d8/arnor-de-luxe-hotel-spa.jpg',
            title: "20% off On Singapore to Sydney",
            offer: "Validity: Feb 26, 2020"
        },
        {
            image: 'https://storage.googleapis.com/static-content-hc/sites/default/files/cataloina_porto_doble_balcon2_2.jpg',
            title: "20% off On Dubai to Sydney",
            offer: "Validity: Feb 26, 2020"
        },
    ]
    return(
        <div className="py-20">
            <div className="container mx-auto px-16">
                <h2 className="font-bold mb-24 text-xl lg:text-2xl font-fjalla uppercase tight tracking-wide">Featured Flights Deals</h2>
                <div className="-mx-16 flex flex-wrap">
                    {hotelList.map((item,i)=>{
       
                        return (
                            <div className="px-16 w-full sm:w-6/12 lg:w-3/12">
                                <Link to="/" className="bg-gray-50 pb-16 block text-center mb-32">
                                    <span className="block overflow-hidden py-96 relative">
                                        <img src={item.image} alt={item.title} className="absolute w-full inset-0 h-full object-cover object-center"/>
                                    </span>
                                    <span className="text px-16 py-16 pb-16 block text-center">
                                        <span className="font-bold text-base px-32 leading-none text-gray-600 mb-10 block">
                                            {item.title}
                                        </span>
                                        <span className="text-sm text-gray-500 block">
                                            {item.offer}
                                        </span>
                                    </span>

                                    <span className="inline-block text-center text-xs uppercase px-24 py-10 font-bold  bg-blue-300 text-white hover:bg-blue-400">
                                        View Details
                                    </span>
                                </Link>
                            </div>
                        )
                                     
                     })}
                </div>
            </div>
        </div>
    )
}

export default HotelBooking;