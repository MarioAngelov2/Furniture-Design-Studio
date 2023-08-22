import React from "react";

function ListProjects({ projects }) {
    return (
        <>
            {projects.length > 0 &&
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
                ))}
        </>
    );
}

export default ListProjects;
