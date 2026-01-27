import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Check, ArrowRight, Tag } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BgGlow from '../components/background_animation/BgGlow';
import { services } from '../utils/const';
import FloatingGeometricShapesBg from '../components/background_animation/FloatingGeometricShapesBg';
import FloatingParticlesBg from '../components/background_animation/FloatingParticlesBg';
import FloatingParticlesUniversal from '../components/background_animation/FloatingParticles';
import Heading from '../components/common/Heading';
const ServiceDetailPage: React.FC = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);
	useEffect(() => {
		AOS.init({ duration: 900, once: true, easing: 'ease-in-out' });
	}, []);

	const service = id && /^[0-9]+$/.test(id) ? services.find((s) => Number(s.id) === Number(id)) : undefined;

	if (!service) {
		return (
			<div className="pt-20 min-h-screen flex flex-col items-center justify-center gap-4">
				<h1 className="text-3xl font-bold text-foreground">Service Not Found</h1>
				<Button onClick={() => navigate('/services')}>Back to Services</Button>
			</div>
		);
	}
	return (
		<div className="pt-20">
			<section className="relative py-16 overflow-hidden">
				<BgGlow variant="primary" size="lg" positionClass="top-0 right-0" opacity={0.08} />
				<div className="container mx-auto px-4 flex flex-col  gap-8 sm:gap-16 ">
					{/* Hero (image removed) */}
					<div className="grid lg:grid-cols-12 items-center">
						<div className="lg:col-span-12 flex flex-col gap-6 sm:gap-14" data-aos="fade-up">
							<Heading
								section="Service Details"
								highlights={service.title}
								subtitle={service.description}
							/>

							<div className='flex flex-col gap-5 sm:gap-10'>
								<div className="flex flex-wrap gap-2 sm:gap-3 items-center justify-center">
									{(service.features ?? []).slice(0, 6).map((f: string, i: number) => (
										<span key={i} className="inline-flex items-center gap-1 sm:gap-2 bg-card border border-primary-foreground/10 text-foreground text-xs sm:text-sm px-3 py-2 rounded-full">
											<Check className="size-3 sm:size-4" /> {f}
										</span>
									))}
								</div>

								<div className="flex gap-3 justify-center">
									<Button variant={'hero'} onClick={() => navigate('/contact')}>
										Get Started <ArrowRight size={18} />
									</Button>
									<Button variant="glass" onClick={() => navigate('/services')}>All Services</Button>
								</div>
							</div>
						</div>
					</div>

					{/* Main Content */}
					<div className="grid lg:grid-cols-12 gap-6 sm:gap-8 overflow-visible">
						<div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6">
							<div className="rounded-2xl bg-card p-4 sm:p-6  flex flex-col gap-2" data-aos="fade-up">
								<FloatingGeometricShapesBg />

								<h2 className="text-xl sm:text-2xl font-bold text-primary">Overview</h2>
								<p className="text-foreground leading-relaxed">{service.overview ?? service.description}</p>
							</div>

							<div className="rounded-2xl bg-card p-4 sm:p-6  flex flex-col gap-3" data-aos="fade-up" data-aos-delay="100">
								<h3 className="text-xl font-semibold text-primary">Use Cases</h3>
								<ul className="grid sm:grid-cols-2 gap-2 sm:gap-3">
									{(service.useCases ?? []).map((u: string, idx: number) => (
										<li key={idx} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-background/40 rounded-md">
											<Tag className="size-3 sm:size-5 text-primary mt-1" />
											<div className="text-foreground font-medium">{u}</div>
										</li>
									))}
								</ul>
							</div>

							<div className="rounded-2xl bg-card p-4 sm:p-6  flex flex-col gap-3" data-aos="fade-up" data-aos-delay="200">
								<FloatingParticlesBg />
								<h3 className="text-xl font-semibold  text-primary">Frequently Asked Questions</h3>
								<div className="flex flex-col gap-2 sm:gap-3">
									{(service.faqs ?? []).map((f: { q: string; a: string }, i: number) => (
										<details key={i} className="bg-background/30 p-2 sm:p-4 rounded-md flex flex-col gap-2" data-aos="fade-up" data-aos-delay={250 + i * 40}>
											<summary className="cursor-pointer font-medium">{f.q}</summary>
											<div className=" text-muted-foreground">{f.a}</div>
										</details>
									))}
								</div>
							</div>
						</div>

						<aside className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
							<div className="rounded-2xl p-4 sm:p-6 bg-card  flex flex-col gap-4" data-aos="fade-left">
								<div className='flex flex-col gap-2'>
									<h4 className="text-lg font-semibold text-primary">Pricing</h4>
									<div className="text-3xl font-extrabold">{service.pricing?.startingAt ?? 'Contact Us'}</div>
									<div className="text-sm text-muted-foreground">Typical range: {service.pricing?.typicalRange ?? 'Varies'}</div>
									<div className="text-sm text-muted-foreground">{service.pricing?.note}</div>
								</div>
								<div className="">
									<Button size="lg" variant={'hero'} onClick={() => navigate('/contact')}>Request Quote</Button>
								</div>
							</div>

							<div className="rounded-2xl p-6 bg-card  flex flex-col sm:gap-4 gap-2.5" data-aos="fade-left" data-aos-delay="100">
								<FloatingParticlesBg />
								<h4 className="text-lg font-semibold text-primary">Related Features</h4>
								<div className="flex flex-col gap-1 sm:gap-2">
									{(service.features ?? []).map((ft: string, i: number) => (
										<div key={i} className="flex items-center gap-2 sm:gap-3 text-foreground">
											<Check className="size-3 sm:size-4" /> <span>{ft}</span>
										</div>
									))}
								</div>
							</div>

							<div className="rounded-2xl p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary-foreground/10 text-foreground flex flex-col gap-4" data-aos="fade-left" data-aos-delay="200">
								<div className='flex flex-col gap-2'>
									<h4 className="text-lg font-semibold text-primary">Ready to start?</h4>
									<p className="text-muted-foreground">Talk to our experts and get a tailored plan for {service.title}.</p>
								</div>
								<div className="flex gap-3">
									<Button onClick={() => navigate('/contact')} variant={'hero'}>Contact Us</Button>
									<Button variant="glass" onClick={() => navigate('/services')}>Back</Button>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</section >
		</div >
	);
};

export default ServiceDetailPage;
