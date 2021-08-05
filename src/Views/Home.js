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

        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse"
                },
                onClick: {
                    enable: true,
                    mode: "bubble"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 100,
                    links: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 100,
                    size: 40,
                    duration: 2,
                    opacity: 0.8
                },
                repulse: {
                    distance: 100
                },
                push: {
                    quantity: 2
                },
                remove: {
                    quantity: 2
                }
            }
        },
        detectRetina: true,


    });

    return (
        <div>
            {/* <div id="tsparticles"></div> */}

{/* <div className="login"/>
    <div className="container"/>
        <div className="login-container-wrapper clearfix"/>
            <div className="logo">
                <i className="fa fa-sign-in"></i>
            </div>
            <div className="welcome"><strong>Welcome,</strong> please login</div>
            <form className="form-horizontal login-form">
                <div className="form-group relative">
                    <input id="login_username" className="form-control input-lg" type="email" placeholder="Username" required/>
                    <i className="fa fa-user"></i>
                </div>
                <div className="form-group relative password">
                    <input id="login_password" className="form-control input-lg" type="password" placeholder="Password" required/>
                    <i className="fa fa-lock"></i>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success btn-lg btn-block">Login</button>
                </div>
                <div className="checkbox pull-left">
                    <label><input type="checkbox"/> Remember</label>
                </div>
                <div className="checkbox pull-right">
                    <label> <a className="forget" href="" title="forget">Forgot your password</a> </label>
                </div>
            </form>
        </div> */}

        </div>
        
    
    )
}

export default Home;