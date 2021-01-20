const a = [1, 2, 3], //toString,Number()=>NaN
    b = [1, 2, 3],
    c = [1, 2, 4],
    d = "2", //unicode
    e = "11";
console.log([a == b, a === b, a > c, a < c, d > e]);

// false,false,false,false,false

// 答案
[false, false, false, true, true]

// 解析
/*
1）JavaScript 有两种比较方式：严格比较运算符和转换类型比较运算符。
    对于严格比较运算符（===）来说，仅当两个操作数的类型相同且值相等为 true，而对于被广泛使用的比较运算符（==）来说，会在进行比较之前，将两个操作数转换成相同的类型。对于关系运算符（比如 <=）来说，会先将操作数转为原始值，使它们类型相同，再进行比较运算。
    当两个操作数都是对象时，JavaScript会比较其内部引用，当且仅当他们的引用指向内存中的相同对象（区域）时才相等，即他们在栈内存中的引用地址相同。
    javascript中Array也是对象，所以这里a,b,c显然引用是不相同的，所以这里a==b,a===b都为false。

2）两个数组进行大小比较，也就是两个对象进行比较
    当两个对象进行比较时，会转为原始类型的值，再进行比较。对象转换成原始类型的值，算法是先调用valueOf方法；如果返回的还是对象，再接着调用toString方法。
①valueOf() 方法返回指定对象的原始值。
  JavaScript调用valueOf方法将对象转换为原始值。你很少需要自己调用valueOf方法；当遇到要预期的原始值的对象时，JavaScript会自动调用它。默认情况下，valueOf方法由Object后面的每个对象继承。 每个内置的核心对象都会覆盖此方法以返回适当的值。如果对象没有原始值，则valueOf将返回对象本身。
②toString() 方法返回一个表示该对象的字符串。
  每个对象都有一个 toString() 方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用。默认情况下，toString() 方法被每个 Object 对象继承。如果此方法在自定义对象中未被覆盖，toString() 返回 "[object type]"，其中 type 是对象的类型。
③经过valueOf,toString的处理，所以这里a,c最终会被转换为"1,2,3"与"1,2,4";

3）两个字符串进行比较大小
    上边的数组经转换为字符串之后，接着进行大小比较。
    MDN中的描述是这样的：字符串比较则是使用基于标准字典的 Unicode 值来进行比较的。
    字符串按照字典顺序进行比较。JavaScript 引擎内部首先比较首字符的 Unicode 码点。如果相等，再比较第二个字符的 Unicode 码点，以此类推。
    所以这里 "1,2,3" < "1,2,4",输出true,因为前边的字符的unicode码点都相等，所以最后是比较3和4的unicode码点。而3的Unicode码点是51,4的uniCode码点是52，所以a<c。
"2" > "11"也是同理，这个也是开发中有时会遇到的问题，所以在进行运算比较时需要注意一下。

4）关于valueOf，toString的调用顺序
①javascript中对象到字符串的转换经历的过程如下：
    如果对象具有toString()方法，javaScript会优先调用此方法。如果返回的是一个原始值（原始值包括null、undefined、布尔值、字符串、数字），javaScript会将这个原始值转换为字符串，并返回字符串作为结果。
    如果对象不具有toString()方法，或者调用toString()方法返回的不是原始值，则javaScript会判断是否存在valueOf()方法，如若存在则调用此方法，如果返回的是原始值，javaScript会将原始值转换为字符串作为结果。
  如果javaScript无法调用toString()和valueOf()返回原始值的时候，则会报一个类型错误异常的警告。
    比如：String([1,2,3]);将一个对象转换为字符串

②javaScript中对象转换为数字的转换过程：
    javaScript优先判断对象是否具有valueOf()方法，如具有则调用，若返回一个原始值，javaScript会将原始值转换为数字并作为结果。
    如果对象不具有valueOf()方法，javaScript则会调用toString()的方法，若返回的是原始值，javaScript会将原始值转换为数字并作为结果。
    如果javaScript无法调用toString()和valueOf()返回原始值的时候，则会报一个类型错误异常的警告。
    比如：Number([1,2,3]);将一个对象转换为字符串
*/