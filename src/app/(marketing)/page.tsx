import { Shell } from '@/components/shell';
import { type Metadata } from 'next';
import React from 'react';
import {
    BrandJsonLd,
    BreadcrumbJsonLd,
    OrganizationJsonLd,
    ProductJsonLd,
    WebPageJsonLd,
} from 'next-seo';

import Hero from './_components/hero';
import HowWork from './_components/how-work';
import Reviews from './_components/reviews';
import FAQs from './_components/faqs';
import Checklist from './_components/checklist';
import Features from './_components/features';
import Gurantee from './_components/gurantee';
import LatestBlog from './_components/latest-blog';
import { absoluteUrl } from '@/lib/utils';
import { siteConfig } from '@/configs/site';
import Commitment from '@/components/commitment';

import Featuring from './_components/featuring';
import SocialVideos from '@/components/social-videos';
import { ServicesDialog } from '@/components/services-dialog';
import Services from './_components/services';
import About from '@/components/about';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: `Gold Coast's Top-Rated House Cleaning Service`,
    description: `Our top-rated cleaning services come with a 200% satisfaction guarantee. We deliver sparkling results you'll love with our cleaners. Book online in 60 seconds!`,
};

export default function Page() {
    return (
        <>
            <Shell>
                <Hero />
                <Reviews location="Sydney" />
                <HowWork />
                <Features />
                <Services />
                <Checklist />
                <Gurantee />
                <FAQs />
                <About />
                <LatestBlog />
                <Commitment />
            </Shell>
            <OrganizationJsonLd
                useAppDir
                id={absoluteUrl('/')}
                name={`${siteConfig.name} | Professional Cleaning Service Gold Coast`}
                description={siteConfig.description}
                legalName={siteConfig.name}
                url={absoluteUrl('/')}
                logo={absoluteUrl('/')}
                sameAs={[
                    siteConfig.links.facebook,
                    siteConfig.links.linkin,
                    siteConfig.links.instagram,
                    siteConfig.links.twitter,
                    siteConfig.links.youtube,
                    siteConfig.links.pinterest,
                ]}
                address={{
                    streetAddress: '10 Rowes St',
                    addressLocality: 'Gold Coast',
                    addressRegion: 'QLD',
                    postalCode: '4217',
                    addressCountry: 'AU',
                }}
            />
            <BrandJsonLd
                useAppDir
                id={absoluteUrl('/')}
                aggregateRating={{
                    bestRating: 5,
                    worstRating: 1,
                    ratingCount: siteConfig.rating.ratingCount,
                    ratingValue: siteConfig.rating.ratingValue,
                }}
            />
            <BreadcrumbJsonLd
                useAppDir
                itemListElements={[
                    {
                        position: 1,
                        name: 'Home',
                        item: absoluteUrl(''),
                    },
                ]}
            />
        </>
    );
}
