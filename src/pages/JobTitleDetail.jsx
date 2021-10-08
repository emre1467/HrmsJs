import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router'
import { Button, Card, Image } from 'semantic-ui-react'
import JobTitleService from '../services/jobPositionService';

export default function JobTitleDetail() {
//Dashbord route deki id
    let {id}=useParams();

    const [jobTitle, setJobTitle] = useState({});

    useEffect(() => {
        let jobTitleService = new JobTitleService()
        jobTitleService.getById(id).then(result => setJobTitle(result.data.data))
    }, [])

    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='/images/avatar/large/jenny.jpg'
                        />
                        <Card.Header>{jobTitle.name}</Card.Header>
                        <Card.Meta>New User</Card.Meta>
                        <Card.Description>
                            Jenny requested permission to view your contact details
                         </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                              </Button>
                            <Button basic color='red'>
                                Decline
                             </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}

