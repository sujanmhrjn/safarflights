import React from 'react';
import { BsCreditCard } from 'react-icons/bs';
import { FiPercent } from 'react-icons/fi';

const Offers = () => {

    const offers = [
        {
            icon: <BsCreditCard/>,
            text: 'We accept all credit cards'
        },
        {
            icon: <FiPercent/>,
            text: 'Offered 20% off Discount content'
        },
        {
            icon: <BsCreditCard/>,
            text: 'We accept all credit cards'
        },
        {
            icon: <FiPercent/>,
            text: 'Offered 20% off Discount content'
        }
        
    ]
    return(
        <div className="pt-96 pb-40">
            <div className="container mx-auto px-16">
                <div className="-mx-16 flex flex-wrap justify-center">
                    {offers.map((item,i)=>{
                        return (
                            <div className={`w-full lg:w-3/12 px-16`} key={i}>
                                <div className="px-32 text-center bg-gray-50 py-16 ">
                                    <div className="p-24 relative bg-blue-300  inline-block rounded-full mb-8">
                                        <span className="absolute inset-0 flex items-center justify-center text-white">{item.icon}</span>
                                    </div>
                                    <p className="font-bold font-fjalla mb-10 text-gray-600 px-32">{item.text}</p>
                                    <p className="text-sm font-century text-gray-400">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                            </div>
                        );
                     })}
                </div>
            </div>
        </div>
    )
}
export default Offers;