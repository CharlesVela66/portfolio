import { Center, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import { workExperiences } from '../../constants';
import Developer from '../components/Developer';
import XWing from '../components/XWing';
import { mx_bilerp_0 } from 'three/src/nodes/materialx/lib/mx_noise.js';

const Experience = () => {
  return (
    <section className="c-space my-20">
      <p className="head-text">My Work Experience</p>
      <div className="work-container">
        <div className="work-canvas">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader></CanvasLoader>}>
                <XWing
                  scale={0.06}
                  position={[0, 0, 0]}
                  rotation={[0.5, 0.3, 0]}
                />
              </Suspense>
            </Center>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        <div className="work-content">
          <div className="sm:py-10 py-5 sm:px-5 px-2.5">
            {workExperiences.map((item) => (
              <div key={item.id} className="work-content_container group">
                <div className="flex flex-col h-full justify-start items-center py-2">
                  <div className="work-content_logo">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="work-content_bar" />
                </div>
                <div className="sm:p-5 px-2.5 py-5">
                  <p className="font-bold text-white-800">{item.name}</p>
                  <p className="text-sm mb-5 text-white-600">
                    {item.pos} -- {item.duration}
                  </p>
                  <p className="group-hover:text-white transition ease-in-out duration-500 text-white-600">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
