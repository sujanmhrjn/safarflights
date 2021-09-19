import React from 'react';
import {Link} from 'react-router-dom'
const DiscountBlock = () => {
    return(
        <div className="bg-yellow-300 py-40">
            <div className="container mx-auto px-16 text-center">
                <h2 className="font-fjalla uppercase text-xl lg:text-2xl exlg:text-3xl mb-16">Get up to 50% discount on emirats</h2>
                <p className="w-full lg:w-8/12 mx-auto text-gray-600 mb-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <Link to="#" className="inline-block text-center text-xs uppercase px-24 py-10 font-bold  bg-black text-white hover:bg-gray-500">
                    Book Now
                </Link>
            </div>
        </div>
    )
}
export default DiscountBlock