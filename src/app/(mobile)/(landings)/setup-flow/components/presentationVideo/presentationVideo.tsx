import css from './presentationVideo.module.scss';


const PresentationVideo = () => {
    return (
        <div className={css["presentation-video"]}>
            <video autoPlay loop muted>
                <source src={"videos/setupFlow/setup-intro-opt.mp4"} width="272px" height="304px" type="video/mp4" />
                <img src={'images/mobile/landings/setup-flow/find-spyware-video-img.webp'} />
            </video>
        </div>
    )
}


PresentationVideo.displayName = 'PresentationVideo';
export default PresentationVideo;