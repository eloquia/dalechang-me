import React, { useEffect, useState } from 'react';
import { useScrollYPosition } from 'react-use-scroll-position';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import styled from 'styled-components';

const HeaderWrapper = styled('nav')<{open: boolean, triggered: boolean}>`
  align-items: center;
  justify-content: space-between;
  transition: height 0.3s ease;
  .nav-m {
    &.open {
      button {
        div {
          &.second {
            opacity: 0;
          }
          &.first {
            transform: rotate(45deg);
            top: 1.1rem;
          }
          &.third {
            transform: rotate(-45deg);
            bottom: 1.1rem;
          }
        }
      }
    }
    button {
      height: 2.5rem;
      width: 3.5rem;
      position: relative;
      background: transparent;
      padding: 0;
      border: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      div {
        transition: all 0.2s;
        height: 3px;
        width: 100%;
        background: ${props => props.theme.colors.black};
        &.first {
          top: 0;
          left: 0;
        }
        &.second {
          top: calc(50% - 1.5px);
          left: 0;
        }
        &.third {
          bottom: 0;
          left: 0;
        }
      }
    }
  }
  .nav-d {
    display: none;
    flex-direction: column;
    justify-content: center;
    a {
      color: ${props => props.theme.colors.black};
      text-decoration: none;
      transition: all 0.3s ease;
      padding: 0.2rem 0.4rem;
      &:hover {
        color: white;
      }
    }
  }
  .nav-mm {
    transform: translateX(${props => (props.open ? '0%' : '100%')});
    transition: transform 0.3s ease;
    display: ${props => props.open ? 'flex' : 'none'};
    flex-direction: column;
    background: white;
    padding: 2rem;
    @media (min-width: ${props => props.theme.sizes.mobile}) {
      padding: 4rem;
    }
    a {
      color: ${props => props.theme.colors.black};
      margin-bottom: 3rem;
    }
  }
  @media (min-width: ${props => props.theme.sizes.tablet}) {
    .nav-m {
      display: none;
    }
    .nav-d {
      display: flex;
    }
    .nav-mm {
      display: none;
    }
  }
`;

export default function Header(location: any): JSX.Element {

  const [open, setOpen] = useState(false);

  const scrollY = useScrollYPosition();
  const scrolled = scrollY !== 0;

  useEffect(() => {
    setOpen(false);
  }, [location, scrollY]);

  function renderLinks() {
    return (
      <>
        <AnchorLink to="/#about">About</AnchorLink>
        <AnchorLink to="/#experience">Experience</AnchorLink>
        <AnchorLink to="/#work">Work</AnchorLink>
        <AnchorLink to="/#clients">Clients</AnchorLink>
        <AnchorLink to="/#testimonials">Testimonials</AnchorLink>
        <Link className="divider" to="/contact">
          Contact
        </Link>
        <Link to="/blog">Blog</Link>
      </>
    );
  }

  return (
    <HeaderWrapper triggered={scrolled} open={open}>
      <>
        <div className="nav-d">{renderLinks()}</div>
        <div className={`nav-m${open ? ' open' : ''}`}>
          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
            className="icon"
          >
            <div className="first" />
            <div className="second" />
            <div className="third" />
          </button>
        </div>
        <div className="nav-mm">{renderLinks()}</div>
      </>
    </HeaderWrapper>
  );

}
