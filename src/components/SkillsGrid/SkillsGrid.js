import React from 'react';
import { GridItem, SkillsGridWrapper } from './SkillsGrid.styles';

import { ReactComponent as JavascriptLogo } from '../../assets/icons/javascript-logo.svg';
import { ReactComponent as ReactLogo } from '../../assets/icons/react-logo.svg';
import { ReactComponent as CssLogo } from '../../assets/icons/css-logo.svg';
import { ReactComponent as ReactRouterLogo } from '../../assets/icons/reactrouter-logo.svg';
import { ReactComponent as FirebaseLogo } from '../../assets/icons/firebase-logo.svg';
import { ReactComponent as GitLogo } from '../../assets/icons/git-logo.svg';
import { ReactComponent as TerminalLogo } from '../../assets/icons/terminal-logo.svg';
import { ReactComponent as SassLogo } from '../../assets/icons/sass-logo.svg';

const SkillsGrid = () => {
  return (
    <SkillsGridWrapper>
      <GridItem>
        <JavascriptLogo />
      </GridItem>
      <GridItem>
        <ReactLogo />
      </GridItem>
      <GridItem>
        <CssLogo />
      </GridItem>
      <GridItem>
        <ReactRouterLogo />
      </GridItem>
      <GridItem>
        <FirebaseLogo />
      </GridItem>
      <GridItem>
        <GitLogo />
      </GridItem>
      <GridItem>
        <TerminalLogo />
      </GridItem>
      <GridItem>
        <SassLogo />
      </GridItem>
    </SkillsGridWrapper>
  );
};

export default SkillsGrid;
