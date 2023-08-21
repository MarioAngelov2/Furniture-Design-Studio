import React from "react";

function CallToAction() {
    return (
        <div id="contact" className="flex justify-center md:flex md:justify-center items-center md:max-w-[1440px] h-[576px] mx-auto bg-[#F6F4F1] mt-20">
            <div className="flex flex-col w-[60%] md:flex md:flex-col items-center gap-6 md:w-[35%]">
                <h1 className="text-2xl md:text-3xl text-center">
                    Redefining minimalist design for your own home
                </h1>
                <p className="text-center text-sm tracking-wider">
                    To create timeless, interior spaces that inspire
                    tranquility, elevate functionality, and reflect the unique
                    personality and values of our clients.
                </p>
                <p className="text-sm md:text-center mt-2 underline underline-offset-8 tracking-widest">SEND AN ENQUIRE</p>
            </div>
        </div>
    );
}

export default CallToAction;
