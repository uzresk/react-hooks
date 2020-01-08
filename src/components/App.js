import React, {useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Events from './Events'
import EventForm from './EventForm'
import AppContext from "../contexts/AppContext";
import reducer from '../reducers'

const App = () => {

    const [state, dispatch] = useReducer(reducer, []);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            <div className="container-fluid">
                <EventForm/>
                <hr/>
                <Events/>
            </div>
        </AppContext.Provider>
    );
};

export default App;
