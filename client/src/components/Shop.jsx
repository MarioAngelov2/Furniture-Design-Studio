import React, { useState, useEffect } from "react";
import * as requester from "../api/requester";

const URL = "http://localhost:4002/products";

function Shop() {
    const [products, setProducts] = useState([]);

    async function loadProducts() {
        try {
            const response = await requester.getProducts();
            setProducts(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadProducts();
    }, [])

    const listProducts = products.length > 0 && products.map((product) => (
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
    ));

    return (
        <div
            id="shop"
            className="md:grid grid-cols-1 max-w-[1440px] mx-auto text-center mt-20"
        >
            <div className="md:flex justify-between items-center px-12 mb-8">
                <h1 className="text-3xl mb-3 md:text-3xl">
                    Shop our favorites
                </h1>
                <button className="underline underline-offset-8 text-md tracking-widest">
                    SHOP ALL
                </button>
            </div>
            <div className="md:flex justify-center">
                <div className="flex flex-col gap-14 md:flex md:flex-row md:gap-24 px-12">
                    {listProducts}
                </div>
            </div>
        </div>
    );
}

export default Shop;