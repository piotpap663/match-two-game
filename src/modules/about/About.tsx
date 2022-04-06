import { AboutWrapper } from './style';

export const About = () => {
  return (
    <AboutWrapper data-testid="about">
      Look for pairs of cards by turning them over in turns, 2 at a time. If you
      find a match, you get a point - and you may turn over 2 more cards.
      Whoever finds more matches wins.
    </AboutWrapper>
  );
};
