import { size } from '@/app/icon';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
    headingVariants,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { cn } from '@/lib/utils';
import { allPages } from 'contentlayer/generated';
import Link from 'next/link';
import React from 'react';

export default function Page() {
    return (
        <Shell>
            <PageHeader>
                <PageHeaderHeading>Sitemap</PageHeaderHeading>
            </PageHeader>
            <section>
                <section className="space-y-4">
                    <h2 className={cn(headingVariants({ size: 'sm' }))}>
                        Pages
                    </h2>
                    <ul>
                        {allPages.map(i => (
                            <li key={i.title}>
                                <Link
                                    href={`/${i.slug}`}
                                    className="hover:underline"
                                >
                                    {i.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
                <section>
                    
                </section>
            </section>
        </Shell>
    );
}
