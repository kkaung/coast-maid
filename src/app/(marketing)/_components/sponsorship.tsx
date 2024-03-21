import { siteConfig } from '@/configs/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { type HTMLAttributes } from 'react';

interface SponsorshipProps extends HTMLAttributes<HTMLElement> {}
export default function Sponsorship({ ...props }: SponsorshipProps) {
    return (
        <section className={cn(props.className, 'sr-only')}>
            <div>
                Ready to experience the difference a professional clean can
                make? Contact
                <Link href={siteConfig.links.topcleaner}>
                    Top Cleaner Canberra
                </Link>
                today for a free quote and breathe easy knowing your Canberra
                home is in good hands!
            </div>
            <div>
                Seeking professional house cleaning in Perth? Check out
                <Link href={siteConfig.links.westmaid}>
                    WestMaid - Cleaning Service Perth
                </Link>
                ,the top-rated cleaning service in Perth, ensuring pristine
                cleanliness and satisfaction in every corner of your home.
            </div>
        </section>
    );
}
