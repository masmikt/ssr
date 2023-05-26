import CallRecorderBlockerImage from 'public/images/mobile/landings/setupFlow/features/call-recorder-blocker.webp';
import Device from 'public/images/common/features/device.svg';
import Widget from 'public/images/common/features/widget.svg';
import Alarm from 'public/images/common/features/alarm.svg';
import { ScreenNames } from '../../../../constants';

export const CallRecorderBlockerFeatureConfig = {
    name: ScreenNames.CallRecorderBlocker,
    image: CallRecorderBlockerImage,
    title: 'Call recording protection',
    text: 'Prevent your calls and chats from being secretly tapped.',
    features: [
        {
            name: 'hide call history',
            icon: Device,
            description: {
                text: 'Check for call history tracking',
            }
        },
        {
            name: 'contact list sharing',
            icon: Widget,
            description: {
                text: 'Find apps storing your contact list',
            }
        },
        {
            name: 'secret texts',
            icon: Alarm,
            description: {
                text: 'Help secret texts stay secret',
            }
        },
    ]
}