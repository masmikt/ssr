import Image from 'next/image'
import VideoFallbackImage from 'public/images/mobile/landings/setup-flow/find-spyware-video-img.webp';
import css from './presentationVideo.module.scss';

const PresentationVideoImage = () => {
    return (
        <Image
            src={VideoFallbackImage}
            alt="video bg"
            className={css['presentation-video__image']}
            width={272}
            height={304}
            priority={true} />
    );
}

PresentationVideoImage.displayName = 'PresentationVideoImage';
export default PresentationVideoImage;