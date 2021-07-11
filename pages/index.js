import Navbar from '../components/Navbar'
import ResourceHighlight from '../components/ResourceHighlight'
import NewsLetter from '../components/NewsLetter'
import ResourceList from '../components/ResourceList'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <ResourceHighlight />
      <NewsLetter />
      <ResourceList />
      <Footer />
    </>
  )
}

export default Home
