import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './About.css';

class About extends Component {
  render() {
    return (
      <div  >
        <h2 className={styles['about-header']}>Here is site about!</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quas neque consequuntur inventore voluptatibus, adipisci labore soluta ipsum eos. Debitis et corporis omnis dolorem tenetur laboriosam inventore. Et repellendus perspiciatis aliquam non accusantium tempora vel natus blanditiis? Corrupti est quaerat aspernatur placeat. Tenetur, natus explicabo. Porro autem culpa temporibus id incidunt recusandae est cumque nisi eius, neque deserunt ex ipsum quam vitae perspiciatis? Quia repudiandae aspernatur veniam odio minima ipsam ipsa, esse commodi quidem? Ratione fuga repudiandae ex nemo et.</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
