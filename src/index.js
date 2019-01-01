const agent = require('aopifyjs');
const linearAlgebra = require('linear-algebra')();
const Matrix = linearAlgebra.Matrix; 
const topsis = require('topsis');
const ahp = require('ahp-lite');

let m = new Matrix([
                    [2, 5, 5], 
                    [60, 26, 4], 
                    [20, 20, 4],  
                    [500, 2, 4], 
                    [50, 23, 3], 
                    [25, 10, 1]
                    ]); 
                    
w = [];

// w = ahp.getWeights(c).ev;

// let a = topsis.getBest(m, w, ia);

const ai = new Agent('ai');
const human = new Agent('human');

ai.start();
human.start();


ai.listen({name: 'request'}, human, () => { 
  
  ai.tell({name: 'response', msg: ''}, human);

});