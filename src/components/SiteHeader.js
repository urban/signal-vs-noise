import React from 'react'
import Link from 'next/link'

import {name} from '../../package.json'
import * as color from '@styles/colors'
import {mediaSizes} from '@styles/media'

const prod = process.env.NODE_ENV === 'production'
const linkPrefix = prod ? `/${name}` : ''

export default () => (
  <div className="host">
    <header>
      <Link href="/" as={linkPrefix + '/'}>
        <a>
          <h1>
            Signal vs Noise
            <small>Thoughts on design and tech.</small>
          </h1>
        </a>
      </Link>
      <nav>
        <Link href="/javascript" as={linkPrefix + '/javascript'}>
          <a>JavaScript</a>
        </Link>
        <br />
        <Link href="/data-structures" as={linkPrefix + '/data-structures'}>
          <a>Data Structures</a>
        </Link>
      </nav>
    </header>
    <style jsx>{`
      .host {
        background-color: ${color.nero};
      }
      header {
        margin: 0 auto;
        max-width: calc(${mediaSizes.tablet}px - 2.5rem);
        padding: 2rem 1.25rem;
      }
      h1 {
        color: ${color.whiteSmoke};
        font-size: 1.5rem;
        text-transform: uppercase;
      }
      h1 small {
        color: ${color.grey};
        display: block;
      }
    `}</style>
  </div>
)
