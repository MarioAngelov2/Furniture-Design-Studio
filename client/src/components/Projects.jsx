import React, { useState, useEffect } from "react";
import * as requester from "../api/requester";

function Projects() {
    const [projects, setProjects] = useState([]);

    async function loadProjects() {
        try {
            const response = await requester.getProjects();
            setProjects(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadProjects();
    }, []);

    const displayProjects =
        projects.length > 0 &&
        projects.map((project) => (
            <div key={project._id} className="flex justify-center">
                <div className="px-12">
                    <img
                        className="aspect-square object-cover w-full md:h-[701px]"
                        src={project.images}
                        alt=""
                    />
                    <div className="flex flex-col items-start gap-1 mb-10 mt-2 md:flex md:flex-row align-middle justify-between md:text-center md:mt-4">
                        <h3 className="text-lg md:text-start md:text-xl">
                            {project.title}
                        </h3>
                        <button className="text-xs md:text-md md:text-base underline underline-offset-8 tracking-widest">
                            VIEW DETAILS
                        </button>
                    </div>
                </div>
            </div>
        ));

    return (
        <>
            <div
                id="portfolio"
                className="md:flex justify-between max-w-[1440px] mx-auto items-center px-12 mt-20 md:mb-8"
            >
                <h1 className="mb-2 text-3xl md:text-3xl">Latest Projects</h1>
                <button className="underline underline-offset-8 text-xs md:text-base tracking-widest">
                    SEE PORTFOLIO
                </button>
            </div>
            <div className="md:grid grid-cols-2 max-w-[1440px] mx-auto text-center mt-10">
                {displayProjects}
            </div>
        </>
    );
}

export default Projects;
