import Link from 'next/link'

const Headlines = ({ headlines }) => (
  <ul>
    {headlines.map(headline => (
      <li key={headline}>
        <Link href={`/article?title=${headline}`}>
          <a>{headline}</a>
        </Link>
      </li>
    ))}
    <style jsx>{`
      ul {
        list-style: none;
        padding: 0;
      }

      li {
        padding: 8px 0px;
      }

      li + li {
        border-top: 1px solid lightgray;
      }

      a {
        color: black;
        text-decoration: none;
      }

      a:visited {
        color: gray;
      }
    `}</style>
  </ul>
)

export default Headlines
