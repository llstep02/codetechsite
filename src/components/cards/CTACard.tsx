import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { CTACardProps } from '../../utils/types';
import { useNavigate } from 'react-router-dom';


const CTACard: React.FC<CTACardProps> = ({ title, subtitle, actions, delay = 800, className = '', to, onClick }) => {
    const navigate = useNavigate();
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(e);
            return;
        }
        if (to) {
            navigate(to);
        }
    };
    return (
        <div
            className={`text-center backdrop-blur-xl border overflow-hidden border-primary-foreground/10 p-6 relative sm:p-12 rounded-3xl flex flex-col gap-5 sm:gap-8 text-white ${className}`}
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            <div className='z-0 bg-[image:var(--gradient-primary)] absolute top-0 left-0 bottom-0 w-full opacity-100 dark:opacity-20'></div>
            <div className="flex relative flex-col gap-2 sm:gap-4">
                <div><h3 className="text-xl sm:text-2xl font-bold">{title}</h3></div>
                {subtitle && <p className="opacity-80 max-w-2xl mx-auto text-base sm:text-lg">{subtitle}</p>}
            </div>

            <Button variant="hero" size="lg" className="text-xs sm:text-sm w-fit mx-auto relative z-[1]" onClick={handleClick}>
                {actions}
                <ArrowRight className="w-5 h-5" />
            </Button>
        </div>
    );
};

export default CTACard;
