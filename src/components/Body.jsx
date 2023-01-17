import React from "react";
import { Card, ListGroup, Form, Button, CardGroup, Carousel, Col, Container, Row } from "react-bootstrap";
// import me from '../assets/me.jpg';


// export default () => {
//     return (
//         <div className='container'>
//             <div className='row m-4'>
//                 <div className='col-sm-8'>
//                     <div className="card">
//                         <img src={me} className="card-img-top" alt="" />
//                         <div className="card-body">
//                             <h5 className="card-title">
//                                 Posts
//                             </h5>

//                             <p className="card-text">TEST</p>
//                             <a href="#" className="btn btn-primary">Read More...</a>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='col-6 col-sm-4 text-center'>
//                     <div className="card">
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }


function Body() {
    return (
        <>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img className='d-black w-100' src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_185bfa68451%20text%20%7B%20fill%3A%23afafaf%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_185bfa68451%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23f5f5f5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22289.71875%22%20y%3D%22221.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                        alt="first slid" />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Other Slids */}
            </Carousel>
            <br></br>
            <Container>
                <Row>
                    <Col lg={8}>
                        <header className="mb-4">
                            <h1 className="mb-1">Welcome To Blog!!!</h1>
                            <div className="text-muted fst-italic mb-2">Post On 1/17/2023</div>
                            <a class="badge bg-secondary text-decoration-none link-light" href="#!">Web Design</a>
                        </header>

                        <section className="mb-5">
                            <p className="fs-5 mb-4">Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe.</p>
                            <p className="fs-5 mb-4">The universe is large and old, and the ingredients for life as we know it are everywhere, so there's no reason to think that Earth would be unique in that regard. Whether of not the life became intelligent is a different question, and we'll see if we find that.</p>
                            <p className="fs-5 mb-4">If you get asteroids about a kilometer in size, those are large enough and carry enough energy into our system to disrupt transportation, communication, the food chains, and that can be a really bad day on Earth.</p>
                            <h2 className="fw-bolder mb-4 mt-4">I have odd cosmic thoughts every day</h2>
                            <p className="fs-5 mb-4">For me, the most fascinating interface is Twitter. I have odd cosmic thoughts every day and I realized I could hold them to myself or share them with people who might be interested.</p>
                            <p className="fs-5 mb-4">Venus has a runaway greenhouse effect. I kind of want to know what happened there because we're twirling knobs here on Earth without knowing the consequences of it. Mars once had running water. It's bone dry today. Something bad happened there as well.</p>
                        </section>
                        <section className="mb-5">
                            <Card>
                            <Card.Body>
                                <Form className='mb-4'>
                                    <Form.Control type="textarea" rows="3" placeholder="Join the discussion and leave a comment!" />
                                </Form>

                            </Card.Body>
                            </Card>
                        </section>
                    </Col>
                    <Col lg={4}>
                        <Card className="mb-4">
                            <Card.Header>
                                Search
                            </Card.Header>
                            <Card.Body>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="search"
                                        className="me-2"
                                        aria-lable="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Card className="mb-4">
                            <Card.Header>
                                Categories
                            </Card.Header>
                            <Card.Body>
                            <ListGroup variant="flush">
      <ListGroup.Item action>Cras justo odio</ListGroup.Item>
      <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item action>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


            {/* <Container>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container> */}

        </>
    )
}

export default Body