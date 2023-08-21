import React, { useState, useEffect } from "react";
import * as requester from "../api/requester";
import project4 from "../assets/project4.jpeg";

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

    const displayPosts =
        blogPost.length > 0 &&
        blogPost.map((post) => {
            const postDate = new Date(post.userPostDate);

            const formattedDate = postDate.toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
            });

            return (
                <div key={post._id} className=" md:flex justify-center">
                    <div className="px-12">
                        <img
                            className="aspect-square object-cover"
                            src={post.images}
                            alt=""
                        />
                        <div className="flex flex-col align-middle text-center mt-4">
                            <p className="text-start text-xs mb-1 mt-1 italic">
                                {formattedDate} &bull; {post.readTime} min read
                            </p>
                            <h2 className="text-2xl text-start mt-1">
                                {post.title}
                            </h2>
                            <p className="text-start text-md mt-2">
                                {post.article}
                            </p>
                            <span className="flex mb-10 mt-6 underline underline-offset-8 tracking-widest">
                                READ MORE
                            </span>
                        </div>
                    </div>
                </div>
            );
        });

    return (
        <>
            <div
                id="blog"
                className="flex flex-col md:flex md:flex-row max-w-[1440px] mx-auto justify-between items-center px-12 mt-20 mb-8"
            >
                <h1 className="text-3xl mb-3 md:text-3xl">
                    Check out our blog
                </h1>
                <span className="underline underline-offset-8 text-sm md:text-md tracking-widest">
                    VIEW ALL
                </span>
            </div>
            <div className="md:grid grid-cols-2 max-w-[1440px] mx-auto text-center">
                {displayPosts}
            </div>
        </>
    );
}

export default Blog;
