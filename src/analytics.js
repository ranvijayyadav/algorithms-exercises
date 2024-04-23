import React, { useEffect } from 'react';

const withAnalytics = (WrappedComponent) => {
  const trackEvent = (eventName, eventData) => {
    // Simulate sending analytics event
    console.log(`Tracking event: ${eventName}`, eventData);
    // Actual analytics tracking code would go here
  };

  // Return a functional component
  return function WithAnalytics(props) {
    useEffect(() => {
      // Track component mount event
      trackEvent('component_mount', { componentName: WrappedComponent.displayName || WrappedComponent.name });
    }, []); // Run once on mount

    // Additional events can be tracked within the component as needed
    const handleClick = () => {
      trackEvent('button_click', { buttonId: 'exampleButton' });
    };

    return (
      <WrappedComponent
        {...props}
        trackEvent={trackEvent} // Pass trackEvent function to the wrapped component
        onClick={handleClick} // Example of passing down event handler
      />
    );
  };
};

// Example component
const Button = ({ onClick }) => {
  return <button onClick={onClick}>Click me</button>;
};

// Wrap Button component with withAnalytics HOC
const ButtonWithAnalytics = withAnalytics(Button);

export default ButtonWithAnalytics;
