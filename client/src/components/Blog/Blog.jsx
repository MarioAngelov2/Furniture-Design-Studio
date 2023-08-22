import React, { useState, useEffect } from "react";
import * as requester from "../../api/requester";
import ListPosts from "./ListPosts";

function Blog() {
    const [blogPost, setBlogPost] = useState([]);

    async function loadPosts() {
        try {
            const response = await requester.getBlogPosts();
            setBlogPost(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadPosts();
    }, []);

    return (
        <>
            <div
                id="blog"
                className="flex flex-col md:flex md:flex-row max-w-[1440px] mx-auto justify-between items-center px-12 mt-20 mb-8"
            >
                <h1 className="text-3xl mb-3 md:text-3xl">
                    Check out our blog
                </h1>
                <button className="underline underline-offset-8 text-sm md:text-md tracking-widest">
                    VIEW ALL
                </button>
            </div>
            <ListPosts blogPost={blogPost}/>
        </>
    );
}

export default Blog;
