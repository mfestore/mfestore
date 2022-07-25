import React from 'react';
import '../ui-styles/include_tailwind.css';

class Layouts {

    static Card = ({ children, cls, ...rest }) => {
        return (
            <div 
                className={`rounded shadow border bg-white-500 p-1 ${cls??''}`}
                {...rest}
            >
            {children}
            </div>
        );
    }
    
    static PaddedScroller = ({ children, cls, ...rest }) => {
        return (
            <div
                className={`py-2 px-2 overflow-auto ${cls??''}`}
                {...rest}
            >
            {children}
            </div>
        );
    }
}
export default Layouts;
