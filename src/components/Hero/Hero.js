import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Software Engineer <br />
          Januaries Mawioo
        </SectionTitle>
        <SectionText>
        My name is Januaries Mawioo. I am a full stack developer with expertise in HTML, CSS, Jacascript, Node js, React js and Python
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;