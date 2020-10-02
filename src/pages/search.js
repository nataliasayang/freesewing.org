import React, { useEffect } from 'react'
import useApp from '../hooks/useApp'
import AppWrapper from '../components/app/wrapper'
import Layout from '../components/layouts/default'

import Search from '../components/search'

const Page = (props) => {
  const app = useApp()
  useEffect(() => {
    app.setTitle(app.translate('app.search'))
  }, [])

  return (
    <AppWrapper app={app}>
      <Layout app={app}>
        <Search search={app.translate('app.search')} />
      </Layout>
    </AppWrapper>
  )
}

export default Page
