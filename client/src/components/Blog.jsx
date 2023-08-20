import React from "react";
import project4 from "../assets/project4.jpeg";

function Blog() {
    return (
        <>
            <div className="md:flex justify-between items-center px-12 mt-20 mb-8">
                <h1 className="text-3xl">Check out our blog</h1>
                <span className="underline underline-offset-8 text-md tracking-widest">
                    VIEW ALL
                </span>
            </div>
            <div className="md:grid grid-cols-2 max-w-[1440px] mx-auto text-center">
                <div className=" md:flex justify-center">
                    <div className="px-12">
                        <img
                            className="aspect-square object-cover"
                            src={project4}
                            alt=""
                        />
                        <div className="flex flex-col align-middle text-center mt-4">
                            <p className="text-start text-xs mb-1 mt-1">
                                Dec 23, 2018 5min read
                            </p>
                            <h2 className="text-2xl text-start mt-1">
                                Blog article heading here
                            </h2>
                            <p className="text-start text-md mt-2">
                                As a warehouse manager, you would understand
                                that handling warehouse operations are a massive
                                task…
                            </p>
                            <span className="flex mt-6 underline underline-offset-8 tracking-widest">
                                READ MORE
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="px-12">
                        <img
                            className="aspect-square object-cover"
                            src={project4}
                            alt=""
                        />
                        <div className="flex flex-col align-middle text-center mt-4">
                            <p className="text-start text-xs mb-1 mt-1">
                                Dec 23, 2018 5min read
                            </p>
                            <h2 className="text-2xl text-start mt-1">
                                Blog article heading here
                            </h2>
                            <p className="text-start text-md mt-2">
                                As a warehouse manager, you would understand
                                that handling warehouse operations are a massive
                                task…
                            </p>
                            <span className="flex mt-6 underline underline-offset-8 tracking-widest">
                                READ MORE
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;
