import React from 'react';
import {Link} from 'react-router-dom';
import Dubai from '.././../../assets/images/dubai.jpg'
import Tokyo from '.././../../assets/images/tokyo.jpg'
const DealsOfTheDay = () => {
    const deals = [
        {
            image: Dubai,
            title: "20% off On Dubai to Sydney",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        },
        {
            image: Tokyo,
            title: "20% off On Dubai to Sydney",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
    ]
    return(
        <div className="py-40">
            <h2 className="font-bold mb-24 text-xl lg:text-2xl font-fjalla uppercase tight tracking-wide">Deals of the day</h2>
            <div className="-mx-16 flex flex-wrap">
                {
                    deals.map((item,i)=>{
                        return(
                            <div className="px-16 w-6/12">
                                <Link to="/" className="bg-gray-50 pb-16 block text-center mb-32">
                                    <span className="block overflow-hidden py-96 relative">
                                        <img src={item.image} alt={item.title} className="absolute w-full inset-0 h-full object-cover object-center"/>
                                    </span>
                                    <span className="text px-16 py-16 pb-16 block text-center">
                                        <span className="font-bold text-base px-32 leading-none text-gray-600 mb-10 block">
                                            {item.title}
                                        </span>
                                    
                                    </span>

                                    <span className="inline-block text-center text-xs uppercase px-24 py-10 font-bold  bg-blue-300 text-white hover:bg-blue-400">
                                        View Details
                                    </span>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DealsOfTheDay