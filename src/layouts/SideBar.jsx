import React from 'react'
import { Dropdown, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default function SideBar() {
    return (
        <div>
            <Menu color='teal' inverted vertical>
                <Link to={`/employers`} >
                    <Menu.Item>
                        <Icon name="user" />
                        Employer

                    </Menu.Item></Link>
                    <Link to={`/candidates`} >
                    <Menu.Item>
                        <Icon name="user" />
                        Candidates

                    </Menu.Item></Link>
                    <Link to={`/jobTitles`} >
                    <Menu.Item>
                        <Icon name="user" />
                        Job Title

                    </Menu.Item></Link>
            </Menu>
        </div>
    )
}
