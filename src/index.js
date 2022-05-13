import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './i18n';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Recipes } from './features/recipes/Recipes';
import { RecipeDetails } from './features/recipes/recipe-details/RecipeDetails';
const About = React.lazy(() => import('./features/about/About'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        element={<Navigate to='recipes'></Navigate>}
                    ></Route>
                    <Route path='/recipes'>
                        <Route index element={<Recipes></Recipes>}></Route>
                        <Route
                            path=':id'
                            element={<RecipeDetails></RecipeDetails>}
                        ></Route>
                    </Route>
                    <Route path='/about'>
                        <Route
                            index
                            element={
                                <React.Suspense fallback={<>...</>}>
                                    <About />
                                </React.Suspense>
                            }
                        ></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
