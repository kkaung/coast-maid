import React from 'react';
import { type Metadata } from 'next';
import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { Shell } from '@/components/shell';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: 'Book Your End Lease Cleaning Service Now',
    description: 'Book online in less than 60 seconds.',
};

export default function Page() {
    return (
        <Shell>
            <PageHeader>
                <PageHeaderHeading>Book Your Cleaning</PageHeaderHeading>
            </PageHeader>
        </Shell>
    );
}
