import PropTypes from 'prop-types';

const FeedbackStats = ({ feedback }) => {
  const average =
    feedback.reduce((acc, currentItem) => acc + currentItem.rating, 0) /
    feedback.length;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {Number.isNaN(average) ? 0 : average.toFixed(1)}</h4>
    </div>
  );
};

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;