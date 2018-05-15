import React from 'react'

import * as color from '@styles/colors'
import {mediaSizes} from '@styles/media'

export default () => (
  <div className="host">
    <footer>
      <span>&copy; Urban Faubion 2018–present</span>
      <a href="mailto:urban.faubion@gmail.com" target="_blank">
        <i className="icon-mail-alt" />
      </a>
      <a href="https://www.linkedin.com/in/urbanfaubion/" target="_blank">
        <i className="icon-linkedin" />
      </a>
      <a href="https://github.com/urban" target="_blank">
        <i className="icon-github" />
      </a>
    </footer>
    <style jsx>{`
      .host {
        background-color: rgba(0, 0, 0, 0.02);
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        color: rgba(0, 0, 0, 0.54);
        font-size: 0.75rem;
        padding: 1em 0;
      }
      footer {
        margin: 0 auto;
        max-width: calc(${mediaSizes.tablet}px - 2.5rem);
        padding: 0 1.25rem;
      }
      a {
        margin-left: 1rem;
        color: rgba(0, 0, 0, 0.4);
      }
      a:hover {
        border-bottom-color: transparent;
      }
    `}</style>
  </div>
)
