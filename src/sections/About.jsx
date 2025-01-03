import Globe from 'react-globe.gl';
import Button from '../components/Button';
import { useState } from 'react';
import { Technologies } from '../../constants';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('carlosed.velasco@gmail.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20" id="about">
      <p className="head-text">About me</p>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full mt-12">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I&apos;m Carlos</p>
              <p className="grid-subtext">
                With 2 years of experience, I have honed my skills in frontend
                and backend development.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="grid grid-cols-3 gap-3 items-center justify-center">
              {Technologies.map((tech) => (
                <div
                  key={tech.id}
                  className="flex flex-col items-center justify-center my-2"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-14 h-auto object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools
                that allow me to build robust and scalable applications
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely accross most timezones.
              </p>
              <p className="grid-subtext">
                I&apos;m based in Queretaro, Mexico with remote work available.
              </p>
              <Button
                name="Contact me"
                isBeam
                containerClass="w-full mt-10"
                href="#contact"
              />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">
                My passion for software development
              </p>
              <p className="grid-subtext">
                I love to solve real-life problems. As a Computer Science
                student at Tecnológico de Monterrey, I&apos;ve gained experience
                working with various companies and gained skills in Agile and
                Disciplined Agile Delivery methodologies.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-contain"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-lg font-medium text-gray_gradient text-white">
                  carlosed.velasco@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
