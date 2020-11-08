import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import tw from 'twin.macro';
import PropTypes from 'prop-types';
import { genericHashLink } from 'react-router-hash-link';
import { useSpring, animated } from 'react-spring';

const MyHashLink = genericHashLink(Link);

const navBackgroundStyle = css`
  ${tw`absolute fixed inset-y-0 right-0 z-10 flex flex-col justify-around`}
`;

const navStyle = css`
  ${tw``}
`;

const Navigation = ({ siteTitle, menuLinks }) => {
  const [{ y, color }, set] = useSpring(() => ({ y: 100, color: '#fff' }));

  return (
    <nav id="nav" css={navBackgroundStyle}>
      <ul css={navStyle}>
        {menuLinks.map(link => (
          <animated.li
            key={link.name}
            css={{
              listStyleType: `none`,
              padding: `1rem`
            }}
            onMouseEnter={() => set({ y: 0, color: '#000' })}
            onMouseLeave={() => set({ y: 100, color: '#fff' })}
          >
            <MyHashLink
              css={{ color: `gray` }}
              to={link.link}
              onMouseEnter={() => set({ y: 50, color: '#fff' })}
              activeStyle={{ color: 'red' }}
            >
              {link.name}
            </MyHashLink>
          </animated.li>
        ))}
      </ul>
    </nav>
  );
};
Navigation.propTypes = {
  siteTitle: PropTypes.string
};
Navigation.defaultProps = {
  siteTitle: ``
};
export default Navigation;
