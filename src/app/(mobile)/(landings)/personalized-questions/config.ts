import { PersonalizedQuestionsTopics } from '@/app/(mobile)/(landings)/personalized-questions/pageList';

const TopicsConfig = {
    [PersonalizedQuestionsTopics.TextAndCalls]: {
        key: PersonalizedQuestionsTopics.TextAndCalls,
        img: '/images/mobile/landings/personalizedQuestions/text-and-calls.svg',
        label: 'Texts and calls',
    },
    [PersonalizedQuestionsTopics.DeviceAgainstSpyware]: {
        key: PersonalizedQuestionsTopics.DeviceAgainstSpyware,
        img: '/images/mobile/landings/personalizedQuestions/device-against-spyware.svg',
        label: 'Device against spyware',
    },
    [PersonalizedQuestionsTopics.Location]: {
        key: PersonalizedQuestionsTopics.Location,
        img: '/images/mobile/landings/personalizedQuestions/location.svg',
        label: 'Location',
    },
    [PersonalizedQuestionsTopics.PersonalData]: {
        key: PersonalizedQuestionsTopics.PersonalData,
        img: '/images/mobile/landings/personalizedQuestions/personal-data.svg',
        label: 'Personal data',
    },
    [PersonalizedQuestionsTopics.SocialMediaAccounts]: {
        key: PersonalizedQuestionsTopics.SocialMediaAccounts,
        img: '/images/mobile/landings/personalizedQuestions/social-media-accounts.svg',
        label: 'Social media accounts',
    },
    [PersonalizedQuestionsTopics.OnlineAnonymity]: {
        key: PersonalizedQuestionsTopics.OnlineAnonymity,
        img: '/images/mobile/landings/personalizedQuestions/online-anonymity.svg',
        label: 'Online anonymity',
    },
};

export const TopicsListConfig = [
    TopicsConfig[PersonalizedQuestionsTopics.TextAndCalls],
    TopicsConfig[PersonalizedQuestionsTopics.DeviceAgainstSpyware],
    TopicsConfig[PersonalizedQuestionsTopics.Location],
    TopicsConfig[PersonalizedQuestionsTopics.PersonalData],
    TopicsConfig[PersonalizedQuestionsTopics.SocialMediaAccounts],
    TopicsConfig[PersonalizedQuestionsTopics.OnlineAnonymity],

];

export function getActiveTopicLabels(activeTopics: Record<PersonalizedQuestionsTopics, boolean>) {
    return (Object.entries(activeTopics) as [PersonalizedQuestionsTopics, boolean][])
        .filter(([, value]) => value)
        .map(([key]) => TopicsConfig[key]?.label);
}