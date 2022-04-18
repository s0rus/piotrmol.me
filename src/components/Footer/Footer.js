import React from 'react';
import ContentTemplate from '../../templates/ContentTemplate/ContentTemplate';
import {
  Container,
  Content,
  ContentHeader,
  ContentSections,
  LinkList,
  Wrapper,
} from './Footer.styles';
import { ReactComponent as PiotrMolLogo } from '../../assets/icons/piotr-mol-logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Wrapper>
      <ContentTemplate>
        <Container>
          <Content>
            <a href='/' aria-label='Piotr Mól | Hero'>
              <PiotrMolLogo />
            </a>
          </Content>
          <ContentSections>
            <Content>
              <ContentHeader>Pages</ContentHeader>
              <LinkList>
                <li>
                  <Link to='/'>Hero</Link>
                </li>
                <li>
                  <Link to='/works'>Works</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
              </LinkList>
            </Content>
            <Content>
              <ContentHeader>Contact</ContentHeader>
              <LinkList>
                <li>
                  <a
                    href='https://t.me/piotrmool'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href='https://m.me/pi0trmol'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Messenger
                  </a>
                </li>
                <li>
                  <a href='mailto:piotrmolkontakt@gmail.com'>Mail</a>
                </li>
              </LinkList>
            </Content>
            <Content>
              <ContentHeader>Socials</ContentHeader>
              <LinkList>
                <li>
                  <a
                    href='https://www.github.com/s0rus'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/piotrmol/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href='https://open.spotify.com/playlist/4WUhBPulsN7tXl7dVe4P4w?si=9e0521655c1245db'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Spotify
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.instagram.com/s0rus_/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Instagram
                  </a>
                </li>
              </LinkList>
            </Content>
          </ContentSections>
        </Container>
      </ContentTemplate>
    </Wrapper>
  );
};

export default Footer;
