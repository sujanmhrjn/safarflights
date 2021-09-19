import React from 'react';
import {FiMapPin} from 'react-icons/fi';
import {BsPhone} from 'react-icons/bs';
const TopHeader = () => {
    return (
        <div className=" items-center justify-end py-10 -mx-16 hidden lg:flex">
            <div className="flex items-center text-sm text-white px-16">
                <FiMapPin className="mr-6"/> 7215 E 22nd Street, Suite 181, Tucson, AZ, 85710
            </div>
            <div className="flex items-center text-sm text-white px-16">
                <BsPhone className="mr-6"/> +1(520) 203 7952
            </div>
        </div>
    )
}

export default TopHeader;