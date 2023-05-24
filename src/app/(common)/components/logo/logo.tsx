import dynamic from 'next/dynamic';

const DefaultLogo = dynamic(() => import('./defaultLogo/defaultLogo'));
const WhiteLogo = dynamic(() => import('./whiteLogo/whiteLogo'));

interface ILogo {
    isWhite?: boolean;
    className?: string;
}

const Logo = ({ isWhite = false, className = '' }: ILogo) => {
    return (isWhite ? <WhiteLogo className={className} /> : <DefaultLogo className={className} />
    );
};

Logo.displayName = 'Logo';
export default Logo;
