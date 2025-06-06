"use client";

import React, { useState } from "react";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSignUp = () => {
    console.log("Email signup:", email);
    setEmail("");
  };

  return (
    <footer className="mt-48">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700/50 py-12 font-lexend-deca">
        <div className="max-w-7xl mx-auto px-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-28">
            {/* Newsletter Info */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2 text-[#B3B9C2]">
                NEWSLETTER
              </h3>
              <p className="text-gray-300 max-w-md">
                hisabkitab is a cloud-based accounting software that is trying
                to change how India does its hisabkitab. Built by CAs for SMEs,
                MSMEs and freelancers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
                <button
                  onClick={handleSignUp}
                  style={{
                    background:
                      "linear-gradient(90deg, #331C9C 0%, #9066FB 51%, #331C9C 100%)",
                  }}
                  className="px-6 py-3 text-white rounded-lg font-medium transition-colors duration-200"
                >
                  SIGN UP
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-lg font-semibold mb-2 text-[#B3B9C2]">
                QUICK CONTACT
              </h3>
              <p className="text-gray-300 mb-4">
                If you have questions, please use our 24-hour helpline
              </p>
              <div className="text-2xl font-bold text-gray-300">
                +91-7858797111
              </div>
            </div>

            {/* Location */}
            <div className="text-right">
              <h3 className="text-lg font-semibold mb-2 text-[#B3B9C2]">
                Let's Have A Coffee
              </h3>
              <div className="text-lg font-semibold text-gray-300">Surat</div>
              <div className="text-gray-300">Mumbai</div>
            </div>
          </div>

          {/* Email Signup */}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Solutions for Industries */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">
                SOLUTIONS FOR INDUSTRIES
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Accounting Software for Architects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Accounting Software for Medium Size Enterprises
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Accounting Software for Small Enterprises
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Accounting Software for IT Firms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Accounting Software for Pharmaceutical and Healthcare
                    Industry
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Accounting Software for Construction Industry
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Accounting Software for Retail Businesses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Accounting Software for Freelancers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Accounting Software for Wholesalers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Accounting Software for Small Business
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Accounting Software for Shopping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Accounting Software for Supermarkets and Groceries
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Accounting Software for Lawyers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Accounting Software for Traders
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Accounting Software for Engineering Businesses
                  </a>
                </li>
              </ul>
            </div>

            {/* Solutions for SMEs */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">
                SOLUTIONS FOR SMES
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Accounting Software
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    GST Accounting Software
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    E Invoicing Software
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    E-Way Billing Software
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Inventory Software
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Bookkeeping Software
                  </a>
                </li>
              </ul>
            </div>

            {/* Free Business Tools */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">
                FREE BUSINESS TOOLS
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    FD Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    RD Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    SIP Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    GST Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    EMI Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Business Loan Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Recurring Deposit Rate Calculator
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">RESOURCES</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Invoice Template for Digital Marketers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Invoice Template for Service Industry
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Invoice Template for IT Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Invoice Template for Content Writers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Invoice Template for Graphic Designers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Invoice Template for Photography Businesses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Invoice Template for Rental Businesses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Invoice Template for Web Developers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Invoice Template for Freelance Business
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Invoice Template for Social Media Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">QUICK LINKS</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Software
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="border-t border-gray-700/50 py-3"
        style={{
          background: "linear-gradient(36.08deg, #331C9C 0%, #9066FB 100%);",
        }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-300">
              © 2024 ACCOUNTANTAR CONSULTANCY PVT LTD | ALL RIGHTS RESERVED.
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
