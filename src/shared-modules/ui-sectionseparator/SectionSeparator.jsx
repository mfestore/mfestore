import styles from './SectionSeparator.module.css';

const SectionSeparator = ({ text, classes, ...rest }) => (
    <div className={`${styles.separator} ${classes}`} {...rest}>{text}</div>
);

export default SectionSeparator;

// https://stackoverflow.com/a/44647131 
// https://stackoverflow.com/questions/5214127/css-technique-for-a-horizontal-line-with-words-in-the-middle