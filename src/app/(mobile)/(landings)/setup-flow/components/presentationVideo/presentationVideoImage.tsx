import Image from 'next/image';
import css from './presentationVideo.module.scss';
import VideoFallbackImage from 'public/images/mobile/landings/setupFlow/find-spyware-video-img.webp';


const PresentationVideoImage = () => {
    return (
        <></>
        // <Image
        //     src={VideoFallbackImage}
        //     alt="video bg"
        //     className={css['presentation-video__image']}
        //     width={272}
        //     height={304}
        //     priority={true} />
    );
}

PresentationVideoImage.displayName = 'PresentationVideoImage';
export default PresentationVideoImage;