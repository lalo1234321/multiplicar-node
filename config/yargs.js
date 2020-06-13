const opts=
{
    base:
        {
            demand:true,
            alias:'b'
        },
        limite:
        {
            alias:'l',
            default:10
        }

}
const argv=require('yargs')
    .command('listar','Imprime datos por consola',opts)
    .command('crear','Crea un archivo',opts)
    .help()
    .argv
module.exports=
{
    argv
}