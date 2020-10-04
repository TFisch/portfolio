import React from 'react';
import * as styles from './styles.sc';

const biography = () => {
  return (
    <styles.BiographyView>
      <styles.BiographyHeader>Hello, again!</styles.BiographyHeader>
      <styles.BiographyContent>
        <styles.BoldParagraph>
          Allow Me To Spin A Little Yarn...
        </styles.BoldParagraph>
        <styles.Paragraph>
          Recalling back to when I graduated highschool (2007) and throughout
          the early years of my career, I struggled to find out what I really
          wanted to do. I earned a Bachelor's Degree, made some great money in
          the hospitality and craft beer industries, but I never found that job
          where I could say "Now, this is what I want to do for the rest of my
          life!"
        </styles.Paragraph>
        <styles.BoldParagraph>Where did You Go to School?</styles.BoldParagraph>
        <styles.Paragraph>
          I was just getting to that. I took my undergraduate at the University
          of Missouri Columbia(2012). I received a bachelor's degree in Arts and
          Sciences. I was an English Major with a History Minor. My emphasis was
          in Creative Writing, one of my greatest passions.
        </styles.Paragraph>
        <styles.BoldParagraph>
          So Wait, Where did You Learn To Code?
        </styles.BoldParagraph>
        <styles.Paragraph>
          Fast forward to 2017. I'm living in Denver, Colorado. I've been
          working in the service industry for 5+ years. I'm the General Manager
          of a craft beer brewery and I'm burnt out. Exhausted from the long
          hours and juggling act of responsibilities, I knew I was ready for a
          change.
        </styles.Paragraph>
        <styles.BoldParagraph>
          *Enter the Turing School of Software and Design*
        </styles.BoldParagraph>
        <styles.Paragraph>
          I heard about a school in Denver that took people who had little to no
          programing experience and turned them into job ready coding machines.
          Turing is a seven month program that doesn't just strive to teach
          people how to code, it unlocks an individual's true potential!
        </styles.Paragraph>
        <styles.Paragraph>
          The foundation of The Front-End Engineering program is a deep dive
          into JavaScript, HTML, CSS and UX design. There is also a significant
          focus on unit testing, accessibility, object-oriented programming and
          cross-browser testing. Students also explore modern frameworks,
          database structuring and design principles.
        </styles.Paragraph>
        <styles.Paragraph>
          Turing's objective is not only to put talented developers out into the
          world. It aspires to improve the tech industry by making it a more
          inclusive place. A major component of the curriculum is personal
          development. Students take time to focus on the current state of the
          industry, confronting a lack of representation and diversity.
        </styles.Paragraph>
        <styles.Paragraph>
          If you can't tell, I'm very passionate about The Turing School of
          Software and Design. If you want to learn more, you should visit their
          website.
        </styles.Paragraph>
      </styles.BiographyContent>
      <styles.BoldParagraph>
        Let's talk about that tech stack.
      </styles.BoldParagraph>
      <styles.Paragraph>
        Here's some of the tools in my belt. I'm always looking to learn
        something new!
      </styles.Paragraph>
      <styles.BoldParagraph>Front-End</styles.BoldParagraph>
      <styles.TechList>
        <styles.TechListItem>JavaScript</styles.TechListItem>
        <styles.TechListItem>HTML</styles.TechListItem>
        <styles.TechListItem>CSS</styles.TechListItem>
        <styles.TechListItem>jQuery</styles.TechListItem>
        <styles.TechListItem>React</styles.TechListItem>
        <styles.TechListItem>Angular</styles.TechListItem>
        <styles.TechListItem>Vue</styles.TechListItem>
        <styles.TechListItem>SASS</styles.TechListItem>
        <styles.TechListItem>Node</styles.TechListItem>
        <styles.TechListItem>Jest</styles.TechListItem>
        <styles.TechListItem>Mocha</styles.TechListItem>
      </styles.TechList>
      <styles.BoldParagraph>Back-End</styles.BoldParagraph>
      <styles.TechList>
        <styles.TechListItem>Java</styles.TechListItem>
        <styles.TechListItem>GraphQL</styles.TechListItem>
        <styles.TechListItem>SQL</styles.TechListItem>
        <styles.TechListItem>C#</styles.TechListItem>
      </styles.TechList>
    </styles.BiographyView>
  );
};

export default biography;
