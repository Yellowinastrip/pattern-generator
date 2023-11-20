const typeA = {
  lollipops: [
    {stick: [['g12', true]], candy: [['r23', true], ['g34', false], ['b42', true]]},
    {stick: [['g12', true]], candy: [['r23', true], ['b34', true], ['g42', false]]},
    {stick: [['g12', true]], candy: [['b23', true], ['g34', false], ['r42', true]]},
    {stick: [['g12', true]], candy: [['b23', true], ['r34', true], ['g42', false]]},
    
    {stick: [['r13', true]], candy: [['g34', true], ['r42', false], ['b23', true]]},
    {stick: [['r13', true]], candy: [['g34', true], ['b42', true], ['r23', false]]},
    {stick: [['r13', true]], candy: [['b34', true], ['r42', false], ['g23', true]]},
    {stick: [['r13', true]], candy: [['b34', true], ['g42', true], ['r23', false]]},
    
    {stick: [['b14', true]], candy: [['g42', true], ['b23', false], ['r34', true]]},
    {stick: [['b14', true]], candy: [['g42', true], ['r23', true], ['b34', false]]},
    {stick: [['b14', true]], candy: [['r42', true], ['b23', false], ['g34', true]]},
    {stick: [['b14', true]], candy: [['r42', true], ['g23', true], ['b34', false]]},
  ],
  inputs: ['g12', 'r13', 'b14', 'g23', 'r23', 'b23', 'g34', 'r34', 'b34', 'g42', 'r42', 'b42'],
};

const typeA_1 = {
  lollipops: [
    {stick: [['g12', true]], candy: [['r23', true], ['b34', true], ['g42', false]]},
    {stick: [['g12', true]], candy: [['b23', true], ['g34', false], ['r42', true]]},
    
    {stick: [['r13', true]], candy: [['g34', true], ['r42', false], ['b23', true]]},
    {stick: [['r13', true]], candy: [['b34', true], ['g42', true], ['r23', false]]},
  ],
  inputs: ['g12', 'r13', 'r23', 'b23', 'g34', 'b34', 'g42', 'r42'],
};





const typeB = {
  lollipops: [
    {stick: [['g12', true]], candy: [['r23', true], ['g32', false]]},
    {stick: [['g12', true]], candy: [['r23', true], ['b34', true], ['g42', false]]},
    {stick: [['g12', true], ['r23', true]], candy: [['b34', true], ['r43', false]]},
    {stick: [['g12', true]], candy: [['r23', false], ['b34', true], ['r43', false], ['g32', false]]},
    
    {stick: [['g12', true]], candy: [['b24', true], ['g42', false]]},
    {stick: [['g12', true]], candy: [['b24', true], ['r43', true], ['g32', false]]},
    {stick: [['g12', true], ['b24', true]], candy: [['r43', true], ['b34', false]]},
    {stick: [['g12', true]], candy: [['b24', false], ['r43', true], ['b34', false], ['g42', false]]},

    {stick: [['r13', true]], candy: [['g32', true], ['r23', false]]},
    {stick: [['r13', true]], candy: [['g32', true], ['b24', true], ['r43', false]]},
    {stick: [['r13', true], ['g32', true]], candy: [['b24', true], ['g42', false]]},
    {stick: [['r13', true]], candy: [['g32', false], ['b24', true], ['g42', false], ['r23', false]]},
    
    {stick: [['r13', true]], candy: [['b34', true], ['r43', false]]},
    {stick: [['r13', true]], candy: [['b34', true], ['g42', true], ['r23', false]]},
    {stick: [['r13', true], ['b34', true]], candy: [['g42', true], ['b24', false]]},
    {stick: [['r13', true]], candy: [['b34', false], ['g42', true], ['b24', false], ['r43', false]]},
    
    {stick: [['b14', true]], candy: [['g42', true], ['b24', false]]},
    {stick: [['b14', true]], candy: [['g42', true], ['r23', true], ['b34', false]]},
    {stick: [['b14', true], ['g42', true]], candy: [['r23', true], ['b34', false]]},
    {stick: [['b14', true]], candy: [['g42', false], ['r23', true], ['g32', false], ['b24', false]]},
    
    {stick: [['b14', true]], candy: [['r43', true], ['b34', false]]},
    {stick: [['b14', true]], candy: [['r43', true], ['g32', true], ['b24', false]]},
    {stick: [['b14', true], ['r43', true]], candy: [['g32', true], ['r23', false]]},
    {stick: [['b14', true]], candy: [['r43', false], ['g32', true], ['r23', false], ['b34', false]]},
  ],
  inputs: ['g12', 'r13', 'b14', 'r23', 'b24', 'g32', 'b34', 'g42', 'r43'],
};

const typeB_1 = {
  lollipops: [
    {stick: [['g12', true]], candy: [['r23', true], ['g32', false]]},
    {stick: [['g12', true]], candy: [['r23', true], ['b34', true], ['g42', false]]},
    {stick: [['g12', true], ['r23', true]], candy: [['b34', true], ['r43', false]]},
    {stick: [['g12', true]], candy: [['r23', false], ['b34', true], ['r43', false], ['g32', false]]},
    
    {stick: [['g12', true]], candy: [['b24', true], ['g42', false]]},
    {stick: [['g12', true]], candy: [['b24', true], ['r43', true], ['g32', false]]},
    {stick: [['g12', true], ['b24', true]], candy: [['r43', true], ['b34', false]]},
    {stick: [['g12', true]], candy: [['b24', false], ['r43', true], ['b34', false], ['g42', false]]},
  ],
  inputs: ['g12', 'r23', 'b24', 'g32', 'b34', 'g42', 'r43'],
};



///TO DO///
const longHigway = {
  lollipops: [
    {stick: [['g12', true]], candy: [['r23', true], ['g34', false], ['b42', true]]},
    {stick: [['g12', true]], candy: [['r23', true], ['b34', true], ['g42', false]]},
    {stick: [['g12', true]], candy: [['b23', true], ['g34', false], ['r42', true]]},
    {stick: [['g12', true]], candy: [['b23', true], ['r34', true], ['g42', false]]},
    
    {stick: [['r13', true]], candy: [['g34', true], ['r42', false], ['b23', true]]},
    {stick: [['r13', true]], candy: [['g34', true], ['b42', true], ['r23', false]]},
    {stick: [['r13', true]], candy: [['b34', true], ['r42', false], ['g23', true]]},
    {stick: [['r13', true]], candy: [['b34', true], ['g42', true], ['r23', false]]},
    
    {stick: [['b14', true]], candy: [['g42', true], ['b23', false], ['r34', true]]},
    {stick: [['b14', true]], candy: [['g42', true], ['r23', true], ['b34', false]]},
    {stick: [['b14', true]], candy: [['r42', true], ['b23', false], ['g34', true]]},
    {stick: [['b14', true]], candy: [['r42', true], ['g23', true], ['b34', false]]},
  ],
  inputs: ['g12', 'r13', 'b14', 'g23', 'r23', 'b23', 'g34', 'r34', 'b34', 'g42', 'r42', 'b42'],
};


const typeC = {
  lollipops: [
    {candy: [['b', true], ['f', true], ['g', false]]},
    {candy: [['b', true], ['d', false], ['i', true]]},
    {candy: [['c', true], ['e', true], ['g', false]]},
    {candy: [['c', true], ['d', false], ['h', true]]},
  ],
  inputs: ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
};


export const pattern = [
  ['Type A', typeA],
  ['Type A (2 - 3, 5, 7)', typeA_1],
  ['Type B', typeB], 
  ['Type B (1 - 8)', typeB_1],
  ['Type C', typeC], 
];