import React, { useState, useEffect } from 'react'
import { Icon, Label, Menu, Table, Header } from 'semantic-ui-react'
import JobTitleService from '../services/jobTitleService'

export default function JobTitleList() {

    const [jobTitles, setJobTitles] = useState([])

    useEffect(() => {
        let jobTitleService = new JobTitleService()
        jobTitleService.getJobTitles().then(result => setJobTitles(result.data.data))
    })

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
                          
                            <Table.Cell>{jobTitle.name} </Table.Cell>
                        </Table.Row>

                    ))
                }
                </Table.Body>
            </Table>
        </div>
    )
}
