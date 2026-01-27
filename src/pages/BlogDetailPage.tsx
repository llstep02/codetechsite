import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Badge } from '../components/ui/badge';
import BgGlow from '../components/background_animation/BgGlow';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { blogPosts } from '../utils/const';
import { Button } from '../components/ui/button';

type BlogExtra = {
	tags?: string[];
	sources?: { label?: string; url: string }[];
	authorInfo?: string;
	insight?: string;
	relatedTopics?: string[];
	editorsPick?: string[];
};

type BlogPost = {
	id: number;
	title?: string;
	excerpt?: string;
	detail?: string;
	author?: string;
	date?: string;
	category?: string;
	readTime?: string;
	image?: string;
	content?: string[];
	extra?: BlogExtra;
};

const BlogDetailPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const blogId = Number(id);
	const blogMeta = blogPosts.find((post) => post.id === blogId) as BlogPost | undefined;
	const navigate = useNavigate();
	useEffect(() => {
		AOS.init({
			duration: 700,
			once: true,
			easing: 'ease-out-cubic',
			anchorPlacement: 'top-bottom'
		});
		// refresh when content/id changes to ensure animations trigger on navigation
		AOS.refresh();
	}, [id]);

	if (!blogMeta) {
		return (
			<div className="pt-20 min-h-screen flex items-center justify-center ">
				<div className="text-center flex flex-col gap-4">
					<h1 className="text-3xl font-bold">Blog Not Found</h1>
					<Button onClick={() => navigate('/blog')}>Back to Blogs</Button>
				</div>
			</div>
		);
	}

	return (
		<div className="pt-16 sm:pt-20">
			<section className="relative py-12 sm:py-20 min-h-screen overflow-hidden sm:overflow-visible">
				<BgGlow variant="primary" size="lg" positionClass="top-0 right-0" opacity={0.1} />
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10 max-w-7xl mx-auto">
						{/* Left Column: Article */}
						<article
							className="lg:col-span-2 bg-card backdrop-blur-xl rounded-3xl p-4 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-10"
							data-aos="fade-up"
							data-aos-delay="80"
							aria-labelledby="blog-title"
						>
							<div className="text-center flex flex-col gap-4 sm:gap-6">
								<div className="flex flex-col gap-4 items-center">
									{/* Badge */}
									<Badge
										className="inline-flex items-center rounded-full dark:bg-black bg-white border px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-primary border-primary/30 w-fit aos-init aos-animate"
										aria-hidden={false}
										data-aos="zoom-in"
										data-aos-delay="120"
									>
										{blogMeta.category}
									</Badge>

									<h1
										id="blog-title"
										className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight bg-[image:var(--gradient-primary)] bg-clip-text text-transparent"
										data-aos="fade-up"
										data-aos-delay="160"
									>
										{blogMeta.title}
									</h1>
								</div>

								<div
									className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm text-muted-foreground"
									data-aos="fade-up"
									data-aos-delay="200"
								>
									<div className="flex items-center gap-1 sm:gap-2">
										<User size={16} /> <span>{blogMeta.author}</span>
									</div>
									<div className="flex items-center gap-1 sm:gap-2">
										<Calendar size={16} /> <span>{blogMeta.date}</span>
									</div>
									{blogMeta.readTime && (
										<div className="flex items-center gap-1 sm:gap-2">
											<Clock size={16} /> <span>{blogMeta.readTime}</span>
										</div>
									)}
								</div>
							</div>

							{blogMeta.image && (
								<div
									className="rounded-3xl overflow-hidden border border-border"
									data-aos="zoom-in"
									data-aos-delay="240"
								>
									<img
										src={blogMeta.image}
										alt={blogMeta.title}
										className="w-full"
									/>
								</div>
							)}

							<div className="flex flex-col gap-4 sm:gap-6 leading-relaxed text-sm sm:text-base">
								{blogMeta.excerpt && (
									<p
										className="text-base sm:text-lg text-muted-foreground"
										data-aos="fade-up"
										data-aos-delay="280"
									>
										{blogMeta.excerpt}
									</p>
								)}

								{Array.isArray(blogMeta.content) &&
									blogMeta.content.map((para, idx) => (
										<p
											key={idx}
											className="text-muted-foreground"
											data-aos="fade-up"
											data-aos-delay={idx * 40}
										>
											{para}
										</p>
									))}

								{blogMeta.detail && (
									<p
										className="text-muted-foreground"
										data-aos="fade-up"
										data-aos-delay="420"
									>
										{blogMeta.detail}
									</p>
								)}

								{/* Tags & Sources */}
								{blogMeta.extra && (
									<div
										className="border-t border-border pt-4 sm:pt-6 flex flex-col gap-4"
										data-aos="fade-up"
										data-aos-delay="460"
									>
										{blogMeta.extra.tags && (
											<div className="flex flex-wrap gap-2 sm:gap-3">
												{blogMeta.extra.tags.map((tag, idx) => (
													<span
														key={idx}
														className="inline-block bg-primary/10 dark:bg-primary/20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold"
														data-aos="zoom-in"
														data-aos-delay={500 + idx * 40}
													>
														#{tag}
													</span>
												))}
											</div>
										)}
										{blogMeta.extra.sources && (
											<p className="text-xs sm:text-sm text-muted-foreground">
												<span className="font-semibold text-foreground">
													Sources:
												</span>{' '}
												{blogMeta.extra.sources.map((src, i) => (
													<a
														key={i}
														href="#"
														rel="noopener noreferrer"
														className="text-blue-600 dark:text-blue-400 underline mr-3"
														data-aos="fade-right"
														data-aos-delay={560 + i * 50}
													>
														{src.label || src.url}
													</a>
												))}
											</p>
										)}
									</div>
								)}
							</div>
						</article>

						{/* Right Column: Sidebar (sticky) */}
						<div className="lg:col-span-1">
							<div
								className="sticky top-12 flex flex-col gap-4 sm:gap-6"
								data-aos="fade-left"
								data-aos-delay="200"
							>
								{blogMeta.extra && blogMeta.extra.authorInfo && (
									<aside
										className="p-4 sm:p-6 flex flex-col gap-2 border border-border rounded-2xl bg-card"
										data-aos="fade-left"
										data-aos-delay="200"
									>
										<h3 className="text-lg font-semibold  text-primary">
											About the Author
										</h3>
										<p className="text-sm text-muted-foreground">
											{blogMeta.extra.authorInfo}
										</p>
									</aside>
								)}

								{blogMeta.extra && blogMeta.extra.insight && (
									<div
										className="p-4 sm:p-6 border flex flex-col gap-2 border-border rounded-2xl bg-card"
										data-aos="fade-left"
										data-aos-delay="300"
									>
										<h3 className="text-lg font-semibold  text-primary">💡 Quick Insight</h3>
										<p className="text-sm">{blogMeta.extra.insight}</p>
									</div>
								)}

								{blogMeta.extra && blogMeta.extra.relatedTopics && (
									<div
										className="p-4 sm:p-6 border flex flex-col gap-4 border-border rounded-2xl bg-card"
										data-aos="fade-left"
										data-aos-delay="400"
									>
										<h3 className="text-lg font-semibold  text-primary">
											Related Topics
										</h3>
										<div className="flex flex-wrap gap-2 sm:gap-3">
											{blogMeta.extra.relatedTopics.map((topic, idx) => (
												<span
													key={idx}
													className="bg-secondary dark:bg-secondary text-muted-foreground px-3 py-1.5 rounded-full text-xs"
													data-aos="zoom-in"
													data-aos-delay={380 + idx * 40}
												>
													{topic}
												</span>
											))}
										</div>
									</div>
								)}

								{blogMeta.extra && blogMeta.extra.editorsPick && (
									<div
										className="p-4 sm:p-6 border flex flex-col gap-4 border-border rounded-2xl bg-card"
										data-aos="fade-left"
										data-aos-delay="500"
									>
										<h3 className="text-lg font-semibold  text-primary">
											📰 Editor’s Pick
										</h3>
										<div className="flex flex-col sm:gap-3 gap-2">
											{blogMeta.extra.editorsPick.map((title, idx) => (
												<a
													key={idx}
													href="#"
													className="flex items-center justify-between text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
													data-aos="fade-right"
													data-aos-delay={460 + idx * 50}
												>
													{title} <ArrowRight size={14} />
												</a>
											))}
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default BlogDetailPage;
