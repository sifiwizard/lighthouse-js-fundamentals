const calculateRectangleArea = (length,width) => length && width > 0 ? length * width : undefined;
const calculateTriangleArea = (base,height) => base && height > 0 ? base * (height / 2) : undefined;
const calculateCircleArea = (raduis) => raduis > 0 ? Math.PI * (raduis * raduis) : undefined;

console.log(calculateRectangleArea(10, -5)); 
console.log(calculateTriangleArea(10, -5));
console.log(calculateCircleArea(-1)); 