import { type PropsWithChildren } from 'react';
import { SiteHeader } from '@/components/layouts/site-header';
import SiteFooter from '@/components/layouts/site-footer';
import { graphSchemas } from '@/lib/dts-schema';

export default async function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <div className="relative h-full flex min-h-screen flex-col">
                <SiteHeader />
                <main className="flex-1">{children}</main>
                <SiteFooter />
            </div>
        </>
    );
}
