/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ExternalLink, User, Calendar } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BgGlow from '../components/background_animation/BgGlow';
import FloatingGeometricShapesBg from '../components/background_animation/FloatingGeometricShapesBg';
import FloatingParticlesBg from '../components/background_animation/FloatingParticlesBg';
import FloatingParticlesUniversal from '../components/background_animation/FloatingParticles';
import { projects } from '../utils/const';
import { Badge } from '../components/ui/badge';

const ProjectDetailPage: React.FC = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);

	useEffect(() => {
		AOS.init({ duration: 900, once: true, easing: 'ease-in-out' });
	}, []);

	const project =
		id && /^[0-9]+$/.test(id) ? projects.find((p) => Number(p.id) === Number(id)) : undefined;

	if (!project) {
		return (
			<div className="pt-20 min-h-screen flex flex-col items-center justify-center">
				<h1 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
				<Button onClick={() => navigate('/projects')}>Back to Projects</Button>
			</div>
		);
	}

	return (
		<div className="pt-20">
			<section className="relative py-16 overflow-hidden">
				<BgGlow variant="secondary" size="lg" positionClass="top-0 left-0" opacity={0.1} />
				<div className="container mx-auto px-4 gap-8 sm:gap-16 flex flex-col">
					<div className=" grid lg:grid-cols-12 items-center ">
						<header className="lg:col-span-8" data-aos="fade-up">
							<div className="flex flex-col gap-8 sm:gap-14">
								<div className="flex flex-col gap-6 sm:gap-8">
									<Badge
										variant="outline"
										className="text-primary border-primary/30 w-fit"
										data-aos="fade-up"
									>
										Project
									</Badge>

									<div className="flex flex-col gap-3 sm:gap-5">
										<h1 className="text-4xl lg:text-5xl font-extrabold bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
											{project.title}
										</h1>
										<p className="text-lg text-muted-foreground max-w-3xl">
											{project.description}
										</p>
									</div>
								</div>

								<section
									aria-labelledby="tech-heading"
									className="flex flex-col sm:gap-10 gap-5"
								>
									<h2 id="tech-heading" className="sr-only">
										Technologies used
									</h2>
									<ul className="flex flex-wrap sm:gap-3 gap-2 list-none p-0 m-0">
										{(project.technologies ?? [])
											.slice(0, 8)
											.map((t: string, i: number) => (
												<li key={i}>
													<span className="inline-flex items-center gap-2 bg-card border border-secondary-foreground/10 text-foreground text-sm px-3 py-2 rounded-md">
														{t}
													</span>
												</li>
											))}
									</ul>

									<footer className="flex items-center justify-between gap-3 w-full">
										<div className="flex gap-3">
											<Button
												variant={'hero'}
												onClick={() => navigate('/contact')}
											>
												Start Project <ExternalLink size={18} />
											</Button>
											<Button
												variant="glass"
												onClick={() => navigate('/projects')}
											>
												All Projects
											</Button>
										</div>

										{/* optional meta: client and year */}
										<div className="hidden sm:flex items-center gap-4 text-sm text-muted-foreground">
											{/* {project.client && (
												<span className="inline-flex items-center gap-2">
													<User size={16} /> {project.client}
												</span>
											)} */}
											{/* {project.year && (
												<span className="inline-flex items-center gap-2">
													<Calendar size={16} /> {project.year}
												</span>
											)} */}
										</div>
									</footer>
								</section>
							</div>
						</header>
					</div>

					<div className="grid lg:grid-cols-12 gap-8">
						<div className="lg:col-span-7 flex flex-col gap-6">
							<div
								className="rounded-2xl bg-card sm:p-6 p-4"
								data-aos="fade-up"
							>
								<FloatingGeometricShapesBg />
								<div className="flex flex-col gap-2">
									<h2 className="text-2xl font-bold ">Overview</h2>
									<p className="text-foreground leading-relaxed">
										{project.description}
									</p>
								</div>
							</div>

							<div
								className="rounded-2xl bg-card sm:p-6 p-4 "
								data-aos="fade-up"
								data-aos-delay="100"
							>
								<div className="flex flex-col gap-3">
									<h3 className="text-xl font-semibold">Technologies & Tools</h3>
									<div className="flex flex-wrap gap-3">
										{(project.technologies ?? []).map(
											(tech: string, idx: number) => (
												<Badge
													key={idx}
													variant="outline"
													className="bg-background"
												>
													{tech}
												</Badge>
											)
										)}
									</div>
								</div>
							</div>

							<div
								className="rounded-2xl bg-card sm:p-6 p-4"
								data-aos="fade-up"
								data-aos-delay="200"
							>
								<FloatingParticlesBg />
								<div className="flex flex-col gap-3">
									<h3 className="text-xl font-semibold ">Results & Impact</h3>
									<div className="flex flex-col gap-2">
										{project.detail && Array.isArray(project.detail.results)
											? project.detail.results.map((r: string, i: number) => (
													<div
														key={i}
														className="p-3 bg-background/30 rounded-md"
													>
														{r}
													</div>
											  ))
											: project.results
													.split(',')
													.map((r: string, i: number) => (
														<div
															key={i}
															className="p-3 bg-background/30 rounded-md"
														>
															{r.trim()}
														</div>
													))}
									</div>
								</div>
							</div>
						</div>

						<aside className="lg:col-span-5 flex flex-col gap-6">
							<div
								className="rounded-2xl sm:p-6 p-4 bg-card"
								data-aos="fade-left"
							>
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-48 object-cover rounded-md mb-4"
								/>
								<h4 className="text-lg font-semibold mb-2">Case Study</h4>
								<p className="text-muted-foreground">
									A short summary of the project's goals, approach and outcome.
								</p>
								<div className="mt-4">
									<Button variant="hero" onClick={() => navigate('/contact')}>
										Get in Touch
									</Button>
								</div>
							</div>

							<div
								className="rounded-2xl sm:p-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary-foreground/10 text-foreground"
								data-aos="fade-left"
								data-aos-delay="100"
							>
								<h4 className="text-lg font-semibold mb-2">Ready to build?</h4>
								<p className="text-muted-foreground mb-4">
									Let's turn your idea into a polished product.
								</p>
								<div className="flex gap-3">
									<Button onClick={() => navigate('/contact')} variant={'hero'}>
										Contact Us
									</Button>
									<Button variant="glass" onClick={() => navigate('/projects')}>
										Back
									</Button>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ProjectDetailPage;
