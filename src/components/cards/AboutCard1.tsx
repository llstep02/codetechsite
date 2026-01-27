import { AboutCard1Props } from '../../utils/types';
import React from 'react';


const AboutCard1: React.FC<AboutCard1Props> = ({ icon: Icon, title, description, animationDelay, className = '' }) => {
    return (
        <div
            className={`flex gap-3 sm:gap-6 items-start group ${className}`}
            data-aos="fade-right"
            data-aos-delay={animationDelay ?? 300}
        >
            <div className="sm:size-16 size-10 rounded-2xl bg-card flex items-center justify-center shrink-0">
                <Icon className="size-5 sm:size-8" />
            </div>
            <div className="flex-1 flex flex-col gap-1 sm:gap-3">
                <h4 className="font-bold text-lg sm:text-xl">{title}</h4>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

export default AboutCard1;
