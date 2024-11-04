import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routerConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const AppRouter = () => (
    <Routes>
        {Object.values(RouteConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-wrapper">
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);

export default AppRouter;
