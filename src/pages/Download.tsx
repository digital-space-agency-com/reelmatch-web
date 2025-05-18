import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Download = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Open download.html in a new tab
    window.open('/download.html', '_blank');
    // Navigate back to previous page
    navigate(-1);
  }, [navigate]);

  return null;
};

export default Download; 