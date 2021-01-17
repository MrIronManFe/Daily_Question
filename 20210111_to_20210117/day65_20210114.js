class YiDeng {
    static str = '京程一灯';
    sayStr = () => {
        throw new Error('Need to implement');
    }
}
class Student extends YiDeng() {
    constructor() {
        super();
    }
    sayStr() {
        console.log(Student.str);
    }
}
const laoyuan = new Student();
console.log(Student.str);
laoyuan.sayStr();

  //A.undefiend， 报错Need to implement
  // B. undefiend, 京程一灯
  // C. undefined, undefined
  // D.京程一灯， 报错Need to implement
  // E. 京程一灯，京程一灯
  // F.京程一灯，undefined
  // G. str is not defined, 京程一灯

/*
// 答案与解析
答案：选D
①在ES中类的继承是可以继承静态属性的，不晓得同学可以使用babel编译之后就可以很清晰的看到了
②在 class 里用 = 号声明的变量属于 Field declarations 的语法，下面是TC39规范，也就证明了实际Yideng的sayStr被挂载到了实例属性上，读取优于原型链
https://github.com/tc39/proposal-class-fields#field-declarations
 */