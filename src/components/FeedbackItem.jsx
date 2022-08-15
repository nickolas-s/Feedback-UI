import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';

const FeedbackItem = ({ item, handleDelete }) => {
  const { rating, text } = item;

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button
        type="button"
        className="close"
        onClick={() => handleDelete(item.id)}
      >
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
};

export default FeedbackItem;
