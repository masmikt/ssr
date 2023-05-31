import localFont from 'next/font/local';
import '@/app/(common)/styles/style.scss';
import { Suspense } from 'react';
import { AppProviders } from '@/app/(common)/contexts';
import { Loader } from '@/app/(common)/components/loader';

const moderat = localFont({
    variable: '--font-moderat',
    display: 'swap',
    src: [
        {
            path: '../../public/fonts/Moderat-Regular.woff2',
            weight: '400',
            style: 'normal',

        },
        {
            path: '../../public/fonts/Moderat-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Moderat-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Moderat-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
});

export const metadata = {
    title: 'Clario',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={moderat.className}>
        <body>
        <Suspense fallback={<Loader />}>
            <AppProviders>
                {children}
            </AppProviders>
        </Suspense>
        </body>
        </html>
    )
}