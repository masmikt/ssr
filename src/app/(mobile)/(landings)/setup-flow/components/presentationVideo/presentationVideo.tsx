import css from './presentationVideo.module.scss';
import dynamic from 'next/dynamic'

import PresentationVideoImage from './presentationVideoImage';


const PresentationVideo = () => {
    return (
        <div className={css["presentation-video"]}>
            <ReactPlayer
                url={"videos/setupFlow/setup-intro-opt.mp4"}
                loop playing muted playsinline width="272px"
                fallback={<PresentationVideoImage />}
                height="304px" />
        </div>
    )
}


PresentationVideo.displayName = 'PresentationVideo';
export default PresentationVideo;