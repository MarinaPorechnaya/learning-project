import React, {Component} from 'react';
import './App.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route, withRouter} from "react-router-dom";
import UsersConteiner from "./components/Users/UsersConteiner";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
//import DialogsConteiner from "./components/Dialogs/DialogsConteiner";
//import ProfileContainer from "./components/Profile/ProfileContainer";
const DialogsConteiner = React.lazy(() => import('./components/Dialogs/DialogsConteiner'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Sidebar dataForSidebar={this.props.store}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => {
                        return (
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <DialogsConteiner/>
                            </React.Suspense>)
                    }}/>
                    <Route path='/profile/:userId?' render={() => {
                        return (
                            <React.Suspense fallback={<div>Loading...</div>}><ProfileContainer/></React.Suspense>)
                    }}/>
                    <Route path='/users' render={() => <UsersConteiner/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapPropStateTos = (state) => ({
    initialized: state.app.initialized
})
export default compose(withRouter, connect(mapPropStateTos, {initializeApp}))(App);