import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`
const thisYear = new Date().getFullYear()

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hi, <br /> I'm Jaime Velasco.
        </BigTitle>
        <Subtitle>I'm a full stack web developer who enjoys making beautiful and functional web apps.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Experience</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="J2 Interactive"
            link="https://j2interactive.com"
            // bg="linear-gradient(to right, #bcc1ba 0%, #46b1c9 100%)"
            bg="linear-gradient(to right, #aa6373 0%, #392061 100%)"
            >
            J2 Interactive is an award-winning software development and IT consulting firm specializing in customized solutions for hospitals, labs, research institutions, and health information exchanges. Our approach to design and development is rooted in a fundamental belief that systems succeed or fail based on how well they serve the people who depend upon them.
          </ProjectCard>
          <ProjectCard
            title="MobiletechRX"
            link="https://mobiletechrx.com"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Mobile Tech RX is a powerful, intuitive estimating and invoicing software developed specifically for
            Mobile Auto Recon Techs. (Paintless Dent Repair (PDR), Paint touch-up and bumper repair, Wheel Repair)
          </ProjectCard>
          <ProjectCard
            title="Space Cadet"
            link="https://www.spacecadet.io/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            SpaceCadet.io is an online marketplace that connects people looking for space with others in their community
            who have vacant space available for rent on a short-term basis. Reserve, pay, and communicate through our portal - all with the click of a button!
.
          </ProjectCard>
          <ProjectCard
            title="Global the Source"
            link="https://www.globalthesource.com"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Global is a leading master distributor of HVAC/R components to wholesalers throughout the United States,
            offering superior products and outstanding service. Our line offering continues to broaden, featuring an
            array of products including our exclusive line of USA Made Capacitors, relays, transformers, contactors and more.
          </ProjectCard>
          <ProjectCard
            title="Wickley Interactive"
            link="http://www.wickleyworldwide.com/"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Wickley Worldwide is a marketing and design firm located in San Antonio, Texas.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Jaime Velasco" />
          <AboutSub>
            
          </AboutSub>
        </AboutHero>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:contact@jaimevelas.co">Hi</a> or find me on:{' '}
            <a href="https://github.com/JaimeVelasco/">Github</a> &
            <a href="https://www.linkedin.com/in/jaimevelascog/"> LinkedIn</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; {thisYear} by Jaime Velasco.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
