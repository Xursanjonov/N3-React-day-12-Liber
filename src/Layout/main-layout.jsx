import { Header } from "./Header/header";
import { Footer } from "./Footer/footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
        <div className="wrapper">
            <div>
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
};