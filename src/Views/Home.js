import { tsParticles } from "tsparticles";


function Home() {

    tsParticles.load("tsparticles", {
        particles: {
            number: {
                value: 100
            },
            move: {
                enable: true
            },
            color: {
                value: "random",
                animation: {
                    enable: true,
                    speed: 40,
                    sync: true
                }
            },

            shape: {
                type: "circle",
            },

            size: {
                value: 10,
                random: true,
                animation: {
                    enable: true,
                    speed: 20,
                    minimumValue: 0.5,
                    sync: false
                }
            },

            links: {
                enable: true,
                distance: 100,
                color: "#fff",
                opacity: 0.6,
                width: 1
            },


        }
    });

    return (
        <div>


        </div>
    )
}

export default Home;