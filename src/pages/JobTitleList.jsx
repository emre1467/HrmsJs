import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Icon,  Table, Header } from 'semantic-ui-react'
import JobTitleService from '../services/jobPositionService'

export default function JobTitleList() {

    const [jobTitles, setJobTitles] = useState([])

    useEffect(() => {
        let jobTitleService = new JobTitleService()
        jobTitleService.getJobTitles().then(result => setJobTitles(result.data.data))
    },[])

    return (
        
        <div>
            <Header as="h2">
                <Icon name="list alternate outline" />
                <Header.Content>Job Title List</Header.Content>
            </Header>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                       
                    </Table.Row>
                </Table.Header>

                <Table.Body>{
                    jobTitles.map((jobTitle) => (
                        <Table.Row key={jobTitle.id}>
                          
                            <Table.Cell><Link to ={`/jobTitles/${jobTitle.id}`} >{jobTitle.name} </Link></Table.Cell>
                        </Table.Row>

                    ))
                }
                
                </Table.Body>
            </Table>
        </div>
    )
}
