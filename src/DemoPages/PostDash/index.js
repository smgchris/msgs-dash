import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';


import MyPosts from './posts'


const MsgDash = ({match}) =>  (
            <Fragment>
          
                <Route path={`${match.url}/my-posts`} component={MyPosts} />

            </Fragment>

                                
                          
                        
        )

export default MsgDash;