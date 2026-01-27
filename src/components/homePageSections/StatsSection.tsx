import { TrendingUp, Users, Globe, Award } from "lucide-react";
import { Badge } from "../ui/badge";

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "500+",
      label: "Projects Completed",
      description: "Successfully delivered AI solutions across various industries"
    },
    {
      icon: Users,
      value: "200+",
      label: "Happy Clients",
      description: "Businesses transformed through our AI solutions"
    },
    {
      icon: Globe,
      value: "50+",
      label: "Countries Served",
      description: "Global reach with local expertise and support"
    },
    {
      icon: Award,
      value: "99%",
      label: "Success Rate",
      description: "Track record of successful AI implementations"
    }
  ];

  return (
    <section className="py-10 sm:py-20 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 text-primary border-primary/30">
            Our Impact
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Numbers That Speak for{" "}
            <span className="bg-primary bg-clip-text text-transparent">Our Excellence</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Since our inception, we've been dedicated to delivering exceptional AI solutions
            that drive real business results and create lasting value for our clients.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card/50 backdrop-blur-xl border border-primary-foreground/10 shadow-[var(--shadow-glass)] p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 group">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Value */}
              <div className="text-4xl md:text-5xl font-bold bg-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold mb-3">{stat.label}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};

export default StatsSection;