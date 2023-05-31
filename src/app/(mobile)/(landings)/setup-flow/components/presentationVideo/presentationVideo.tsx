import css from './presentationVideo.module.scss';
import Image from 'next/image';


const PresentationVideo = () => {
    return (
        <div className={css["presentation-video"]}>
            <video autoPlay loop muted>
                <source src={"videos/setupFlow/setup-intro-opt.mp4"} width="272px" height="304px" type="video/mp4" />
                <Image src={'images/mobile/landings/setup-flow/find-spyware-video-img.webp'} width="272" height="304" alt="video" />
            </video>
        </div>
    )
}


PresentationVideo.displayName = 'PresentationVideo';
export default PresentationVideo;