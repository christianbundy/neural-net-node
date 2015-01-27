var synaptic = require('synaptic');
var Neuron = synaptic.neuron,
    Layer = synaptic.Layer, 
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;

function perceptron(input, hidden, output){
  /* create layers */
  var inputLayer = new Layer(input);
  var hiddenLayer = new Layer(hidden);
  var outputLayer = new Layer(output);

  /* connect the layers */
  inputLayer.project(hiddenLayer);
  hiddenLayer.project(outputLayer);

  /* set the layers */
  this.set({
    input: inputLayer,
    hidden: [hiddenLayer], 
    output: outputLayer
  });
}
/* extend the prototype chain */
perceptron.prototype = new Network();
perceptron.prototype.constructor = perceptron;

var myPerceptron = new perceptron(2, 3, 1);
var myTrainer = new Trainer(myPerceptron);

console.log(myTrainer.XOR());
console.log(myPerceptron.activate([0, 0]));
console.log(myPerceptron.activate([0, 1]));
console.log(myPerceptron.activate([1, 0]));
console.log(myPerceptron.activate([1, 1]));

