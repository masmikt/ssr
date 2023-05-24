import localFont from 'next/font/local';
import '@/app/(common)/styles/style.scss';
import { AnalyticsBrowser } from '@segment/analytics-next';

const moderat = localFont({
    variable: '--font-moderat',
    src: [
        {
            path: '../../public/fonts/Moderat-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Moderat-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Moderat-Light.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Moderat-Bold.otf',
            weight: '700',
            style: 'normal',
        },
    ],
});


export const metadata = {
    title: 'Clario',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const analytics = AnalyticsBrowser.load({ writeKey: 'F4ZFpKO0rJ8qnivaA7mW73eDwF6Ed6fX' });
    analytics.track('Hello Next SSR World');
    return (
        <html lang="en" className={moderat.className}>
        <body>{children}</body>
        </html>
    )
}
