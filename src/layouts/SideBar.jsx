import React from 'react'
import { Dropdown, Menu,Icon } from 'semantic-ui-react'

export default function SideBar() {
    return (
        <div>
            <Menu inverted vertical>
                
                <Menu.Item>
                    <Icon name="user"/>
                     Employer
                </Menu.Item>
                <Menu.Item>
                    <Icon name="user"/>
                     Candidates
                </Menu.Item>
                <Menu.Item>
                    <Icon name="user"/>
                     Employee
                </Menu.Item>
            </Menu>
        </div>
    )
}
