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

export const Code = withClassNames('code')
export const Pre = withClassNames('pre')
export const Span = withClassNames('span')

export default {
  code: Code,
  pre: Pre,
  span: Span
}
