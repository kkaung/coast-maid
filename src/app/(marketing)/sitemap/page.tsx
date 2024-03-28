import {
    PageHeader,
    PageHeaderHeading,
    headingVariants,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { locations } from '@/configs/location';
import { siteConfig } from '@/configs/site';
import { cn } from '@/lib/utils';
import { allPages, allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Sitemap',
    description:
        'The sitemap provides an overview of all the pages on a website in an easy-to-read format for users and search engines. It helps visitors navigate the site structure and find desired content quickly.',
    alternates: {
        canonical: '/sitemap',
    },
};

export default function Page() {
    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Sitemap', href: '/sitemap' },
                ]}
                dottable={false}
            />
            <PageHeader>
                <PageHeaderHeading>Sitemap</PageHeaderHeading>
            </PageHeader>
            <section className="grid gap-6 grid-cols-1 md:grid-cols-2">
                <section className="space-y-4">
                    <h2 className={cn(headingVariants({ size: 'sm' }))}>
                        Pages
                    </h2>
                    <ul>
                        {allPages.map(i => (
                            <li key={i.title}>
                                <Link
                                    href={`/house-cleaning-${i.slug}`}
                                    className="hover:underline"
                                    title={`${i.title}`}
                                >
                                    {i.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="space-y-4">
                    <h2 className={cn(headingVariants({ size: 'sm' }))}>
                        Services
                    </h2>
                    <ul>
                        {siteConfig.mainNav[0].items!.map(i => (
                            <li key={i.title}>
                                <Link
                                    href={`${i.href}`}
                                    className="hover:underline"
                                    title={`${i.title}`}
                                >
                                    {i.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="space-y-4">
                    <h2 className={cn(headingVariants({ size: 'sm' }))}>
                        Posts
                    </h2>
                    <ul>
                        {allPosts.map(i => (
                            <li key={i.title}>
                                <Link
                                    href={`/${i.slugAsParams}`}
                                    className="hover:underline"
                                    title={`${i.title}`}
                                >
                                    {i.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="space-y-4">
                    <h2 className={cn(headingVariants({ size: 'sm' }))}>
                        House Cleaning
                    </h2>
                    <ul>
                        {locations[0].items.map(i => (
                            <li key={i.title}>
                                <Link
                                    href={`/${i.slug}`}
                                    className="hover:underline"
                                    title={`House Cleaner ${i.title}`}
                                >
                                    {i.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="space-y-4">
                    <h2 className={cn(headingVariants({ size: 'sm' }))}>
                        Bond Cleaning
                    </h2>
                    <ul>
                        {locations[0].items.map(i => (
                            <li key={i.title}>
                                <Link
                                    href={`/${i.slug}`}
                                    className="hover:underline"
                                    title={`House Cleaner ${i.title}`}
                                >
                                    {i.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="space-y-4">
                    <h2 className={cn(headingVariants({ size: 'sm' }))}>
                        Office Cleaning
                    </h2>
                    <ul>
                        {locations[0].items.map(i => (
                            <li key={i.title}>
                                <Link
                                    href={`/office-cleaning-${i.slug}`}
                                    className="hover:underline"
                                    title={`House Cleaner ${i.title}`}
                                >
                                    {i.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="space-y-4">
                    <h2 className={cn(headingVariants({ size: 'sm' }))}>
                        Carpet Cleaning
                    </h2>
                    <ul>
                        {locations[0].items.map(i => (
                            <li key={i.title}>
                                <Link
                                    href={`/carpet-cleaning-${i.slug}`}
                                    className="hover:underline"
                                    title={`Carpet Cleaner ${i.title}`}
                                >
                                    {i.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </section>
        </Shell>
    );
}
