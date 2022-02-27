import React from 'react';
import { Link } from 'react-router-dom';
import {
  Logo,
  LogoWrapper,
  SocialIcons,
  ViewTitle,
  Wrapper,
} from './Sidebar.styles';
import { ReactComponent as GithubLogo } from '../../assets/icons/github-logo.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin-logo.svg';
import PropTypes from 'prop-types';

const Sidebar = ({ viewTitle, isLight }) => {
  return (
    <Wrapper>
      <div>
        <LogoWrapper isLight={isLight}>
          <Link to='/' aria-label='Hero page'>
            <Logo />
          </Link>
        </LogoWrapper>
        <ViewTitle>
          <p>{viewTitle}</p>
        </ViewTitle>
      </div>
      <div className='swiper-scrollbar'></div>
      <SocialIcons isLight={isLight}>
        <a
          href='https://www.github.com/s0rus'
          rel='noopener noreferrer'
          target='_blank'
          aria-label='Github'
        >
          <GithubLogo />
        </a>

        <a
          href='https://www.linkedin.com/in/piotrmol/'
          rel='noopener noreferrer'
          target='_blank'
          aria-label='LinkedIn'
        >
          <LinkedIn />
        </a>
      </SocialIcons>
    </Wrapper>
  );
};

Sidebar.propTypes = {
  viewTitle: PropTypes.string.isRequired,
  isLight: PropTypes.bool,
};

export default Sidebar;
