export type SiteLink = {
	href: string;
	label: string;
};

export type SiteConfig = {
	name: string;
	title: string;
	description: string;
	siteUrl: string;
	email: string;
	locale: string;
	authorName: string;
	authorRole: string;
	keywords: string[];
	ogImage: string;
	navLinks: SiteLink[];
	extraPages: SiteLink[];
	legalLinks: SiteLink[];
	socialLinks: SiteLink[];
};

const defaultSiteUrl = 'https://maria-lake.vercel.app';
const envSiteUrl = process.env.SITE_URL ?? process.env.PUBLIC_SITE_URL;
const normalizedSiteUrl = (envSiteUrl || defaultSiteUrl).replace(/\/+$/, '');

export const siteConfig: SiteConfig = {
	name: 'Anand',
	title: 'Anand | UI/UX Design Portfolio',
	description:
		'UI/UX design portfolios, case studies by Anand.',
	// Set SITE_URL or PUBLIC_SITE_URL to keep canonicals, robots.txt, and the sitemap aligned in each environment.
	siteUrl: normalizedSiteUrl,
	email: 'anandpnr123@gmail.com',
	locale: 'en-US',
	authorName: 'Anand',
	authorRole: 'UX Designer',
	keywords: [
		'UI Design',
		'UI UX design portfolio',
		'product designer portfolio',
		'case study portfolio',
	],
	ogImage: '/og-image.svg',
	navLinks: [
		{ href: '/work', label: 'Work' },
		{ href: '/about', label: 'About' },
		{ href: '/resume', label: 'Resume' },
	],
	extraPages: [
		{ href: '/work/nextpoint', label: 'Case Study' },
		{ href: '/cookies', label: 'Cookies' },
		{ href: '/privacy', label: 'Privacy' },
		{ href: '/terms', label: 'Terms' },
		{ href: '/404', label: '404' },
	],
	legalLinks: [

	],
	socialLinks: [
		{ href: 'https://www.linkedin.com/', label: 'LinkedIn' },
		{ href: 'https://dribbble.com/', label: 'Dribbble' },
	],
};
