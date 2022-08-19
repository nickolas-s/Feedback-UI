import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import FeedbackData from '../data/data';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(
        feedback.filter((singleFeedback) => singleFeedback.id !== id)
      );
    }
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updatedFeedback = (id, udpItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...udpItem } : item))
    );

    setFeedbackEdit({ item: {}, edit: false });
  };

  return (
    <FeedbackContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updatedFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

FeedbackProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FeedbackContext;
