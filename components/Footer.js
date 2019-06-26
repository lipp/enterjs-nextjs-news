const Footer = () => (
  <footer>
    powered by{' '}
    <a href="https://newsapi.org" target="_blank">
      newsapi.org
    </a>
    <style jsx>{`
      footer {
        position: sticky;
        bottom: 0;
        border-top: 1px solid lightgray;
        background: white;
        z-index: 1;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      a {
        margin-left: 0.4em;
      }
    `}</style>
  </footer>
)

export default Footer
