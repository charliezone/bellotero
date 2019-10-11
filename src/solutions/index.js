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
						<input type="range" defaultValue={0} />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Solutions;