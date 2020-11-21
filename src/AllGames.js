import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';
import './inventory.css';


export class AllGames extends Component {
    static displayName = AllGames.name;

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch("https://localhost:44367/api/Games")
            .then(res => res.json())
            .then(json => {
                this.setState(
                    {
                        isLoaded: true,
                        items: json,
                    })
            });
    }

    renderTableData() {
        return this.state.items.map((item) => {
            const { id, title, releaseYear, description, publisherId } = item
            return (
                <tr key={id}>
                    <td>{releaseYear}</td>
                    <td><Link to={{ pathname: `/Game/${item.id}` }}>{title}</Link></td>
                    <td>{description}</td>
                    <td>{publisherId}</td>
                </tr>
            )
        })
    }

    renderData() {
        return (
            <Container fluid>
                <Row>
                    {this.state.items.map((item) => (
                        <Col xs={4}>
                            <Link to={{ pathname: `/Game/${item.id}` }}><img src={item.image} alt="NOT FOUND" /> </Link>
                            <p>{item.title}</p>
                        </Col>
                    ))};
                </Row>
            </Container>
        )
    }


    render() {
        if (!this.state.isLoaded) {
            return <div>Loading..</div>
        }

        else {
            return (
                <div>
                    <h1 id='title'>All Games</h1>
                    {this.renderData()}
                </div>
            )
        }
    }
}

//<Table stripid bordered hover>
//    <thead>
//        <tr>
//            <td>release year</td>
//            <td>title</td>
//            <td>description</td>
//            <td>publisherID</td>
//        </tr>
//    </thead>
//    <tbody>
//        {this.renderTableData()}
//    </tbody>
//</Table>