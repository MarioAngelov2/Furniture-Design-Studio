import React, { useState, useEffect } from "react";
import * as requester from "../../api/requester";
import ListProjects from "./ListProjects";

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

    return (
        <>
            <div
                id="portfolio"
                className="md:flex justify-between max-w-[1440px] mx-auto items-center px-12 mt-20 md:mb-8"
            >
                <h1 className="mb-2 text-3xl md:text-3xl font-playfair">
                    Latest Projects
                </h1>
                <button className="underline underline-offset-8 text-xs md:text-base tracking-widest font-barlow">
                    SEE PORTFOLIO
                </button>
            </div>
            <div className="md:grid grid-cols-2 max-w-[1440px] mx-auto text-center mt-10">
                <ListProjects projects={projects} />
            </div>
        </>
    );
}

export default Projects;
