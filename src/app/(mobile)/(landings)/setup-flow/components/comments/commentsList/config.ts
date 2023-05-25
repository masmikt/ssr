import TrustPilot from 'public/images/common/reviews/trustpilot.svg';
import GooglePlay from 'public/images/common/reviews/google-play.svg';
import AppStore from 'public/images/common/reviews/app-store.svg';


export enum CommentsResources {
    AppStore = 'appStore',
    GooglePlay = 'googlePlay',
    TrustPilot = 'trustPilot'
}

export const CommentsConfig = [
    {
        resource: CommentsResources.GooglePlay,
        img: GooglePlay,
        comment: `The best app you could find! I had a problem of malware which added unknown accounts to my device. 
        The "Talk to experts" feature saved the day! I was helped in all possible ways.
         Prompt and useful support from the team. 10/10 recommended!`,
        author: 'Shahu Sardar',
    },
    {
        resource: CommentsResources.TrustPilot,
        img: TrustPilot,
        comment: `My boyfriend put a tracking device on my phone. 
        He could see all my messages and even where I have been (he wouldn't let me go through his phone btw). 
        Once I got Clario I knew my phone was safe. At least now we're even!`,
        author: 'Manweet',
    },
    {
        resource: CommentsResources.TrustPilot,
        img: TrustPilot,
        comment: `Great service! They were an amazing help with making sure my device is secure.`,
        author: 'Megan_N',
    },
    {
        resource: CommentsResources.AppStore,
        img: AppStore,
        comment: `My wife was trying to go on my Whatsapp all the time for no reason, so I started carrying my
         phone with me all the time. That led to constant squabbles, cause she was sure I had something to hide,
          ridiculous. I saw this Clario advertisement and got it. It's...`,
        author: 'Zagkri',
    },
]