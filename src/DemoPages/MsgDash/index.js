import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';


import MyMsgs from './Msgs'
import SharedMsgs from './SharedMsgs'


const MsgDash = ({match}) =>  (
            <Fragment>
          
                <Route path={`${match.url}/`} component={MyMsgs} />
                <Route path={`${match.url}/shared-messages`} component={SharedMsgs} />

            </Fragment>

                                
                          
                        
        )

export default MsgDash;