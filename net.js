var synaptic = require('synaptic');
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;


function neuron(input, hidden, blocks, output){

    var inputLayer = new Layer(input); 
    var hiddenLayer = new Layer(hidden); 
    var memoryCell = new Layer(blocks);
    var outputLayer = new Layer(output);









}
