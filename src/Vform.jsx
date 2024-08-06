import React, { useEffect } from 'react';

const Vform = () => {
  useEffect(() => {
    // Load the script when the component mounts
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="visme_d w-full z-50 h-screen"
        data-title="NOVAAR"
        data-url="y4vgqzpr-novaar?fullPage=true"
        data-domain="forms"
        data-full-page="true"
        data-min-height="100vh"
        data-form-id="81170"
      ></div>
    </div>
  );
};

export default Vform;
