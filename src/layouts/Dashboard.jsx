import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react'
import CandidateList from '../pages/CandidateList'
import EmployerList from '../pages/EmployerList'
import JobTitleList from '../pages/JobTitleList'


import Navi from './Navi'
import SideBar from './SideBar'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <SideBar />
                    </Grid.Column>

                    <Grid.Column width={12}>
                        <EmployerList />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>

                    <Grid.Column width={4}>

                    </Grid.Column>
                    <Grid.Column width={12}>
                        <CandidateList />
                    </Grid.Column>

                </Grid.Row>
                <Grid.Row>

                    <Grid.Column width={4}>

                    </Grid.Column>
                    <Grid.Column width={12}>
                        <JobTitleList />
                    </Grid.Column>

                </Grid.Row>
            </Grid>


        </div>
    )
}
