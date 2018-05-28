import css from 'styled-jsx/css'
import 'normalize.css'

import * as color from './colors'
import './icons.css'
import './prism.css'
import './fira_code.css'

export default css`
  /**
   * Google fonts
   */
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i");

  /**
   * Reset some basic elements
   */
  body,
  p,
  blockquote,
  pre,
  hr,
  dl,
  dd,
  figure {
    margin: 0;
    padding: 0;
  }

  /**
   * Basic styling
   */
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    /* background-color: hsla(240, 7%, 95%, 1); */
    color: ${color.nero};
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 300;
    font-style: normal;
    height: 100%;
    -webkit-text-size-adjust: 100%;
  }

  /**
   * Set margin-bottom to maintain vertical rhythm
   */
  p,
  blockquote,
  pre,
  ul,
  ol,
  dl,
  figure {
    margin-bottom: 1em;
  }

  /**
   * Images
   */
  img {
    max-width: 100%;
    vertical-align: middle;
  }

  /**
   * Figures
   */
  figure > img {
    display: block;
  }
  figcaption {
    font-size: calc(1rem * 0.875);
  }

  /**
   * Lists
   */
  ul,
  ol {
    margin-bottom: 1rem;
    padding-left: 2rem;
  }
  ul ul,
  ul ol,
  ol ol,
  ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }
  /* FIX for remark-toc */
  li > p {
    margin: 0;
  }

  /**
   * Headings
   */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    margin: 1em 0 1em;
    padding: 0;
    position: relative;
    -webkit-font-smoothing: antialiased;
  }
  h1 small,
  h2 small,
  h3 small,
  h4 small,
  h5 small,
  h6 small {
    color: ${color.grey};
    font-size: 0.5em;
  }

  /**
   * Links
   */
  a {
    border-bottom: 1px solid transparent;
    color: ${color.scienceBlue};
    font-weight: 300;
    text-decoration: none;
    /* transition: border-bottom 1s; */
  }

  a:hover {
    border-bottom-color: inherit;
  }

  a:active, a:hover {
    outline-width: 0;
  }

  /**
   * Blockquotes
   */
  blockquote {
    border-left: 4px solid ${color.gainsboro};
    color: ${color.grey};
    padding-left: 1em;
  }
  blockquote > :last-child {
    margin-bottom: 0;
  }

  blockquote strong {
    color: ${color.nero};
    font-weight: 400;
  }

  strong {
    font-weight: 500;
  }

  /**
   * Code formatting
   */
  pre,
  code {
    background-color: rgba(0,0,0,0.025);
    /* border: 1px solid ${color.gainsboro}; */
    border-radius: 3px;
    white-space: nowrap;
  }
  code {
    display: inline-block;
    font-family: "Fira Code" !important;
    font-feature-settings: "calt" 1;  /* Enable ligatures for IE 10+, Edge */
    font-weight: 400;
    padding: 0 0.25em;
    text-rendering: optimizeLegibility; /* Force ligatures for Webkit, Blink, Gecko */
    white-space: pre-wrap;
    word-break: break-all;
  }
  pre {
    /* border: 1px solid ${color.alabaster}; */
    border-radius: 3px;
    overflow: auto;
    padding: 0.5rem 1rem;
    -webkit-font-smoothing: inherit;
  }
  pre code {
    background-color: transparent;
    /* border: none; */
    padding: 0;
    margin: 0;
    white-space: pre;
  }

  /**
   * Overrides
   */

  h1 {
    font-size: 2rem;
    margin-top: 0;
  }

  h2 {
    margin-top: 1em;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }

  h2 small {
    font-style: italic;
    font-weight: 500;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1em;
  }

  /**
   * Icons
   */
  .icon > svg {
    display: inline-block;
    width: 1em;
    height: 1em;
    vertical-align: middle;
  }
  .icon > svg path {
    fill: inherit;
  }

  /**
   * Alert
   */
  .alert {
    background: ${color.alabaster};
    border: 1px solid ${color.gainsboro};
    border-radius: 3px;
    font-size: 0.75rem;
    margin-bottom: 1rem;
    padding: 1em;
    position: relative;
  }
  .alert *:last-child {
    margin-bottom: 0;
  }
  .alert a {
    font-weight: bold;
  }
  .alert.note {
    background: #fef9af;
    border: 1px solid #989349;
  }
  .alert.info {
    background: #ace8ff;
    border: 1px solid #79b5e7;
  }
`
