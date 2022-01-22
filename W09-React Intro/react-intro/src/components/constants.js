const numberOfProducts = 5000;
const text = 'Total number of products:';
const footerText = 'Created by us 2021';

// Export: there are 2 types of exports
// 1. default export - there can be only one per file.
//  when it's IMPORTED, can have any name

// 2. named export - there can be any number of named exports
// 

export default text;
export {numberOfProducts, footerText}; // named exports