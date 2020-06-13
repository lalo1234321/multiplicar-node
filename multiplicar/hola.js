

let listarTabla=(base,limite)=>
{
    return new Promise((resolve,reject)=>
    {
        let lista='';
        for(let i=1;i<=limite;i++)
        {
            lista+=`${base}*${i}=${base*i}\n`;
        }
        if(!lista)
        {
            reject('Error');
        }
        else
        {
            resolve(lista);
        }
    })
}
module.exports=
{
    listarTabla
}
