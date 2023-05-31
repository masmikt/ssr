import Image from 'next/image'
import ClarioLogo from 'public/images/common/logos/clario-logo-white.svg'

interface ILogo {
    className?: string;
}


const WhiteLogo = ({ className = '' }: ILogo) => {
    return (
        <Image src={ClarioLogo}  priority className={className} alt='Clario logo' />
    );
};

WhiteLogo.displayName = 'WhiteLogo';
export default WhiteLogo;