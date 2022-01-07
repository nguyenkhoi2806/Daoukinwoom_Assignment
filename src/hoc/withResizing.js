import React, { useEffect, useState } from "react";

const MD_WIDTH = 768;

const withResizing = WrappedComponent => {
  const ResizingComponent = props => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < MD_WIDTH);

    useEffect(() => {
      handleResize();

      return () => {
        handleResize();
      };
    }, []);

    const handleResize = () => {
      const width = window.innerWidth;

      if (width < MD_WIDTH && !isMobile) {
        setIsMobile(true);
      } else if (width >= MD_WIDTH && isMobile) {
        setIsMobile(false);
      }
    };

    return (
      <WrappedComponent
        isMobile={isMobile}
        handleResize={handleResize}
        isIpad={window.innerWidth === MD_WIDTH}
        {...props}
      />
    );
  };

  return ResizingComponent;
};

export default withResizing;
