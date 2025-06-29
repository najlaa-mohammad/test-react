import styles from './header.css'
function Navbar(){
    const links=['home','about','contact']
    console.log(links)
    return(
        <nav>
            <ul className={styles.list} >
                
            <li>
            <a href="/">home</a>
            </li>
            <li>
            <a href="/about">about</a>
            </li>
            <li>
            <a href="/contact">contact</a>
            </li>
            </ul>
        </nav>
    )
}
export default Navbar