/**
 * Created by Administrator on 2017/12/21.
 */
var unselCts=document.getElementById('unsel').innerHTML.replace(/\s*<option>|<\/option>\s*$/g,'').split(/<\/option>\s*|<option>/);
var selCts=[];
console.log(unselCts);
var btns=document.getElementsByTagName('button');
for(var i=0,len=btns.length;i<len;i++){
    btns[i].onclick=move;
}
function move() {
    switch(this.innerHTML) {
        case'&gt;&gt;':
            selCts = selCts.concat(unselCts);
            unselCts = [];
            break;
        case '&lt;&lt;':
            unselCts=unselCts.concat(selCts);
            selCts=[];
            break;
        case '&gt;':
            var opts=unsel.getElementsByTagName('op  tion');
            for(var i=opts.length-1;i>=0;i--){
                if(opts[i].selected)
                    selCts.push(unselCts.splice(i,1)[0]);
            }
            selCts.sort();
            break;
        case '&lt;':
            var opts=sel.getElementsByTagName('option');
            for(var i=opts.length-1;i>=0;i--){
                if(opts[i].selected)
                    unselCts.push(selCts.splice(i,i)[0]);
            }
            unselCts.sort();


}
    updataView(unselCts, unsel);
    updataView(selCts, sel);
}
function updataView(arr,sel) {
sel.innerHTML=arr.length!=0?('<option>'+arr.join('</option><option>')+'</option>'):null;
}
