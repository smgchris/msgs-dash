import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';


import Account from './account'


const MsgDash = ({match}) =>  (
            <Fragment>
          
                <Route path={`${match.url}/account`} component={Account} />

            </Fragment>

                                
                          
                        
        )

export default MsgDash;