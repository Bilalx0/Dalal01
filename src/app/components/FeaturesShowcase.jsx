import React from 'react';
import { FileText, Shield, Truck, BarChart3, QrCode, Calculator } from 'lucide-react';

const FeaturesShowcase = () => {
  const features = [
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Billing & E-Invoicing",
      description: "The task of generating E-invoicing has become simpler. Not only this, you can even customize the invoices created by you as per the specifications you require.",
      hasMoreDetails: true
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "GST Compliance",
      description: "You can now effortlessly comply with GST Regulations by filing accurate GST Returns. Now, you need not to worry about the errors you face while filing GST Returns.",
      hasMoreDetails: true
    },
    {
      icon: <Truck className="w-8 h-8 text-white" />,
      title: "E-way Bill Generation",
      description: "You can now generate error-free E-way Bills effortlessly with our efficient digital billing system and optimize your compliance processes.",
      hasMoreDetails: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Ageing Reports",
      description: "You can generate creditors and debtors ageing reports from our software with just few clicks. By this you can effortlessly optimize your payment and collection processes.",
      hasMoreDetails: true
    },
    {
      icon: <QrCode className="w-8 h-8 text-white" />,
      title: "Payment QR Code",
      description: "hisabkitab helps integrate payment QR codes, enabling IT businesses to efficiently process transactions and minimize inaccuracies and oversights.",
      hasMoreDetails: true
    },
    {
      icon: <Calculator className="w-8 h-8 text-white" />,
      title: "TDS/TCS Compliance",
      description: "You can now effortlessly comply with TDS and TCS Regulations by filing accurate TDS and TCS Returns. Now, you need not to worry about the errors you face while filing TDS and TCS Returns.",
      hasMoreDetails: true
    }
  ];


  return (
    <div className="min-h-screen p-8 px-16 mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-4 font-lexend-deca">
            What do we bring
          </h1>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 font-lexend-deca bg-[linear-gradient(0deg,#2A2355_0%,#FFFFFF_100%)] bg-clip-text text-transparent ">
            on board?
          </h2>
          <p className="text-gray-300 text-lg max-w-md font-lexend-deca">
            Explore the wide range of features that hisabkitab provides.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0F0E1E] backdrop-blur-sm border border-[#8E2DE2] rounded-2xl p-6 hover:bg-[#0F0E1E]/50 transition-all duration-300 hover:border-[#8E2DE2]/30 group"
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* More Details Button */}
              {feature.hasMoreDetails && (
                <button className="flex items-center text-orange-400 hover:text-orange-300 transition-colors duration-200 text-sm font-medium">
                  <span className="mr-2">🔥</span>
                  More Details
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesShowcase;