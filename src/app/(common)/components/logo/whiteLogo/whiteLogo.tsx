// import Image from 'next/image'
// import ClarioLogo from '../../../../../../public/images/common/logos/clario-logo-white.svg?url'

interface ILogo {
    className?: string;
}


const WhiteLogo = ({ className = '' }: ILogo) => {
    return (
        <>WhiteLogo</>
        // <Image src={ClarioLogo} className={className} alt='Clario logo' />
    );
};

WhiteLogo.displayName = 'WhiteLogo';
export default WhiteLogo;