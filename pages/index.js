import Layout from 'components/Layout'
import ResourceHighlight from 'components/ResourceHighlight'
import NewsLetter from 'components/NewsLetter'
import ResourceList from 'components/ResourceList'
import Footer from 'components/Footer'

import { resources } from 'pages/api/data'

function Home() {
  return (
    <Layout>
      <ResourceHighlight resources={resources} />
      <NewsLetter />
      <ResourceList resources={resources} />

      {JSON.stringify(resources)}
      <Footer />
    </Layout>
  )
}

export default Home
