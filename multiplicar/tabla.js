const fs=require('fs');



let escribir=(base)=>
{
    return new Promise((resolve,reject)=>
    {   
        let data='';
        for(let i=1;i<=10;i++)
        {
            data+=(`${base}*${i}=${base*i}\n`);
        }
        fs.writeFile(`./tablas/tabla${base}.txt`, data, (err) => {
            if (err)
                 reject(err);
            else
            resolve(`tabla_${base}.txt`);
            
            
        });
        
    });
}
module.exports=
{
    escribir
}
