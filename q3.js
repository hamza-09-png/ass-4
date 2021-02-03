var cabs=["careem","uber","bykea"]
function check(cabs)
{
var i,j,k;

for(i=0; i<3;i++)
{
    for(j=0; j<3; j++)
    {
        if(cabs[i]!=cabs[j])
        {
             console.log(cabs[i]+ " and " +cabs[j]+ " are good services ");
        }
       
     
    }
}
}
check(cabs);

