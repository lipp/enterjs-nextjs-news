import Link from 'next/link'

import { withRouter } from 'next/router'

const NavLink = withRouter(({ router, href, children }) => (
  <>
    <Link href={href}>
      <a>{children}</a>
    </Link>
    <style jsx>{`
      a,
      a:visited {
        color: ${router.asPath === href ? 'red' : 'black'};
        text-decoration: none;
      }
    `}</style>
  </>
))

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/headlines?category=technology">Tech</NavLink>
        </li>
        <li>
          <NavLink href="/headlines?category=entertainment">
            Entertainment
          </NavLink>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      header {
        position: sticky;
        top: 0;
        z-index: 1;
        background: white;
        border-bottom: 1px solid lightgray;
        overflow: hidden;
      }

      ul {
        height: 50px;
        padding: 0;
        margin: 0 -10px;
        list-style: none;
        display: flex;
        align-items: center;
      }

      li {
        font-size: 18px;
        padding: 0 10px;
      }

      li + li {
        border-left: 1px solid lightgray;
      }
    `}</style>
  </header>
)

export default Header
