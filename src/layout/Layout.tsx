import { Outlet, useNavigation } from "react-router-dom";

import "./layout.scss";
import Loader from "../components/ui/loader/Loader";
import Header from "../components/header/Header";

const Layout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <div className="layout">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
