import React, { useState } from 'react'
import { Button, Dropdown, Menu, Grid, Icon } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { Link } from 'react-router-dom'




export default function Navi() {

    const [isAuthenticated, setisAuthenticated] = useState(false)

    function handleSignedOut(params) {
        setisAuthenticated(false)
    }
    function handleSignedIn(params) {
        setisAuthenticated(true)
    }




    return (
        <div >

            <Menu color='teal' inverted fixed  >
                <Link to={`/`}><Menu.Item
                    icon="handshake outline"
                    name='İnsan Kaynakları'
                /></Link>



                <Menu.Menu position='right' >
                    <Menu.Item><Button color='white' inverted><Link to={`/Filter`}>İş Ara</Link> </Button></Menu.Item>
                    <Menu.Item><Button color='white' inverted><Link to={`/AddJobAdvert`}>İlan ver</Link> </Button></Menu.Item>
                    <Dropdown item text='İşveren ' icon="industry" >
                        <Dropdown.Menu>
                            <Dropdown.Item>Giriş Yap</Dropdown.Item>
                            <Dropdown.Item>Kayıt Ol</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                    {isAuthenticated ? <SignedIn signOut={handleSignedOut} /> : <SignedOut signIn={handleSignedIn} />}
                </Menu.Menu>


            </Menu>

        </div>
    )
}
