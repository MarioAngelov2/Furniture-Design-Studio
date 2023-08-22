import React from "react";

function ListItems({ products }) {
    return (
        <>
            {products.length > 0 &&
                products.map((product) => (
                    <div key={product._id}>
                        <div className="border border-y-8 border-x-8 border-[#F6F4F1]">
                            <img src={product.images} alt="" />
                        </div>
                        <div className="flex mt-5 justify-between items-center">
                            <h2>{product.title}</h2>
                            <button className="underline underline-offset-8 tracking-widest">
                                SHOP
                            </button>
                        </div>
                    </div>
                ))}
        </>
    );
}

export default ListItems;
