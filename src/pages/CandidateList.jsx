import React, { useState, useEffect } from 'react'
import { Icon, Label, Menu, Table, Header } from 'semantic-ui-react'
import CandidateService from '../services/candidateService'


export default function CandidateList() {

    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        let candidateService = new CandidateService()
        candidateService.getCandidate().then(result => setCandidates(result.data.data))
    },[])

    return (
        <div>
            <Header as="h2">
                <Icon name="list alternate outline" />
                <Header.Content>Candidate List</Header.Content>
            </Header>
            <Table celled>

                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Nationality Id</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Date Of Birth</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>{
                    candidates.map((candidate) => (
                        <Table.Row key={candidate.id}>
                            <Table.Cell>{candidate.firstName}</Table.Cell>
                            <Table.Cell>{candidate.lastName}</Table.Cell>
                            <Table.Cell>{candidate.nationalityId} </Table.Cell>
                            <Table.Cell>{candidate.email} </Table.Cell>
                            <Table.Cell>{candidate.dateOfBirth} </Table.Cell>
                        </Table.Row>

                    ))
                }
                </Table.Body>
            </Table>
        </div>
    )
}
