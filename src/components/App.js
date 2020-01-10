import React, {useReducer, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Events from './Events'
import EventForm from './EventForm'
import OperationLogs from './OperationLogs'
import AppContext from "../contexts/AppContext";
import reducer from '../reducers'

const APP_KEY='appWithRedux';

const App = () => {

    // localStorageからデータを取得し、あればinitialStateを復元する。
    const appState = localStorage.getItem(APP_KEY);
    const initialState = appState ? JSON.parse(appState) : {
        events: [],
        operationLogs: []
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    // stateが変更されたときにlocalstorageに保存する
    useEffect(() => {
        localStorage.setItem(APP_KEY, JSON.stringify(state));
    }, [state]);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            <div className="container-fluid">
                <EventForm/>
                <hr/>
                <Events/>
                <hr/>
                <OperationLogs/>
            </div>
        </AppContext.Provider>
    );
};

export default App;
