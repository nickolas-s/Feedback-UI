import PropTypes from 'prop-types';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  const { rating, text } = item;

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button
        type="button"
        className="close"
        onClick={() => deleteFeedback(item.id)}
      >
        <FaTimes color="purple" />
      </button>
      <button type="button" className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
