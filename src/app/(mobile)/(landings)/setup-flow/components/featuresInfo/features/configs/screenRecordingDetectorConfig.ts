import Spyer from 'public/images/common/features/spyer.svg';
import BlockSpy from 'public/images/common/features/block-spy.svg';
import Alert from 'public/images/common/features/alert.svg';
import ScreenRecordingDetectorImage
    from 'public/images/mobile/landings/setup-flow/features/screen-record-detector.webp';
import { ScreenNames } from '@/app/(mobile)/(landings)/setup-flow/constants';

export const ScreenRecordingDetectorFeatureConfig = {
    name: ScreenNames.ScreenRecordingDetector,
    image: ScreenRecordingDetectorImage,
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