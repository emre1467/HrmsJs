import React, { useState, useEffect } from 'react'
import { Icon, Label, Menu, Table, Header } from 'semantic-ui-react'
import EmployerService from '../services/employerService'

export default function EmployerList() {

    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers().then(result => setEmployers(result.data.data))
    })



    return (
        <div>
            <Header as="h2">
                <Icon name="list alternate outline" />
                <Header.Content>Employer List</Header.Content>
            </Header>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Web Site</Table.HeaderCell>
                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>{
                    employers.map((employer) => (
                        <Table.Row key={employer.id}>
                            <Table.Cell>{employer.companyName}</Table.Cell>
                            <Table.Cell>{employer.webSite}</Table.Cell>
                            <Table.Cell>{employer.phoneNumber} </Table.Cell>
                            <Table.Cell>{employer.email} </Table.Cell>
                        </Table.Row>

                    ))
                }
                </Table.Body>
            </Table>
        </div>
    )
}
