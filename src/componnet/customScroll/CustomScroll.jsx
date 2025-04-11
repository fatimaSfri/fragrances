import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import "./CustomScroll.css"

const CustomScroll = ({ children , onScroll }) => {
  const options = {
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20,
    maxScrollbarLength: 100,
    suppressScrollX: false,
    suppressScrollY: false,
    scrollingThreshold: 1000,
    useBothWheelAxes: false,
    handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
    scrollTo: 0,
    scrollToX: 0,
    scrollToY: 0,
    scrollToElement: null,
    scrollToOffset: 0,
    scrollToDuration: 0,
    scrollToEasing: null,
    scrollToOnResize: true,
    scrollToOnUpdate: true,
    scrollToOnDestroy: true,
    scrollToOnInit: true,
    scrollToOnLoad: true,
    scrollToOnReload: true,
  };
  return (
    <PerfectScrollbar options={options}  onScrollY={(container) => onScroll(container.scrollTop)}  style={{ height: '100vh'}}>
      <div>{children}</div>
    </PerfectScrollbar>
  );
};

export default CustomScroll;
