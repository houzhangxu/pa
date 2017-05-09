/**
 * Created by 章旭 on 2017/5/8.
 */
obj = new Object();
var a = 1;
var b = 2;
var o = {
    "a+b":"hello"
}
console.log(o);

//Object创建
var o1 = {};
var o2 = new Object();
var o3 = Object.create(Object.prototype);

console.log(o3);


//Object方法
var om = {
    p:function (x){
        return x*x;
    }
}


console.log(om.p(2))

//对象的引用

var oy1 = {};
var oy2 = oy1;

oy1.a = 1;
console.log("oy2.a : " + oy2.a);  //oy2.a : 1

oy2.b = 2;
console.log("oy1.b : " + oy1.b); //oy1.b : 2

oy1 = {};  //重置oy1对象
console.log(oy2);


//读取属性
console.log("读取属性")
var od1 = {
    0.7:"hello world!",
    0.8:"0.8",
    0.9:"0.9"
};
console.log(od1[0.7])
console.log(od1["0.7"])


//全局属性测试
var g = "gloabl";

if("g" in window){
    console.log("定义成功");
}

//keys方法调用

console.log(Object.keys(od1)); //["0.7", "0.8", "0.9"]

//删除属性
console.log(delete od1["0.7"]);  //true
console.log(Object.keys(od1));  //["0.8", "0.9"]


//in运算符
var ino = new Object();
ino.hasOwnProperty('toString'); // false

'toString' in ino // true

//hasOwnProperty用于检测属性是否是自身属性的,如果是自身属性,就会返回true,不是则返回false.
// in运算符不会检测属性是否是自身的

//for...in遍历
var foo = {a:1,b:2,c:3};
for (var i in foo){
    console.log(foo[i])
}
//1
//2
//3

var foo1 = {
    x: 1,
    y: 2
};
var props = [];
var iz = 0;

for (props[iz++] in foo1);

props // ['x', 'y']
console.log(props)


/*
* for...in遍历特点
* 它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性
* 它不仅遍历对象自身的属性，还遍历继承的属性。
* */

//遍历自身
function Person(name){
    this.name = name;
}

Person.prototype.describe = function (){
    return "Name:"+this.name;
};

var person = new Person("hou");
console.log(person.describe()); //Name:hou

for(var key in person){
    console.log(key);
}
//name
//describe

for(var key in person){
    if(person.hasOwnProperty(key)){  //检测属性是否是自身属性
        console.log(key);
    }
}
//name
