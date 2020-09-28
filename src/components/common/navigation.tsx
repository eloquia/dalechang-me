import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import tw from 'twin.macro';
import PropTypes from 'prop-types';
import { genericHashLink } from 'react-router-hash-link';

const MyHashLink = genericHashLink(Link);

const navBackgroundStyle = css`
  ${tw`absolute fixed inset-y-0 right-0 z-10 flex flex-col justify-around`}
`;

const navStyle = css`
  ${tw``}
`;

const Navigation = ({ siteTitle, menuLinks }) => (
  <nav id="nav" css={navBackgroundStyle}>
    <ul css={navStyle}>
      {menuLinks.map(link => (
        <li
          key={link.name}
          style={{
            listStyleType: `none`,
            padding: `1rem`
          }}
        >
          <MyHashLink style={{ color: `gray` }} to={link.link}>
            {link.name}
          </MyHashLink>
        </li>
      ))}
    </ul>
  </nav>
);
Navigation.propTypes = {
  siteTitle: PropTypes.string
};
Navigation.defaultProps = {
  siteTitle: ``
};
export default Navigation;
