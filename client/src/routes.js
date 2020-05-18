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
                <Route path = "/links" component={LinksPage} exact/>

                <Route path = "/create" component={CreatePage} exact/>

                <Route path = "/dash/:id" component={DashboardPage}/> {/* Return Dynamic Parameter ID based on user id*/}

                <Route path = "/sounds" component={SoundsPage} exact/>

                <Route path = "/images" component={ImagesPage} />

                <Redirect to = "/create"/>
            </Switch>
        );
    }
    //return these pages if user is not in the system
    return(
        <Switch>
            <Route path = "/" component={AuthPage} exact/>

            <Route path = "/sounds" component={SoundsPage} exact/>

            <Route path = "/images" component={ImagesPage} />

            <Route path = "/links" component={LinksPage} exact/>

            <Route path = "/create" component={CreatePage} exact/>

            <Redirect to = "/" />{/*redirect to the main page*/}
        </Switch>
    );
}