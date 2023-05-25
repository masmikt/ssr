import ComputerWeekly from 'public/images/common/recommended/computerWeekly.svg';
import Fastcompany from 'public/images/common/recommended/fastcompany.svg';
import HostingAdvice from 'public/images/common/recommended/hostingAdvice.svg';
import Techradar from 'public/images/common/recommended/techradar.svg';
import TopTenReviews from 'public/images/common/recommended/topTenReviews.svg';
import Trendhunter from 'public/images/common/recommended/trendhunter.svg';

export enum RecommendedSources {
    FastCompany = 'fastcompany',
    TopTenReviews = 'top_ten_reviews',
    Techradar = 'techradar',
    Trendhunter = 'trendhunter',
    HostingAdvice = 'hostingAdvice',
    ComputerWeekly = 'computerWeekly'
}

export const RecommendedConfig = [
    {
        name: 'fastcompany',
        source: RecommendedSources.FastCompany,
        img: Fastcompany,
        link: 'https://www.fastcompany.com/90449473/this-security-startup-wants-to-prove-that-antivirus-doesnt-have-to-suck',
    },
    {
        name: 'topTenReviews',
        source: RecommendedSources.TopTenReviews,
        img: TopTenReviews,
        link: 'https://www.toptenreviews.com/clario-app-fighting-cybercrime',
    },
    {
        name: 'techradar',
        source: RecommendedSources.Techradar,
        img: Techradar,
        link: 'https://www.techradar.com/reviews/clario',
    },
    {
        name: 'trendhunter',
        source: RecommendedSources.Trendhunter,
        img: Trendhunter,
        link: 'https://www.trendhunter.com/trends/clario',
    },
    {
        name: 'hostingAdvice',
        source: RecommendedSources.HostingAdvice,
        img: HostingAdvice,
        link: 'https://www.hostingadvice.com/blog/live-securely-online-with-clario/',
    },
    {
        name: 'computerWeekly',
        source: RecommendedSources.ComputerWeekly,
        img: ComputerWeekly,
        link: 'https://www.computerweekly.com/news/252481951/The-Security-Interviews-Can-AV-go-from-dodgy-scareware-to-cyber-hero',
    },
]