// import Image from 'next/image'
// import ClarioLogo from '../../../../../../public/images/common/logos/clario-logo.svg?url'

interface ILogo {
    className?: string;
}

const DefaultLogo = ({ className = '' }: ILogo) => {
    return (
        <>DefaultLogo</>
        // <Image src={ClarioLogo} className={className} alt='Clario Logo' />
    );
};

DefaultLogo.displayName = 'DefaultLogo';
export default DefaultLogo;
