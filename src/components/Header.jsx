import styles from "./header.module.css";
import Navbar from "./Navbar";

const links = [
    { title: "home", url: "/" },
    { title: "about", url: "/about" },
    { title: "contact", url: "/contact" },
  ];
const Header = () => {

  return (
    <header className={styles.header}>
      <a href="/">logo</a>
      <Navbar links={links} />
    </header>
  );
};
export default Header;
