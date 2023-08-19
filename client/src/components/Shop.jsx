import React from "react";
import item1 from "../assets/item1.jpeg";
import item2 from "../assets/item2.jpeg";
import item3 from "../assets/item3.jpeg";

function Shop() {
    return (
        <div className="md:grid grid-cols-1 max-w-[1440px] mx-auto text-center mt-16 mb-5">
            <div className="md:flex justify-between items-center px-12 mb-8">
                <h1 className="text-3xl">Shop our favorites</h1>
                <span className="underline underline-offset-8 text-sm">
                    SHOP ALL
                </span>
            </div>
            <div className="md:flex justify-center">
                <div className="flex flex-col gap-14 md:flex md:flex-row md:gap-24 px-12">
                    <div>
                        <div className="border border-y-8 border-x-8 border-[#F6F4F1]">
                            <img src={item1} alt="" />
                        </div>
                        <div className="flex mt-5 justify-between items-center">
                            <h2>VINTAGE CHAIR</h2>
                            <span className="underline underline-offset-8">
                                SHOP
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="border border-y-8 border-x-8 border-[#F6F4F1]">
                            <img src={item2} alt="" />
                        </div>
                        <div className="flex mt-5 justify-between items-center">
                            <h2>VINTAGE CHAIR</h2>
                            <span className="underline underline-offset-8">
                                SHOP
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="border border-y-8 border-x-8 border-[#F6F4F1]">
                            <img src={item3} alt="" />
                        </div>
                        <div className="flex mt-5 justify-between items-center">
                            <h2>VINTAGE CHAIR</h2>
                            <span className="underline underline-offset-8">
                                SHOP
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
