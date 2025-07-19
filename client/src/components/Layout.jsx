import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
function Layout() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
    const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);
    return (
        <div className={isSidebarCollapsed ? " layout" : 'layout.close'}>
            <div class="Caixa-principal">
                <div className="Up-bar" >
                    <Header toggleSidebar={toggleSidebar} />
                </div >

                <div className="Side-bar">
                    {isSidebarCollapsed && <Menu toggleSidebar={toggleSidebar} />}
                </div>

                <div className="Conteúdo-central">
                    <Outlet />
                </div>
            </div>
        </div >
    );
}
export default Layout;