import React from "react";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";

function Projects() {
    return (
        <>
            <div className="md:flex justify-between items-center px-12 mt-20 mb-8">
                <h1 className="text-3xl">Latest Projects</h1>
                <span className="underline underline-offset-8 text-md tracking-widest">
                    SEE PORTFOLIO
                </span>
            </div>
            <div className="md:grid grid-cols-2 max-w-[1440px] mx-auto text-center mt-10">
                <div className="flex justify-center">
                    <div className="px-12">
                        <img
                            className="aspect-square object-cover"
                            src={project1}
                            alt=""
                        />
                        <div className="flex align-middle justify-between text-center mt-4">
                            <p className="text-start text-xl">
                                Project Tintyava
                            </p>
                            <p className="text-end underline underline-offset-8 tracking-widest">
                                VIEW DETAILS
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="px-12">
                        <img
                            className="aspect-square object-cover"
                            src={project2}
                            alt=""
                        />
                        <div className="flex align-middle justify-between text-center mt-4">
                            <p className="text-start text-xl">Project Mandur</p>
                            <p className="text-end underline underline-offset-8 tracking-widest">
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
