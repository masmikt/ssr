import {
    PhoneTalksConfig,
    CallRecordingConfig,
    PhoneBatteryConfig,
    LightningUpConfig,
    FindPhoneInDiffLocationConfig,
    PhoneTrackingConfig,
    KnowYourLocationConfig,
    ProtectSocialAccountsConfig,
    ProtectPersonalDataConfig,
    PhonePasscodeConfig,
    OnlineActivityConfig
} from './pages';
import { PersonalizedQuestionsPages } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/pageList';

export const PersonalizedQuestionsComponentsConfig: Record<string, any> = {
    [PersonalizedQuestionsPages.PhoneTalks]: PhoneTalksConfig,
    [PersonalizedQuestionsPages.CallRecording]: CallRecordingConfig,
    [PersonalizedQuestionsPages.PhoneBattery]: PhoneBatteryConfig,
    [PersonalizedQuestionsPages.LightningUp]: LightningUpConfig,
    [PersonalizedQuestionsPages.FindPhoneInDiffLocation]: FindPhoneInDiffLocationConfig,
    [PersonalizedQuestionsPages.PhoneTracking]: PhoneTrackingConfig,
    [PersonalizedQuestionsPages.KnowYourLocation]: KnowYourLocationConfig,
    [PersonalizedQuestionsPages.ProtectSocialAccounts]: ProtectSocialAccountsConfig,
    [PersonalizedQuestionsPages.ProtectPersonalData]: ProtectPersonalDataConfig,
    [PersonalizedQuestionsPages.PhonePasscode]: PhonePasscodeConfig,
    [PersonalizedQuestionsPages.OnlineActivity]: OnlineActivityConfig,
};