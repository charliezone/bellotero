import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

class Solutions extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Container>
				<Row>
					<Col>
						<h1>Solutions</h1>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Solutions;