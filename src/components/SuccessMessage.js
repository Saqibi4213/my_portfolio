import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function SuccessMessage() {
  return (
    <div id="success-message" className="success-message">
      <FontAwesomeIcon icon={faTimesCircle} className="close-button" />
      <p>Your message has been sent successfully!</p>
    </div>
  );
}

export default SuccessMessage;