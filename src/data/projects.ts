import type { ImageMetadata } from 'astro';
import boardspeakImage from '../assets/images/audioguide3.png';
import bcombsImage from '../assets/images/dsp7.png';
import sparlyimage from '../assets/images/sparly1.png';
import nestaraImage from '../assets/images/villagetreasure3.png';
import pockeyImage from '../assets/images/pockey1.png';
import passImage from '../assets/images/pass.png';
import livlytImage from '../assets/images/livlyt.png';


export type Project = {
	name: string;
	title: string;
	description: string;
	background: 'card1' | 'card2' | 'card3' | 'card4' | 'card5';
	variant: 'desktop' | 'split' | 'mobile' | 'board';
	href: string;
	image: ImageMetadata;
	alt: string;
	imageClass: string;
};

export const workPageSize = 10;

export const projects: Project[] = [

	{
		name: '',
		title: 'A context aware audioguide for museums',
		description:
			'A civic product concept that makes participation feel rewarding, visible, and easier to sustain over time.',
		background: 'card1',
		variant: 'board',
		href: '/work/audioguide',
		image: boardspeakImage,
		alt: 'BoardSpeak web app preview showing rewards and community interface',
		imageClass: 'project-preview-image',
	},
	{
		name: '',
		title: 'AI-powered advertising platform that makes campaign management feel simpler',
		description:
			'A more humane CRM experience for teams balancing operational detail with relationship-driven work.',
		background: 'card2',
		variant: 'split',
		href: '/work/dsp',
		image: bcombsImage,
		alt: 'b.combs CRM preview showing nonprofit workflow screens',
		imageClass: 'project-preview-image',
	},
	{
		name: '',
		title: 'A context aware audioguide for museums',
		description:
			'A civic product concept that makes participation feel rewarding, visible, and easier to sustain over time.',
		background: 'card3',
		variant: 'board',
		href: '/work/sparly',
		image: sparlyimage,
		alt: 'BoardSpeak web app preview showing rewards and community interface',
		imageClass: 'project-preview-image',
	},
	{
		name: '',
		title: 'A treasure hunting adventuremobile game',
		description:
			'A mobile-first experience focused on reassurance, next-step clarity, and decision confidence.',
		background: 'card4',
		variant: 'mobile',
		href: '/work/villagetreasure',
		image: nestaraImage,
		alt: 'Nestara mobile app preview showing real estate product screens',
		imageClass: 'project-preview-image',
	},
	{
		name: '',
		title: 'A treasure hunting adventuremobile game',
		description:
			'A mobile-first experience focused on reassurance, next-step clarity, and decision confidence.',
		background: 'card4',
		variant: 'mobile',
		href: '/work/pockeyapp',
		image: pockeyImage,
		alt: 'Nestara mobile app preview showing real estate product screens',
		imageClass: 'project-preview-image',
	},
	{
		name: '',
		title: 'A treasure hunting adventuremobile game',
		description:
			'A mobile-first experience focused on reassurance, next-step clarity, and decision confidence.',
		background: 'card4',
		variant: 'mobile',
		href: '/pdf/pass.pdf',
		image: passImage,
		alt: 'Nestara mobile app preview showing real estate product screens',
		imageClass: 'project-preview-image',
	},
	{
		name: '',
		title: 'A treasure hunting adventuremobile game',
		description:
			'A mobile-first experience focused on reassurance, next-step clarity, and decision confidence.',
		background: 'card4',
		variant: 'mobile',
		href: '/pdf/livlyt.pdf',
		image: livlytImage,
		alt: 'Nestara mobile app preview showing real estate product screens',
		imageClass: 'project-preview-image',
	},
	
];
