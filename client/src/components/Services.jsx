import React from "react";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";

function Services() {
    return (
        <div id="services" className="md:grid grid-cols-2 max-w-[1440px] mx-auto mt-20">
            <div className="bg-[#F6F4F1] h-[591px] flex">
                <div className="flex flex-col justify-center align-middle px-20">
                    <h1 className="text-3xl mb-6">Elegant flow</h1>
                    <p>
                        A great design tells a story. Discover оur story and
                        design аpproach to creating flawless interiors.
                    </p>
                    <button className="flex underline underline-offset-8 mt-6 tracking-widest">
                        ABOUT US
                    </button>
                </div>
            </div>
            <div>
                <div>
                    <img
                        className="aspect-square object-cover md:h-[591px] w-full"
                        src={project2}
                        alt=""
                    />
                </div>
            </div>
            {/* section2 */}
            <div>
                <div>
                    <img
                        className="aspect-square object-cover md:h-[591px] w-full"
                        src={project3}
                        alt=""
                    />
                </div>
            </div>
            <div className="bg-[#F6F4F1] h-[591px] md:h-auto flex">
                <div className="flex flex-col justify-center align-middle px-20">
                    <h1 className="text-3xl mb-6">Redefining Luxury</h1>
                    <p>
                        Luxury in interior design has evolved, and redefining
                        its meaning is at the heart of our philosophy and design
                        approach.
                    </p>
                    <button className="flex underline underline-offset-8 mt-6 tracking-widest">
                        VIEW SERVICES
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Services;
