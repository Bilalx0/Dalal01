import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center  text-white overflow-hidden mt-24">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-4">
        {/* Grid Pattern */}
        <div className="absolute inset-0 ">
          <Image
            src="/gridbg.png"
            alt="Grid Background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        {/* Glowing Orb 1 */}
        <div className="absolute top-10 left-10 w-10 h-10 bg-pink-500 rounded-full blur-2xl opacity-50"></div>
        {/* Glowing Orb 2 */}
        <div className="absolute top-5 right-20 w-5 h-5 bg-blue-500 rounded-full blur-xl opacity-50"></div>

        </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-10">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight font-lexend-deca">
          Best Accounting Software in <br />
          <span className="bg-[linear-gradient(0deg,#2A2355_0%,#FFFFFF_100%)] bg-clip-text text-transparent ">
            India, tech Startup
          </span>
        </h1>

        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
                      src="/asset.png"
                      alt="Logo"
                      width={100}
                      height={100}
                    />
        </span>
        {/* New Image on the Right Side */}
  <span className="absolute top-1/2 right-0 transform -translate-y-1/2">
    <Image
      src="/object.png" // Replace with your image path
      alt="Right side image"
      width={100} // Adjust the width as needed
      height={100} // Adjust the height as needed
    />
  </span>

        {/* Subheading */}
        <p className="mt-24 text-lg text-[#8F9BB7] font-normal">
          Changing how India does its hisabkitab
        </p>

        {/* Buttons */}
  <Image
    src="/rollshape.png" // Replace with your image path
    alt="Roll image"
    width={100} // Adjust the width as needed
    height={65} // Adjust the height as needed
    className="absolute left-0 mt-[-30]" // Positions image on the far left
  />
        <div className="mt-8 relative flex justify-center space-x-4">

  <div className="flex items-center">
    <div className="flex space-x-4">
      <Link href="/trial">
        <button
          style={{
            background:
              "linear-gradient(90deg, #331C9C 0%, #9066FB 51%, #331C9C 100%)",
          }}
          className="text-white font-normal py-3 px-10 rounded-full"
        >
          Start a Free Trial
        </button>
      </Link>
      <Link href="/pricing">
        <button className="border-[#282D45] border text-white font-normal py-3 px-10 rounded-full">
          View Pricing
        </button>
      </Link>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Hero;
