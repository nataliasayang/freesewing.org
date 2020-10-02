import React, { useEffect } from 'react'
import useApp from '../hooks/useApp'
import AppWrapper from '../components/app/wrapper'
import Layout from '../components/layouts/default'

import SizingTable from '../components/size-table'
import SizingGraph from '../components/person/size-graph'

import { FormattedMessage } from 'react-intl'

const Page = (props) => {
  const app = useApp(false)
  useEffect(() => {
    app.setTitle(app.translate('app.sizes'))
    app.setContext(context)
  }, [])

  const context = [
    <h5>
      <FormattedMessage id="app.sizes" />
    </h5>,
    <ul>
      <li>
        <a href="#with">
          <FormattedMessage id="app.withBreasts" />
        </a>
      </li>
      <li>
        <a href="#without">
          <FormattedMessage id="app.withoutBreasts" />
        </a>
      </li>
    </ul>
  ]

  return (
    <AppWrapper app={app}>
      <Layout app={app} active="docs">
        <ul className="links">
          <li>
            <a href="#with">
              <FormattedMessage id="app.withBreasts" />
            </a>
          </li>
          <li>
            <a href="#without">
              <FormattedMessage id="app.withoutBreasts" />
            </a>
          </li>
        </ul>
        <h2 id="with">
          <FormattedMessage id="app.withBreasts" />
        </h2>
        <SizingGraph breasts={true} app={app} />
        <SizingTable breasts={true} />
        <h2 id="without">
          <FormattedMessage id="app.withoutBreasts" />
        </h2>
        <SizingGraph breasts={false} app={app} />
        <SizingTable breasts={false} />
      </Layout>
    </AppWrapper>
  )
}

export default Page
