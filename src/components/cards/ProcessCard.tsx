import React from 'react';
import { ProcessCardProps } from '../../utils/types';

const ProcessCard: React.FC<ProcessCardProps> = ({ index, handleMouseMove, handleTouchMove, processSteps, icon: Icon, title, description, className = '' }) => {
    return (
        <div
            className={`relative flex card rounded-2xl dark:bg-gradient-to-br from-primary/10 via-card/50 to-accent/10 backdrop-blur-xl border-border/50 hover:border-primary/50 group transition-all duration-500 ${className}`}
            data-aos="fade-up"
            data-aos-delay={300 + index * 100}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
        >
            <div className="glow"></div>
            {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
            )}

            <div className="bg-card/50 backdrop-blur-xl border border-primary-foreground/10 p-5 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300 relative z-10 flex flex-col gap-2.5 sm:gap-4 grow">
                <div className="size-8 sm:size-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Icon className="size-4 sm:size-6 text-primary" />
                </div>

                <div className="flex flex-col gap-1.5 sm:gap-2 text-center ">
                    <h3 className="text-lg w-full sm:text-xl font-bold">
                        {title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed grow">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProcessCard