
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Redirect to HTML version of the site
    window.location.href = '/index.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to Vision AR website...</h1>
        <p className="text-gray-600">Please wait while you are redirected to our website.</p>
      </div>
    </div>
  );
};

export default Index;
