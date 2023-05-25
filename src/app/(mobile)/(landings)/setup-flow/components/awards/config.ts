import GoldenKittyRank from 'public/images/common/awards/golden-kitty-rank.svg';
import AppStoreRank from 'public/images/common/awards/app-store-rank.svg';
import MacWorldRank from 'public/images/common/awards/macworld-rank.svg';
import GooglePlayRank from 'public/images/common/awards/google-play-rank.svg';
import { TrustSources } from '../../constants';

export enum AwardsNames {
    AppStore = 'app-store',
    GooglePlay = 'google-play',
    GoldenKitty = 'golden-kitty',
    MacWorld = 'macworld',
}

export const AwardsList = {
    [AwardsNames.AppStore]: {
        name: AwardsNames.AppStore,
        img: AppStoreRank,
        source: TrustSources.AppStore,
        link: "https://apps.apple.com/us/app/clario-anti-spy/id1663473665"
    },
    [AwardsNames.GooglePlay]: {
        name: AwardsNames.GooglePlay,
        source: TrustSources.GooglePlay,
        img: GooglePlayRank,
        link: "https://play.google.com/store/apps/details?id=com.clario.clario.mobile"
    },
    [AwardsNames.GoldenKitty]: {
        name: AwardsNames.GoldenKitty,
        img: GoldenKittyRank,
        source: TrustSources.GoldenKitty,
        link: "https://www.producthunt.com/posts/clario-2"
    },
    [AwardsNames.MacWorld]: {
        name: AwardsNames.MacWorld,
        img: MacWorldRank,
        source: TrustSources.MacWorld,
        link: "https://www.macworld.com/article/800037/clario-antivirus-1-5-for-mac-review.html"
    },
}