const fs=require('fs');
const data = {
    Name:'Calculus with applications',
    subjects:"미적분학1",
    pages:509,
    chanter1:"Numbers and Limits",
    chapter2:"Functions and Continuity",
    chapter3:"The Derivative and Differentiation",
    chapter4:"The Theory of Differentiable Functions",
    chapter5:"Applications of the Derivative",
    chapter6:"Integration",
    chapter7:"Methods for Integration",
    chapter8:"Approximation of Intergrals",
    chapter9:"Complex Numbers",
    chapter10:"Differential Equations",
    chapter11:"Probability"
};
fs.writeFileSync("textbook.json",JSON.stringify(data));