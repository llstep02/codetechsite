/* ================== START: Imports ================== */
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import Heading from '../common/Heading';
import { blogPosts } from '../../utils/const';
import NeuralLine from '../background_animation/NeuralLine';
import BlogCard from '../cards/BlogCard';
import { useNavigate } from 'react-router-dom';
/* ================== END: Imports ================== */

/* ================== START: Component ================== */
const BlogSection = () => {
	const navigate = useNavigate();
	return (
		/* ================== START: Blog Section ================== */
		<section id="blog" className="py-10 sm:py-20 relative overflow-hidden">
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
							.slice(0, 3)
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
					{/* ===== End Blog Posts Grid ===== */}
					<div className="text-center" data-aos="fade-up" data-aos-delay="600">
						{/* ===== View All Articles Button ===== */}
						<Button variant="hero" size="lg" className="" onClick={() => navigate('/blog')}>
							View All Articles <ArrowRight className="w-5 h-5" />
						</Button>
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
export default BlogSection;
/* ================== END: Export ================== */
