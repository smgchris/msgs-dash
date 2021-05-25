import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';


import Feedback from './feedback'


const MsgDash = ({match}) =>  (
            <Fragment>
          
                <Route path={`${match.url}/received`} component={Feedback} />

            </Fragment>

                                
                          
                        
        )

export default MsgDash;