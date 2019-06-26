const Article = ({ urlToImage, title, content, url }) => (
  <>
    {urlToImage ? (
      <img
        src={`https://img-scale.lipp.dev?url=${encodeURIComponent(urlToImage)}`}
      />
    ) : null}
    <h1>{title}</h1>
    <p>{content}</p>
    <a href={url} target="_blank">
      Read more ...
    </a>
    <style jsx>{`
      img {
        width: 100%;
      }
    `}</style>
  </>
)

export default Article
