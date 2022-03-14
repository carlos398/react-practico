import React from 'react'
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import '../styles/global.scss'

// imr => import react app
// sfc para crear arrow function export
const App = () => {
    return ( 
        <Layout>
            <Login/>
        </Layout>
     );
}
 
export default App;