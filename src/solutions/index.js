import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Calculator from '../calculator';
import 'react-input-range/lib/css/index.css';
import WebFont from 'webfontloader';
import './solutions.scss';

WebFont.load({
  google: {
    families: ['Roboto:900', 'sans-serif']
  }
});

class Solutions extends Component{
	render(){
		return(
			<Container className="solutions">
				<Row>
					<Col xs="4">
						<h2>Save more with</h2>
						<h2>Bellotero.io</h2>
						<p>With Bellotero.io you save time and money make real-time decisions that boost your business and your bottom line. Get less wrongfully blocked payments, save time on bookkeeping and no need to worry about safety.</p>
					</Col>
					<Col xs={{size: 6, offset: 2}}>
						<Calculator></Calculator>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Solutions;