import { Outlet } from "react-router";
import MainNav from './helpers/MainNav';

const AppLayout: React.FC = () => {
  return (
    <div>
      <MainNav />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <footer>
        <hr />
        <p>AppLayout Footer</p>
      </footer>
    </div>
  )
}

export default AppLayout;
