import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react'
import CandidateList from '../pages/CandidateList'
import EmployerList from '../pages/EmployerList'
import JobTitleList from '../pages/JobTitleList'
import JobAdvertList from '../pages/JobAdvertList'

import Filter from '../layouts/Filter'


import { Route } from 'react-router-dom'
import JobTitleDetail from '../pages/JobTitleDetail'
import { Link } from 'react-router-dom'
import AddJobPosting from '../pages/AddJobPosting'


export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                       
                    </Grid.Column>

                    <Grid.Column width={16}>
                        <Route exact path="/employers" component={EmployerList}/>
                        <Route exact path="/candidates" component={CandidateList}/>
                        <Route exact path="/jobAdverts" component={JobAdvertList}/>
                        <Route exact path="/jobTitles" component={JobTitleList}/>
                        <Route  path="/jobTitles/:id" component={JobTitleDetail}/>
                        <Route exact path="/Filter" component={Filter}/>
                        <Route exact path="/jobAdverts" component={JobTitleList}/>


                    </Grid.Column>
                    
                </Grid.Row>
               
               <AddJobPosting/>
              
            </Grid>


        </div>
    )
}
