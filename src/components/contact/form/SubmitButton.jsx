import React from 'react';

const SubmitButton = ({ isSubmitting }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`w-full bg-brand text-white px-6 py-3 rounded-md transition-colors duration-200 ${
        isSubmitting 
          ? 'opacity-70 cursor-not-allowed' 
          : 'hover:bg-brand-dark'
      }`}
    >
      {isSubmitting ? 'Sending...' : 'Send Message'}
    </button>
  );
};

export default SubmitButton;