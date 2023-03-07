import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

function LoadingSpinner() {
  return (
    <div>
      <AiOutlineLoading size={20} className="animate-spin" />
    </div>
  );
}

export default LoadingSpinner;
