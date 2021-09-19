import React from 'react';
import Slider from 'react-slick';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
const SlidePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`absolute left-0 bg-white shadow p-10 rounded-full shadow-md z-20 cursor-pointer hover:bg-yellow-300 ${className}`}
        style={{ ...style, top:'50%', transform:'translateY(-50%)' }}
        onClick={onClick}
      >
        <FiChevronLeft/>
      </div>
    );
  }
  const SlideNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`absolute right-0 bg-white shadow  p-10  rounded-full shadow-md z-20 cursor-pointer hover:bg-yellow-300 ${className}`}
        style={{ ...style, top:'50%', transform:'translateY(-50%)'}}
        onClick={onClick}
      ><FiChevronRight/></div>
    );
  }
const Testimonials = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SlideNextArrow/>,
        prevArrow: <SlidePrevArrow/>
      };

     
      const testimonialsList = [
          {
              image:'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
              name:'Aalok Subedi',
              position: 'CEO, SiliconHire',
              description:(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`)
          },
          {
              image:'https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg',
              name:'John Doe',
              position: 'CEO, ABC Corp',
              description:(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`)
          },
          {
            image:'https://production-clubhouse-avatars.s3.amazonaws.com/1007875729_b15859a1-c6eb-4f5e-a7e8-9e670e156dc2',
            name:'Abin Rimal',
            position: 'CEO, Abin Rimal',
            description:(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `)
        }
      ] 
    return(
        <div className="py-40">
            <h2 className="font-bold mb-24 text-xl lg:text-2xl font-fjalla uppercase tight tracking-wide">Testimonials</h2>
            <div className="bg-gray-50 px-16">
                <Slider {...settings}>
                    {testimonialsList.map((item,i)=>{
                        return(
                            <div className="px-56 py-28">
                                <div className="text-center py-10">
                                    <div className="inline-block p-32 bg-gray-300 rounded-full relative overflow-hidden">
                                        <img src={item.image} alt={item.name} className="absolute inset-0 h-full w-full object-cover object-top"/>
                                    </div>
                                    <div className="font-bold text-lg">{item.name}</div>
                                    <div className="text-sm text-gray-300 mb-6">{item.position}</div>
                                    <div className="text-sm text-gray-400">{item.description}</div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}
export default Testimonials;