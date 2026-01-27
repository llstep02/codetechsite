/* ================== START: Imports ================== */

import { useEffect } from "react";
import NeuralLine from "./../components/background_animation/NeuralLine";
import BlogCard from "./../components/cards/BlogCard";
import Heading from "./../components/common/Heading";
import { blogPosts } from "../utils/const";

/* ================== END: Imports ================== */

/* ================== START: Component ================== */
const BlogPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        /* ================== START: Blog Section ================== */
        <section className="py-10 sm:py-20 sm:pt-40 pt-32 relative overflow-hidden">
            {/* ===== Background Elements ===== */}
            <div className="container mx-auto relative z-10 flex flex-col gap-8 sm:gap-16">
                {/* ===== Header ===== */}
                <Heading
                    section="Latest Insights"
                    title="AI"
                    highlights="Knowledge Hub"
                    subtitle="Stay updated with the latest trends, insights, and innovations in artificial intelligence and machine learning."
                />

                <div className="flex flex-col gap-8 sm:gap-12">
                    {/* ===== Blog Posts Grid ===== */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
                        {(blogPosts ?? [])
                            .slice()
                            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                            .map((post, index) => (
                            <BlogCard
                                key={post.id ?? index}
                                id={post.id}
                                title={post.title}
                                excerpt={post.excerpt}
                                author={post.author}
                                date={post.date}
                                category={post.category}
                                image={post.image}
                                readTime={post.readTime}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <NeuralLine />
        </section>
        /* ================== END: Blog Section ================== */
    );
};
/* ================== END: Component ================== */

/* ================== START: Export ================== */
export default BlogPage;
/* ================== END: Export ================== */
