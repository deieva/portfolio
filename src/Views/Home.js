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
                type: "star",
            },


        }
    });

    return (
        <div>


        </div>
    )
}

export default Home;