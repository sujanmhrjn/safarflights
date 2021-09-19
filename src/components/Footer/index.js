import React from 'react';
import {Link} from 'react-router-dom';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
const Link1 = [
    {
        name: 'Home',
        url:'/'
    },
    {
        name: 'Flights',
        url:'/'
    },
    {
        name: 'Hotels',
        url:'/'
    },
    {
        name: 'Vehicle Hire',
        url:'/'
    },
    {
        name: 'Packages',
        url:'/'
    },
    {
        name:'About us',
        url:'/'
    }
]
const News = [
    {
        title:'Nepal',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        url:'/',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2XIfUikd-dosYOJl4oRKpgzf6ajjj0wEcUv8YbKUv5Agqjp5kAXIoy-a3I3i1GY4wFM&usqp=CAU'
    },
    {
        title:'Nepal',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        url:'/',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2XIfUikd-dosYOJl4oRKpgzf6ajjj0wEcUv8YbKUv5Agqjp5kAXIoy-a3I3i1GY4wFM&usqp=CAU'
    }
]
const Footer = () => {
    return(
    <div className="bg-gray-600">
        <div className="container mx-auto px-16">
            <div className="-mx-16 flex flex-wrap">
                <div className="px-16 w-full lg:w-2/12 py-40">
                    <h3 className="font-bold uppercase text-lg text-white mb-16">Safar Flights</h3>
                    <ul>
                        {Link1.map((item, i)=> {
                            return (
                                <li key={i}>
                                    <Link to={item.url} className="text-gray-300 block py-6 text-sm hover:text-yellow-300">
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })}
                        
                    </ul>
                </div>
                <div className="px-16 w-full lg:w-2/12 py-40">
                    <h3 className="font-bold uppercase text-lg text-white mb-16">Travel Guide</h3>
                    <ul>
                        {Link1.map((item, i)=> {
                            return (
                                <li key={i}>
                                    <Link to={item.url} className="text-gray-300 block py-6 text-sm hover:text-yellow-300">
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })}
                        
                    </ul>
                </div>

                <div className="px-16 w-full lg:w-4/12 py-40">
                    <h3 className="font-bold uppercase text-lg text-white mb-16">Travel News</h3>
                    <ul>
                        {News.map((item, i)=> {
                            return (
                                <li key={i}>
                                    <Link to={item.url} className="flex mb-20">
                                        <span className="block">
                                            <img src={item.image} alt={item.title}/>
                                        </span>
                                        <span className="block pl-16 pr-16">
                                           <span className="font-bold text-lg block text-white text-sm hover:text-yellow-300">{item.title}</span>
                                           <span className="text-gray-300 text-sm leading-snug block">{item.description}</span>
                                        </span>
                                    </Link>
                                </li>
                            )
                        })}
                        
                    </ul>
                </div>

                <div className="w-full px-16 lg:w-4/12  py-40">
                    <h3 className="font-bold uppercase text-lg text-white mb-16">Subscribe Newsletter</h3>  
                    <div className="mb-32">
                        <input type="text" name="" className="text-gray-400 py-12 w-full rounded-sm px-16 bg-white border-1 border-gray-100 mb-2" placeholder="Email Address"/> 
                        <button className="py-14 px-16 bg-blue-300 font-bold text-sm uppercase rounded-sm text-white hover:bg-blue-400 w-full">Send</button>
                    </div>
                    
                    <div className="flex items-center ">
                        <Link to="/" className="text-white text-lg mr-16 hover:text-yellow-300">
                            <FaFacebookF/>
                        </Link>
                        <Link to="/" className="text-white text-lg mr-16 hover:text-yellow-300">
                            <FaInstagram/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;