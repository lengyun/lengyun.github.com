(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{352:function(t,s,a){"use strict";a.r(s);var n=a(33),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"动态加载js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态加载js","aria-hidden":"true"}},[t._v("#")]),t._v(" 动态加载js")]),t._v(" "),a("p",[t._v("在网页中要使用js需要使用"),a("code",[t._v("<script>")]),t._v("标签把js插在网页当中，建议插到最底部。")]),t._v(" "),a("h2",{attrs:{id:"动态加载js使用场景："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态加载js使用场景：","aria-hidden":"true"}},[t._v("#")]),t._v(" 动态加载js使用场景：")]),t._v(" "),a("ol",[a("li",[t._v("当你使用到某个js的时候，你并不确定这个js会在当前的页面上执行。这种情况下你可以把js插入到页面上没什么问题但会增加页面体积，包括下载速度执行速度对会变慢。这种情况下你会考虑优化代码，如何在用户执行某个操作的时候动态的将js插到页面上。")]),t._v(" "),a("li",[t._v("不确定用户加载的是那一种js，需要对用户进行一些判断，根据判断的条件，让不同的js在页面上运行。")])]),t._v(" "),a("h2",{attrs:{id:"使用js的两种方式："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用js的两种方式：","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用js的两种方式：")]),t._v(" "),a("p",[t._v("先创建"),a("code",[t._v("<script>")]),t._v("标签，设置它的type属性")]),t._v(" "),a("ol",[a("li",[t._v("调用远程的js，即使用src属性")]),t._v(" "),a("li",[t._v("把js直接写在"),a("code",[t._v("<script>")]),t._v(" 标签当中")])]),t._v(" "),a("h2",{attrs:{id:"动态插入js的方式："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态插入js的方式：","aria-hidden":"true"}},[t._v("#")]),t._v(" 动态插入js的方式：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("动态插入远程js")]),t._v(" "),a("p",[t._v("先创建"),a("code",[t._v("<script>")]),t._v("标签，设置它的type属性。设置src属性，把js地址赋值给src属性，可以是相对或绝对路径。然后把创建出来的"),a("code",[t._v("<script>")]),t._v("标签插入到文档当中。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadScript")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" script "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"script"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/javascript"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("将js代码放到"),a("code",[t._v("<script>")]),t._v("标签中插入")]),t._v(" "),a("p",[t._v("先创建"),a("code",[t._v("<script>")]),t._v("标签，设置它的type属性。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("将js作为文本节点插入到"),a("code",[t._v("<script>")]),t._v("标签中。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" script "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"script"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/javascript"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTextNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"function sayHi(){alert('hi');}\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("IE不支持将文本节点插入到"),a("code",[t._v("<script>")]),t._v("中。IE 将"),a("code",[t._v("<script>")]),t._v("视为一个特殊的元素，不允许 DOM 访问其子节点")])]),t._v(" "),a("li",[a("p",[t._v("将js代码转换为字符串，赋值给"),a("code",[t._v("<script>")]),t._v("标签的text属性")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" script "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"script"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/javascript"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"function sayHi(){alert('hi');}\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("safari不支持")])]),t._v(" "),a("li",[a("p",[t._v("兼容版本")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"function sayHi(){alert('hi');}\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadScriptString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" script "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"script"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tscript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/javascript"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \tscript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTextNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \tscript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("blockquote",[a("p",[t._v("js以文本形式插入到"),a("code",[t._v("<script>")]),t._v("中的。js的解析使用了eval() 函数，有性能问题它本身是一个小型的js解释器，会将js的解析变为安全模式。另外try catch 语句也会破坏作用域。")])])])]),t._v(" "),a("h2",{attrs:{id:"如何判断js加载并且运行完成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何判断js加载并且运行完成","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何判断js加载并且运行完成")]),t._v(" "),a("p",[t._v("script上有两个属性：")]),t._v(" "),a("ul",[a("li",[t._v('onload="" // 现代浏览器，谷歌')]),t._v(" "),a("li",[t._v('onreadystatechange="" // IE')])]),t._v(" "),a("p",[t._v("这个方法会在js加载完成加载后调用， 调用的同时上面还会有一个readystate的属性，我们可以判断这个readystate的属性，当他发生变化的时候给他动态的绑定一个回调函数，继续执行后面的代码。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadScript")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" script "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"script"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/javascript"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readystate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"complete"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"script"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//整个js执行完成了")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("jquery 提供了$.getScript()方法，接收两个参数：第一个参数是一个字符串，表示要加载的js文件的地址。第二个参数是一个回调函数，表示js加载成功后要执行的代码。")]),t._v(" "),a("p",[t._v("ajax请求方式。将远程js的内容以字符串的形式请求回来，当你拿到这个代码后就可以使用插入文本的方式创建script后插入script标签中。")]),t._v(" "),a("h2",{attrs:{id:"归类："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#归类：","aria-hidden":"true"}},[t._v("#")]),t._v(" 归类：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("同步加载")]),t._v(" "),a("p",[t._v("先获取js代码然后把js以文本的方式插入到script标签中的方式。当你把script标签插入到文档当中之后js会立即执行，后面当你使用js中的方法和变量可以直接调用。")])]),t._v(" "),a("li",[a("p",[t._v("异步加载")]),t._v(" "),a("p",[t._v("创建script标签设置scr属性后把script标签插入到文档之后，浏览器需要发送一个请求把js请求回来，然后再执行后面的方法。在请求的过程当中是需要时间的。ajax方法和jquery的getScript()方法都是异步加载。（jquery方法也是调用ajax请求）")])])]),t._v(" "),a("h2",{attrs:{id:"未来方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#未来方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 未来方式")]),t._v(" "),a("p",[t._v("ES6中提供了一个语句 import语句，在最新版的ECMA规范当中定义了import语句的两外一种使用方式，你可以导入任意的模块，这个导入任意模块也可以用于动态的导入js。")]),t._v(" "),a("h2",{attrs:{id:"加载与阻塞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载与阻塞","aria-hidden":"true"}},[t._v("#")]),t._v(" 加载与阻塞")]),t._v(" "),a("p",[t._v("通过设置src属性加载远程js的方式。设置src属性的时候浏览器不会发送请求的，只有你把script标签插入到文档当中的时候，插入完成之后浏览器才会去下载这个js文件，下载完js文件之后会立即执行，如果你是把js以字符串的方式插入到script标签的话，当script插入到页面之后js代码会立即执行。")]),t._v(" "),a("p",[t._v("js本身是一种阻塞式语言，对应html本身而言，如果在html中存在js，当js在下载和执行的时候是阻塞的。这也是为什么建议吧script标签放到文档最下面的原因。js的下载和执行的过程当中会停止页面上的其他行为。如果是动态的加载js文件的时候是不会阻塞页面的行为的。而在js执行期间依然会阻塞其他行为。造成这样的根本原因是浏览器的渲染造成的，如果你的js是直接写在html当中的，当浏览器扫描你的html页面的时候，它不知道后面会发生什么事所以把一切的行为都停止掉，等js加载运行完成之后，它再执行后面的过程。但是你是动态的加载js，这个时候浏览器对页面的渲染已经完成了，浏览器已经知道页面是怎么样的结构，所以你下载js这个时候是不回阻塞的，而当执行的时候浏览器会采用时间片段的形式将动态的js插入到事件队列当中。类似setTimeout()方法。动态js下载完成之后它会把js也插入到事件队列当中，然后浏览器会快速的在多事件当中来回切换。在这种情况发生的时候，你就会看到多个js同时执行的现象。")]),t._v(" "),a("h2",{attrs:{id:"回顾："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回顾：","aria-hidden":"true"}},[t._v("#")]),t._v(" 回顾：")])])},[],!1,null,null,null);s.default=r.exports}}]);