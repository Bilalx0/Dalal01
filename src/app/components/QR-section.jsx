import Image from "next/image";

const QRSection = () => {
  return (
    <div className="relative text-white py-16 px-4 md:px-8 flex flex-col md:flex-row items-stretch justify-center gap-6 max-w-6xl mx-auto">
      
      {/* Left Glowing Image (Outside the main content) */}
      <div className="absolute left-0 top-[90%] transform -translate-y-1/2 z-999">
        <Image
          src="/QRimage.png" // Replace with your actual glow image
          alt="Glow Effect Left"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      {/* Right Glowing Image (Optional placeholder if needed) */} 
       <div className="absolute right-[-10] top-[20%] transform -translate-y-1/2 z-0">
        <Image
          src="/QRimage.png"
          alt="Glow Effect Right"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      {/* Left Section - QR Code */}
      <div className="bg-[#0F0E1E] rounded-xl p-6 flex flex-col items-center text-center space-y-4 shadow-lg max-w-sm h-full z-10">
        <div className="bg-white p-2">
          <Image
            src="/QR-Code.png"
            alt="QR Code"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
        <div className="flex space-x-2">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
            alt="App Store"
            width={120}
            height={40}
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
            alt="Google Play"
            width={120}
            height={40}
          />
        </div>
        <div className="text-white">
          <p className="font-semibold text-lg">Mobile applications</p>
          <p className="text-sm text-gray-400 mt-1">
            Experience the convenience of the <br />
            Complete Mobile Accounting Solution
          </p>
        </div>
      </div>

      {/* Right Section - Phone Image and Text */}
      <div className="bg-[#0F0E1E] rounded-md pt-6 px-6 flex flex-col items-center space-y-6 shadow-lg max-w-sm z-10">
        <div className="text-center md:text-left text-white">
          <p className="text-lg font-semibold">Upload, share, and preview any file</p>
          <p className="text-sm text-gray-400">
            Prem ipsum dolor sit amet consectetur. <br />
            Viverra sed dignissim risus aliquet condimentum. Vulputate varius.
          </p>
        </div>

        <div className="mt-auto w-full flex justify-center">
          <Image
            src="/hand.png"
            alt="Phone App"
            width={200}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default QRSection;