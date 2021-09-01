
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();
//process.argv -> retorna los argumentos que son mandados en al linea de comandos
//console.log(process.argv);
//const [,,arg3 = 'base=5'] = process.argv;
//const [,base = 5] = arg3.split('=')
//console.log(base);

//const base = 4;



//console.log(process.argv);
//console.log(argv);
//console.log('base: yargs', argv.base);

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
