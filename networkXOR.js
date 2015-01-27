var async = require('async');
var synaptic = require('synaptic');
var Neuron = synaptic.neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;

var inputLayer = new Layer(2);
var hiddenLayer = new Layer(3);
var outputLayer = new Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);


var network = new Network({

  input: inputLayer,
  hidden: [hiddenLayer],
  output: outputLayer

});

var iterations = process.argv[2];
console.log(iterations);

var learningRate = .4;

async.series([
  
  function(){

    for(var i = 0; i < iterations; i++){
      console.log(network.activate([0,0]));
      network.propagate(learningRate, [0]);

      console.log(network.activate([0,1]));
      network.propagate(learningRate, [1]);

      console.log(network.activate([1,0]));
      network.propagate(learningRate, [1]);

      console.log(network.activate([1,1]));
      network.propagate(learningRate, [0]);

    }
  },
  function(){

    console.log(network.activate[0,0]);
    console.log(network.activate[1,0]);
    console.log(network.activate[0,1]);
    console.log(network.activate[1,1]);
  }
]);
            

