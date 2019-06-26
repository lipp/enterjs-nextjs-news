import Head from 'next/head'
import Header from '../components/Header'

const IndexPage = () => (
  <>
    <Head>
      <title>EnterJS - News</title>
    </Head>
    <Header />
    <div>
      <h1>EnterJS News</h1>
    </div>
    <style jsx>{`
      div {
        display: flex;
        margin-top: 30vh;
        align-items: center;
        justify-content: center;
      }

      h1 {
        color: purple;
        border-top: 10px solid purple;
        border-bottom: 10px solid purple;
      }
    `}</style>
  </>
)

export default IndexPage
