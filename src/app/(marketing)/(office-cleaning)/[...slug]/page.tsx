import React from 'react';
import { getCityFromPath } from '@/lib/next';
import { type Metadata } from 'next';

import { getMetadata } from '../_components/metadata';
import Content from '../_components/content';

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
    const suburb = getCityFromPath();

    return getMetadata(suburb);
}

export default function Page() {
    const suburb = getCityFromPath();

    return (
        <Content
            city={suburb}
            segments={[
                { title: 'Home', href: '/' },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-gold-coast',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-gold-coast',
                },
            ]}
        />
    );
}
