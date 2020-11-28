import React from 'react';
import { useSpring, animated } from 'react-spring';
import { css } from '@emotion/core';
import tw from 'twin.macro';

import { H1 } from '../styles';
import {
  hobby,
  hobbyImage,
  hobbyImageContainer,
  hobbySection,
  hobbyTitle,
  hobbyTitleContainer
} from './hobbyStyles';

const hobbyStyle = css`
  ${tw``}
`;

interface HobbyProps {
  id: number;
  hobbyName: string;
  description: string;
  imageLink: string;
}

export const hobbies: HobbyProps[] = [
  {
    id: 0,
    hobbyName: 'Bouldering',
    description: `Bouldering is similar to rock climbing except: there are no ropes; the heights are lower; climbing to the top requires significant effort. In fact, there is so much effort involved that the communities call the act of climbing to the top as "figuring out the boulder problem." Climbing to the top is like playing a strategic board game with your body as the main piece and the wall as the board game. On any given boulder problem, I have to have the strength of a gymnast, the flexibility of a yogi, and the cognitive fortitude of a chess player.`,
    imageLink: 'photos/bouldering.png'
  },
  {
    id: 1,
    hobbyName: 'Cooking',
    description: `Cooking is one of my most favorite hobbies because it's a perfect way to blend my constructive and creative capabilities. Once you've learned the building blocks, it's easy to compose a healthy, flavorful meal. It also gives me great pleasure to host large, friendly gatherings. Similar to my personality and strengths, I'd much prefer to be behind the scenes making sure everything goes smoothly.`,
    imageLink: 'photos/karahi.png'
  },
  {
    id: 2,
    hobbyName: 'Skydiving/Parachuting',
    description: `It's probably the most pointless sport ever, but skydiving demands constant attention to detail in high-pressure situations. This ranges between checking altitude to nuances in body position which threaten to spiral the skydiver out of control. To make matters more complicated, groups of skydivers plan out their routines on the ground before executing their formations like synchronized swimmers in the air.`,
    imageLink: 'photos/skydiving.png'
  }
];

function Hobbies(): JSX.Element {
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <article className="hobbies" css={hobbyStyle} id="hobbies">
      <H1>Hobbies</H1>

      {hobbies.map(hobbyData => (
        <div css={hobby} key={hobbyData.id}>
          <div css={hobbyTitleContainer}>
            <h2 css={hobbyTitle}>{hobbyData.hobbyName}</h2>
          </div>
          <div css={hobbySection}>
            <p>{hobbyData.description}</p>
          </div>
          <animated.div css={hobbyImageContainer} style={springProps}>
            <img
              css={hobbyImage}
              src={hobbyData.imageLink}
              alt={hobbyData.hobbyName}
            />
          </animated.div>
        </div>
      ))}
    </article>
  );
}

export default Hobbies;
