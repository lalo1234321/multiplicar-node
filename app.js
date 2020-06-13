const {escribir}=require('./multiplicar/tabla.js');
const {listarTabla}=require('./multiplicar/hola.js');
const argv=require('./config/yargs.js').argv;

let comando=argv._[0];
switch(comando)
{
    case 'listar':
        listarTabla(argv.base,argv.limite)
            .then(res=>
                {
                    console.log(res);
                })
            .catch(err=>
                {
                    console.log(err);
                })
    break;
    case 'crear':
        escribir(argv.base)
            .then(archivo=>
            {
                console.log(`Archivo ${archivo} creado`)
            })
            .catch(err=>
            {
                console.log(err);
            });
    break;
    default:
        console.log('Comando no reconocido');
    break;    
}
console.log(argv);


