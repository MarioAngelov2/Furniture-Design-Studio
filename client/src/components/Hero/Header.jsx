import React from "react";
import heroImage from "../../assets/heroImage.png";
import signature from "../../assets/signature.png";

function Header() {
    return (
        <div id="header" className="flex flex-col max-w-[1440px] mx-auto items-center justify-center px-6 md:px-10 py-8">
            <div className="mb-4 mt-10 md:mt-24 md:mb-0">
                <img
                    src={heroImage}
                    alt=""
                    className="max-w-full h-auto mt-14 md:mt-0"
                />
            </div>
            <div className="flex flex-col items-center text-center gap-4 mt-2 md:mt-14">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-playfair">
                    Redefining Luxury in Interior Design
                </h1>
                <p className="text-sm mt-2 md:text-lg font-barlow">
                    Shaping the essence of living into precisely crafted spaces{" "}
                    <br />
                    where one can grow, breathe, connect, and adore.
                </p>
                <div className="mt-2">
                    <img
                        src={signature}
                        alt="Signature"
                        className="max-w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
