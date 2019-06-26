import Headlines from '../components/Headlines'
import Header from '../components/Header'
import Footer from '../components/Footer'
import 'isomorphic-unfetch'

const HeadlinesPage = ({ headlines }) => (
  <>
    <Header />
    <Headlines headlines={headlines} />
    <Footer />
  </>
)

HeadlinesPage.getInitialProps = async ({ query }) => {
  const resp = await fetch(
    `https://news-api.lipp.now.sh/headlines?category=${query.category}`
  )
  const headlines = await resp.json()
  return { headlines }
}

export default HeadlinesPage
