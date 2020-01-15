(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{248:function(t,v,_){"use strict";_.r(v);var a=_(0),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"bom"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bom"}},[t._v("#")]),t._v(" BOM")]),t._v(" "),_("p",[t._v("浏览器对象模型")]),t._v(" "),_("h2",{attrs:{id:"window对象"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#window对象"}},[t._v("#")]),t._v(" window对象")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("全局作用域")]),t._v(" "),_("p",[t._v("每一个win对象都表示浏览器的实例。除了实现Global对象的所有属性和方法外还实现了浏览器的功能。在js中所有可以直接使用方法都是Global对象的属性，在网页端所有可以直接使用的方法都是window的属性。")]),t._v(" "),_("p",[t._v("js解释器在运行的时候就存在一个Global对象它代表了全局作用域，在这个全局作用域下你声明的变量都将作为Global对象的属性。网页端相当于window对象。")]),t._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nwindow"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基本一样，当声明语句创建的变量不能用delet删除。window对象属性可以用delet删除")]),t._v("\n")])])])]),t._v(" "),_("li",[_("p",[t._v("窗口关系及框架")]),t._v(" "),_("p",[t._v("当使用frames或iframe时就相当于在当前的浏览器窗口中新加了窗口。 每一个窗口都将拥有自己的window对象。")]),t._v(" "),_("p",[t._v("访问方式：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("使用frame标签创建出来的框架都会保存到一个叫做frames的对象当中，这个"),_("strong",[t._v("frames")]),t._v("是一个伪数组。访问窗口框架时可以通过"),_("code",[t._v("window.frames[0]")]),t._v("加上索引的方式来访问。")])]),t._v(" "),_("li",[_("p",[t._v("创建框架的时候frame标签上有个name属性，也可以使用 "),_("code",[t._v('window.frames["topFrame"]')]),t._v("的方式来访问框架。")])])]),t._v(" "),_("p",[t._v("使用场景：")]),t._v(" "),_("p",[t._v("​\t后管系统 ，邮件系统，在线编辑器")]),t._v(" "),_("p",[t._v("管理方式：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("top")]),t._v(" "),_("p",[t._v("最外层的win对象")])]),t._v(" "),_("li",[_("p",[t._v("parent")]),t._v(" "),_("p",[t._v("当前win对象的上一层")])]),t._v(" "),_("li",[_("p",[t._v("window.self")]),t._v(" "),_("p",[t._v("当前对")])])]),t._v(" "),_("p",[t._v("注意：如果一个页面存在多个win对象那么每一个win对象都会包含原生类型的构造函数，而且这些构造函数都是独立的。在跨越框架相互传递数据的时候要注意。")]),t._v(" "),_("p",[t._v("可使用字符串判断数据类型")])]),t._v(" "),_("li",[_("p",[t._v("窗口位置*")]),t._v(" "),_("p",[t._v("screenLeft 和 screenTop 属性 screenX 和 screenY 属性")])]),t._v(" "),_("li",[_("p",[t._v("窗口大小*")]),t._v(" "),_("p",[t._v("innerWidth、 innerHeight、 outerWidth 和 outerHeight。")])]),t._v(" "),_("li",[_("p",[t._v("导航和打开窗口*")]),t._v(" "),_("p",[t._v("window.open()方法接收 4 个参数：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("URL")])]),t._v(" "),_("li",[_("p",[t._v("窗口目标（字符串）")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("一个页面多个frame的时候，frame的name属性。")])]),t._v(" "),_("li",[_("p",[t._v("不写会新建页面，新开页面或新开标签页。")])]),t._v(" "),_("li",[_("p",[t._v("_self  _parent  _top _blank")])])])]),t._v(" "),_("li",[_("p",[t._v("一个逗号分隔的设置字符串，表示在新窗口中都显示哪些特性")]),t._v(" "),_("p",[t._v('"height=400,width=400,top=10,left=10,resizable=yes"')])]),t._v(" "),_("li",[_("p",[t._v("在不打开新窗口的情况是否取代历史记录")]),t._v(" "),_("p",[t._v("布尔值")])])]),t._v(" "),_("blockquote",[_("p",[t._v("window.open()的返回值还是一个win对象，这个对象可以调用close()方法把这个窗口关掉。")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("间歇调用和超时调用")])]),t._v(" "),_("p",[t._v("js是单线程，只有一个进程快速的在两个事件内切换。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("setTimeout() 延时执行，隔多少时间运行一次")])]),t._v(" "),_("li",[_("p",[t._v("setInterval() 每隔多少时间运行一次")]),t._v(" "),_("p",[t._v("接收两个参数要执行的代码和以毫秒表示的时间。")])])]),t._v(" "),_("ol",[_("li",[_("p",[t._v("第一个参数也可以是字符串，这时相当于调用eval()方法把字符串转换为可执行的代码。")])]),t._v(" "),_("li",[_("p",[t._v("结束延时执行和间歇执行：")]),t._v(" "),_("p",[t._v("clearInterval() clearTimeout()")]),t._v(" "),_("p",[t._v("每当你使用setTimeout() 和setInterval()的时候都会有一个返回值，这个返回值是一个ID而且是一个数字类型。把这个ID传给clearInterval() clearTimeout() 方法就会结束间歇调用和延时调用。")])]),t._v(" "),_("li",[_("p",[t._v("使用setTimeout(function(){},0) 把函数放到最后执行。")]),t._v(" "),_("p",[t._v("延时执行实际的原理是创建一个事件队列，然后把要执行的函数从当前代码当中拿出来放到时间队列中。等到整个代码执行完成之后它会去看这个时间队列，重新扫描一下。在扫描的时候判断是否到了执行的时间，如果到了就执行对应的代码，如果说没到再执行一遍这个事件队列重新的进行判断，如此往复。这就导致如果使用了setTimeout()它所对应的函数就会被移到整个代码的最底部，也就是当你所有的代码都跑完之后它才会去跑setTimeout中对应的函数。")])]),t._v(" "),_("li",[_("p",[t._v("setInterval()最短的时间间隔。")]),t._v(" "),_("p",[t._v("H5规定它的最短时间间隔为10毫米，小于10跟10没有区别。对于大部分来讲这个时间间隔可能是在16.7毫米左右。 因为大部分显示器为60Hz（一秒刷新20次）")])]),t._v(" "),_("li",[_("p",[t._v("setInterval()具有累积效应")]),t._v(" "),_("p",[t._v("举例：半个小时擦一下屋子，但没考虑擦屋子需要多少时间。如果擦屋子需要一个小时就会发生累积效应。 如果在时间间隔内不能完成排在后面的操作就会不断的累积，而且执行到后面的时候会在很短的时间内连续触发。造成性能问题。")]),t._v(" "),_("p",[t._v("所以一般使用setTimeout代替setInterval使用。")]),t._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"定时调用"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("callee")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),_("li",[_("p",[t._v("动画的时候卡顿")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("使用css3实现动画会在显示器刷新时运行，比较流畅")])]),t._v(" "),_("li",[_("p",[t._v("requestAnimationFrame()")])])]),t._v(" "),_("p",[t._v("只接收一个参数及要执行的函数，它在显示器刷新的时候执行。")]),t._v(" "),_("p",[t._v("解决css3实现不了的动画，比如滚动，复杂的动画。")])])])]),t._v(" "),_("li",[_("p",[t._v("系统对话框")]),t._v(" "),_("p",[t._v("alert() 没有返回值")]),t._v(" "),_("p",[t._v("confirm() 返回布尔值true和false")]),t._v(" "),_("p",[t._v("prompt() 两个参数：要显示给用户的文本提示和文本输入域的默认值")]),t._v(" "),_("p",[t._v("返回用户输入的内容")]),t._v(" "),_("p",[t._v("他们都是阻断式的，js无法模拟，对话框样式不能自定义。")])])]),t._v(" "),_("h2",{attrs:{id:"location对象"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#location对象"}},[t._v("#")]),t._v(" location对象")]),t._v(" "),_("p",[t._v("提供了与当前窗口中加载的文档有关的信息，还提供了一些导航功能。window.location 和 document.location 引用的是同一个对象")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("8个属性")]),t._v(" "),_("p",[t._v("读取和设置url相关的东西")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性名")]),t._v(" "),_("th",[t._v("例子")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("hash")]),t._v(" "),_("td",[t._v('"#contents"')]),t._v(" "),_("td",[t._v("返回URL中的hash（#号后跟零或多个字符），如果URL中不包含散列，则返回空字符串")])]),t._v(" "),_("tr",[_("td",[t._v("host")]),t._v(" "),_("td",[t._v('"www.wrox.com:80"')]),t._v(" "),_("td",[t._v("返回服务器名称和端口号（如果有）")])]),t._v(" "),_("tr",[_("td",[t._v("hostname")]),t._v(" "),_("td",[t._v('"www.wrox.com"')]),t._v(" "),_("td",[t._v("返回不带端口号的服务器名称")])]),t._v(" "),_("tr",[_("td",[t._v("href")]),t._v(" "),_("td",[t._v('"http:/www.wrox.com"')]),t._v(" "),_("td",[t._v("返回当前加载页面的完整URL。而location对象的toString()方法也返回这个值")])]),t._v(" "),_("tr",[_("td",[t._v("pathname")]),t._v(" "),_("td",[t._v('"/WileyCDA/"')]),t._v(" "),_("td",[t._v("返回URL中的目录和（或）文件名")])]),t._v(" "),_("tr",[_("td",[t._v("port")]),t._v(" "),_("td",[t._v('"8080"')]),t._v(" "),_("td",[t._v("返回URL中指定的端口号。如果URL中不包含端口号，则这个属性返回空字符串")])]),t._v(" "),_("tr",[_("td",[t._v("protocol")]),t._v(" "),_("td",[t._v('"http:"')]),t._v(" "),_("td",[t._v("返回页面使用的协议。通常是http:或https:")])]),t._v(" "),_("tr",[_("td",[t._v("search")]),t._v(" "),_("td",[t._v('"？q=javascript"')]),t._v(" "),_("td",[t._v("返回URL的查询字符串。这个字符串以问号开头")])])])])]),t._v(" "),_("li",[_("p",[t._v("三个方法")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("location.assign() 跳转")]),t._v(" "),_("p",[t._v("跟location.href='' 一样")]),t._v(" "),_("p",[t._v('location.assign("http://www.wrox.com");')])]),t._v(" "),_("li",[_("p",[t._v("location.replace()")]),t._v(" "),_("p",[t._v("只接受一个参数，即要导航到的 URL；结果虽然会导致浏览器位置改变，但不会在历史记录中生成新记录。")])]),t._v(" "),_("li",[_("p",[t._v("location.reload()")]),t._v(" "),_("p",[t._v("作用是重新加载当前显示的页面。如果要强制从服务器重新加载，传递参数 true")])])]),t._v(" "),_("blockquote",[_("p",[t._v("当你使用这些方法的时候它后面的方法照样执行，执行状况取决于电脑性能")])])])]),t._v(" "),_("h2",{attrs:{id:"history对象"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#history对象"}},[t._v("#")]),t._v(" history对象")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("history.go(-1)")]),t._v(" "),_("blockquote",[_("p",[t._v("也可以传递一个url地址的字符串。会后退或者前进到url的页面。但用户浏览过哪些页面是不可知的")])])]),t._v(" "),_("li",[_("p",[t._v("history.back();\n后退")])]),t._v(" "),_("li",[_("p",[t._v("history.forward();")]),t._v(" "),_("p",[t._v("前进")])]),t._v(" "),_("li",[_("p",[t._v("length 属性")]),t._v(" "),_("p",[t._v("用户当前页面上历史记录的数量。为0表示用户第一次进到这个页面")])])]),t._v(" "),_("p",[t._v("##navigator对象")]),t._v(" "),_("p",[t._v("navigator.userAgent 浏览器的用户代理字符串")])])}),[],!1,null,null,null);v.default=s.exports}}]);