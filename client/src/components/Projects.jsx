import React from "react";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";

function Projects() {
    return (
        <>
            <div className="md:flex justify-between max-w-[1440px] mx-auto items-center px-12 mt-20 md:mb-8">
                <h1 className="mb-2 text-3xl md:text-3xl">Latest Projects</h1>
                <p className="underline underline-offset-8 text-xs md:text-base tracking-widest">
                    SEE PORTFOLIO
                </p>
            </div>
            <div className="md:grid grid-cols-2 max-w-[1440px] mx-auto text-center mt-10">
                <div className="flex justify-center">
                    <div className="px-12">
                        <img
                            className="aspect-square object-cover w-full md:h-[701px]"
                            src={project1}
                            alt=""
                        />
                        <div className="flex flex-col items-start gap-1 mb-10 mt-2 md:flex md:flex-row align-middle justify-between md:text-center md:mt-4">
                            <h3 className="text-lg md:text-start md:text-xl">
                                Project Tintyava
                            </h3>
                            <p className="text-xs md:text-md md:text-base underline underline-offset-8 tracking-widest">
                                VIEW DETAILS
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="px-12">
                        <img
                            className="aspect-square object-cover w-full md:h-[701px]"
                            src={project2}
                            alt=""
                        />
                        <div className="flex flex-col items-start gap-1 mb-10 mt-2 md:flex md:flex-row align-middle justify-between text-center md:mt-4">
                            <h3 className="text-lg md:text-start md:text-xl">
                                Project Mandur
                            </h3>
                            <p className="text-xs md:text-end md:text-base underline underline-offset-8 tracking-widest">
                                VIEW DETAILS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
