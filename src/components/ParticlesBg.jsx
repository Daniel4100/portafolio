import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBg = () => {
  const particlesInit = async (main) => {
    

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    
  };

  return (
    <div className="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: "tranparent",
          },
          fullScreen: {
            enable: false,
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true,
            },
          },
          particles: {
            color: {
              value: "#f1f1f1",
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              limit: 0,
              value: 200,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.5,
                speed: 1,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.1,
              },
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 2,
              },
              value: 1,
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesBg;
