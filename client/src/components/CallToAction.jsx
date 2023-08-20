import React from "react";

function CallToAction() {
    return (
        <div className="flex justify-center items-center m-w-[1440px] h-[576px] bg-[#F6F4F1] mt-20">
            <div className="flex flex-col items-center gap-6 w-[35%]">
                <h1 className="text-3xl text-center">
                    Redefining minimalist design for your own home
                </h1>
                <p className="text-center text-sm tracking-wider">
                    To create timeless, interior spaces that inspire
                    tranquility, elevate functionality, and reflect the unique
                    personality and values of our clients.
                </p>
                <p className="text-center mt-2 underline underline-offset-8 tracking-widest">SEND AN ENQUIRE</p>
            </div>
        </div>
    );
}

export default CallToAction;
