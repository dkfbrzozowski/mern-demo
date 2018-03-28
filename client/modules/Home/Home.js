import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Home.css';

class Home extends Component {
  render() {
    return (
      <div >
        <h2 className={styles['home-header']} >Hello!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quisquam. Libero dicta molestiae iste natus voluptatum doloremque asperiores inventore quasi quos molestias quae et perferendis illum in, aliquam quod fuga atque adipisci nesciunt! Voluptatum aperiam odio aliquid nisi, quo ut deserunt, magnam, ipsam dolor et necessitatibus nobis autem consequatur delectus placeat quod! Quod voluptates quos tempora quaerat debitis corrupti, asperiores velit animi neque distinctio impedit natus dolorem! Sit obcaecati repellat et amet quidem provident consectetur deserunt voluptate mollitia quia doloribus natus quo perspiciatis similique accusantium, unde blanditiis laboriosam, nisi officiis maiores rerum esse hic magnam harum? Adipisci harum suscipit voluptatum!</p>
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

Home.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
