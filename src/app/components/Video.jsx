import Image from 'next/image';

const Video = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden flex items-center justify-center mt-24'>
      <Image
        src="/180-round.png"
        alt="Background"
        objectFit="cover"
        quality={100}
        width={1200}
        height={1200}
      />
      <div className='absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 bg-[#0F0E1E] w-xl h-96 text-center flex items-center justify-center text-white text-4xl font-medium'>
            <h1>Video Here</h1>
      </div>
            <Image
              src="/blur-shadow.png"
              alt="Blur Shadow"
              width={650}
              height={800}
              className='absolute -z-0 top-[489px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 '
            />
    </div>
  );
};

export default Video;