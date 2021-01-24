import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect,Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import routes from '../constants/routes.js';

const RenderPages = () => {
    return routes.map((route, index) => {
        return <Route key={index} path={route.path} exact component={props => route.main(props)} />
    })
}

function App(props) {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <h1>Header</h1>
            <nav>
                <Link to="/">HOME</Link>
                <Link to="/products">PRODUCTS</Link>
            </nav>
            <Switch>
                {RenderPages()}
            </Switch>
            <h1>Footer</h1>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Router>
    );
}

export default App;