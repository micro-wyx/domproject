var table=document.getElementById('data');
var btns=table.getElementsByTagName('button');
for(var i=0,len=btns.length;i<len;i++){
    btns[i].onclick=clac;

}
function clac() {
    var span=this.parentNode.getElementsByTagName('span')[0];
    var n=parseInt(span.innerHTML);
    n+=this.innerHTML=='+'?1:n>1?-1:0;
    span.innerHTML=n;
    var price=parseFloat(this.parentNode.previousElementSibling.innerHTML.slice(1));
this.parentNode.nextElementSibling.innerHTML='¥'+(price*n).toFixed(2);
    //计算总计
    var tds=document.querySelectorAll('#data>tbody td:last-child');
      var sum=0
    for(var i=0;i<tds.length;i++){
        sum=sum+parseFloat(tds[i].innerHTML.slice(1));
    }
    var td=document.querySelector(' #data>tfoot td:last-child');
    td.innerHTML='¥'+sum.toFixed(2);
}