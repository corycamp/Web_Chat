import React, { Component } from 'react'
import '../styling.css'

//Connecting Pages together
import { BrowserRouter as Router, Switch as router, Link, Route } from 'react-router-dom';

//Sidebar
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

//Components
import SignUp from './SignUp';
import Login from './Login';
import Homepage from './Homepage.jsx';
import Global_Chat from '../Rooms/Global_Chat';
import Create_Chat from '../Rooms/Create_Chat';
import Join_Chat from '../Rooms/Join_Chat';

class Landingpage extends Component {
    constructor(props) {

        super(props)
    }

    render() {
        return ( 
            <div >
            <Router>
            <Link to = '/' class = 'Nav'> Home</Link> 
            <Link to = '/SignUp' class = 'Nav'> SignUp </Link> 
            <Link to = '/Login' class = 'Nav'> Login </Link> 
            <router > 
                <Route exact path= '/' component = {Homepage}/>
                <Route exact path = '/SignUp' component = { SignUp }/> 
                <Route exact path = '/Login' component = { Login }/>
                <Route exact path= '/Global_Chat' component = {Global_Chat}/>
                <Route exact path = '/Create_Chat' component = { Create_Chat }/> 
                <Route exact path = '/Join_Chat' component = { Join_Chat }/> 
            </router> 
                <ProSidebar class = 'sidebar'>
                    <Menu iconShape="square">
                        <SidebarContent>
                        <MenuItem class = 'options'>
                            Meet New People
                            <Link to = '/Global_Chat'/> 
                        </MenuItem>
                        <MenuItem class = 'options'>
                            Create Chat Room
                            <Link to = '/Create_Chat'/> 
                        </MenuItem>
                        <MenuItem class = 'options'>
                            Join Chat
                            <Link to = '/Join_Chat'>Join_Chat</Link> 
                        </MenuItem>
                            {/* <SubMenu title="Components" >
                                <MenuItem>Component 1</MenuItem>
                                <MenuItem>Component 2</MenuItem>
                            </SubMenu> */}
                        </SidebarContent>
                    </Menu>
                    <SidebarFooter>
                       {/**
                           *  You can add a footer for the sidebar ex: copyright
                          */}
                    </SidebarFooter>
                </ProSidebar>
                </Router> 
            </div>
        )
    }

}
export default Landingpage;