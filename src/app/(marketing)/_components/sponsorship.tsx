import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';

interface SponsorshipProps extends HTMLAttributes<HTMLElement> {}
export default function Sponsorship({ ...props }: SponsorshipProps) {
    return (
        <section className={cn(props.className, 'sr-only')}>
            <div>
                {/* Are you looking for reliable cleaner in Gold Coast?{' '}
                <Link
                    href={siteConfig.links.westmaid}
                    target="_blank"
                    className="underline"
                >
                    Coast Maid
                </Link>{' '}
                is your go-to choice for impeccable cleanliness and unparalleled
                customer satisfaction. Experience the pinnacle of cleaning
                services with Coast Maid today! */}
            </div>
        </section>
    );
}
