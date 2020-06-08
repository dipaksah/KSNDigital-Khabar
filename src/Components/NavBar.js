import React, { Component } from 'react'
import {
	Navbar,
    Nav, 
    NavbarBrand, 
    NavbarToggler, 
    Collapse, 
    NavItem, 
    NavLink, 
    UncontrolledDropdown,
    DropdownItem,DropdownToggle,DropdownMenu
} from 'reactstrap'

export default class NavBar2 extends Component {


	constructor(props) {
		super(props)
	
		this.state = {
			isOpen: false
		}
	}
	
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};


    render() {
        return (
            <Navbar expand="md"  className="navBar2">
					<NavbarBrand href="/dashboard">NNR News</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem className="mediaNav">
								<NavLink href="/dashboard">About</NavLink>
							</NavItem>
							<NavItem className="mediaNav">
								<NavLink href="/profile">Profile</NavLink>
							</NavItem>
							<NavItem className="mediaNav">
								<NavLink href="/MediaLanding">Media Landing</NavLink>
							</NavItem>
                            <NavItem className="mediaNav">
								<NavLink href="/MediaLanding">option1</NavLink>
							</NavItem>
                            <NavItem className="mediaNav">
								<NavLink href="/MediaLanding">option 2</NavLink>
							</NavItem>
                            <NavItem className="mediaNav">
								<NavLink href="/MediaLanding">option 3</NavLink>
							</NavItem>
                        </Nav>

                            <Nav>
                                    <NavItem className="mediaNav">
                                        <NavLink href="/MediaLanding">option 4</NavLink>
                                    </NavItem>
                                    <NavItem className="mediaNav">
                                        <NavLink href="/MediaLanding">option 5</NavLink>
                                    </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Account
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                        <NavLink href="/adminProfile">Profile</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                        <NavLink href=''>Setting</NavLink>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                    </DropdownMenu>
                                 </UncontrolledDropdown>
						    </Nav>
					</Collapse>
				</Navbar>
        )
    }
}
