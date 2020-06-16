/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { getColor } from '../utils/getColor'
import { getScreens } from '../utils/getScreens'

import Layout from '../components/Layout'

const AboutWrapper = styled.div`
  padding: 10px;
`
const AboutHeading = styled.p`
  color: ${getColor('accent')};
  font-size: 2.5rem;
  text-decoration: underline;

  @media (max-width: ${getScreens('tablet')}){
    font-size: 2rem;
  }
`

const AboutLink = styled.span`
  color: ${getColor('accent')};
  font-weight: 500;

  &:hover{
    cursor: pointer;
    text-decoration: underline;
    color: ${getColor('accent_white')};
  }
`

export default function About() {
  const pageTitle = 'About';

  return (
    <Layout pageTitle={pageTitle}>
      <AboutWrapper>
        <p className="banner_text">About</p>
        <hr />
        <p className="page_heading">Who are we?</p>
        <p className="info_text">CBUSRemembers is a group of volunteers and community members dedicated to helping Columbus navigate the new reality of bereavement that we all face. </p>
        <p className="info_text">
          We are a proud member of <a href="https://cantstopcolumbus.com/" target="_blank" rel="noopener noreferrer ">Can't Stop Columbus</a>, a state-wide volunteer movement to create resources for the community.
          </p>
          <p className="page_heading">Why now?</p>
        <p className="info_text">
          Covid-19 has touched every part of our lives; including end of life considerations. Because of on-going social distancing requirements funerals have become restricted, leaving surviving loved ones with questions on how to properly mourn those the have lost.
        </p>
        <p className="page_heading">What do we do?</p>
        <p className="info_text">
          CBUSRemembers provides a central location to access information about arranging a funeral during these uncertain times.
        </p>
        <ul>
          <li className="info_text">
            Please visit the <Link href="/resources"><a>Resources</a></Link> section for news and information about area funeral homes and end-of-life preparations.
          </li>
          <li className="info_text">
            Have you experienced the loss of a loved one during the pandemic? Add them to our Virtual <Link href="/memorial"><a>Memorial</a></Link> and celebrate their life with the community.
          </li>
        </ul>
      </AboutWrapper>
    </Layout>
  )
}
