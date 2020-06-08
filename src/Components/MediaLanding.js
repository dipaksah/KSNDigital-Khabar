import React, { Component } from 'react'
import NavBar from './NavBar'
import MediaHead from './MediaHead'
import { Container, Jumbotron, Row, Col } from 'reactstrap'
import MediaFooter from './MediaFooter'

export default class MediaLanding extends Component {
    render() {
        return (
            <div>
                <div className="ad1">
                    <h1>Advertisements Part</h1>
                </div>
                <br />
                <div>
                    <MediaHead />
                    <NavBar/>
                </div>
                <Container fluid>
                    <Row>
                        <Col xs="3" className="firstContainer">
                           <Row className="Cal">
                               <div>
                               <h1>hello</h1>
                               <h1>hello</h1>
                               <h1>hello</h1>
                               <h1>hello</h1>
                               </div> 
                           </Row>
                           <Row className="ad2">
                               <p>Advertisements part 2</p>
                           </Row>
                           <Row className="Cal2">
                               <div>
                               <h1>hello</h1>
                               <h1>hello</h1>
                               <h1>hello</h1>
                               <h1>hello</h1>
                               </div> 
                           </Row>
                        </Col>

                        <Col xs="6" className="secondContainer">
                            <div className='ContentBody'>
                                <div className='card bg-secondary'>
                                    <div className='card-header'>
                                        <h1>Content Section</h1>
                                        <label> <i className=''>sub content</i> </label>
                                    </div>
                                    <div className='card-body'>
                                        <img src="../Images/covid.jpeg" width="100%" height="350" />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="smallBox">
                                <h1>dfjldskj</h1>
                            </div>
                            <div className="smallBox">
                                <h1>dfjldskj</h1>
                            </div>
                            <div className="smallBox">
                                <h1>dfjldskj</h1>
                            </div>
                            <div className="smallBox">
                                <h1>dfjldskj</h1>
                            </div>
                        </Col>

                        <Col xs="3" className="thirdContainer">
                           <Row className="Cal3">
                               <div>
                                  <h1>hello</h1>
                                  <h1>hello</h1>
                                  <h1>hello</h1>
                                  <h1>hello</h1>
                                  <h1>hello</h1>
                                  <h1>hello</h1>
                               </div>
                           </Row>
                           <Row className="ad3">
                               <p>Advertisements part 3</p>
                           </Row>
                        </Col>
                    </Row>
                </Container>

                <Container fluid>
                    <div>
                        <MediaFooter/> 
                    </div>
                </Container>
            </div>
        )
    }
}
