import React from 'react';

import testOne from '../assets/images/testOne.png';
import testTwo from '../assets/images/testTwo.png';
import testThree from '../assets/images/testThree.png';

import Card from './Card';
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Test 1',
                    subTitle: 'Test 1',
                    imgSrc: testOne,
                    link: 'https://www.google.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Test 2',
                    subTitle: 'Test 2',
                    imgSrc: testTwo,
                    link: 'https://twitter.com/explore',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Test 3',
                    subTitle: 'Test 3',
                    imgSrc: testThree,
                    link: 'https://www.facebook.com/',
                    selected: false
                },

            ]
        }

    }

        handleCardClick = (id, card) => {

            console.log(id);

            let items = [...this.state.items];

            items[id].selected = items[id].selected ? false : true;

            items.forEach(item => {
                if (item.id !== id) {
                    item.selected = false
                }
            });

            this.setState({
                items
            });
        }

        makeItems = (items) => {
            return items.map(item => {
                return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
            })
        }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}

                </Row>
            </Container>
        );
    }

}

export default Carousel;