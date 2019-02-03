const Agent = require('aopifyjs');
const linearAlgebra = require('linear-algebra')();

const Matrix = linearAlgebra.Matrix;
const topsis = require('topsis');
const ahp = require('ahp-lite');


const csv = require('csvtojson');
const convert = require('matrixa');

// We are all ready to set-up our agent environment !

const ai = new Agent('ai');
const human = new Agent('human');


// This is the matrix that contains the alternatives of drivers available.

const m = new Matrix([
  [2, 5, 5],
  [60, 26, 4],
  [20, 20, 4],
  [500, 9, 4],
  [50, 23, 3],
  [25, 10, 1],
]);

const ia = ['min', 'min', 'max'];

let w = [];


// Criteria matrix array
let cma = [];

// Extracting data from csv
const csvFilePath = './src/cm.csv';

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    ai.start();
    human.start();

    // Convert it into a usable matrix array.
    cma = convert.toMatrixArray(jsonObj, 'linear-algebra');
    return cma;
  })
  .then((cma) => {
    const results = [];
    // We calculate the eigenvector for each matrix
    for (let i = 0; i < cma.length; i += 1) {
      const c = cma[i];

      const assessment = ai.decide('ahp', c);
      results.push(assessment);
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
    console.log(w);
    const data = { m, w, ia };
    // This is the data that will be further used as arguments of TOPSIS algorithm

    return data;
  })
  .then((data) => {
    // When the agent receives a fare request from human, the agent uses TOPSIS algorithm to recommend the best fare.
    ai.on('request', (msg) => {
      const res = ai.decide('topsis', data);
      ai.store(msg, 'request', human.id, ai.id);

      msg = `AGENT: The best fare for you is this one. The rating is ${res[2]} stars. You will reach location in around ${res[1]} minutes and the cost is ${res[0]} birrs.`;

      ai.tell({ name: 'response', msg }, human);

      console.log(ai);
    });


    // The human sends his/her request...
    msg = 'HUMAN: I need to find a ride to market!';
    console.log(msg);
    human.tell({ name: 'request', msg }, ai);
  });
