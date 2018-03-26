import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './PostVote.css';

const PostVote = (props, context) => {
  return (
    <div className={styles['post-vote']}>
    <button
      className={styles['post-vote-button']}
      onClick={props.handleThumbDown()} >
        <i className={"fa fa-thumbs-down"} aria-hidden="true"></i>
    </button>
    <FormattedMessage id="votes" />: {props.voteCount}
    <button
      className={styles['post-vote-button']}
      onClick={props.handleThumbUp()} >
        <i className={"fa fa-thumbs-up"} aria-hidden="true"></i>
    </button>
  </div>
  );
};

PostVote.propTypes = {
  voteCount: PropTypes.number.isRequired,
  handleThumbUp: PropTypes.func.isRequired,
  handleThumbDown: PropTypes.func.isRequired,
};

export default PostVote;
