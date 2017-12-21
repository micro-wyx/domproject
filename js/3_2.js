function getChildren1(parent) {
    console.log(parent.nodeType!=3?parent.nodeName:parent.nodeValue);
    var children=parent.childNodes;
    for(var i=0,len=children.length;i<len;i++){
        // console.log(child.nodeType!=3?child.nodeName:child.nodeValue);
        getChildren1(children[i]);
    }

}
function getChildren2(parent) {
    var iterator=document.createNodeIterator(parent,NodeIterator.SHOW_ALL,null,false);
var node;
    while((node=iterator.nextNode())!=null){
        console.log(node.nodeType!=3?node.nodeName:node.nodeValue);
    }
}
getChildren2(document.body);