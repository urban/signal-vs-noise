import App, {Container} from 'next/app'
import React from 'react'

import components from '@components'
import Layout from '@components/Layout'

export default class extends App {
  static async getInitialProps({Component, router, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render() {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <Layout>
          <Component {...pageProps} components={components} />
        </Layout>
      </Container>
    )
  }
}
