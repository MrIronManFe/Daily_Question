function yideng(n, o) {
    console.log(o); // ？
    return {
        yideng: function(m) {
            // 返回记录得就是这个n
            return yideng(m, n);
        }
    }
}
const a = yideng(0); //返回一个对象，a.yideng是一个方法，返回一个方法
a.yideng(1);
a.yideng(2);
a.yideng(3);
const b = yideng(0).yideng(1).yideng(2).yideng(3);
const c = yideng(0).yideng(1);
c.yideng(2);
c.yideng(3);

/*// 答案
undefined 0 0 0
undefined 0 1 2
undefined 0 1 1

// 解析
闭包知识考查
    return返回的对象的fun属性对应一个新建的函数对象，这个函数对象将形成一个闭包作用域，使其能够访问外层函数的变量n及外层函数fun,
关键点：
    理清执行的是哪个yideng函数，为了不将yideng函数与yideng属性混淆，等价转换下代码
  function _yideng_(n,o){
      console.log(o);
      return {
          yideng:function(m){
              return _yideng_(m,n);
          }
      }
  }
  const a=_yideng_(0);
  a.yideng(1);
  a.yideng(2);
  a.yideng(3);
  const b=_yideng_(0).yideng(1).yideng(2).yideng(3);
  const c = _yideng_(0).yideng(1).yideng(2);
  c.yideng(3);

1）第一行a代码执行过程解析，
①const a=_yideng_(0);调用最外层的函数，只传入了n,所以打印o是undefined
②a.yideng(1);调用yideng(1)时m为1，此时yideng闭包了外层函数的n，也就是第一次调用的n=0，即m=1，n=0，并在内部调用第一层_yideng_函数_yideng_(1,0);所以o为0；
③a.yideng(2);调用yideng(2)时m为2，但依然是调用a.yideng，所以还是闭包了第一次调用时的n，所以内部调用第一层的_yideng_(2,0);所以o为0
④a.yideng(3);同③
所以是undefined 0 0 0

2）第二行b代码执行过程解析
①第一次调用第一层_yideng_(0)时，o为undefined；
②第二次调用 .yideng(1)时m为1，此时yideng闭包了外层函数的n，也就是第一次调用的n=0，即m=1，n=0，并在内部调用第一层_yideng_函数_yideng_(1,0);所以o为0；
③第三次调用 .yideng(2)时m为2，此时当前的yideng函数不是第一次执行的返回对象，而是第二次执行的返回对象。而在第二次执行第一层_yideng_(1,0)时,n=1,o=0,返回时闭包了第二次的n，遂在第三次调用第三层fun函数时m=2,n=1，即调用第一层_yideng_函数_yideng_(2,1)，所以o为1；
④第四次调用 .yideng(3)时m为3，闭包了第三次调用的n，同理，最终调用第一层_yideng_函数为_yideng_(3,2)；所以o为2；
所以是undefined 0 1 2

3）第三行c代码执行过程解析
①在第一次调用第一层_yideng_(0)时，o为undefined；
②第二次调用 .yideng(1)时m为1，此时yideng闭包了外层函数的n，也就是第一次调用的n=0，即m=1，n=0，并在内部调用第一层_yideng_函数fun(1,0);所以o为0；
③第三次调用 .yideng(2)时m为2，此时yideng闭包的是第二次调用的n=1，即m=2，n=1，并在内部调用第一层_yideng_函数_yideng_(2,1);所以o为1；
④第四次.yideng(3)时同理，但依然是调用的第二次的返回值，遂最终调用第一层fun函数_yideng_(3,1)，所以o还为1
所以是undefined 0 1 1
*/