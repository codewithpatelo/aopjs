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

const ia = ['max', 'min', 'min'];

let w = [];


// Criteria matrix array
let cma = [];

// Extracting data from csv
const csvFilePath = './src/cm.csv';

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
  // Convert it into a usable matrix array.
    cma = convert.toMatrixArray(jsonObj, 'linear-algebra');
    return cma;
  })
  .then((cma) => {
    const results = [];
    // We calculate the eigenvector for each matrix
    for (let i = 0; i < cma.length; i += 1) {
      results.push(ahp.getWeights(cma[i]));
    }

    return results;
  })
  .then((results) => {
    const wa = [];


    // We check which assessment was a consistent judgement.
    for (i = 0; i < cma.length; i += 1) {
      if (results[i].cr > 0.20) {
        wa.push(results[i].ev);
      }
    }
    return wa;
  })
  .then((wa) => {
    let mat = {};
    w = new Matrix([[1, 1, 1]]);

    // We sintetize judgement using geometric mean.
    for (i = 0; i < wa.length; i += 1) {
      mat = new Matrix(wa[i]);
      w = w.mul(mat);
    }

    const newData = [];


    // We do the nth root as final step of the geometric mean.
    for (i = 0; i < w.data[0].length; i += 1) {
      let newValue = Math.pow(w.data[0][i], 1 / wa.length);
      newValue = Math.round(newValue * 100) / 100;
      newData.push(newValue);
    }

    w = newData;

    return w;
  })
  .then((w) => {
    // We are all ready to set-up our agent environment !

    const ai = new Agent('ai');
    const human = new Agent('human');


    ai.start();
    human.start();


    console.log(topsis.getBest(m, w, ia));
  });


// let arguments = {'m': m, 'w': w, 'ia' : ia};


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
