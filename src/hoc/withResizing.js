import React, { useEffect, useState } from "react";

const MOBILE_WIDTH = 768;

const withResizing = WrappedComponent => {
  const ResizingComponent = props => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_WIDTH);

    useEffect(() => {
      handleResize();

      return () => {
        handleResize();
      };
    }, []);

    const handleResize = () => {
      const width = window.innerWidth;

      if (width < MOBILE_WIDTH && !isMobile) {
        setIsMobile(true);
      } else if (width >= MOBILE_WIDTH && isMobile) {
        setIsMobile(false);
      }
    };

    return (
      <WrappedComponent
        isMobile={isMobile}
        handleResize={handleResize}
        {...props}
      />
    );
  };

  return ResizingComponent;
};

export default withResizing;
