var company = {
    address: 'BeiJiing'
}
var yideng = Object.create(company)
delete yideng.address
console.log(yideng.address)

/*
答案：Beijing
yideng通过prototype集成了company的address, 自己没有address属性，delelte无效
考察的其实是delete的知识点
*/