import {
	Award,
	BarChart3,
	Brain,
	Building,
	Code,
	Cog,
	Cpu,
	Eye,
	Github,
	Globe,
	Linkedin,
	Mail,
	MapPin,
	MessageCircle,
	MessageSquare,
	Phone,
	Rocket,
	Search,
	Shield,
	Star,
	Target,
	TrendingUp,
	X,
	Users,
	Zap
} from 'lucide-react';

// Helper: return a formatted date string for N days in the past
const formatDate = (daysAgo: number) => {
	const d = new Date();
	d.setDate(d.getDate() - daysAgo);
	return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

/* ================== START: Constants ================== */
export const navItems = [
	{ name: 'Home', id: 'home', to: '/' },
	{ name: 'About Us', id: 'about', to: '/' },
	// pages that live on separate routes have explicit `to` targets
	{ name: 'Services', id: 'services', to: '/services' },
	{ name: 'Facts', id: 'facts', to: '/#facts' },
	{ name: 'Projects', id: 'projects', to: '/projects' },
	{ name: 'FAQs', id: 'faqs', to: '/faq' },
	{ name: 'Our Team', id: 'team', to: '/team' },
	{ name: 'Blog', id: 'blog', to: '/blog' }
];
export const headerItems = [
	{ name: 'Home', id: 'home', to: '/' },
	{ name: 'About', id: 'about', to: '/#about' },
	{ name: 'Pages', id: 'pages' }, // dropdown
	{ name: 'Blog', id: 'blog' } // dropdown
];

export const pagesMenu = [
	{ name: 'Services', to: '/services' },
	{ name: 'Service Detail', to: '/services/:id' },
	{ name: 'Projects', to: '/projects' },
	{ name: 'Project Detail', to: '/projects/:id' },
	{ name: 'FAQ', to: '/faq' },
	{ name: 'Team', to: '/team' }
];

export const blogMenu = [
	{ name: 'Blogs', to: '/blog' },
	{ name: 'Blog Detail', to: '/blog/:id' }
];

export const heroStats = [
	{ value: '500+', label: 'Projects Completed', icon: Target },
	{ value: '99%', label: 'Client Satisfaction', icon: Brain },
	{ value: '24/7', label: 'Support Available', icon: Cpu }
];

export const aboutFeatures = [
	{
		icon: Users,
		title: 'Expert Team',
		description:
			'Our team consists of AI specialists, data scientists, and software engineers with years of experience in cutting-edge technology.'
	},
	{
		icon: Award,
		title: 'Award-Winning Solutions',
		description:
			'Recognized globally for our innovative AI solutions and cutting-edge technology implementations across various industries.'
	},
	{
		icon: TrendingUp,
		title: 'Proven Results',
		description:
			"We've helped hundreds of businesses increase efficiency and revenue through AI automation and intelligent systems."
	}
];

export const aboutAchievements = [
	{
		icon: Building,
		value: '500+',
		label: 'Successful Projects',
		description: 'AI solutions deployed globally'
	},
	{
		icon: Users,
		value: '98%',
		label: 'Client Retention Rate',
		description: 'Long-term partnerships built'
	},
	{
		icon: Globe,
		value: '50+',
		label: 'Countries Served',
		description: 'Worldwide presence established'
	},
	{
		icon: Shield,
		value: '24/7',
		label: 'Support Available',
		description: 'Round-the-clock assistance'
	}
];

export const services = [
	{
		id: 1,
		icon: Brain,
		title: 'Machine Learning',
		description:
			'Custom ML models tailored to your business needs, from predictive analytics to recommendation systems.',
		overview:
			'Our Machine Learning practice builds production-ready models for classification, regression, time-series forecasting, and recommendation engines. We partner with your team to collect and prepare data, iterate on model design, and deploy scalable solutions with monitoring and retraining pipelines.',
		useCases: [
			'Customer churn prediction',
			'Sales forecasting',
			'Personalized recommendations',
			'Anomaly detection in logs and metrics'
		],
		pricing: {
			startingAt: '$5,000',
			typicalRange: '$5k - $75k+',
			note: 'Price varies by data maturity, scope, and deployment requirements.'
		},
		faqs: [
			{
				q: 'How long does a typical ML engagement take?',
				a: 'Small PoCs can be delivered in 4-8 weeks. Production projects typically take 3-6 months depending on scope.'
			},
			{
				q: 'What kind of data do you need?',
				a: 'Structured logs, CRM/export data, labeled examples or historical outcomes enable faster model development. We can help with data engineering if needed.'
			}
		],
		features: [
			'Custom Model Development',
			'Predictive Analytics',
			'Data Processing',
			'Model Optimization'
		]
	},
	{
		id: 2,
		icon: MessageSquare,
		title: 'AI Chatbots',
		description:
			'Intelligent conversational AI that provides 24/7 customer support and enhances user engagement.',
		overview:
			'We design and deploy conversational agents that understand user intent, manage dialog flows, and connect to backend systems. Our chatbots support multi-channel deployment (web, mobile, messaging) and can be integrated with knowledge bases and CRMs.',
		useCases: [
			'Customer support automation',
			'Lead qualification',
			'Internal knowledge assistant',
			'FAQ automation'
		],
		pricing: {
			startingAt: '$3,000',
			typicalRange: '$3k - $40k+',
			note: 'Depends on integrations, languages supported, and conversational complexity.'
		},
		faqs: [
			{
				q: 'Do you support multiple languages?',
				a: 'Yes — we can build bots in multiple languages and configure fallback routing based on user locale.'
			},
			{
				q: 'Can the bot connect to our CRM?',
				a: 'Absolutely. We integrate with common CRMs and can build custom connectors.'
			}
		],
		features: [
			'Natural Language Processing',
			'Multi-language Support',
			'CRM Integration',
			'Analytics Dashboard'
		]
	},
	{
		id: 3,
		icon: BarChart3,
		title: 'Data Analytics',
		description:
			'Transform raw data into actionable insights with our advanced analytics and visualization tools.',
		overview:
			'From data ingestion and ETL pipelines to dashboards and self-serve analytics, we help organizations become data-driven. Our services include metric design, KPI tracking, and interactive visualizations using best-in-class BI tools.',
		useCases: [
			'Executive dashboards',
			'Operational monitoring',
			'Ad-hoc analysis',
			'Data pipeline automation'
		],
		pricing: {
			startingAt: '$4,000',
			typicalRange: '$4k - $50k+',
			note: 'Pricing varies with data volume, number of dashboards and refresh frequency.'
		},
		faqs: [
			{
				q: 'Which BI tools do you work with?',
				a: 'We commonly use Looker, Tableau, Power BI, and open-source tools depending on client preference.'
			},
			{
				q: 'Can you help with data engineering?',
				a: 'Yes — we build robust ETL/ELT pipelines and cloud data warehouses as part of analytics projects.'
			}
		],
		features: [
			'Real-time Analytics',
			'Custom Dashboards',
			'Data Visualization',
			'Business Intelligence'
		]
	},
	{
		id: 4,
		icon: Shield,
		title: 'AI Security',
		description:
			'Protect your systems with AI-powered security solutions that detect and prevent threats in real-time.',
		overview:
			'We combine threat intelligence, anomaly detection, and automated response to secure applications and infrastructure. Our offerings include log analysis, intrusion detection using ML, and compliance tooling for regulated environments.',
		useCases: [
			'Real-time threat detection',
			'Fraud prevention',
			'Compliance monitoring',
			'Insider threat detection'
		],
		pricing: {
			startingAt: '$6,000',
			typicalRange: '$6k - $100k+',
			note: 'Scope depends on telemetry sources and retention requirements.'
		},
		faqs: [
			{
				q: 'Can you detect zero-day threats?',
				a: 'We use anomaly detection and behavior modeling to surface suspicious activity, which helps identify novel attack patterns.'
			}
		],
		features: [
			'Threat Detection',
			'Anomaly Monitoring',
			'Risk Assessment',
			'Compliance Management'
		]
	},
	{
		id: 5,
		icon: Cog,
		title: 'Automation',
		description:
			'Streamline your operations with intelligent automation solutions that reduce costs and increase efficiency.',
		overview:
			'Our automation solutions combine RPA, ML-driven decisioning, and workflow orchestration to reduce manual effort and improve SLA compliance. We identify bottlenecks and design resilient automation that fits into existing processes.',
		useCases: [
			'Invoice processing',
			'Automated reporting',
			'Back-office workflows',
			'SLA monitoring'
		],
		pricing: {
			startingAt: '$4,500',
			typicalRange: '$4.5k - $60k+',
			note: 'Depends on complexity of systems and number of automated workflows.'
		},
		faqs: [
			{
				q: 'Do you build connectors to legacy systems?',
				a: 'Yes — we can create custom connectors and use middleware to integrate with older systems.'
			}
		],
		features: [
			'Process Automation',
			'Workflow Optimization',
			'Task Scheduling',
			'Performance Monitoring'
		]
	},
	{
		id: 6,
		icon: Eye,
		title: 'Computer Vision',
		description:
			'Advanced image and video analysis capabilities for object detection, recognition, and quality control.',
		overview:
			'We build vision systems for manufacturing quality inspection, retail analytics, and automated content moderation. Our models use state-of-the-art architectures and are optimized for inference on cloud or edge devices.',
		useCases: [
			'Quality inspection',
			'Retail shelf analytics',
			'Document OCR and extraction',
			'Face/feature recognition (ethically aligned)'
		],
		pricing: {
			startingAt: '$7,000',
			typicalRange: '$7k - $120k+',
			note: 'Costs depend on labeling effort, edge vs cloud deployment, and inference requirements.'
		},
		faqs: [
			{
				q: 'Can you run models on edge devices?',
				a: 'Yes — we optimize and quantize models for edge devices to meet latency and bandwidth constraints.'
			}
		],
		features: ['Object Detection', 'Image Recognition', 'Video Analysis', 'Quality Control']
	}
];

export const processSteps = [
	{
		number: '01',
		icon: MessageCircle,
		title: 'Consultation',
		description:
			'We start with a detailed discussion about your business needs, challenges, and AI objectives to create a tailored strategy.'
	},
	{
		number: '02',
		icon: Search,
		title: 'Analysis',
		description:
			'Our experts analyze your data, processes, and infrastructure to identify the best AI solutions for your specific use case.'
	},
	{
		number: '03',
		icon: Code,
		title: 'Development',
		description:
			'We develop and customize AI models using cutting-edge technologies, ensuring seamless integration with your existing systems.'
	},
	{
		number: '04',
		icon: Rocket,
		title: 'Deployment',
		description:
			'After thorough testing, we deploy your AI solution and provide ongoing support to ensure optimal performance and continuous improvement.'
	}
];

export const facts = [
	{
		icon: TrendingUp,
		value: '500+',
		label: 'Projects Completed',
		description: 'delivered AI solutions industries'
	},
	{
		icon: Users,
		value: '200+',
		label: 'Happy Clients',
		description: 'Businesses transformed through our AI solutions'
	},
	{
		icon: Globe,
		value: '50+',
		label: 'Countries Served',
		description: 'Global reach with local expertise and support'
	},
	{
		icon: Award,
		value: '99%',
		label: 'Success Rate',
		description: 'Track record of successful AI implementations'
	},
	{
		icon: Star,
		value: '4.9/5',
		label: 'Client Rating',
		description: 'Consistently high satisfaction scores'
	},
	{
		icon: Zap,
		value: '24/7',
		label: 'Support Available',
		description: 'Round-the-clock technical assistance'
	}
];

export const projects = [
	{
		id: 1,
		title: 'AI-Powered Healthcare Platform',
		description:
			'Revolutionizing patient care with intelligent diagnosis and treatment recommendations using advanced machine learning algorithms.',
		category: 'Healthcare AI',
		image: import.meta.env.VITE_PROJECT1_IMAGE,
		technologies: ['Machine Learning', 'Computer Vision', 'NLP'],
		results: '94% accuracy in diagnosis, 60% faster treatment planning',
		type: 'Case Study',
		detail: {
			challenge:
				'Fragmented patient data and slow diagnosis processes led to inefficiencies in patient care.',
			solution:
				'Developed an AI-powered platform integrating medical imaging, predictive analytics, and personalized treatment recommendations.',
			results: [
				'94% diagnostic accuracy',
				'60% faster treatment planning',
				'Improved patient outcomes',
				'Streamlined healthcare workflows'
			]
		}
	},
	{
		id: 2,
		title: 'Smart Manufacturing Automation',
		description:
			'Transforming production lines with intelligent automation, predictive maintenance, and quality control systems.',
		category: 'Industrial AI',
		image: import.meta.env.VITE_PROJECT2_IMAGE,
		technologies: ['IoT Integration', 'Predictive Analytics', 'Robotics'],
		results: '45% reduction in downtime, 30% increase in efficiency',
		type: 'Case Study',
		detail: {
			challenge:
				'Frequent equipment failures and inefficient production lines increased operational costs.',
			solution:
				'Implemented smart sensors, ML-driven predictive maintenance, and automated quality control.',
			results: [
				'45% reduction in downtime',
				'30% increase in efficiency',
				'Lower maintenance costs',
				'Higher product quality'
			]
		}
	},
	{
		id: 3,
		title: 'Financial Risk Assessment AI',
		description:
			'Advanced algorithms for real-time fraud detection and risk analysis in financial transactions and investments.',
		category: 'FinTech AI',
		image: import.meta.env.VITE_PROJECT3_IMAGE,
		technologies: ['Deep Learning', 'Real-time Analytics', 'Security'],
		results: '99.7% fraud detection rate, $2M+ losses prevented',
		type: 'Case Study',
		detail: {
			challenge:
				'Financial institutions faced increasing fraud and slow risk assessment processes.',
			solution:
				'Deployed deep learning models for real-time fraud detection and automated risk analysis.',
			results: [
				'99.7% fraud detection rate',
				'$2M+ losses prevented',
				'Faster, more accurate risk assessments',
				'Reduced manual review workload'
			]
		}
	},
	{
		id: 4,
		title: 'Intelligent Customer Service Bot',
		description:
			'Next-generation chatbot with natural language understanding and multi-language support for global customer service.',
		category: 'Customer AI',
		image: import.meta.env.VITE_PROJECT4_IMAGE,
		technologies: ['NLP', 'Voice Recognition', 'Multi-language'],
		results: '85% query resolution, 24/7 availability, 40% cost reduction',
		type: 'Case Study',
		detail: {
			challenge:
				'The client was experiencing high customer support costs and long response times. They needed an intelligent solution that could handle common queries while maintaining a personalized customer experience.',
			solution:
				'We built a custom chatbot using advanced NLP and machine learning algorithms. The system was trained on historical customer interactions and continuously learns from new conversations to improve accuracy.',
			results: [
				'70% reduction in customer support costs',
				'90% of queries resolved without human intervention',
				'Response time reduced from hours to seconds',
				'95% customer satisfaction rating'
			]
		}
	},
	{
		id: 5,
		title: 'Supply Chain Optimization',
		description:
			'AI-driven logistics and supply chain management system with predictive demand forecasting and route optimization.',
		category: 'Logistics AI',
		image: import.meta.env.VITE_PROJECT5_IMAGE,
		technologies: ['Optimization Algorithms', 'Data Analytics', 'IoT'],
		results: '25% cost reduction, 35% faster delivery times',
		type: 'Case Study',
		detail: {
			challenge:
				'Inefficient logistics and unpredictable demand led to high costs and slow deliveries.',
			solution:
				'Developed an AI-powered system for predictive demand forecasting and real-time route optimization.',
			results: [
				'25% cost reduction',
				'35% faster delivery times',
				'Improved inventory management',
				'Higher customer satisfaction'
			]
		}
	},
	{
		id: 6,
		title: 'Smart City Traffic Management',
		description:
			'Intelligent traffic flow optimization using computer vision and real-time data analysis for urban environments.',
		category: 'Smart City AI',
		image: import.meta.env.VITE_PROJECT6_IMAGE,
		technologies: ['Computer Vision', 'Real-time Processing', 'IoT'],
		results: '40% traffic congestion reduction, improved air quality',
		type: 'Case Study',
		detail: {
			challenge:
				'Urban areas faced severe traffic congestion and poor air quality due to inefficient traffic management.',
			solution:
				'Implemented a computer vision-based system for real-time traffic analysis and adaptive signal control.',
			results: [
				'40% reduction in traffic congestion',
				'Improved air quality',
				'Faster emergency response times',
				'Enhanced commuter experience'
			]
		}
	}
];

export const faqs = [
	{
		question: 'What types of AI solutions do you offer?',
		answer: 'We offer a comprehensive range of AI solutions including machine learning models, natural language processing, computer vision, chatbots, predictive analytics, automation systems, and custom AI applications tailored to your specific business needs.'
	},
	{
		question: 'How long does it typically take to implement an AI solution?',
		answer: 'Implementation timelines vary based on project complexity. Simple chatbots can be deployed in 2-4 weeks, while complex machine learning systems may take 3-6 months. We provide detailed timelines during our consultation phase and keep you updated throughout the development process.'
	},
	{
		question: 'Do I need technical expertise to use your AI solutions?',
		answer: 'No technical expertise is required. We design user-friendly interfaces and provide comprehensive training and documentation. Our solutions are built to be intuitive and accessible to non-technical users, with 24/7 support available whenever you need assistance.'
	},
	{
		question: 'How do you ensure data security and privacy?',
		answer: "We prioritize data security with end-to-end encryption, secure cloud infrastructure, and compliance with GDPR, CCPA, and other data protection regulations. We're ISO 27001 certified and implement best practices for data handling, storage, and processing."
	},
	{
		question: 'What industries do you specialize in?',
		answer: 'We work across diverse industries including healthcare, finance, manufacturing, retail, logistics, education, and technology. Our team has domain expertise in various sectors and can adapt our AI solutions to meet industry-specific requirements and regulations.'
	},
	{
		question: 'How do you measure the success of AI implementations?',
		answer: 'We establish clear KPIs and success metrics before project initiation, including accuracy rates, efficiency improvements, cost savings, and user satisfaction. We provide regular performance reports and continuously optimize solutions based on real-world data and feedback.'
	}
	// {
	// 	question: 'What kind of support do you provide after deployment?',
	// 	answer: 'We offer comprehensive post-deployment support including 24/7 technical assistance, regular system monitoring, performance optimization, updates and maintenance, training for new users, and scaling services as your business grows.'
	// },
	// {
	// 	question: 'How much do your AI solutions cost?',
	// 	answer: 'Pricing varies based on project scope, complexity, and requirements. We offer flexible pricing models including one-time implementation fees, subscription-based services, and custom enterprise packages. Contact us for a personalized quote based on your specific needs.'
	// }
];

export const team = [
	{
		name: 'Sarah Chen',
		role: 'CEO & AI Strategist',
		image: import.meta.env.VITE_TEAM1_IMAGE,
		bio: '15+ years in AI research and business strategy',
		social: { linkedin: '#', x: '#', github: '#' }
	},
	{
		name: 'Dr. Lou Gramm',
		role: 'CTO & ML Lead',
		image: import.meta.env.VITE_TEAM2_IMAGE,
		bio: 'PhD in Computer Science, former Google AI researcher',
		social: { linkedin: '#', x: '#', github: '#' }
	},
	{
		name: 'Emily Watson',
		role: 'Data Science Director',
		image: import.meta.env.VITE_TEAM3_IMAGE,
		bio: 'Expert in predictive analytics and neural networks',
		social: { linkedin: '#', x: '#', github: '#' }
	},
	{
		name: 'Alex Kim',
		role: 'AI Engineering Manager',
		image: import.meta.env.VITE_TEAM4_IMAGE,
		bio: 'Full-stack AI developer with 10+ years experience',
		social: { linkedin: '#', x: '#', github: '#' }
	}
];

export const blogPosts = [
	{
		id: 1,
		title: 'The Future of AI in Healthcare: Transforming Patient Care',
		excerpt:
			'Explore how artificial intelligence is revolutionizing healthcare with predictive diagnostics, personalized treatment plans, and improved patient outcomes.',
		detail: 'This article explores the transformative impact of AI on healthcare, focusing on real-world applications, benefits, and the challenges faced by the industry as it adopts advanced technologies.',
		author: 'Dr. Sarah Chen',
		date: formatDate(0),
		category: 'Healthcare AI',
		readTime: '5 min read',
		image: import.meta.env.VITE_BLOG1_IMAGE,
		content: [
			'Artificial intelligence (AI) is rapidly transforming the healthcare industry. From improving diagnostic accuracy to personalizing treatment plans, AI is enabling healthcare professionals to deliver better patient outcomes.',
			'Key benefits include faster diagnosis, reduced human error, and the ability to analyze vast amounts of medical data. AI-powered tools are now being used for medical imaging, predictive analytics, and even robotic surgeries.',
			'However, challenges remain, such as ensuring data privacy, addressing ethical concerns, and integrating AI systems with existing healthcare infrastructure.',
			'Implementation at scale, however, is non-trivial. Healthcare providers must invest in secure data pipelines, interoperable records (like FHIR), and rigorous validation frameworks. Additionally, clinicians need tools that integrate seamlessly into their workflow—AI should enhance clinical decision-making, not disrupt it.'
		],
		extra: {
			tags: ['AI', 'Healthcare', 'Diagnostics', 'Medical Imaging', 'Telemedicine'],
			sources: [
				{
					label: 'WHO: AI in Healthcare',
					url: 'https://www.who.int/publications/ai-healthcare'
				},
				{
					label: 'NIH: AI in Medicine',
					url: 'https://www.nih.gov/news-events/ai-medicine'
				},
				{
					label: 'Harvard Health: AI Applications',
					url: 'https://www.health.harvard.edu/ai-in-healthcare'
				}
			],
			authorInfo:
				'Dr. Sarah Chen is a biomedical data scientist specializing in AI-driven diagnostics and clinical analytics...',
			insight:
				'By 2030, AI could automate 50% of diagnostic tasks, freeing healthcare professionals...',
			relatedTopics: [
				'AI Ethics',
				'Robotic Surgery',
				'Digital Health',
				'Genomics',
				'Predictive Analytics'
			],
			editorsPick: [
				'Predictive Analytics in Cardiology',
				'AI-Powered Cancer Detection',
				'The Rise of Smart Hospitals'
			]
		}
	},
	{
		id: 2,
		title: 'Machine Learning for Intelligent Automation in Manufacturing 4.0',
		excerpt:
			'Discover how ML algorithms are optimizing production lines, reducing waste, and enabling predictive maintenance in modern manufacturing.',
		detail: 'A deep dive into how machine learning is driving the next industrial revolution, with a focus on automation, efficiency, and the future of smart factories.',
		author: 'Alex Kim',
		date: formatDate(6),
		category: 'Industrial AI',
		readTime: '7 min read',
		image: import.meta.env.VITE_BLOG2_IMAGE,
		content: [
			'Manufacturing 4.0 is characterized by the integration of smart technologies, with machine learning (ML) at its core.',
			'ML algorithms help optimize production lines, reduce waste, and enable predictive maintenance, minimizing downtime and maximizing efficiency.',
			'Data collected from sensors and IoT devices enables predictive analytics, allowing factories to foresee potential machine failures and optimize production schedules.',
			'Advanced ML models can identify patterns in manufacturing data that humans might overlook, improving quality control and operational efficiency.',
			'Collaborative robots (cobots) powered by AI can work alongside human operators, enhancing safety and productivity.',
			'The future of manufacturing will see even greater adoption of AI and ML, leading to fully autonomous factories, smarter supply chains, and more sustainable operations.'
		],
		extra: {
			tags: [
				'Machine Learning',
				'Manufacturing',
				'Automation',
				'Predictive Maintenance',
				'Smart Factory'
			],
			sources: [
				{ label: 'Industry 4.0 Overview', url: 'https://www.industry40.com/' },
				{
					label: 'MIT Technology Review: AI in Manufacturing',
					url: 'https://www.technologyreview.com/'
				},
				{
					label: 'PwC Report on Smart Factories',
					url: 'https://www.pwc.com/smartfactories'
				}
			],
			authorInfo:
				'Alex Kim is an industrial AI specialist, focusing on machine learning solutions for smart factories, predictive maintenance, and automation strategies.',
			insight:
				'By 2030, intelligent automation could reduce production costs by up to 30% while increasing overall equipment efficiency.',
			relatedTopics: [
				'Predictive Maintenance',
				'Smart Factory',
				'Industrial IoT',
				'Robotics',
				'AI Optimization'
			],
			editorsPick: [
				'Optimizing Production with AI',
				'The Rise of Smart Factories',
				'Robotics and Human Collaboration in Industry 4.0'
			]
		}
	},

	{
		id: 3,
		title: 'Ethical AI: Building Responsible Artificial Intelligence Systems',
		excerpt:
			'Learn about the importance of ethical considerations in AI development and how we ensure fairness, transparency, and accountability.',
		detail: 'This post discusses the ethical challenges in AI, including bias, transparency, and accountability, and offers strategies for building responsible AI systems.',
		author: 'Dr. Marcus Rodriguez',
		date: formatDate(14),
		category: 'AI Ethics',
		readTime: '6 min read',
		image: import.meta.env.VITE_BLOG3_IMAGE,
		content: [
			'As AI systems become more prevalent, ethical considerations are paramount. Developers must ensure fairness, transparency, and accountability in their algorithms.',
			'Bias in AI can lead to unfair outcomes, so it is crucial to use diverse datasets and regularly audit models for unintended consequences.',
			'Building responsible AI also involves clear communication with stakeholders and compliance with evolving regulations.',
			'Transparency means providing explanations for AI decisions and making model logic understandable to non-experts.',
			'Accountability requires setting clear ownership for AI outcomes, implementing monitoring processes, and being prepared to address mistakes or harm.',
			'Ethical AI also involves collaboration across interdisciplinary teams, including ethicists, engineers, and domain experts, to ensure a holistic approach.',
			'Looking forward, the adoption of ethical AI frameworks will become a standard requirement for organizations deploying AI at scale.'
		],
		extra: {
			tags: ['AI', 'Ethics', 'Responsible AI', 'Fairness', 'Transparency', 'Accountability'],
			sources: [
				{
					label: 'AI Ethics Guidelines',
					url: 'https://ec.europa.eu/digital-strategy/ai-ethics-guidelines_en'
				},
				{
					label: 'Harvard Business Review: Ethical AI',
					url: 'https://hbr.org/2021/06/building-ethical-ai'
				},
				{
					label: 'MIT Media Lab: Responsible AI',
					url: 'https://www.media.mit.edu/projects/responsible-ai/'
				}
			],
			authorInfo:
				'Dr. Marcus Rodriguez is an AI researcher and ethicist specializing in responsible AI, algorithmic fairness, and ethical technology deployment.',
			insight:
				'Implementing ethical AI can not only prevent harm but also increase trust and adoption of AI systems across industries.',
			relatedTopics: [
				'Algorithmic Bias',
				'AI Governance',
				'Transparency',
				'AI Accountability',
				'Fair AI'
			],
			editorsPick: [
				'Ensuring Fairness in AI Systems',
				'Guidelines for Responsible AI',
				'Transparency and Explainability in Machine Learning'
			]
		}
	},

	{
		id: 4,
		title: 'NLP Advances: Making Sense of Human Language',
		excerpt:
			'An overview of recent transformer models, their applications in NLP tasks, and practical tips for deploying production-grade language systems.',
		detail: 'An accessible guide to the latest in NLP, focusing on transformer models, their real-world uses, and best practices for deploying them at scale.',
		author: 'Rina Patel',
		date: formatDate(16),
		category: 'Natural Language Processing',
		readTime: '8 min read',
		image: import.meta.env.VITE_BLOG4_IMAGE,
		content: [
			'Natural Language Processing (NLP) has seen rapid progress with the advent of transformer models like BERT and GPT.',
			'These models excel at understanding context, enabling applications such as chatbots, sentiment analysis, and language translation.',
			'Deploying production-grade NLP systems requires careful tuning, robust data pipelines, and ongoing monitoring for accuracy.',
			'Recent innovations in NLP include zero-shot and few-shot learning, allowing models to generalize to tasks without extensive task-specific training.',
			'Ethical considerations are critical in NLP, particularly regarding bias in language models and ensuring responsible AI usage.',
			'Open-source NLP frameworks like Hugging Face Transformers have accelerated development and adoption in both research and industry.',
			'Looking ahead, multilingual models and better contextual understanding will further enhance the ability of machines to comprehend and generate human language.'
		],
		extra: {
			tags: [
				'NLP',
				'Transformers',
				'Language Models',
				'Chatbots',
				'AI Ethics',
				'Multilingual AI'
			],
			sources: [
				{ label: 'BERT Paper', url: 'https://arxiv.org/abs/1810.04805' },
				{ label: 'GPT-3', url: 'https://openai.com/research/gpt-3' },
				{ label: 'Hugging Face Transformers', url: 'https://huggingface.co/transformers/' }
			],
			authorInfo:
				'Rina Patel is an NLP engineer and AI researcher specializing in transformer-based language models and real-world NLP applications.',
			insight:
				'Transformer models have revolutionized NLP by enabling machines to understand and generate human-like text, transforming industries from customer service to content creation.',
			relatedTopics: [
				'BERT',
				'GPT Models',
				'Sentiment Analysis',
				'Chatbots',
				'Multilingual NLP'
			],
			editorsPick: [
				'Deploying NLP at Scale',
				'Transformer Models Explained',
				'Responsible AI in Language Systems'
			]
		}
	},

	{
		id: 5,
		title: 'Scaling ML Infrastructure: Best Practices for Production',
		excerpt:
			'Guidance on building resilient, scalable ML infrastructure — from data pipelines to model serving and monitoring in production environments.',
		detail: 'A comprehensive overview of best practices for scaling machine learning infrastructure, covering everything from data pipelines to monitoring in production.',
		author: 'Carlos Mendes',
		date: formatDate(18),
		category: 'MLOps',
		readTime: '9 min read',
		image: import.meta.env.VITE_BLOG5_IMAGE,
		content: [
			'Scaling machine learning (ML) infrastructure is essential for deploying models in production environments.',
			'Best practices include building robust data pipelines, using containerization for model serving, and implementing monitoring for drift and performance.',
			'A resilient ML infrastructure enables rapid iteration, reliable deployment, and continuous improvement of AI solutions.',
			'Automated testing and CI/CD pipelines help ensure that models are deployed consistently and safely across environments.',
			'Leveraging cloud-native technologies allows dynamic scaling based on demand, reducing latency and improving cost efficiency.',
			'Monitoring and observability are crucial to detect anomalies, retrain models when necessary, and maintain high-quality predictions.',
			'Collaboration between data scientists, ML engineers, and DevOps teams ensures smooth deployment and long-term maintainability of ML systems.'
		],
		extra: {
			tags: ['MLOps', 'Infrastructure', 'Production', 'CI/CD', 'Monitoring', 'Cloud ML'],
			sources: [
				{ label: 'MLOps Guide', url: 'https://ml-ops.org/' },
				{
					label: 'Google Cloud ML Best Practices',
					url: 'https://cloud.google.com/solutions/machine-learning'
				},
				{ label: 'AWS ML Infrastructure', url: 'https://aws.amazon.com/machine-learning/' }
			],
			authorInfo:
				'Carlos Mendes is an MLOps engineer specializing in scalable ML infrastructure, automated pipelines, and monitoring solutions for AI in production.',
			insight:
				'Properly designed ML infrastructure can dramatically reduce downtime, accelerate deployment cycles, and improve model reliability across production environments.',
			relatedTopics: [
				'CI/CD for ML',
				'Monitoring & Observability',
				'Cloud ML',
				'Data Pipelines',
				'Production Models'
			],
			editorsPick: [
				'Building Scalable ML Pipelines',
				'Best Practices for Model Deployment',
				'Monitoring ML in Production'
			]
		}
	},

	{
		id: 6,
		title: 'Computer Vision in Industry — From Inspection to Autonomy',
		excerpt:
			'Explore real-world computer vision applications across industries, including object detection, inspection automation, and embedded systems.',
		detail: 'This article highlights the impact of computer vision in various industries, with examples of automation, quality control, and the future of autonomous systems.',
		author: 'Lina Gomez',
		date: formatDate(24),
		category: 'Computer Vision',
		readTime: '7 min read',
		image: import.meta.env.VITE_BLOG6_IMAGE,
		content: [
			'Computer vision is revolutionizing industries by enabling machines to interpret and act on visual data.',
			'Applications range from quality control in manufacturing to autonomous vehicles and smart surveillance systems.',
			'Advanced algorithms allow defect detection, object recognition, and real-time analytics, improving efficiency and reducing human error.',
			'Integration with robotics enables automated inspection and sorting in factories, minimizing downtime and increasing productivity.',
			'Computer vision is also key in autonomous navigation for vehicles, drones, and warehouse automation.',
			'Edge computing and embedded vision systems allow real-time processing directly on devices, reducing latency and increasing reliability.',
			'As hardware and algorithms improve, expect even broader adoption of computer vision across sectors, including healthcare, retail, and logistics.'
		],
		extra: {
			tags: [
				'Computer Vision',
				'Industry',
				'Automation',
				'Object Detection',
				'Embedded Systems',
				'AI Vision'
			],
			sources: [
				{ label: 'Computer Vision Applications', url: 'https://www.cv-foundation.org/' },
				{ label: 'IEEE CV Research', url: 'https://ieeexplore.ieee.org/Xplore/home.jsp' },
				{ label: 'OpenCV Documentation', url: 'https://opencv.org/' }
			],
			authorInfo:
				'Lina Gomez is a computer vision engineer specializing in industrial automation, embedded vision systems, and AI-powered quality control solutions.',
			insight:
				'Deploying computer vision in industry not only increases efficiency but also ensures higher product quality, reduced waste, and safer work environments.',
			relatedTopics: [
				'Industrial Automation',
				'Robotics',
				'Embedded Vision',
				'Quality Control',
				'Autonomous Vehicles'
			],
			editorsPick: [
				'AI-Powered Inspection Systems',
				'Real-Time Object Detection in Industry',
				'Future of Autonomous Vision Systems'
			]
		}
	}
];

export const contactInfo = [
	{
		icon: Mail,
		label: 'Email',
		value: 'hello@reactifyai.com',
		href: 'mailto:hello@reactifyai.com'
	},
	{
		icon: Phone,
		label: 'Phone',
		value: '+1 (555) 123-4567',
		href: 'tel:+15551234567'
	},
	{
		icon: MapPin,
		label: 'Location',
		value: 'San Francisco, CA',
		href: '#'
	}
];

export const socialLinks = [
	{ icon: X, href: '#', label: 'X' },
	{ icon: Linkedin, href: '#', label: 'LinkedIn' },
	{ icon: Github, href: '#', label: 'GitHub' },
	{ icon: Mail, href: 'mailto:hello@reactifyai.com', label: 'Email' }
];
/* ================== END: Constants ================== */
