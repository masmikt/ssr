"use client";
import ExperienceProvider
    from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/contexts/experience/experienceProvider';

export default function FeatureListLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <ExperienceProvider>
            {children}
        </ExperienceProvider>
    );
}