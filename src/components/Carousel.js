import React from 'react';


import iAmDeveloper from './../assets/images/iAmDeveloper.jpg';
import iAmDeveloper2 from './../assets/images/iAmDeveloper2.jpg';
import youTubeDeveloper from './../assets/images/youtubeDeveloper.png';
import Card from './../components/Card'
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Carousel extends React.Component{

    constructor(props){
        super(props);

        this.state={
            items:[
                {
                    id:0,
                    title:"Dev Grub",
                    subTitle:"The cook book for developers",
                    imgSrc:iAmDeveloper,
                    link:"https://devgrub.com",
                    selected:false
                },
                {
                    id:1,
                    title:"Gerret Love",
                    subTitle:"Youtube channel",
                    imgSrc:iAmDeveloper2,
                    link:"https://devgrub.com",
                    selected:false
                },
                {
                    id:2,
                    title: "Everest",
                    subTitle: "A social network for developers",
                    imgSrc: youTubeDeveloper,
                    link:"https://devgrub.com",
                    selected:false
                },
            ]
        }
    }

    handleCardClick = (id, card) =>{
        console.log(id)
        let items = [...this.state.items]
        items[id].selected = items[id].selected ? false : true;
        items.forEach((item)=>{
            if(item.id !== id){
                item.selected = false;
            }   
        });
        
        this.setState({
            items
        });
    }

    makeItems = (items) =>{
        return items.map(item => {
            return <Card item={item} click={( e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }
    render(){
        return (
            <Container fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }


}

export default Carousel