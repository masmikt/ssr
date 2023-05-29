import {
    PersonalizedQuestionsTopics
} from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/pageList';

export interface IDashboardContextConsumerContext {
    activeTopics: Record<PersonalizedQuestionsTopics, boolean>;
    navigate: boolean;
    isButtonActive: boolean;

    handleTopicClick(key: PersonalizedQuestionsTopics): void;

    handleNextClick(): void;
}