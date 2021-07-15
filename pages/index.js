import Layout from 'components/Layout'
import ResourceHighlight from 'components/ResourceHighlight'
import NewsLetter from 'components/NewsLetter'
import ResourceList from 'components/ResourceList'
import Footer from 'components/Footer'

function Home({ resources }) {
  return (
    <Layout>
      <ResourceHighlight resources={resources.slice(0, 2)} />
      <NewsLetter />
      <ResourceList resources={resources.slice(2)} />
      {JSON.stringify(resources)}
      <Footer />
    </Layout>
  )
}

export async function getStaticProps() {
  const resData = await fetch('http://localhost:3000/api/resources')
  const data = await resData.json()
  return {
    props: {
      resources: data,
    },
  }
}

export default Home
