//print pattern using javascript

var i,j=1
var n=4;

for(i=1;i<=n;i++)
{
    let row=''
    for(j=1;j<=i;j++)
    {
       row+='*'
    }
    console.log(row);
}
