export * from './Button';
export * from './Card';
export * from './CardSection';
export * from './Header';
export * from './Input';
export * from './Spinner';

// when we use export star syntax, it essentially imports and exports in the same line
// export start means export everything in that file
// we also changed the export statements in those files from
// export default *COMPONENT*
// to
// export { *COMPONENT* }
// this way, those files export the component as an object
// this is required for the import/export one liner to work
