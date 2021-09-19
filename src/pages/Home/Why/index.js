import React from 'react';
import IconCoin from '../../../assets/images/icon-coins.svg';
import IconSearch from '../../../assets/images/icon-search.svg';
import IconFlight from '../../../assets/images/icon-flights.svg';
import IconServices from '../../../assets/images/icon-services.svg';
import IconCities from '../../../assets/images/icon-cities.svg';
import IconAirlines from '../../../assets/images/icon-airlines.svg';

const Why = () => {
    const offers = [
        {
            icon: IconCoin,
            title:'Cheap Flight Tickets',
            description:(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`)
        },
        {
            icon: IconSearch,
            title:'Easy Search',
            description:(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`)
        },
        {
            icon: IconFlight,
            title:'World Flights Tickets',
            description:(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`)
        },
        {
            icon: IconServices,
            title:'24x7 Services',
            description:(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`)
        },
        {
            icon: IconCities,
            title:'Top Cities',
            description:(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`)
        },
        {
            icon: IconAirlines,
            title:'All Airlines Available',
            description:(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`)
        },
    ]
    return(
        <div className="bg-gray-600 py-56 pb-16">
            <div className="container mx-auto px-16">
                <h2 className="font-bold mb-24 text-xl lg:text-2xl font-fjalla uppercase tight tracking-wide text-white mb-40">Safar Flights <span className="text-orange-">Offer</span></h2>
                <div className="-mx-16 flex flex-wrap">
                    {offers.map((item,i)=>{
                        return (
                                <div className="px-16 w-full md:w-6/12 lg:w-4/12" key={i}>
                                    <div className="flex mb-40">
                                        <div className="px-16 relative py-40">
                                            <img src={item.icon} className="w-full absolute top-0 left-0"/>
                                        </div>
                                        <div className="text-white pl-24">
                                            <h3 className="font-bold mb-16">{item.title}</h3>
                                            <div className="text-sm leading-relaxed text-gray-300">
                                                {item.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Why;