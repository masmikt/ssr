import ScreenRecordingDetectorImage from 'public/images/mobile/landings/setupFlow/features/screen-record-detector.webp';
import ScreenRecordingDetectorImage2x from 'public/images/mobile/landings/setupFlow/features/screen-record-detector@2x.webp';
import Spyer from 'public/images/common/features/spyer.svg';
import BlockSpy from 'public/images/common/features/block-spy.svg';
import Alert from 'public/images/common/features/alert.svg';
import { ScreenNames } from '../../../../constants';


export const ScreenRecordingDetectorFeatureConfig = {
    name: ScreenNames.ScreenRecordingDetector,
    image: {
        default: ScreenRecordingDetectorImage,
        retina: ScreenRecordingDetectorImage2x
    },
    title: 'Recording detector',
    text: `Stop anyone from accessing your phone screen, camera, or microphone.`,
    features: [
        {
            name: 'screen recorded',
            icon: Spyer,
            description: {
                text: 'Learn if someone captures your screen',
            }
        },
        {
            name: 'stop silent recordings',
            icon: BlockSpy,
            description: {
                text: 'Detect silent screen recording',
            }
        },
        {
            name: 'camera in use',
            icon: Alert,
            description: {
                text: 'Get alerts when your mic is in use',
            }
        },
    ]
}