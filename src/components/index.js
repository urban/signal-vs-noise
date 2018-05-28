import React from 'react'
import * as color from '../styles/colors'

const toString = str => String(str)
const replace = (regex, replacement) => str => str.replace(regex, replacement)
const coerce = x => x |> toString |> replace(/,/g, ' ')

const withClassNames = Component => ({className = '', ...props}) =>
  className ? (
    <Component {...props} className={coerce(className)} />
  ) : (
    <Component {...props} />
  )

const headingStyle = `
  margin-top: 2.5rem;
  margin-bottom: 1rem;
`

const headingWithBorderStyle = `
  border-bottom: 1px solid ${color.gainsboro};
  padding-bottom: 0.3em;
  ${headingStyle}
`

const HeadingLink = props => (
  <React.Fragment>
    <a {...props} aria-hidden="true">
      <svg
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        height="16"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
        />
      </svg>
    </a>
    <style jsx>{`
      a {
        float: left;
        line-height: 1;
        margin-left: -1.25rem;
        padding-right: 0.25rem;
      }
      a:hover {
        border-bottom: none;
      }
      svg {
        color: ${color.nero};
        display: inline-block;
        vertical-align: middle;
        visibility: hidden;
      }
    `}</style>
  </React.Fragment>
)

const H1 = ({children, id, ...props}) => (
  <h1 {...props} id={id}>
    <HeadingLink href={'#' + id} />
    {children}
    <style jsx>{`
      h1 {
        ${headingWithBorderStyle};
      }
      h1:hover :global(a > svg) {
        visibility: visible;
      }
    `}</style>
  </h1>
)

const H2 = ({children, id, ...props}) => (
  <h2 {...props} id={id}>
    <HeadingLink href={'#' + id} />
    {children}
    <style jsx>{`
      h2 {
        ${headingWithBorderStyle};
      }
      h2:hover :global(a > svg) {
        visibility: visible;
      }
    `}</style>
  </h2>
)

const H3 = ({children, id, ...props}) => (
  <h3 {...props} id={id}>
    <HeadingLink href={'#' + id} />
    {children}
    <style jsx>{`
      h3 {
        ${headingStyle};
      }
      h3:hover :global(a > svg) {
        visibility: visible;
      }
    `}</style>
  </h3>
)

const H4 = ({children, id, ...props}) => (
  <h4 {...props} id={id}>
    <HeadingLink href={'#' + id} />
    {children}
    <style jsx>{`
      h4 {
        ${headingStyle};
      }
      h4:hover :global(a > svg) {
        visibility: visible;
      }
    `}</style>
  </h4>
)

const H5 = ({children, id, ...props}) => (
  <h5 {...props} id={id}>
    <HeadingLink href={'#' + id} />
    {children}
    <style jsx>{`
      h5 {
        ${headingStyle};
      }
      h5:hover :global(a > svg) {
        visibility: visible;
      }
    `}</style>
  </h5>
)

const H6 = ({children, id, ...props}) => (
  <h6 {...props} id={id}>
    <HeadingLink href={'#' + id} />
    {children}
    <style jsx>{`
      h6 {
        ${headingStyle};
      }
      h6:hover :global(a > svg) {
        visibility: visible;
      }
    `}</style>
  </h6>
)

export const Code = withClassNames('code')
export const Pre = withClassNames('pre')
export const Span = withClassNames('span')

export default {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  code: Code,
  pre: Pre,
  span: Span,
}
