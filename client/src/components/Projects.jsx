import React from "react";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";

function Projects() {
    return (
        <div className="md:grid grid-cols-2 max-w-[1440px] mx-auto text-center mt-10">
            <div className="flex justify-center">
                <div className="px-12">
                    <div className="flex mb-8">
                        <h2 className="text-2xl">Latest Projects</h2>
                    </div>
                    <img
                        className="aspect-square object-cover"
                        src={project1}
                        alt=""
                    />
                    <div className="flex align-middle justify-between text-center mt-4">
                        <p className="text-starttext-lg">Project Tintyava</p>
                        <p className="text-end underline underline-offset-4">
                            VIEW DETAILS
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="px-12">
                <div className="flex justify-end mb-10">
                        <p className="text-md underline underline-offset-8">See portfolio</p>
                    </div>
                    <img
                        className="aspect-square object-cover"
                        src={project2}
                        alt=""
                    />
                    <div className="flex align-middle justify-between text-center mt-4">
                        <p className="text-starttext-lg">Project Mandur</p>
                        <p className="text-end underline underline-offset-4">
                            VIEW DETAILS
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
