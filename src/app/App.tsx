import 'app/styles/index.scss'
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";

export const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={''}>
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    <div className="page-wrapper">
                        <AppRouter/>
                    </div>
                </div>
            </Suspense>
        </div>
    );
};
