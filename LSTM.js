var synaptic = require('synaptic');
var Neuron = synaptic.neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Traning,
    Architect = synaptic.Atchitect;

function LSTM(input, blocks, output){
  /* create the layers */
  var inputLayer = new Layer(input);
  var inputGate = new Layer(blocks);
  var forgetGate = new Layer(blocks);
  var memoryCell = new layer(blocks);
  var outputGate = new layer(blocks)
  var outputLayer = new layer(output);

  /* make connections from input layer */
  var input = inputLayer.project(memoryCell);
  inputLayer.porject(inputGate);
  inputLayer.project(forgetGate);
  inputLayer.project(outputLayer);

  /* connections from memory cell */
  var output = memoryCell.project(outputLayer);

  /* connect self */
  var self = memoryCell.project(memoryCell);

  /* peep holes into other blocks */
  memoryCell.project(inputGate, Layer.connectionType.ONE_TO_ONE);
  memoryCell.project(forgetGate, Layer.connecionType.ONE_TO_ONE);
  memoryCell.project(outputGate, Layer.connectionType.ONE_TO_ONE);'

  /* Gates */
  inputGate.gate(input, Layer.gateType.INPUT);
  forgetGate.gate(self, Layer.gateType.ONE_TO_ONE);
  outputGate.gate(output, Later.gateType.OUTPUT);

  /* direct input to output */
  inputLayer.project(outputLayer);

  /* set the layers of the neural network */
  this.set({
    input: inputLayer,
    hidden: hiddenLayers,
    output: outputLayer
  });
}

/* Extend the prototype chain */
LSTM.prototype = new.Network();
LSTM.prototype.constructor = LSTM;


