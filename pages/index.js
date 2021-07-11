import Navbar from '../components/Navbar'
import ResourceHighlight from '../components/ResourceHighlight'
import NewsLetter from '../components/NewsLetter'
import ResourceList from '../components/ResourceList'

function Home() {
  return (
    <>
      <Navbar />
      <ResourceHighlight />
      <NewsLetter />
      <ResourceList />

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Bulma - Blog theme</strong> by{' '}
            <a href="https://gonzalojs.com">Gonzalo Gutierrez</a>. Based on the{' '}
            <a href="http://jigsaw-blog-staging.tighten.co/">jigsaw-blog</a>.
            The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Home
