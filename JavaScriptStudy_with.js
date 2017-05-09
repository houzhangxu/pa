/**
 * Created by 章旭 on 2017/5/8.
 */
// 例一
var o = new Object();
o.p1 = 0;
o.p2 = 0;
with (o) {
    p1 = 1;
    p2 = 2;
}
// 等同于
o.p1 = 1;
o.p2 = 2;

// 例二
if(document.links.length > 0){
    with (document.links[0]){
        console.log(href);
        console.log(title);
        console.log(style);
    }
// 等同于
    console.log(document.links[0].href);
    console.log(document.links[0].title);
    console.log(document.links[0].style);
}


var o1 = {};

with (o1) {
    x = "abc";
}

console.log(o1.x) // undefined
console.log(x) // "abc"
o1.x = 2;

with(o1){  //不建议使用
    console.log(x);
}
//建议使用
var obj1 = o1;
console.log(obj1.x); //把一个长的复杂的对象,引用给一个短名字的对象,然后通过短名字调用长名字内的属性或方法

//with模板替换
var op = {
    name:"alice"
};
var p = [];

with(op){
    p.push("hello",name,"!");
}
console.log(p.join(" "));

