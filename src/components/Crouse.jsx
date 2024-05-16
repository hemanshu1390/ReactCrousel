import React from 'react';
import { Carousel } from "@material-tailwind/react";
import Car from "./Car";

export default function Crouse() {
  const carData = [
    {
      id:1,
      name: "Tania Andrew",
      role: "Frontend Lead @ Google",
      avatarSrc: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      review: "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
      city: "Nagpur",
      mobileNo: "8448019869"
    },
    {
      id:2,
      name: "Saloni Singh",
      role: "Frontend Lead @ Axiom",
      avatarSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      review: "Front-end development is the process of building components that interact with users. Examples are the user interface, buttons, user-entered data, websites, and user experience (UX) features.",
      city: "Candrapur",
      mobileNo: "6778019869"
    },
    {
      id:3,
      name: "Hemanshu Wung",
      role: "Frontend Lead @ Persistent",
      avatarSrc: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      review: "Front-end web development is the development of the graphical user interface of a website through the use of HTML, CSS, and JavaScript so users can view and interact with that website",
      city: "Wardha",
      mobileNo: "9788019869"
    },
    
    // Add more objects with different data as needed
  ];

  return (
    <div className="flex justify-center items-center ">
      <Carousel className="rounded-xl w-[40vmax] bg-pink-300"  autoplay="true" loop>
      {/* autoplay="true" loop */}
        {carData.map((data, index) => (
          <div key={index} className="flex justify-center p-5  ">
            <Car {...data} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

     
  
