export const navItems = [
	{ id: 1, name: 'About', link: '#about' },
	{ id: 2, name: 'Projects', link: '#projects' },
	// { id: 3, name: 'Blog', link: '/blog' },
	{ id: 4, name: 'Contact', link: '/contact' },
];

export const gridItems = [
	// {
	// 	id: 1,
	// 	title: 'I prioritize client collaboration, fostering open communication ',
	// 	description: '',
	// 	className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
	// 	imgClassName: 'w-full h-full',
	// 	titleClassName: 'justify-end',
	// 	img: '/b1.svg',
	// 	spareImg: '',
	// },
	{
		id: 1,
		title: 'About Me',
		description:
			'I am a self-motivated web developer with hands-on experience in JavaScript, React, Next.js, Tailwind CSS, MUI, and Bootstrap. Additionally, I have expertise in PHP, WordPress, Joomla, and Technical Support. I specialize in creating dynamic, responsive websites and applications. I am passionate about learning new technologies and continuously improving my coding skills. With strong problem-solving abilities and a keen eye for detail, I am eager to contribute to a collaborative team environment and deliver high-quality web solutions.',
		className: 'lg:col-span-3 md:col-span-6 md:row-span-1',
		imgClassName: 'w-full h-full',
		titleClassName: 'justify-end',
		img: '',
		spareImg: '',
	},
	// {
	// 	id: 2,
	// 	title: "I'm very flexible with time zone communications",
	// 	description: '',
	// 	className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
	// 	imgClassName: '',
	// 	titleClassName: 'justify-start',
	// 	img: '',
	// 	spareImg: '',
	// },
	{
		id: 3,
		title: 'My tech stack',
		description: 'I constantly try to improve',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-center',
		img: '',
		spareImg: '',
	},
	// {
	// 	id: 4,
	// 	title: 'Tech enthusiast with a passion for development.',
	// 	description: '',
	// 	className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
	// 	imgClassName: '',
	// 	titleClassName: 'justify-start',
	// 	img: '/grid.svg',
	// 	spareImg: '/b4.svg',
	// },

	// {
	// 	id: 5,
	// 	title: 'Currently building a JS Animation library',
	// 	description: 'The Inside Scoop',
	// 	className: 'md:col-span-3 md:row-span-2',
	// 	imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
	// 	titleClassName: 'justify-center md:justify-start lg:justify-center',
	// 	img: '/b5.svg',
	// 	spareImg: '/grid.svg',
	// },
	{
		id: 6,
		title: 'Do you want to start a project together?',
		description: '',
		className: 'lg:col-span-3 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
		img: '',
		spareImg: '',
	},
];

export const projects = [
	{
		id: 1,
		title: 'Computerline - Redesign and Customization',
		des: 'I revamped the Computerline Joomla website!  Made it multilingual with 4 languages for a wider audience. ',
		img: '/projects/computerline.png',
		iconLists: [
			{
				id: 1,
				name: 'Joomla',
				image: '/joomla.svg',
			},
			{
				id: 2,
				name: 'PHP',
				image: '/php.svg',
			},
		],
		sourceLink: '#',
		link: 'https://www.computerline.com/index.php/en/',
	},
	{
		id: 2,
		title: 'Nike - a Landing Page',
		des: 'Built Nike-inspired landing page with React & Tailwind CSS. Learned Tailwind CSS utility-first style, making design fast and easy.',
		img: '/projects/nike.png',
		iconLists: [
			{
				id: 1,
				name: 'ReactJs',
				image: '/re.svg',
			},
			{
				id: 2,
				name: 'Tailwind CSS',
				image: '/tail.svg',
			},
		],
		sourceLink: 'https://github.com/mazharvai007/nike',
		link: 'https://nike-rosy.vercel.app/',
	},
	{
		id: 3,
		title: 'Restaurant',
		des: 'Built a user-friendly restaurant app with React JS! It is smooth, responsive, and interactive - perfect for mobile and desktop. Excited to see it help restaurants!',
		img: '/projects/restaurant.png',
		iconLists: [
			{
				id: 1,
				name: 'ReactJs',
				image: '/re.svg',
			},
			{
				id: 2,
				name: 'CSS',
				image: '/css.svg',
			},
		],
		sourceLink: 'https://github.com/mazharvai007/ml-gericht',
		link: 'https://mlgericht.netlify.app/',
	},
	{
		id: 4,
		title: '3D Portfolio - for Developers',
		des: 'Create a cool 3D developer portfolio with React & Three.js! Show off skills with interactive elements and stand out to employers.',
		img: '/projects/3d-portfolio.png',
		iconLists: [
			{
				id: 1,
				name: 'ReactJs',
				image: '/re.svg',
			},
			{
				id: 2,
				name: 'Tailwind CSS',
				image: '/tail.svg',
			},
			{
				id: 3,
				name: 'ThreeJs',
				image: '/three.svg',
			},
		],
		sourceLink: 'https://github.com/mazharvai007/ml_3d_portfolio',
		link: 'https://ml-3d-portfolio.netlify.app/',
	},
	{
		id: 5,
		title: 'GPT-3',
		des: 'Built a React app from scratch to explore GPT-3. Leveled up my React skills and coded everything myself',
		img: '/projects/gpt3.png',
		iconLists: [
			{
				id: 1,
				name: 'ReactJs',
				image: '/re.svg',
			},
			{
				id: 2,
				name: 'CSS',
				image: '/css.svg',
			},
		],
		sourceLink: 'https://github.com/mazharvai007/ml-gpt3',
		link: 'https://mlgpt3.netlify.app/',
	},
	{
		id: 6,
		title: 'Prompt Save - Discover & Share AI-Powered Prompts',
		des: 'Built an AI prompt sharing app! Share, discover & edit prompts for AI models. Uses MongoDB & NextAuth for data & security. ',
		img: '/projects/prompt-save.png',
		iconLists: [
			{
				id: 1,
				name: 'NextJs',
				image: '/next.svg',
			},
			{
				id: 2,
				name: 'Tailwind CSS',
				image: '/tail.svg',
			},
			{
				id: 3,
				name: 'MongoDB',
				image: '/mongodb.svg',
			},
		],
		sourceLink: 'https://github.com/mazharvai007/ml_prompt',
		link: 'https://prompt-save.vercel.app/',
	},
];

export const testimonials = [
	{
		id: 1,
		quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: 'Michael Johnson',
		title: 'Director of AlphaStream Technologies',
		clientImg: '/profile.svg',
	},
	{
		id: 2,
		quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: 'Michael Johnson',
		title: 'Director of AlphaStream Technologies',
		clientImg: '/profile.svg',
	},
	{
		id: 3,
		quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: 'Michael Johnson',
		title: 'Director of AlphaStream Technologies',
		clientImg: '/profile.svg',
	},
	{
		id: 4,
		quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: 'Michael Johnson',
		title: 'Director of AlphaStream Technologies',
		clientImg: '/profile.svg',
	},
	{
		id: 5,
		quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: 'Michael Johnson',
		title: 'Director of AlphaStream Technologies',
		clientImg: '/profile.svg',
	},
];

export const companies = [
	{
		id: 1,
		name: 'cloudinary',
		img: '/cloud.svg',
		nameImg: '/cloudName.svg',
	},
	{
		id: 2,
		name: 'appwrite',
		img: '/app.svg',
		nameImg: '/appName.svg',
	},
	{
		id: 3,
		name: 'HOSTINGER',
		img: '/host.svg',
		nameImg: '/hostName.svg',
	},
	{
		id: 4,
		name: 'stream',
		img: '/s.svg',
		nameImg: '/streamName.svg',
	},
	{
		id: 5,
		name: 'docker.',
		img: '/dock.svg',
		nameImg: '/dockerName.svg',
	},
];

export const workExperience = [
	{
		id: 1,
		title: 'Joomla Developer',
		company: 'ThemeXpert',
		desc: 'Built Joomla templates & extensions, developed Quix page builder elements & layouts. Created video tutorials for everything!',
		className: 'md:col-span-2',
		thumbnail: '/exp1.svg',
		startDate: 'Jan 2024',
		endDate: 'Apr 2024',
	},
	{
		id: 2,
		title: 'Technical Support Engineer',
		company: 'ThemeXpert',
		desc: 'Helped WordPress & Joomla users over the Live Chat & email. Fixed theme, plugin & Quix page builder issues. Wrote clear guides for users and detailed bug reports for developers. ',
		className: 'md:col-span-2', // change to md:col-span-2
		thumbnail: '/exp2.svg',
		startDate: 'Aug 2016',
		endDate: 'Dec 2023',
	},
	{
		id: 3,
		title: 'Web Developer',
		company: 'OVO Technology',
		desc: 'Developed web apps at OVO Technology with Joomla & WordPress. Customized solutions, ensured smooth operation.',
		className: 'md:col-span-2', // change to md:col-span-2
		thumbnail: '/exp3.svg',
		startDate: 'Jul 2014',
		endDate: 'Jun 2016',
	},
	{
		id: 4,
		title: 'Web Design & Developer',
		company: 'ABH World',
		desc: 'Started career at ABH World. Learned Joomla & WordPress fast, built websites for clients. Strong foundation in web development, delivered high-quality results.',
		className: 'md:col-span-2',
		thumbnail: '/exp4.svg',
		startDate: 'Mar 2013',
		endDate: 'Jun 2014',
	},
];

export const socialMedia = [
	{
		id: 1,
		name: 'Git',
		img: '/git.svg',
		link: 'https://github.com/mazharvai007',
	},
	{
		id: 2,
		name: 'Twitter',
		img: '/twit.svg',
		link: 'https://x.com/mazharvai007',
	},
	{
		id: 3,
		name: 'Linkedin',
		img: '/link.svg',
		link: 'https://www.linkedin.com/in/mazharvai007/',
	},
];

export const techStack = [
	{
		id: 1,
		name: 'React.js',
	},
	{
		id: 2,
		name: 'Next.js',
	},
	{
		id: 3,
		name: 'TypeScript',
	},
	{
		id: 4,
		name: 'JavaScript',
	},
	{
		id: 5,
		name: 'Tailwind CSS',
	},
	{
		id: 6,
		name: 'Bootstrap',
	},
	{ id: 7, name: 'Material UI' },
	{ id: 8, name: 'PHP' },
	{ id: 9, name: 'Joomla' },
	{ id: 10, name: 'WordPress' },
	{ id: 11, name: 'Framer Motion' },
	{ id: 12, name: 'Three.js' },
	{ id: 13, name: 'Node' },
	{ id: 14, name: 'Express' },
	{ id: 15, name: 'MongoDB' },
	{ id: 16, name: 'MySQL' },
	{ id: 17, name: 'Aceternity UI' },
];
