// ...existing code...
import { AlertCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { IContactForm } from '../utils/types';
import { userSchema } from '../utils/schema';
import { toast } from '../components/ui/toast';
import { sendEmail } from '../utils/send-mail';
import { contactInfo } from '../utils/const';
import CardGradientBg from './../components/background_animation/CardGradientBg';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import BgGlow from './../components/background_animation/BgGlow';
import NeuralLine from './../components/background_animation/NeuralLine';
import Heading from './../components/common/Heading';

const ContactPage = () => {
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

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <main className="relative min-h-screen overflow-hidden py-10 sm:py-20 sm:pt-40 pt-32">

            <CardGradientBg className="absolute inset-0 opacity-8" gridOpacity={0} />
            <BgGlow variant="primary" size="lg" positionClass="top-[-10%] right-[-10%]" opacity={0.08} />
            <BgGlow variant="secondary" size="lg" positionClass="bottom-[-10%] left-[-10%]" opacity={0.1} />
            <NeuralLine />
            <div className="container mx-auto flex flex-col gap-8 sm:gap-16 relative">
                <Heading
                    section="Contact Us"
                    title="Let's build something "
                    highlights="remarkable"
                    subtitle="Share your vision and we'll help you scale it with AI. Use the form to message us directly or pick a quick contact method."
                />
                <section className="relative flex justify-center">
                    <div className="w-full max-w-4xl mx-auto">
                        {/* Floating contact links panel (absolute, above form) */}
                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-13 z-20 w-full max-w-3xl">
                                <div className="flex items-center justify-center gap-5 bg-card/75 backdrop-blur-md border border-primary-foreground/10 rounded-full px-3 py-2 sm:px-5 sm:py-4 shadow-sm">
                                    {contactInfo.map((info, idx) => (
                                        <a
                                            key={idx}
                                            href={info.href}
                                            className="flex items-center gap-2 p-2 sm:py-3 sm:px-7 border-primary-foreground/10 hover:translate-y-[-2px] hover:scale-[1.01] transition-transform"
                                        >
                                            <div className="size-8 sm:size-10 rounded-full bg-primary/10 flex items-center justify-center">
                                                <info.icon className="size-4 sm:size-5 text-primary" />
                                            </div>
                                            <div className="text-left hidden sm:block">
                                                <div className="text-primary-foreground text-sm whitespace-nowrap">{info.label}</div>
                                                <div className="font-semibold text-muted-foreground text-xs whitespace-nowrap">{info.value}</div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Centered Form Card */}
                            <div className="mt-14 bg-card/60 backdrop-blur-lg border border-primary-foreground/10 rounded-2xl overflow-hidden p-6 sm:p-10 sm:pt-20 z-10 relative">
                                <div className="flex items-start justify-between gap-4">
                                    <div className='flex flex-col gap-2'>
                                        <h2 className="text-2xl sm:text-3xl font-semibold text-primary">Send us a message</h2>
                                        <p className="text-sm text-muted-foreground">We usually reply within 1–2 business days.</p>
                                    </div>
                                    <div className="hidden sm:flex items-center text-sm text-muted-foreground gap-2">
                                        <Sparkles className="w-4 h-4 text-primary" />
                                        <span>Let's collaborate</span>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-3 sm:gap-4 mt-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

                                    <div className='flex flex-col gap-2'>
                                        <label className="block text-sm font-medium">Message</label>
                                        <textarea
                                            rows={6}
                                            {...register('message')}
                                            className={`w-full px-4 py-3 rounded-xl placeholder-foreground/40 bg-background/50 border ${errors.message ? 'border-destructive' : 'border-border'
                                                } focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-y`}
                                            placeholder="Describe your project, timeline and budget (optional)..."
                                        />
                                        {errors.message && (
                                            <p className="text-destructive text-sm mt-2">{errors.message.message}</p>
                                        )}
                                    </div>

                                    {emailError && (
                                        <div className="flex items-center gap-2 text-sm text-destructive">
                                            <AlertCircle className="w-4 h-4" />
                                            <span>{emailError}</span>
                                        </div>
                                    )}

                                    <div className="flex items-center gap-1.5 sm:gap-3 justify-end mx-auto">
                                        <Button
                                            variant="glass"
                                            onClick={() => reset()}
                                        >
                                            Reset
                                        </Button>
                                        <Button variant="hero" type="submit" disabled={isSubmitting}>
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                            <ArrowRight className="w-5 h-5" />
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ContactPage;
// ...existing code...