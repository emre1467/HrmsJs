import React, { useState, useEffect } from 'react'
import JobTitleService from '../services/jobPositionService'
import { Menu, Form, Checkbox, Grid } from 'semantic-ui-react'
import CityService from '../services/cityService'
import JobAdvertList from '../pages/JobAdvertList'




export default function Filter() {


  const [jobTitles, setJobTitles] = useState([])

  useEffect(() => {
    let jobTitleService = new JobTitleService()
    jobTitleService.getJobTitles().then(result => setJobTitles(result.data.data))
  }, [])

  const [cities, setCities] = useState([])

  useEffect(() => {
    let cityService = new CityService()
    cityService.getCity().then(result => setCities(result.data.data))
  }, [])

  return (
    <div>

      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Menu vertical style={{ borderRadius: '10px' }}>
              <Menu.Item style={{ border: '3px solid #f2f2f2', borderRadius: '10px' }}>
                <Menu.Header>Jobs</Menu.Header>
                <Menu.Menu>
                  <Form style={{ border: '1px solid #f5f5f5' }}>
                    <Form.Field
                      style={{
                        height: 250,
                        overflowY: "scroll",
                        overflowX: "hidden",
                        display: "grid",
                        margin: "auto",
                      }}
                    >
                      {jobTitles.map((jobTitle) => (
                        <Checkbox
                          style={{ marginLeft: '15px' }}
                          name="checkboxRadioGroup"
                          label={jobTitle.name}
                          key={jobTitle.id}
                          value={jobTitle.id}
                        />
                      ))}
                    </Form.Field>
                  </Form>
                </Menu.Menu>
              </Menu.Item>

              <Menu.Item style={{ border: '3px solid #f2f2f2', borderRadius: '10px' }}>
                <Menu.Header>City</Menu.Header>
                <Menu.Menu>
                  <Form style={{ border: '1px solid #f5f5f5' }}>
                    <Form.Field
                      style={{
                        height: 250,
                        overflowY: "scroll",
                        overflowX: "hidden",
                        display: "grid",
                        margin: "auto",
                      }}
                    >
                      {cities.map((city) => (
                        <Checkbox
                          style={{ marginLeft: '15px' }}
                          name="checkboxRadioGroup"
                          label={city.name}
                          key={city.id}
                          value={city.id}
                        />
                      ))}
                    </Form.Field>
                  </Form>
                </Menu.Menu>
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column width={8}>
            <JobAdvertList />
          </Grid.Column>
        </Grid.Row>
      </Grid>


    </div>
  )
}
