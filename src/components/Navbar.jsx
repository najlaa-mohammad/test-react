import styles from './header.module.css'

function Navbar({links}){
    console.log(links)


return (
  <nav>
    <ul className={styles.list}>
      {links.map((link, index) => {
        return (
          <li key={index}>
            <a href={link.url}>{ link.title}</a>
          </li>
        );
      })}
    </ul>
  </nav>
)

            // {/* <li>
            // <a href="/">home</a>
            // </li>
            // <li>
            // <a href="/about">about</a>
            // </li>
            // <li>
            // <a href="/contact">contact</a>
            // </li> */}

            }
export default Navbar