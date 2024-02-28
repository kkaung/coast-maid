import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook:
        'https://www.linkedin.com/company/more-clean-house-cleaning-sydney',
    instagram: 'https://instagram.com/moreclean_au',
    twitter: 'https://twitter.com/moreclean_au',
    pinterest: 'https://www.pinterest.com.au/magicclean_au',
    linkin: 'https://www.linkedin.com/company/',
    youtube: 'https://www.youtube.com/channel/',
    googlemap: '',

    buynsw: 'https://buy.nsw.gov.au/supplier/profile',
    yelp: 'https://www.yelp.com/biz/',
};

export const siteConfig = {
    logo: 'MagicClean',
    name: 'Magic Clean',
    title: `Sydney's Premium House Cleaning Serivce | Magic Clean`,
    description: `Our top-rated cleaning services come with a 200% satisfaction guarantee. We deliver sparkling results you'll love with our professional cleaners. Book online in 60 seconds!`,
    url: 'https://moreclean.com.au',
    ogImage: 'https://moreclean.com.au/opengraph-image.png',
    mainNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Deep Cleaning',
                    href: '/deep-cleaning-gold-coast',
                },
                {
                    title: 'Regular Cleaning',
                    href: '/regular-cleaning-gold-coast',
                },
                {
                    title: 'End Of Lease Cleaning',
                    href: '/end-of-lease-cleaning-gold-coast',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-gold-coast',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning-gold-coast',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-gold-coast',
                },
                {
                    title: 'Window Cleaning',
                    href: '/window-cleaning-gold-coast',
                },
                {
                    title: 'Builder Cleaning',
                    href: '/builder-cleaning-gold-coast',
                },
                {
                    title: 'Airbnb Cleaning',
                    href: '/airbnb-cleaning-gold-coast',
                },
            ],
        },
        {
            title: 'Pricing',
            href: '/house-cleaning-pricing-sydney',
        },
    ] satisfies MainNavItem[],
    links,
    footerNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Deep Cleaning',
                    href: '/deep-cleaning-gold-coast',
                },
                {
                    title: 'Regular Cleaning',
                    href: '/regular-cleaning-gold-coast',
                },
                {
                    title: 'End Of Lease Cleaning',
                    href: '/end-of-lease-cleaning-gold-coast',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-gold-coast',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning-gold-coast',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-gold-coast',
                },
                {
                    title: 'Window Cleaning',
                    href: '/window-cleaning-gold-coast',
                },
                {
                    title: 'Builder Cleaning',
                    href: '/builder-cleaning-gold-coast',
                },
                {
                    title: 'Airbnb Cleaning',
                    href: '/airbnb-cleaning-gold-coast',
                },
            ],
        },
        {
            title: 'Useful Links',
            items: [
                { title: 'Services', href: '/cleaning-services' },
                { title: 'Contact Us', href: '/contact' },
                { title: 'Blog', href: '/blog' },
                {
                    title: 'Pricing',
                    href: '/house-cleaning-pricing-gold-coast',
                },
                { title: 'Checklist', href: '/house-cleaning-checklist' },
                { title: 'FAQs', href: '/frequently-asked-questions' },
                { title: 'Privacy Policy', href: '/privacy' },
                { title: 'Terms And Conditions', href: '/terms' },
            ],
        },
        {
            title: 'Company',
            items: [
                { title: 'About Us', href: '/about' },
                { title: 'Careers', href: '/careers' },
            ],
        },
    ] satisfies FooterItem[],
    business: {
        email: 'contact@moreclean.com.au',
        phone: '1302 245 417',
        address: '401/249 George St, 2017 NSW',
        openingHour: 'Mon – Sun: 9:00 AM – 5:00 PM',
    },
    rating: {
        ratingValue: '4.9',
        ratingCount: '727',
    },
};

export const siteServices: {
    title: string;
    slug: string;
    icon?: keyof typeof Icons;
}[] = [];
