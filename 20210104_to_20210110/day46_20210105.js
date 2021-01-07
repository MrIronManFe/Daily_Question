function addToList(item, list) {
    return list.push(item);
}
const result = addToList("company", ["yideng"]);
console.log(result);

["yideng", "company"]

/*
// 答案
2

// 解析
`push()`方法返回新数组的长度。一开始，数组包含一个元素（字符串 `"yideng"`），长度为1。 在数组中添加字符串 `"company"`后，长度变为2，并将从 `addToList`函数返回。
`push`方法修改原始数组，如果你想从函数返回数组而不是数组长度，那么应该在push `item`之后返回 `list`。
开发中一不小心会导致错误的地方
*/