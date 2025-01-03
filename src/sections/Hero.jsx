import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes, Words } from '../../constants';
import SectionButton from '../components/SectionButton';
import LightSaber from '../components/Lightsaber';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="text-white font-medium text-center sm:text-3xl text-2xl font-generalsans">
          Hi! I am Carlos <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Changing the world through software
        </p>
        <p className="text-center text-2xl text-gray_gradient">
          <Typewriter
            words={Words}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={500}
          />
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* Add another div that serves as a container for putting my personal information like Name, Nickname, Photo. This personal information will be located in the left side and the Canvas for the three js canvas will be located at the right. I am intending to use a flex-col for larger devices and flex-row for smaller devices*/}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 20, 30]} intensity={350} />
            <LightSaber
              scale={sizes.lighstaberScale}
              position={sizes.lighstaberPosition}
              rotation={[1.6, 6.3, 1.2]}
            />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <SectionButton
        name="Let's work together!"
        className="absolute sm:bottom-7 bottom-20 left-0 right-0 w-full z-10 c-space"
        containerClassName="sm:w-fit w-full sm:min-w-96"
        href="#about"
      />
    </section>
  );
};

export default Hero;
