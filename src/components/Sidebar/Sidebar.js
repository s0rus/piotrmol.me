import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, LogoWrapper, SocialIcons, Wrapper } from './Sidebar.styles';
import { ReactComponent as GithubLogo } from '../../assets/icons/github-logo.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin-logo.svg';

const Sidebar = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Link to='/'>
          <Logo />
        </Link>
      </LogoWrapper>
      <div className='swiper-scrollbar'></div>
      <SocialIcons>
        <a
          href='https://www.github.com/s0rus'
          rel='noopener noreferrer'
          target='_blank'
        >
          <GithubLogo />
        </a>

        <a
          href='https://www.linkedin.com/in/piotrmol/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <LinkedIn />
        </a>
      </SocialIcons>
    </Wrapper>
  );
};

export default Sidebar;
