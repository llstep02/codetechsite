/* ================== START: Imports ================== */
import { Button } from './../ui/button';
import { Badge } from './../ui/badge';
import { AlertCircle, ArrowRight, Sparkles } from 'lucide-react';
import { contactInfo } from '../../utils/const';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from './../ui/toast';
import { IContactForm } from '../../utils/types';
import { useState } from 'react';
import { sendEmail } from '../../utils/send-mail';
import { userSchema } from '../../utils/schema';
import { Input } from './../ui/input';
import NeuralLine from './../background_animation/NeuralLine';
import BgGlow from './../background_animation/BgGlow';
import CardGradientBg from './../background_animation/CardGradientBg';
/* ================== END: Imports ================== */

/* ================== START: Component ================== */
const ContactSection = () => {
	const [emailError, setEmailError] = useState<string | null>(null);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset
	} = useForm<IContactForm>({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			message: ''
		},
		resolver: yupResolver(userSchema),
		mode: 'onBlur',
		reValidateMode: 'onChange'
	});

	const onSubmit = async (formData: IContactForm) => {
		const loadingToast = toast.loading('⏳ Sending your message...');
		try {
			setEmailError(null);
			console.log('formData ——≻', formData);
			const result = await sendEmail({
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email,
				message: formData.message
			});
			if (result.success) {
				toast.dismiss(loadingToast);
				toast.success("✅ Message sent successfully! We'll get back to you soon.");
				reset();
			} else {
				throw new Error(result.message);
			}
		} catch (error) {
			toast.dismiss(loadingToast);
			const errorMessage =
				error instanceof Error
					? error.message
					: 'Failed to send email. Please try again later.';
			toast.error('❌ ' + errorMessage);
			setEmailError(errorMessage);
			console.error('Email sending failed:', error);
		}
	};
	return (
		/* ================== START: Contact Section ================== */
		<section id="contact" className="py-10 sm:py-20 relative overflow-hidden">
			<div className="container mx-auto z-10 relative">
				<div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
					{/* ===== Contact Info Column ===== */}
					<div
						className=" flex flex-col sm:gap-7 gap-5"
						data-aos="fade-right"
						data-aos-delay="300"
					>
						<Badge
							variant="outline"
							className="w-fit text-primary border-primary/30 -mb-2"
						>
							Get In Touch
						</Badge>
						<div className="flex flex-col gap-6">
							<h2 className="text-4xl md:text-5xl font-bold">
								Ready to{' '}
								<span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
									Transform
								</span>{' '}
								Your Business?
							</h2>

							<p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
								Let's discuss how our AI solutions can help you achieve your goals
								and stay ahead of the competition. Our team is ready to guide you
								through your AI transformation journey.
							</p>
						</div>

						{/* ===== Contact Info ===== */}
						<div className="flex flex-col gap-2 sm:gap-4">
							{contactInfo.map((info, index) => (
								<a
									key={index}
									href={info.href}
									className="flex items-center gap-2 sm:gap-4 p-2 sm:p-4 bg-card/50 backdrop-blur-xl border border-primary-foreground/10 hover:shadow-[var(--shadow-glass)] rounded-xl hover:scale-105 transition-all duration-300 group"
								>
									<div className="size-8 sm:size-12 rounded-xl bg-primary/10 flex items-center justify-center">
										<info.icon className="size-4 sm:size-6 text-primary" />
									</div>
									<div>
										<div className="text-sm text-muted-foreground">
											{info.label}
										</div>
										<div className="sm:text-base text-sm font-semibold group-hover:text-primary transition-colors">
											{info.value}
										</div>
									</div>
								</a>
							))}
						</div>
					</div>
					{/* ===== Contact Form Column ===== */}
					<div
						className={`bg-card/50 backdrop-blur-xl border border-primary-foreground/10 sm:p-8 p-5 rounded-3xl  overflow-hidden`}
						data-aos="fade-left"
						data-aos-delay="500"
					>
						<CardGradientBg className="opacity-0 dark:opacity-10" gridOpacity={0} />
						<div className="flex flex-col gap-3 sm:gap-6">
							<div className="flex items-center gap-2 z-10">
								<Sparkles className="w-5 h-5 text-primary" />
								<h3 className="text-lg sm:text-xl font-bold">Send us a message</h3>
							</div>

							<form
								className="flex flex-col gap-4 sm:gap-6 z-10"
								onSubmit={handleSubmit(onSubmit)}
							>
								<div className="grid md:grid-cols-2 gap-4">
									<Input
										label="First Name"
										placeholder="John"
										{...register('firstName')}
										error={errors.firstName?.message}
									/>
									<Input
										label="Last Name"
										placeholder="Doe"
										{...register('lastName')}
										error={errors.lastName?.message}
									/>
								</div>
								<Input
									label="Email"
									placeholder="john@reactifyai.com"
									{...register('email')}
									error={errors.email?.message}
								/>
								<div className="flex flex-col gap-2">
									<label className="block text-sm font-medium">Message</label>
									<textarea
										rows={4}
										{...register('message')}
										className={`w-full px-4 py-3 rounded-xl bg-background/50 border ${errors.message ? 'border-destructive' : 'border-border'
											} focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none`}
										placeholder="Tell us about your project..."
									/>
									{errors.message && (
										<p className="text-destructive text-sm">
											{errors.message.message}
										</p>
									)}
								</div>
								{emailError && (
									<div className="flex items-center gap-1 mt-1 text-sm text-destructive">
										<AlertCircle className="w-4 h-4" />
										<span>{emailError}</span>
									</div>
								)}
								<Button
									variant="hero"
									className="w-full"
									type="submit"
									disabled={isSubmitting}
								>
									{isSubmitting ? 'Sending...' : 'Send Message'}
									<ArrowRight className="w-5 h-5" />
								</Button>
							</form>
						</div>
					</div>
				</div>
			</div>

			{/* ===== Background Elements ===== */}
			<BgGlow variant="primary" size="lg" positionClass="top-0 right-0" opacity={0.1} />
			<BgGlow variant="secondary" size="lg" positionClass="bottom-0 left-0" opacity={0.1} />
			<NeuralLine />
		</section>
		/* ================== END: Contact Section ================== */
	);
};
/* ================== END: Component ================== */

/* ================== START: Export ================== */
export default ContactSection;
/* ================== END: Export ================== */
