import React from 'react';
import '../ui-styles/include_tailwind.css';

class StoreLayout {

    static Wrapper = ({
        children,
        cls,
        ...rest
    }) => {
        return (
            <span 
                className={`flex w-full ${cls??''}`}
                {...rest}
            >
            {children}
            </span>
        );
    }

    static LeftPane = ({
        children,
        cls,
        ...rest
    }) => {
        return (
            <span 
                className={`max-w-3/12 h-screen py-2 px-2 border-r overflow-auto ${cls??''}`}
                {...rest}
            >
            {children}
            </span>
        );
    }

    static RightPane = ({
        children,
        cls,
        ...rest
    }) => {
        return (
            <span 
                className={`w-auto max-w-9/12 overflow-auto ${cls??''}`}
                {...rest}
            >
            {children}
            </span>
        );
    }

    static StoreItem = ({
        name,
        children,
        cls,
        ...rest
    }) => {
        return (
            <div 
                className={`border px-1 bg-gray-100 w-auto ${cls??''}`}
                {...rest}
            >
                <div className='text-xs'>{name}</div>
                <div className='flex justify-between text-xs font-extrabold'>
                    <span className='cursor-pointer'>{'>'}</span>
                    <span className='cursor-pointer'>{'>>'}</span>
                </div>
            {children}
            </div>
        );
    }

}
export default StoreLayout;