(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{223:function(t,s,a){"use strict";a.r(s);var n=a(0),v=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"事件的基本操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件的基本操作"}},[t._v("#")]),t._v(" 事件的基本操作")]),t._v(" "),a("p",[t._v("事件是发生某种与DOM元素，document对象或win对象有关的预定义或自定义的时刻或契机，这些契机通常是预定义的，并且程序上依赖他们以关联这些契机发生时候的功能代码。")]),t._v(" "),a("ol",[a("li",[t._v("事件是发于DOM元素、document对象或window对象有关的。")]),t._v(" "),a("li",[t._v("在平常使用的浏览器上已经预定义了大量的事件。比如：点击、滚动等。")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("事件类型")]),t._v(" "),a("p",[t._v("是个字符串，用来说明这个事件的类型，比如：鼠标点击，键盘敲击，触摸")])]),t._v(" "),a("li",[a("p",[t._v("事件目标")]),t._v(" "),a("p",[t._v("事件发生在那个对象上")])]),t._v(" "),a("li",[a("p",[t._v("事件处理程序")]),t._v(" "),a("p",[t._v("事件发生时去执行的函数")])]),t._v(" "),a("li",[a("p",[t._v("事件对象")]),t._v(" "),a("p",[t._v("事件发生后事件本身包含的信息，比如：事件类型，目标，坐标等")])]),t._v(" "),a("li",[a("p",[t._v("事件流")]),t._v(" "),a("p",[t._v("事件时怎么传播的")])])]),t._v(" "),a("h2",{attrs:{id:"事件触发方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件触发方式"}},[t._v("#")]),t._v(" 事件触发方式")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("HTML内链属性（HTML事件）")]),t._v(" "),a("p",[t._v("把事件直接写渣HTML中")])]),t._v(" "),a("li",[a("p",[t._v("属性事件（DOM0事件）")]),t._v(" "),a("p",[t._v("DOM、document和window都是对象，都有一些属性，可以通过属性的方式触发事件")])]),t._v(" "),a("li",[a("p",[t._v("事件监听回调（DOM2事件）")]),t._v(" "),a("p",[t._v("监控对象上有事件发生，就触发回调函数来执行对应的功能或方法。")])])]),t._v(" "),a("p",[t._v("element对象即节点对象三种都支持。")]),t._v(" "),a("p",[t._v("document支持属性事件 和 监听事件。因没有document标签")]),t._v(" "),a("p",[t._v("win对象 支持三种都支持。win 对象它会通过body标签或者frmeset元素来支持内链事件。每创建一个body标签浏览器都是在对应的创建一个win对象。")]),t._v(" "),a("h2",{attrs:{id:"事件的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件的使用"}},[t._v("#")]),t._v(" 事件的使用")]),t._v(" "),a("h3",{attrs:{id:"html内链属性（html事件）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html内链属性（html事件）"}},[t._v("#")]),t._v(" HTML内链属性（HTML事件）")]),t._v(" "),a("p",[t._v("在html中每一个元素支持的每种事件都可以使用一个对应的html标签来指定这个事件。事件的指定通常是on+事件名来组成的，后面跟上"),a("strong",[t._v("要执行的js代码")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("注意：")])]),t._v(" "),a("p",[t._v("⚠️使用HTML事件的时候函数名后面是否要加() ? 要加")]),t._v(" "),a("ol",[a("li",[t._v('由于js它是存在于html标准当中，所以在js整个执行过程当中又一些特殊的字符串是不可以使用的。比如："" <> & 正常情况下js的函数中都是可以用的，因为这个函数直接写在了html中，所以说如果你要这么写的话要对这些特殊符号进行转义"/"。')]),t._v(" "),a("li",[t._v("html事件有权访问全局作用域。正常情况下执行js的时候这个js一定有个作用域。但是如果我们在html事件当中直接去写了一个函数，或者直接去写了一段js。那么这段js所执行的作用域就是全局作用域。而且如果你写的是一段函数的话当js去处理这段函数的时候它是有权访问全局作用域下的任何代码的。")]),t._v(" "),a("li",[t._v("🌿html事件在创建的时候，对应的函数里面会封装一个局部变量event这个event对象就是事件对象。它里面包含了事件的详细信息。函数中的this指针指向了当前事件的目标元素，也就是触发事件的DOM元素。")]),t._v(" "),a("li",[t._v("html事件是居于html的属性的，所以通过setAttribute() 方法是可以对html事件里面的代码进行修改的，甚至动态的修改都是可以的。")])]),t._v(" "),a("p",[a("strong",[t._v("缺陷：")])]),t._v(" "),a("ol",[a("li",[t._v("时间差问题。通常js会被写在页面的最下面。当页面加载完了用户点击了一个事件，但对应的js处理函数还没加载完成。避免这个错误可以使用try cha语句。")]),t._v(" "),a("li",[t._v("html事件本身的作用域是在全局作用域下都有效果的，不同的浏览器上访问限定对象的时候出问题")]),t._v(" "),a("li",[t._v("代码写法上的耦合度问题。")])]),t._v(" "),a("blockquote",[a("p",[t._v("正常开发不会用，inport禁止粘贴")])]),t._v(" "),a("h3",{attrs:{id:"属性事件（dom0事件）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性事件（dom0事件）"}},[t._v("#")]),t._v(" 属性事件（DOM0事件）")]),t._v(" "),a("p",[t._v("三种事件处理的对象都支持属性事件，使用起来也简单。解决了html事件中的跨浏览器问题。")]),t._v(" "),a("p",[t._v("DOM0事件如何触发事件？")]),t._v(" "),a("p",[t._v("**增加事件：**增加事件要先获取这个元素，获取的每一个元素都有自己的事件处理程序属性，这些事件处理程序属性通常全都是小写。html事件在html中大写小写都行。")]),t._v(" "),a("p",[t._v("通过给获取元素对象的事件属性赋值的方式来为当前的节点增加事件处理程序。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("this指针和event对象和html事件相同，this指针也指向了当前的元素，而且event对象也是在当前的函数里面默认存在的。")]),t._v(" "),a("p",[a("strong",[t._v("事件删除：")]),t._v(" 把当前节点对应的事件属性直接赋值为null。htm事件要使用setAttribute()方法去修改掉。")]),t._v(" "),a("p",[t._v("**节点复制：**html事件复制的时候，对应事件也会被复制。DOM0事件而言，对一个元素指定了属性事件，当我们对一个元素进行复制的时候，对应的事件也会被复制一份。但复制出来的事件和原先的事件虽然作用相同但并不指向同一个引用。也就是说这两个事件处理程序代码一样但是他是两个不同的东西，分配在不同的内存空间中。")]),t._v(" "),a("p",[a("strong",[t._v("解决了HTML事件的问题")]),t._v("：")]),t._v(" "),a("ol",[a("li",[t._v("时间差问题，获取节点和给节点添加事件应用程序是在同一个js里完成的。")]),t._v(" "),a("li",[t._v("属性事件是被封装到对应的元素它的某一个属性上，它解决了浏览器差异问题。")]),t._v(" "),a("li",[t._v("耦合度问题，节点的获取及处理程序是写在一起的。")])]),t._v(" "),a("p",[a("strong",[t._v("自身存在的问题：")])]),t._v(" "),a("p",[t._v("对于属性事件来讲一次只能指定一个事件处理程序，如果想要进行更复制的功能操作就要进行一个非常复制的封装。比如点击按钮文字变色并且发送请求，都要写在一个函数里处理。")]),t._v(" "),a("h3",{attrs:{id:"事件监听回调（dom2事件）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件监听回调（dom2事件）"}},[t._v("#")]),t._v(" 事件监听回调（DOM2事件）")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("IE旧版本事件监听")])]),t._v(" "),a("p",[t._v("IE 旧版实现了DOM 中类似的两个方法： attachEvent()和 detachEvent()")]),t._v(" "),a("p",[t._v("都接收两个参数：1. 事件的名称 click 2. 事件处理对应的函数")]),t._v(" "),a("p",[a("strong",[t._v("注意事项：")])]),t._v(" "),a("ol",[a("li",[t._v("事件处理函数中this指向的是window。")]),t._v(" "),a("li",[t._v("事件处理程序的执行是按写的相反顺序执行")]),t._v(" "),a("li",[t._v("IE是基于事件冒泡的，所以所有通过 attachEvent()添加的方法都会被添加到事件冒泡阶段执行。")]),t._v(" "),a("li",[t._v("用detachEvent()删除事件处理函数时传入的函数必须跟attachEvent是同一个引用")])])]),t._v(" "),a("li",[a("p",[t._v("DOM2事件")]),t._v(" "),a("p",[t._v("DOM2事件流包括三个阶段，事件捕获，事件目标，事件冒泡。事件发生的时候首先进入到事件捕获阶段，在是事件捕获阶段W3CDOM2的事件规范里明确要求捕获是不涉及到目标，因为你是在一个不确定的范围去抓去事件发生的一个对象。实际上在现代浏览器中在事件捕获阶段都会触发事件对象上对应的事件，目的是性能的提升。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("addEventListener()  添加事件")]),t._v(" "),a("p",[t._v("三个参数：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("事件名称。DOM1 onClick大小写随意，属性事件全小写onclick。DOM2事件的这个事件名称是没有on的")])]),t._v(" "),a("li",[a("p",[t._v("事件处理程序。this指向对应的节点，event对象")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("布尔值")]),t._v("。表示对应的事件处理程序是在捕获阶段执行，还是在冒泡阶段执行。默认为false表示在冒泡阶段执行。")]),t._v(" "),a("p",[a("strong",[t._v("对象形式")]),t._v(": 三个属性都是布尔类型，默认值都是false")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("capture  true表示捕获，false表示冒泡")])]),t._v(" "),a("li",[a("p",[t._v("once  true当前处理程序只会执行一次。")])]),t._v(" "),a("li",[a("p",[t._v("passive 优化作用。为true表示当前的事件处理程序不会阻止默认事件即不会调用 "),a("code",[t._v("preventDefault()")]),t._v(" 。这时解释器会开两个线程，同时监听js代码和浏览器的默认行为，这时性能旧会提升。")]),t._v(" "),a("p",[a("strong",[t._v("注意")]),t._v("：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("passive属性的目的是告诉浏览器我不会调用preventDefault()方法，而实际上当你指定了passive后即是你调用了preventDefaule()方法它也是无效的。passive属性的出现本来是为了解决滚动或者触摸这种连续的事件而发生时浏览器的性能是有很大的下降的问题。webkit内核的它针对passive是局限于touch事件的touchstart、touchmove这两个事件，和滚轮wel事件进行了passive优化。")])]),t._v(" "),a("li",[a("p",[t._v("如果你针对同一个DOM对象然后增加了同一类型的事件监听器。这种情况下只要有一个不设置passive整个浏览器就不会对当前的DOM节点进行优化。如果指定两个不同类型的事件，后添加的那个就会失败。也就是这种情况下浏览器只会处理你最先添加的那个passive对应的那个事件处理程序。")])])]),t._v(" "),a("blockquote",[a("p",[t._v("对于新版的chrome浏览器而言click contextmenu befaultinput这种事件即使制定了passive属性浏览器也不会进行优化。")])]),t._v(" "),a("p",[a("strong",[t._v("什么样的浏览器会进行passive优化？")])]),t._v(" "),a("p",[t._v("​\t从理论上讲所有"),a("strong",[t._v("cancelable")]),t._v("（事件对象的属性）为true的事件都可以进行passive")]),t._v(" "),a("p",[a("strong",[t._v("如何判断浏览器是否支持passive属性？")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" passiveflg\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'passive'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            passiveflg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// defineProperty可以针对某一个对象里面具体的属性它在读和写的时候指定不同的事件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"passiveflg:"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("passiveflg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])])])]),t._v(" "),a("li",[a("p",[t._v("removeEventListener() 删除事件")]),t._v(" "),a("ol",[a("li",[t._v("当你删除元素事件的时候，针对这个元素所绑定的事件在冒泡阶段还是捕获阶段，你只能删除一个事件，要么冒泡要么捕获。具体删除那个阶段，看第三个参数是true还是false")]),t._v(" "),a("li",[t._v("删除掉的函数和添加的函数必须指向的是同一个引用，如果你使用匿名方式添加的就没办法删除了，所以添加的时候把执行函数起一个名字。")]),t._v(" "),a("li",[t._v("删除的时候第三个参数只写true false 就行了。没必要写成一个对象。")])])])]),t._v(" "),a("p",[t._v("所有的DOM节点都支持着两个方法，而且这两个方法可以同时支持事件冒泡或者事件捕获。DOM2级的事件处理程序也是依附在对应的元素所对应的作用域里面运行。所以this指针指向当前的DOM元素的。")])])]),t._v(" "),a("h2",{attrs:{id:"事件流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件流"}},[t._v("#")]),t._v(" 事件流")]),t._v(" "),a("p",[t._v("浏览器中一旦一个事件发生了，那么这个事件是从什么地方到什么地方这种流动的方向我们把他称之为事件流。")]),t._v(" "),a("p",[t._v("事件冒泡：即事件开始时由最具体的元素（文档中嵌套层次最深的那个节点）接收，然后逐级向上传播到较为不具体的节点（文档）。")]),t._v(" "),a("p",[t._v("事件捕获：从不太具体的节点先接收到事件，具体的节点最后接到事件。希望事件的发生能够在到达目标之前就能捕获。这样有利于整个浏览器性能提升。")]),t._v(" "),a("blockquote",[a("p",[t._v("规范要求事件捕获是从document对象开始传播的。实际上浏览器都是从win对象上开始捕获的。")])])])}),[],!1,null,null,null);s.default=v.exports}}]);