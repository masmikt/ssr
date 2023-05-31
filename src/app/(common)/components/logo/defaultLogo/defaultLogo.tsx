import Image from 'next/image'
import ClarioLogo from 'public/images/common/logos/clario-logo.svg'

interface ILogo {
    className?: string;
}

const DefaultLogo = ({ className = '' }: ILogo) => {
    return (
        <Image src={ClarioLogo} className={className} priority alt='Clario Logo' />
    );
};

DefaultLogo.displayName = 'DefaultLogo';
export default DefaultLogo;
