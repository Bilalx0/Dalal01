import Image from 'next/image';

const Video = () => {
  return (
    <section className='relative h-screen overflow-hidden flex items-center justify-center'>
      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/180-round.png')`,
        }}
      />

      {/* Glowing Image in Top-Left Corner */}
      <div className="absolute top-8 left-0 ">
        <Image
          src="/flame.png" // Replace with your glowing image path
          alt="Glowing Image"
          width={300} // Adjust as needed
          height={300} // Adjust as needed
          objectFit="contain"
          className="block "
        />
      </div>
      <div className="absolute top-4 right-[-10] ">
        <Image
          src="/blur4.png" // Replace with your glowing image path
          alt="Glowing Image"
          width={400} // Adjust as needed
          height={400} // Adjust as needed
          objectFit="cover"
          className="block "
        />
      </div>

      {/* Container for Video & Shadow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        {/* Video Box */}
        <div className="bg-[#0F0E1E] w-xl h-96 text-center flex items-center justify-center text-white text-4xl font-medium relative">
          <h1>Video Here</h1>

          {/* Shadow Positioned at Bottom of Video Box */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 translate-y-full w-full z-[-99]">
            <Image
              src="/newblurshadow.png"
              alt="Blur Shadow"
              width={650}
              height={100}
              objectFit="contain"
              className="block mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;