import React, { useState, useEffect } from "react";
import * as requester from "../../api/requester";
import ListItems from "./ListItems";

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
    }, []);

    return (
        <div
            id="shop"
            className="md:grid grid-cols-1 max-w-[1440px] mx-auto text-center mt-20"
        >
            <div className="md:flex justify-between items-center px-12 mb-8">
                <h1 className="text-3xl mb-3 md:text-4xl font-playfair">
                    Shop our favorites
                </h1>
                <button className="underline underline-offset-8 text-md tracking-widest font-barlow">
                    SHOP ALL
                </button>
            </div>
            <div className="md:flex justify-center">
                <div className="flex flex-col gap-14 md:flex md:flex-row md:gap-24 px-12">
                    <ListItems products={products} />
                </div>
            </div>
        </div>
    );
}

export default Shop;
