import { Outlet } from 'react-router-dom';
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";


const DashboardLayout = () =>{
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Header />
        <main className="min-h-screen bg-background p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;