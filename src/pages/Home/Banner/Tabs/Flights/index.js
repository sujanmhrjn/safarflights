import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { FiCalendar, FiCheck, FiChevronDown, FiUser } from 'react-icons/fi';
const FlightsTab = () => {
    const ticketsList = [ {id:1, title:'One Way'},{id:2, title:'Two Way'},{id:3, title:'Multi City'}];
    const [selectedTicket, setSelectedTicket] = useState(1);
    const [startDate, setStartDate] = useState(new Date());
    const [isNonStopFlight, setNonStopFlight] = useState(false)
    const onSelectTicket = (id) => {
        setSelectedTicket(id)
    }
    const toggleNonStopFlight = () => {
        setNonStopFlight(!isNonStopFlight)
    }
    return(
        <div className="">
            <div className="flex items-center px-16 mb-16">
                {ticketsList.map((item,i)=>{
                    return(             
                        <div 
                            className={`px-16 text-xs py-4 font-fjalla tracking-wider cursor-pointer 
                                        ${i < ticketsList.length - 1 ?'border-gray-300':'border-white'}
                                        ${item.id === selectedTicket?'text-white bg-blue-300   border-r-0':'text-gray-500 border-r-1 '}`} 
                             key={i}
                            onClick={()=>onSelectTicket(item.id)}     
                        >
                            {item.title}
                        </div>
                    )
                })}
                
            </div>
            <div className="flex items-center flex-wrap lg:flex-nowrap px-16 mb-16">
                <div className="w-full">
                    <input type="text" className="px-10 block bg-gray-50 border-1 border-gray-200 w-full text-sm py-10 focus:outline-none" placeholder="Enter Departure"/>
                </div>
                <div className="w-full">
                    <input type="text" className="px-10 block bg-gray-50 border-1 border-gray-200 w-full text-sm py-10 focus:outline-none" placeholder="Enter Destination"/>
                </div>
                <div className="w-full relative">
                    <DatePicker 
                        selected={startDate} 
                        placeholderText="Departure Date" 
                        onChange={(date) => setStartDate(date)} 
                        className="px-10 block bg-gray-50 border-1 border-gray-200 w-full text-sm py-10 focus:outline-none"/>
                        <span className="block absolute right-10 top-12 opacity-25 text-lg pointer-events-none">
                            <FiCalendar/>
                        </span>
                </div>
                <div className="w-full relative">
                    <DatePicker 
                        selected={startDate} 
                        placeholderText="Return Date" 
                        onChange={(date) => setStartDate(date)} 
                        className="px-10 block bg-gray-50 border-1 border-gray-200 w-full text-sm py-10 focus:outline-none"/>
                        <span className="block absolute right-10 top-12 opacity-25 text-lg pointer-events-none">
                            <FiCalendar/>
                        </span>
                </div>
                <div className="w-full lg:w-5/12 relative">
                    <span className="block absolute left-10 top-12 opacity-25 text-lg pointer-events-none">
                        <FiUser/>
                    </span>
                    <select className="px-10 pl-40 block bg-gray-50 border-1 border-gray-200 w-full text-sm py-10 appearance-none focus:outline-none">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                    <span className="block absolute right-10 top-12 opacity-25 text-lg pointer-events-none">
                        <FiChevronDown/>
                    </span>
                </div>
                <div className="w-full  relative">
    
                    <select className="px-10  block bg-gray-50 border-1 border-gray-200 w-full text-sm py-10 appearance-none focus:outline-none">
                        <option>Type</option>
                        <option>Business Classs</option>
                        <option>Economy Class</option>
                    </select>
                    <span className="block absolute right-10 top-12 opacity-25 text-lg pointer-events-none">
                        <FiChevronDown/>
                    </span>
                </div>
            </div>
            <div className="flex items-center flex-wrap justify-between px-16">
                <div>
                    <input type="checkbox" id="nonStopFlights" className="absolute top-0 left-0 appearance-none w-0 h-0 overflow-hidden opacity-0" onChange={toggleNonStopFlight}/>

                    <label htmlFor="nonStopFlights" className="text-sm text-gray-500 flex items-center cursor-pointer">
                        <span className={`inline-block p-8 border-1 relative  mr-10 ${isNonStopFlight?'bg-blue-300 border-blue-300':'border-gray-200'}`}>
                            {isNonStopFlight && <span className="absolute inset-0 flex items-center justify-center text-white"><FiCheck/></span> }
                        </span>
                        Non-stop Flights
                    </label>
                </div>
                <button className="py-10 px-24 text-xs font-bold uppercase bg-blue-300 hover:bg-blue-400 text-white">Search</button>
            </div>
        </div>
    )
}

export default FlightsTab