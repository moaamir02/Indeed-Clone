import React, { useState } from 'react';
import { FaRegFrown, FaRegMeh, FaRegSmile, FaRegGrin, FaRegLaughBeam } from 'react-icons/fa';

function Feedback() {
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [feedbackText, setFeedbackText] = useState('');

  const handleEmojiClick = (feedbackType) => {
    setSelectedFeedback(feedbackType);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback:', selectedFeedback, 'Text:', feedbackText);
    // Add logic to handle form submission, e.g., sending feedback to a server.
    setSelectedFeedback(null);
    setFeedbackText('');
  };

  return (
    <div className="border border-gray-200 mt-16 p-8 rounded-lg shadow-md flex flex-col items-center w-full">
      <div className="w-full flex justify-between items-center mb-4">
        <h1 className="font-bold text-xl">Was this page helpful?</h1>
        <div className="flex justify-around gap-7">
          <div className="flex flex-col items-center" onClick={() => handleEmojiClick('Not helpful')}>
            <FaRegFrown size={24} className="mb-2 text-gray-500 hover:text-blue-100 cursor-pointer" />
            <span>Not helpful</span>
          </div>
          <div className="flex flex-col items-center" onClick={() => handleEmojiClick('Slightly helpful')}>
            <FaRegMeh size={24} className="mb-2 text-gray-500 hover:text-blue-100 cursor-pointer" />
            <span>Slightly helpful</span>
          </div>
          <div className="flex flex-col items-center" onClick={() => handleEmojiClick('Helpful')}>
            <FaRegSmile size={24} className="mb-2 text-gray-500 hover:text-blue-100 cursor-pointer" />
            <span>Helpful</span>
          </div>
          <div className="flex flex-col items-center" onClick={() => handleEmojiClick('Fairly helpful')}>
            <FaRegGrin size={24} className="mb-2 text-gray-500 hover:text-blue-100 cursor-pointer" />
            <span>Fairly helpful</span>
          </div>
          <div className="flex flex-col items-center" onClick={() => handleEmojiClick('Very helpful')}>
            <FaRegLaughBeam size={24} className="mb-2 text-gray-500 hover:text-blue-100 cursor-pointer" />
            <span>Very helpful</span>
          </div>
        </div>
      </div>

      {selectedFeedback && (
        <form onSubmit={handleSubmit} className="w-full mt-4">

          <textarea
            className="w-full p-1 border rounded-lg"
            rows="4"
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder={`Please provide more details about why you found this page ${selectedFeedback.toLowerCase()}.`}
          />
          <div className="flex justify-end mt-2">
            <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg">
              Submit Feedback
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Feedback;
