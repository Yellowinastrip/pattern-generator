export const inputs = ['g12', 'r13', 'b14', 'g23', 'r23', 'b23', 'g34', 'r34', 'b34', 'g42', 'r42', 'b42'];

export const spider = [

]

export const longHigway = [

]

export const distributedHigway = [
  [['g12', true], ['r23', true], ['g34', false], ['b42', true]],
  [['g12', true], ['r23', true], ['b34', true], ['g42', false]],
  [['g12', true], ['b23', true], ['g34', false], ['r42', true]],
  [['g12', true], ['b23', true], ['r34', true], ['g42', false]],
  [['r13', true], ['g34', true], ['r42', false], ['b23', true]],
  [['r13', true], ['g34', true], ['b42', true], ['r23', false]],
  [['r13', true], ['b34', true], ['r42', false], ['g23', true]],
  [['r13', true], ['b34', true], ['g42', true], ['r23', false]],
  [['b14', true], ['g42', true], ['b23', false], ['r34', true]],
  [['b14', true], ['g42', true], ['r23', true], ['b34', false]],
  [['b14', true], ['r42', true], ['b23', false], ['g34', true]],
  [['b14', true], ['r42', true], ['g23', true], ['b34', false]],
];

