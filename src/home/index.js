import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Home extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Container>
				<Row>
					<Col>
						<h1>Home</h1>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Home;