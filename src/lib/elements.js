import CreateElements from './class-elements'

const createElement = new CreateElements()

const Input = (...rest) => createElement.input(...rest);
const Button = (...rest) => createElement.button(...rest);
const Div = (...rest) => createElement.div(...rest);

export { Input, Div, Button }