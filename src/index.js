// import $ from "expose-loader?exposes=$,jQuery!jquery";//暴露全局的内敛loader
import $ from "jquery"
console.log($)
console.log(window.$)
//expose-loader暴露loader 全局的loader 内敛loader
//pre 前面执行的loader  normal 普通的loader  内敛loader  后置loader postloader









// require('./index.css')

// let a=require('./a.js')
// console.log(a)
// console.log(1)

// class AB {
//     constructor(){
//         this.a=1
//     }
// }
// let ab=new AB();
// console.log(ab)