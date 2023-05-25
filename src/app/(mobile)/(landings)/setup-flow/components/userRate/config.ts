import AppStoreRank from 'public/images/common/awards/app-store-rank.svg';
import GooglePlayRank from 'public/images/common/awards/google-play-rank.svg';
import { TrustSources } from '../../constants';

export enum UserRatesNames {
    AppStore = 'app-store',
    GooglePlay = 'google-play',
}

export const UserRatesAppsConfig = [
    {
        name: UserRatesNames.AppStore,
        source: TrustSources.AppStore,
        img: AppStoreRank,
        link: "https://apps.apple.com/us/app/clario-anti-spy/id1663473665"
    },
    {
        name: UserRatesNames.GooglePlay,
        source: TrustSources.GooglePlay,
        img: GooglePlayRank,
        link: "https://play.google.com/store/apps/details?id=com.clario.clario.mobile"
    },
];