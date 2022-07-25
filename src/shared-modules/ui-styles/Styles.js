import './include_tailwind.css';

class Styles {
    static makeCard = (classNames) => ({ 
        className: classNames ?
            `rounded shadow border bg-white-500 p-1 ${classNames}` :
            `rounded shadow border bg-white-500 p-1`,
    });
    static makeScrollable = (classNames) => ({ 
        className: classNames ?
            `overflow-auto ${classNames}` :
            `overflow-auto`,
    });
}
export default Styles;