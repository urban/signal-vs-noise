import React from 'react'
import Head from 'next/head'

import SiteHeader from '../SiteHeader'
import SiteFooter from '../SiteFooter'
import {mediaSizes} from '@styles/media'

import 'normalize.css'
import './Layout.css'
import './prism.css'

export default ({children, title = 'Signal vs Noise'}) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <SiteHeader />

    <main>{children}</main>

    <SiteFooter />
    <style jsx>{`
      main {
        flex: 1 0 auto;
        margin: 0 auto;
        max-width: calc(${mediaSizes.tablet}px - 2.5rem);
        padding: 4rem 1rem;
        position: relative;
        width: 100%;
      }
    `}</style>
  </div>
)
