import localFont from 'next/font/local';
import '@/app/(common)/styles/style.scss';
import { AppProviders } from '@/app/(common)/contexts';

const moderat = localFont({
    variable: '--font-moderat',
    src: [
        {
            path: '../../public/fonts/Moderat-Regular.otf',
            weight: '400',
            style: 'normal',
            fontDisplay: 'swap'
        },
        {
            path: '../../public/fonts/Moderat-Medium.otf',
            weight: '500',
            style: 'normal',
            fontDisplay: 'swap'
        },
        {
            path: '../../public/fonts/Moderat-Light.otf',
            weight: '300',
            style: 'normal',
            fontDisplay: 'swap'
        },
        {
            path: '../../public/fonts/Moderat-Bold.otf',
            weight: '700',
            style: 'normal',
            fontDisplay: 'swap'
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
        <AppProviders>
            {children}
        </AppProviders>
        </body>
        </html>
    )
}