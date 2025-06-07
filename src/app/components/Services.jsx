import { MdPlaylistAddCheck } from "react-icons/md"; 
import { RiFilePaper2Fill } from "react-icons/ri"; 
import { FaPrint } from "react-icons/fa"; 
import { HiUserGroup } from "react-icons/hi"; 
import { IoMdNotifications } from "react-icons/io"; 
import { FaQrcode } from "react-icons/fa"; 
import { ImMobile2 } from "react-icons/im"; 
import { AiFillCloud } from "react-icons/ai"; 
import React from 'react';
import Image from "next/image";


const FeatureCard = ({ icon, title, description }) => {
    return (
      <div className="bg-[#0F0E1E] border border-[#1B1F2F] py-16 px-10 rounded-lg text-white space-y-8" >
        <div className="text-orange-500 text-4xl">{icon}</div>
        <h3 className="text-lg font-normal">{title}</h3>
        <p className="text-sm font-normal">{description}</p>
      </div>
    );
  };

const Services = () => {
  const features = [
    { icon: <AiFillCloud />, title: 'Cloud Based Access', description: 'Real-time access and synchronization across devices.' },
    { icon: <ImMobile2 />, title: 'Mobile Access', description: 'Manage accounting tasks on-the-go with bills and purchases.' },
    { icon: <FaQrcode />, title: 'Faster Payments', description: 'QR code integration for instant payments.' },
    { icon: <IoMdNotifications />, title: 'Automated Reminders', description: 'Set up automated WhatsApp reminders for payments.' },
    { icon: <HiUserGroup />, title: 'Advanced User Management', description: 'Assign roles with limited access and manage multiple users.' },
    { icon: <FaPrint />, title: 'Enhanced Printing Options', description: 'Support for bar-code scanning, thermal and A5 printing.' },
    { icon: <RiFilePaper2Fill />, title: 'Quotation and Estimation', description: 'Easily create and convert quotations to invoices.' },
    { icon: <MdPlaylistAddCheck />, title: 'Multi-Company Management', description: 'Manage multiple companies from one place seamlessly.' },
  ];

  return (
    <section className="relative z-10 px-16 ">
      <h2 className="text-4xl font-normal text-center text-gray-300 leading-tight mb-8 font-lexend-deca">Meet hisabkitab
        <br />
        <span className="bg-[linear-gradient(0deg,#2A2355_0%,#FFFFFF_100%)] bg-clip-text text-transparent">
            Not Just Another Accounting Software
            </span>
            </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" >
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </div>
    </section>
  );
};

export default Services;