import React from 'react';
import { ExternalLink } from '../ExternalLink/ExternalLink';
import {
  InterestContent,
  InterestGraphic,
  InterestsFooter,
  InterestsWrapper,
} from './Interests.styles';

const Interests = () => {
  return (
    <>
      <InterestsWrapper>
        <InterestContent>
          <InterestGraphic>
            <span>CLICK</span>
            <span>CLICK</span>
            <span>CLICK</span>
          </InterestGraphic>
          <strong>Coding</strong>
          <p>
            I just love to <small>click, click, click</small> to express my
            ideas and myself through code and the feeling of seeing my idea come
            to life is something I can&apos;t cherish enough.
          </p>
          <p>
            As of now React is my main thing, I&apos;ve also written stuff in
            Node.js and used Firebase, MongoDB, REST APIs, GIT and probably
            things I can&apos;t list now.
          </p>
          <p>
            To grow my plan is simple - get to know Typescript and Storybook as
            much as possible.
          </p>
        </InterestContent>
        <InterestContent>
          <InterestGraphic>
            <span>DE</span>
            <span>LIGHT</span>
            <span>FUL</span>
          </InterestGraphic>
          <strong>Esport</strong>
          <p>
            Everyone loves some competition in their lives. For me, watching
            people compete in my favourite games is something that satisfies
            this need.
          </p>
          <p>
            I find it <small>delightful</small> to watch because there are some
            great personalities and the crowd of passionate people makes it that
            much better.
          </p>
          <p>
            Esport grows bigger and bigger every year and honestly after
            following this industry for like eight years now and seeing all of
            this progress is just so cool.
          </p>
          <p>
            Definitely my favourite to follow is{' '}
            <ExternalLink
              href='https://lolesports.com/schedule?leagues=lec'
              target='_blank'
              rel='noopener noreferrer'
            >
              LEC
            </ExternalLink>
            .
          </p>
        </InterestContent>
      </InterestsWrapper>
      <InterestsFooter>
        <InterestContent>
          <InterestGraphic>
            <span>BALIS</span>
            <span>AND</span>
            <span>KEEBS</span>
          </InterestGraphic>
          <strong>Things I wanna try</strong>
          <p>
            Stuff I am looking forward to trying are{' '}
            <small>balis and keebs</small> (balisongs and keyboards).
          </p>
          <p>
            I want to get into flipping butterfly knives and make myself a
            sizable collection in the future. I don&apos;t really know why, but
            it looks undeniably fun and hard to master in my view.
          </p>
          <p>
            Also, I would like to own a collection of cool looking keyboards
            because the fact of collecting all the different parts that are
            super hard to buy because of a high demand and building your own
            keyboard seems truly interesting to me.
          </p>
          <p>
            Currently I own{' '}
            <ExternalLink
              href='https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard?variant=31063869587545'
              target='_blank'
              rel='noopener noreferrer'
            >
              Keychron K2
            </ExternalLink>{' '}
            - I love it to say the least.
          </p>
        </InterestContent>
      </InterestsFooter>
    </>
  );
};

export default Interests;
