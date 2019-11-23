import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { fetchSliders } from '../../redux/actions/sliderActions';
import AppCarousel from '../appCarousel';


class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSliders());
  }

  render() {
    const { title, sliders } = this.props;
    return (
      <Container className="home">
        <Row>
          <Col>
            <h2>{ title }</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <AppCarousel items={sliders} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  sliders: state.sliderReducer.sliders,
  title: state.sliderReducer.title,
  loading: state.sliderReducer.loading,
  error: state.sliderReducer.error,
});

Home.propTypes = {
  sliders: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Home);
