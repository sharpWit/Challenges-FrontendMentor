import styles from "./layout.module.css";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return <div className={styles.layout}>{props.children}</div>;
};

export default Layout;
