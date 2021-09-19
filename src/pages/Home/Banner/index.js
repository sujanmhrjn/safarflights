import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FlightsTab from './Tabs/Flights';
import AeroplaneBanner from '../../../assets/images/aeroplane-banner.jpg';
const Banner = () => {
    return(
        <div className="pt-192 relative">
            <div className="absolute inset-0 w-full h-full bg-blue-400">
                <img src={AeroplaneBanner} className="h-full w-full object-cover opacity-35" alt="Banner"/>
            </div>
            <div className="container mx-auto px-16 relative z-10">
                <div className="-mx-16 flex flex-wrap justify-center">
                    <div className="w-full lg:w-11/12 px-16 pt-56 lg:pt-76">
                        <h1 className="text-center text-lg lg:text-2xl font-bold text-white mb-16">Find Cheap Flight tickets to any Destination</h1>
                        
                        <Tabs className=" -mb-56 shadow shadow-md">
                            <TabList className="flex items-center font-medium text-sm text-white mb-10">
                                <Tab className="px-16 py-4 rounded-full cursor-pointer" selectedClassName="bg-yellow-300 font-bold text-black">Flight</Tab>
                                <Tab className="px-16 py-4 rounded-full cursor-pointer" selectedClassName="bg-yellow-300 font-bold text-black">Hotel</Tab>
                                <Tab className="px-16 py-4 rounded-full cursor-pointer" selectedClassName="bg-yellow-300 font-bold text-black">Cabs</Tab>
                                <Tab className="px-16 py-4 rounded-full cursor-pointer" selectedClassName="bg-yellow-300 font-bold text-black">Holidays</Tab>
                            </TabList>
                            <div className="bg-white rounded-sm w-full py-16">
                                <TabPanel>
                                    <FlightsTab/>
                                </TabPanel>
                                <TabPanel>
                                <h2>Any content 2</h2>
                                </TabPanel>
                            </div>
                        </Tabs>                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;