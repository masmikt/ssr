import css from './presentationVideo.module.scss';
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import PresentationVideoImage from './presentationVideoImage';


const PresentationVideo = () => {
    return (
        <div className={css["presentation-video"]}>
            <ReactPlayer
                url={"/videos/setupFlow/setup-intro-opt.mp4"}
                loop playing muted playsinline width="100%"
                fallback={<PresentationVideoImage />}
                height="100%" />
        </div>
    )
}


PresentationVideo.displayName = 'PresentationVideo';
export default PresentationVideo;