import Image from 'next/image'
import VideoFallbackImage from 'public/images/mobile/landings/setup-flow/find-spyware-video-img.webp';
import css from './presentationVideo.module.scss';

const PresentationVideoImage = () => {
    return (
        <Image src={VideoFallbackImage} alt="video bg" className={css['presentation-video__image']} />
    );
}

PresentationVideoImage.displayName = 'PresentationVideoImage';
export default PresentationVideoImage;