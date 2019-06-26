import Header from '../components/Header'
import Footer from '../components/Footer'
import Article from '../components/Article'
import Head from 'next/head'

const ArticlePage = props => (
  <>
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.content} />
    </Head>
    <Header />
    <Article {...props} />
    <Footer />
  </>
)

ArticlePage.getInitialProps = async ({ query }) => {
  const resp = await fetch(
    `https://news-api.lipp.now.sh/article?title=${query.title}`
  )
  const article = await resp.json()
  return {
    ...article
  }
}

export default ArticlePage
