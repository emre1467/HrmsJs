import React, { useState, useEffect } from 'react'
import { Icon, Table, Header, Card, Button, Image,CardGroup } from 'semantic-ui-react'
import JobAdvertService from '../services/jobPostingService'
import { Link } from 'react-router-dom'


export default function JobAdvertList() {

    const [jobAdverts, setJobAdverts] = useState([])

    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getJobAdverts().then(result => setJobAdverts(result.data.data))
    }, [])


    return (
     <div >
      <CardGroup centered>
        {jobAdverts.map((jobAdvert) => (
          <Card
            fluid
            floated="right"
            
            key={jobAdvert.id}>
            <Card.Content>
                      <Image
                floated="left"
                size="mini"
                src=""
              />
              <Link to={`/jobs/${jobAdvert.id}`}>
              <Card.Header textAlign="center">{jobAdvert.jobsTitle.name}</Card.Header>
              <Card.Meta textAlign="right">{jobAdvert.city.name}</Card.Meta>
              <Card.Content textAlign="left">{jobAdvert.employers.companyName}</Card.Content>
              <Card.Meta textAlign="left">Minimum Alım : {jobAdvert.openPositionCount}</Card.Meta>
              <Card.Meta textAlign="right"><i className='bell icon'></i> {jobAdvert.deadline}</Card.Meta>
              <Card.Meta textAlign="right">Son Başvuru Tarihi</Card.Meta>

              </Link>
            </Card.Content>
            <Card.Content extra>
              <div className="ui three buttons" >
                <Button basic color="green">
                  Başvur
                </Button>
                <Button basic color="red">
                  Kaydet
                </Button>
                <Link to={`/jobs/${jobAdvert.jobAdvertId}`}>
                <Button basic color="blue">
                  İlan Detayı
                </Button>
                </Link>
              </div>
            </Card.Content>
          </Card>
        ))}
      </CardGroup>
    </div>

    )
}
