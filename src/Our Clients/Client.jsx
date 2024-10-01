import React from "react";
import './Client.css';
import { motion } from "framer-motion";

function Client() {
    const upperMarquee = [
        { id: 1, src: require('./svgs/01.svg').default },
        { id: 2, src: require('./svgs/02.svg').default },
        { id: 3, src: require('./svgs/03.svg').default },
        { id: 4, src: require('./svgs/04.svg').default },
        { id: 5, src: require('./svgs/05.svg').default },
        { id: 6, src: require('./svgs/06.svg').default },
        { id: 7, src: require('./svgs/07.svg').default },
        { id: 8, src: require('./svgs/08.svg').default },
        { id: 9, src: require('./svgs/09.svg').default },
        { id: 10, src: require('./svgs/10.svg').default },
        { id: 11, src: require('./svgs/11.svg').default },
    ];

    const lowerMarquee = [
        { id: 12, src: require('./svgs/12.svg').default },
        { id: 13, src: require('./svgs/13.svg').default },
        { id: 14, src: require('./svgs/14.svg').default },
        { id: 15, src: require('./svgs/15.svg').default },
        { id: 16, src: require('./svgs/16.svg').default },
        { id: 17, src: require('./svgs/17.svg').default },
        { id: 18, src: require('./svgs/18.svg').default },
        { id: 19, src: require('./svgs/19.svg').default },
        { id: 20, src: require('./svgs/20.svg').default },
        { id: 21, src: require('./svgs/21.svg').default },
    ];

    return (
        <div className="client">
            <div className="client-header">
                <h2>Our <span className='client-span'> Clients</span></h2>
            </div>
            <div className="client-upper MyGradient">
                <motion.div className="upperMarque"
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                    {upperMarquee.map((imageData) => {
                        return (
                            <div className="client-logo" key={imageData.id}>
                                <img src={imageData.src} alt={`Client ${imageData.id}`} />
                            </div>
                        );
                    })}
                </motion.div>

                <motion.div className="upperMarque"
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                    {upperMarquee.map((imageData) => {
                        return (
                            <div className="client-logo" key={imageData.id}>
                                <img src={imageData.src} alt={`Client ${imageData.id}`} />
                            </div>
                        );
                    })}
                </motion.div>
            </div>
            <div className="client-lower MyGradient">
                <motion.div className="lowerMarque"
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                    {lowerMarquee.map((imageData) => {
                        return (
                            <div className="client-logo" key={imageData.id}>
                                <img src={imageData.src} alt={`Client ${imageData.id}`} />
                            </div>
                        );
                    })}
                </motion.div>

                <motion.div className="lowerMarque"
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                    {lowerMarquee.map((imageData) => {
                        return (
                            <div className="client-logo" key={imageData.id}>
                                <img src={imageData.src} alt={`Client ${imageData.id}`} />
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}

export default Client;
