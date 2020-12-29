let a = { n: 1 };
let b = a;
a.x = a = { n: 2 };
console.log(a.x)
console.log(b.x)

/*
{n:2}
undefined

// 答案
undefined {n:2}

// 注意点
1: 点的优先级大于等号的优先级
2: 对象以指针的形式进行存储，每个新对象都是一份新的存储地址

// 解析
- `var b = a;` b 和 a 都指向同一个地址。
- `.`的优先级高于`=`。所以先执行`a.x`，于是现在的`a`和`b`都是`{n: 1, x: undefined}`。
- `=`是从右向左执行。所以是执行 `a = {n: 2}`，于是`a`指向了`{n: 2}`
- 再执行 `a.x = a`。 这里注意，`a.x` 是最开始执行的，已经是`{n: 1, x: undefined}`这个地址了，而不是一开的的那个`a`，所以也就不是`{n: 2}`了。而且`b`和旧的`a`是指向一个地址的，所以`b`也改变了。
- 但是，`=`右面的a，是已经指向了新地址的新`a`。
- 所以，`a.x = a` 可以看成是`{n: 1, x: undefined}.x = {n: 2}`
- 最终得出
  a = { n: 2 }，
  b = {
    n: 1,
    x: { n: 2 }
  }
*/