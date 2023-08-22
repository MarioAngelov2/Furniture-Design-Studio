import React from "react";

function ListPosts({ blogPost }) {
    return (
        <div className="grid-cols-2 max-w-[1440px] mx-auto text-center">
            <div className="md:flex justify-center">
                {blogPost.length > 0 &&
                    blogPost.map((post) => {
                        const postDate = new Date(post.userPostDate);
                        const formattedDate = postDate.toLocaleDateString(
                            "en-US",
                            {
                                month: "short",
                                day: "2-digit",
                                year: "numeric",
                            }
                        );

                        return (
                            <div key={post._id} className="px-12">
                                <img
                                    className="aspect-square object-cover"
                                    src={post.images}
                                    alt=""
                                />
                                <div className="flex flex-col align-middle text-center mt-4">
                                    <p className="text-start text-xs mb-1 mt-1 italic">
                                        {formattedDate} &bull; {post.readTime}{" "}
                                        min read
                                    </p>
                                    <h2 className="text-2xl text-start mt-1">
                                        {post.title}
                                    </h2>
                                    <p className="text-start text-md mt-2">
                                        {post.article}
                                    </p>
                                    <button className="flex md:w-[20%] mb-10 mt-6 underline underline-offset-8 tracking-widest">
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default ListPosts;
