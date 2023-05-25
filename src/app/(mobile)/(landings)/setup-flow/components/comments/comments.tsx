import Section from '../section/section';
import css from './comments.module.scss';
import { CommentsList } from './commentsList';
import { ScreenNames } from '../../constants';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';

const Comments = () => {
    return (
        <Section className={css['comments']} name={ScreenNames.Comments}>
            <Typography variant={TypographyVariants.h3} className={css['comments__title']}>
                Let’s hear what real Clario users say.
            </Typography>
            <CommentsList />
        </Section>
    );
};

Comments.displayName = 'Comments';
export default Comments;