const Agent = require('aopifyjs');
const linearAlgebra = require('linear-algebra')();

const Matrix = linearAlgebra.Matrix;
const topsis = require('topsis');
const ahp = require('ahp-lite');


const csv = require('csvtojson');
const convert = require('matrixa');


// This is the matrix that contains the alternatives of drivers available.
const m = new Matrix([
  [2, 5, 5],
  [60, 26, 4],
  [20, 20, 4],
  [500, 2, 4],
  [50, 23, 3],
  [25, 10, 1],
]);

let w = [];



// Criteria matrix array
let cma = [];

// Extracting data from csv

const csvFilePath = './src/cm.csv';

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
      
  //Convert it into a usable matrix array. 
     cma = convert.toMatrixArray(jsonObj, 'linear-algebra');

  });

let results = [];

// We calculate the eigenvector for each matrix
for (let i = 0; i < cma.length; i += 1) {
    results.push(ahp.getWeights(cma[i])); 
}

let wa = [];

//We check which assessment was consistent judgement.
for (i = 0; i < cma.length; i += 1) {
    if ( 0.20 < results[i].cr  ) {
        wa.push(results[i].w);
    }
}

// We sintetize judgement using geometric mean.
for (i = 0; i < wa.length; i += 1) {
    w = w * wa;
}


//w = Math.pow(w, 1/wa);

let ia = ['max', 'min', 'min'];
let arguments = {'m': m, 'w': w, 'ia' : ia};

console.log(w);
console.log(topsis.getBest(m, w, ia));


const ai = new Agent('ai');
const human = new Agent('human');

//console.log(ai);

ai.start();
human.start();

/*

ai.listen({ name: 'request' }, human, () => {
    
  topsis.getBest(m, w, ia);
  
  
  
  //ai.decide(topsis, arguments);
    
  ai.tell({ name: 'response', msg: 'The best fare for you is this one. The rating is '+msg[2]+' stars. You will reach location in around '+msg[1]+' minutes and the cost is '+msg[0]+' birrs.' }, human);
  
  });



human.tell({ name: 'request'}, ai);}

ai.listen({ name: 'request' }, human, () => {
    
    console.log('Response succesful. The agent has helped the human!'); 
    
    });


ai.kill();
human.kill();

*/