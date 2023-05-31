import localFont from 'next/font/local';
import '@/app/(common)/styles/style.scss';

const moderat = localFont({
    variable: '--font-moderat',
    fallback: ['Poppins', 'Helvetica', 'sans-serif'],
    display: 'swap',
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
    return (
        <html lang="en" className={`${moderat.variable}`}>
        <head>
            <link rel="icon" href="favicon.ico" sizes="any" />
        </head>
        <body>
        {children}
        </body>
        </html>
    )
}