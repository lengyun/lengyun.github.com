(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{342:function(a,s,t){"use strict";t.r(s);var r=t(33),e=Object(r.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"操作符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作符","aria-hidden":"true"}},[a._v("#")]),a._v(" 操作符")]),a._v(" "),t("h2",{attrs:{id:"一元操作符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一元操作符","aria-hidden":"true"}},[a._v("#")]),a._v(" 一元操作符")]),a._v(" "),t("p",[a._v("只可以操作一个表达式的操作符")]),a._v(" "),t("h3",{attrs:{id:"一元加"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一元加","aria-hidden":"true"}},[a._v("#")]),a._v(" 一元加")]),a._v(" "),t("p",[a._v("一元加操作符，将要操作的数据类型转化为数字。所有数据类型都可以转换为数字")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//1 对数字操作返回数字")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// -1 对数字返回数字本身")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 1 对布尔操作返回 0，1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("undefined "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//NaN")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'12qweqw'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//NaN 对字符串操作不能转化数字返回 NaN")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'123'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//123  字符串可以返回数字的返回数字")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("object "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// NaN 或 数字")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//一元加操作符，将要操作的数据类型转化为数字。")]),a._v("\n")])])]),t("h3",{attrs:{id:"一元减"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一元减","aria-hidden":"true"}},[a._v("#")]),a._v(" 一元减")]),a._v(" "),t("p",[a._v("先进行一元加操作，将要操作的表达式转化为数字，然后再将它转化为负数")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\nb"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("b "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//-0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("===")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//true js中0 和-0相等")]),a._v("\n")])])]),t("h3",{attrs:{id:"递增和递减操作符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#递增和递减操作符","aria-hidden":"true"}},[a._v("#")]),a._v(" 递增和递减操作符 ++ --")]),a._v(" "),t("p",[a._v("同一元操作符一样，先将要操作的表达式返回值转化为数字，然后进行加减1操作。")]),a._v(" "),t("p",[a._v("前置型 ：在js的解释器中，首先对表达式进行加/减1的操作，然后再参与运算。")]),a._v(" "),t("p",[a._v("后置型：先把整个表达式参与完运算，然后再把表达式进行加/减1操作。")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" num1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" num2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" num3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("num1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" num2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 等于 21")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" num4 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" num1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" num2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 等于 21")]),a._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" num1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" num2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" num3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" num1"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" num2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 等于 22")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" num4 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" num1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" num2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 等于 21")]),a._v("\n")])])]),t("p",[a._v("如果表达式返回的不是数字进行递增递减操作符返回NaN")]),a._v(" "),t("p",[t("strong",[a._v("副效应")])]),a._v(" "),t("p",[a._v("执行前置递增和递减操作时，变量的值都是在语句被求值以前改变的。")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("a\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// a:2, b:3")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//1. js先运算b这个表达式返回b，遵循运算顺序从左向右原则")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//2. a++ 再暂时称为C 因是后置型C返回结果为1，此时变量a变成了2")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//3. c+a 为1 + 2  返回给b 就是3了")]),a._v("\na"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" \nb"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("a\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// a:2, b:3")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),a._v("a\n")])])]),t("ul",[t("li",[t("p",[a._v("优先级")]),a._v(" "),t("p",[a._v("属性访问  >  一元操作符  >  乘除 > 加减 > 比较 > 相等=== == !=== !== > 与运算>或运算>三木元算>赋值运算")]),a._v(" "),t("ol",[t("li",[a._v("属性访问表达式有最高优先级 .[]")]),a._v(" "),t("li",[a._v("赋值操作 =最低优先级，赋值操作")]),a._v(" "),t("li",[a._v("运算当中 ，一元运算符最高")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),a._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//false")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("结合性")]),a._v(" "),t("p",[a._v("相同优先级同时存在时先算那个？如乘除")]),a._v(" "),t("p",[a._v("左结合：其他")]),a._v(" "),t("p",[a._v("右结合：一元操作符，三元运算符 ，赋值运算符")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//false  ++ 和! 都是一元操作符所有从右向左")]),a._v("\nx"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("c"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v("d"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("e"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v("f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("g "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//三目运算符  ")]),a._v("\nx"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("c"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v("d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("e"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v("f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("g"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 都是三目操作符从右向左")]),a._v("\na"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("b"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("c"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("d "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//赋值操作符从右向左")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("运算顺序")]),a._v(" "),t("p",[a._v("表达式中包含子表达式时如何运算？")]),a._v(" "),t("p",[a._v("永远从左向右运行")])]),a._v(" "),t("li",[t("p",[a._v("注意")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("一元加/减 和递加/减 操作符对所有的数据类型都有效，都是先把数据类型转为number然后再操作")])]),a._v(" "),t("li",[t("p",[a._v("递减操作可能会不精确")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" f "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nf"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 值变成 0.10000000000000009（由于浮点舍入错误所致）")]),a._v("\n")])])])])])])]),a._v(" "),t("h3",{attrs:{id:"按位非-not"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按位非-not","aria-hidden":"true"}},[a._v("#")]),a._v(" 按位非(NOT) ~")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" num1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("25")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 二进制 00000000000000000000000000011001")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" num2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("~")]),a._v("num1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 二进制 11111111111111111111111111100110")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("alert")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("num2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// -26")]),a._v("\n")])])]),t("p",[a._v("将数字转化为负数，然后减一")]),a._v(" "),t("h3",{attrs:{id:"逻辑非"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#逻辑非","aria-hidden":"true"}},[a._v("#")]),a._v(" 逻辑非")]),a._v(" "),t("p",[a._v("逻辑非操作符由一个叹号（！）表示。")]),a._v(" "),t("p",[t("strong",[a._v("先将数据类型转化为布尔类型，然后取反。")])]),a._v(" "),t("p",[a._v("将其他类型转化为布尔类型用 （!!）")]),a._v(" "),t("p",[a._v("对象转化为布尔类型都是true")]),a._v(" "),t("p",[a._v("在js中只有6个类型进行逻辑非会转化为true：")]),a._v(" "),t("p",[a._v("​\t"),t("code",[a._v("undefines null NaN 0 -0 “”")])]),a._v(" "),t("h3",{attrs:{id:"其他一元操作符-（单词形式操作符）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他一元操作符-（单词形式操作符）","aria-hidden":"true"}},[a._v("#")]),a._v(" 其他一元操作符 （单词形式操作符）")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("typeof 返回后面表达式的操作类型")]),a._v(" "),t("p",[a._v("typeof() 不是函数，（）是为了先计算()内部的表达式")]),a._v(" "),t("p",[a._v("()的优先级跟，属性访问表达式.[] 是同级别的。")])]),a._v(" "),t("li",[t("p",[a._v("void 返回undefined")])]),a._v(" "),t("li",[t("p",[a._v("delete 删除属性")])])]),a._v(" "),t("hr"),a._v(" "),t("h2",{attrs:{id:"二元操作符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二元操作符","aria-hidden":"true"}},[a._v("#")]),a._v(" 二元操作符")]),a._v(" "),t("p",[a._v("instanceof")]),a._v(" "),t("p",[a._v("on")])])},[],!1,null,null,null);s.default=e.exports}}]);