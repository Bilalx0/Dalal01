'use client'

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ= () => {
  const [openIndex, setOpenIndex] = useState(6); // Second to last item is open by default

  const faqs = [
    {
      question: "What is hisabkitab, and how can it benefit my business?",
      answer: "Hisabkitab is a comprehensive business management software that helps streamline your accounting, billing, and financial processes. It can benefit your business by automating invoicing, ensuring GST compliance, generating financial reports, and providing real-time insights into your business performance."
    },
    {
      question: "Is hisabkitab suitable for small businesses, or is it meant for larger enterprises?",
      answer: "Hisabkitab is designed to cater to businesses of all sizes, from small startups to large enterprises. Our scalable solution can grow with your business needs and offers different pricing tiers to accommodate various business requirements."
    },
    {
      question: "Can hisabkitab help me with real-time financial reporting and analytics?",
      answer: "Yes, hisabkitab provides comprehensive real-time financial reporting and analytics. You can generate various reports including profit & loss statements, balance sheets, cash flow reports, and aging reports to make informed business decisions."
    },
    {
      question: "What security measures does hisabkitab have in place to protect my financial data?",
      answer: "Security is our top priority. Hisabkitab uses enterprise-grade security measures including data encryption, secure cloud storage, regular backups, and compliance with industry standards to ensure your financial data is completely protected."
    },
    {
      question: "Can hisabkitab be accessed from multiple devices, and is there a mobile app available?",
      answer: "Yes, hisabkitab is accessible from multiple devices including desktops, tablets, and smartphones. We offer both web-based access and mobile applications for iOS and Android platforms for convenient access on the go."
    },
    {
      question: "What types of businesses can benefit from hisabkitab?",
      answer: "Hisabkitab is suitable for various types of businesses including retail, manufacturing, services, freelancers, consultants, and e-commerce businesses. Any business that needs efficient accounting and billing solutions can benefit from our platform."
    },
    {
      question: "Can the AI Scheduling Assistant manage tasks as well?",
      answer: "Yes, our AI Scheduling Assistant can manage various tasks including appointment scheduling, task prioritization, deadline reminders, and workflow automation to help streamline your business operations."
    },
    {
      question: "What are the pricing plans for the AI Scheduling Assistant?",
      answer: "We offer flexible pricing plans for our AI Scheduling Assistant, including basic, professional, and enterprise tiers. Each plan is designed to meet different business needs and scales with your requirements. Contact our sales team for detailed pricing information.",
      isOpen: true
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen p-8 relative overflow-hidden mt-24 px-16">
      {/* Background blur effects */}
      {/* <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl"></div>
       */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 ">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-purple-600/30 rounded-full flex items-center justify-center border border-purple-500/30">
              <HelpCircle className="w-6 h-6 text-purple-300" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 font-lexend-deca">
            Frequently Asked Question
          </h1>
          <p className="text-[#DEC4FF] text-normal text-md max-w-2xl mx-auto font-lexend-deca mt-8">
            Find quick answers to common questions about our AI Scheduling Assistant.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gray-900/40 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                openIndex === index 
                  ?  'bg-gray-800/60' 
                  : 'hover:bg-gray-800/40'
              }`}
              onClick={() => toggleFAQ(index)}
              style={{
                borderTop: '1px solid',
                borderImageSource: 'linear-gradient(180deg, #893BEC 0%, #36185F 32%, #2E0A5C 100%)',
                background: 'linear-gradient(180deg, #1A0B30 0%, #0B0019 24%)'
              }}
            >
              {/* Question */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-[#EBDCFE] font-normal text-lg leading-relaxed pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 mt-1">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-purple-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-purple-400" />
                  )}
                </div>
              </div>

              {/* Answer */}
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;