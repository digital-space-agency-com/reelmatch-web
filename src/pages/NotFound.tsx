import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
      <button 
        onClick={() => navigate('/')} 
        className="px-6 py-3 bg-reelmatch-primary text-white rounded-lg hover:bg-reelmatch-primary/90 transition-colors"
      >
        Return Home
      </button>
    </div>
  );
};

export default NotFound;
