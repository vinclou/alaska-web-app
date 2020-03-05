import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {AuthPage}   from './pages/AuthPage';
import {LinksPage}  from './pages/LinksPage';
import {CreatePage} from './pages/CreatePage';
import {DashboardPage} from './pages/DashboardPage';
import {SoundsPage} from './pages/SoundsPage';
import {ImagesPage} from './pages/ImagesPage';

export const useRoutes = isAuthenticated => {
    //user is in the system cases 
    if(isAuthenticated) {
        return(
            <Switch>
                <Route path = "/links" exact>
                    <LinksPage/>
                </Route>
                <Route path = "/create" exact>
                    <CreatePage/>
                </Route>
                <Route path = "/detail/:id" > {/* Return Dynamic Parameter ID based on user id*/}
                    <DashboardPage/>
                </Route>
                <Route path = "/sounds" exact>
                    <SoundsPage/>
                </Route>
                <Route path = "/images" exact>
                    <ImagesPage/>
                </Route>
                <Redirect to = "/create"/> 
            </Switch>
        );
    }
    //return these pages if user is not in the system 
    return(
        <Switch>
            <Route path = "/" exact>
                <AuthPage/>
            </Route>
            <Redirect to = "/" />{/*redirect to the main page*/}
        </Switch>    
    );
}