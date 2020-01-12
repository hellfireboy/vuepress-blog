(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{291:function(t,s,n){"use strict";n.r(s);var a=n(2),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"第三十二周arts总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第三十二周arts总结"}},[t._v("#")]),t._v(" 第三十二周ARTS总结")]),t._v(" "),n("h2",{attrs:{id:"algorithm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#algorithm"}},[t._v("#")]),t._v(" Algorithm")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://leetcode.com/problems/count-and-say/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Count and Say"),n("OutboundLink")],1)])]),t._v(" "),n("blockquote",[n("p",[t._v("1ms | 99.69% Run time"),n("br"),t._v("\n34.1MB | 100.00% Memory")])]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("countAndSay")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取n-1返回的值")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" lastAns "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("countAndSay")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuilder")]),t._v(" ans "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuilder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化两个局部变量")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" num "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lastAns"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 遍历字符串，得到需要的字符串")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" lastAns"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lastAns"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n                num "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lastAns"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                num "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lastAns"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                count"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理结束了的情况")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" lastAns"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br")])]),n("h2",{attrs:{id:"review"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#review"}},[t._v("#")]),t._v(" Review")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://jorgecastillo.dev/dependency-inversion-on-android-theming",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dependency Inversion on Android Theming"),n("OutboundLink")],1),t._v(" "),n("blockquote",[n("p",[t._v("注：可通过自定义不同的theme来实现切换主题的功能。所有的样式都得通过"),n("code",[t._v("?attr/colorSurface")]),t._v("的形式使用，而不是直接引用具体的色值等。")])])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://scottyab.com/2019/10/androidx-security-library/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AndroidX: Security library"),n("OutboundLink")],1),t._v(" "),n("blockquote",[n("p",[t._v("注：一种基于"),n("code",[t._v("AndroidX")]),t._v("的安全库，主要针对于"),n("code",[t._v("SharedPreference")]),t._v("和"),n("code",[t._v("File")]),t._v("的加密。")])])])]),t._v(" "),n("h2",{attrs:{id:"tip"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tip"}},[t._v("#")]),t._v(" Tip")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("SnapHelper")]),t._v("：用于辅助"),n("code",[t._v("RecyclerView")]),t._v("在滚动结束时将"),n("code",[t._v("item")]),t._v("对齐到某个位置。特别是列表横向滑动时，很多时候不会让列表滑到任意位置，而是会有一定的规则限制。\n"),n("ul",[n("li",[t._v("LinearSnapHelper")]),t._v(" "),n("li",[t._v("PagerSnapHelper")])])]),t._v(" "),n("li",[n("code",[t._v("ViewFlipper")]),t._v("："),n("code",[t._v("ViewAnimator")]),t._v("的子类，而"),n("code",[t._v("ViewAnimator")]),t._v("又是继承自"),n("code",[t._v("FrameLayout")]),t._v("，而"),n("code",[t._v("FrameLayout")]),t._v("就是平时基本上只显示一个子视图的布局，由于"),n("code",[t._v("FrameLayout")]),t._v("下不好确定子视图的位置，所以很多情况下子视图之前存在相互遮挡，这样就造成了很多时候我们基本上只要求"),n("code",[t._v("FrameLayout")]),t._v("显示一个子视图，然后通过某些控制来实现切换。正好，"),n("code",[t._v("ViewFlipper")]),t._v("帮我们实现了这个工作，我们需要做的就是，选择恰当的时机调用其恰当的方法即可。")]),t._v(" "),n("li",[t._v("注解：注解使得我们能够以将由编译器来测试和验证的格式，存储有关程序的额外信息。注解可以用来生成描述符文件。甚至是新的类定义，并且有助于减轻编写样板代码的负担。\n"),n("ul",[n("li",[t._v("元注解\n"),n("ul",[n("li",[n("code",[t._v("@Target")]),t._v("：配置该注解可以用在什么地方")]),t._v(" "),n("li",[n("code",[t._v("@Retention")]),t._v("：配置该注解在什么级别下被保存")]),t._v(" "),n("li",[n("code",[t._v("@Documented")]),t._v("：将注解包含在"),n("code",[t._v("JavaDoc")]),t._v("中")]),t._v(" "),n("li",[n("code",[t._v("@Inherited")]),t._v("：允许子类继承父类红的注解")]),t._v(" "),n("li",[n("code",[t._v("@Repeatable")]),t._v("：允许同一个地方多次使用同一种注解类型（jdk1.8后加入）")])])]),t._v(" "),n("li",[t._v("注解的使用\n"),n("ol",[n("li",[t._v("定义注解")]),t._v(" "),n("li",[t._v("使用注解")]),t._v(" "),n("li",[t._v("利用反射获取注解信息并做处理")])])])])]),t._v(" "),n("li",[n("code",[t._v("APT")]),t._v("工具："),n("code",[t._v("APT")]),t._v("是"),n("code",[t._v("javac")]),t._v("中提供的一种编译时扫描和处理注解的工具，它会对源代码文件进行检查，并找出其中的注解，然后根据用户自定义的注解处理方法进行额外的处理。"),n("code",[t._v("APT")]),t._v("工具不仅能解析注解，还能根据注解生成其他的源文件，最终将生成的新的源文件与原来的源文件共同编译"),n("code",[t._v("（注意：APT并不能对源文件进行修改操作，只能生成新的文件，例如在已有的类中添加方法）")]),t._v("。\n"),n("ul",[n("li",[n("code",[t._v("APT")]),t._v("项目构建三部分：\n"),n("ul",[n("li",[t._v("注解处理器库(包含我们的注解处理器)")]),t._v(" "),n("li",[t._v("注解声明库(用于存储声明的注解)")]),t._v(" "),n("li",[t._v("实际使用"),n("code",[t._v("APT")]),t._v("的"),n("code",[t._v("Android/Java")]),t._v("项目")])])]),t._v(" "),n("li",[t._v("使用步骤：\n"),n("ol",[n("li",[t._v("注解处理器的声明")]),t._v(" "),n("li",[t._v("注册注解处理器")]),t._v(" "),n("li",[t._v("注解处理器的扫描")]),t._v(" "),n("li",[t._v("文件生成（利用"),n("code",[t._v("JavaPoet")]),t._v("）")])])])])]),t._v(" "),n("li",[n("code",[t._v("Dagger")]),t._v("核心知识点\n"),n("ul",[n("li",[n("code",[t._v("Inject")]),t._v("：标注目标类的依赖和依赖的构造函数")]),t._v(" "),n("li",[n("code",[t._v("Component")]),t._v("：它是一个桥梁，一端是目标类，另一端是目标类所依赖类的实例，它也是注入器（"),n("code",[t._v("Injector")]),t._v("）负责把目标类所依赖类的实例注入到目标类中，同时它也管理"),n("code",[t._v("Module")])]),t._v(" "),n("li",[n("code",[t._v("Module")]),t._v("和"),n("code",[t._v("Provides")]),t._v("：是为解决第三方类库而生的，"),n("code",[t._v("Module")]),t._v("是一个简单工厂模式，"),n("code",[t._v("Module")]),t._v("可以包含创建类实例的方法，这些方法用"),n("code",[t._v("Provides")]),t._v("来标注")]),t._v(" "),n("li",[t._v("总的来说："),n("code",[t._v("Component")]),t._v("相当于注射器，"),n("code",[t._v("Module")]),t._v("是注射液，"),n("code",[t._v("Inject")]),t._v("是被注射体中的目标")])])]),t._v(" "),n("li",[n("code",[t._v("Dagger")]),t._v("的使用：\n"),n("ul",[n("li",[t._v("简单使用\n"),n("ol",[n("li",[t._v("用"),n("code",[t._v("@Inject")]),t._v("标注于构造方法，告诉"),n("code",[t._v("Dagger2")]),t._v("可以实例化这个类")]),t._v(" "),n("li",[t._v("使用注解"),n("code",[t._v("@Component")]),t._v("定义"),n("code",[t._v("注射器")]),t._v("，其中类名、方法名随意，方法参数为被注射类")]),t._v(" "),n("li",[t._v("编译项目，自动生成"),n("code",[t._v("DaggerComponent")]),t._v("类，类名为"),n("code",[t._v("Dagge+我们定义的Component的名字")])]),t._v(" "),n("li",[t._v("在被注射类中调用"),n("code",[t._v("DaggerXXX.create().injectTo(this);")]),t._v(",即"),n("code",[t._v("打针")])]),t._v(" "),n("li",[t._v("在被注射类中直接使用"),n("code",[t._v("注射液")])])])]),t._v(" "),n("li",[t._v("带"),n("code",[t._v("@Module")]),t._v("的使用\n"),n("ol",[n("li",[t._v("用"),n("code",[t._v("@Module")]),t._v("标注"),n("code",[t._v("Module类")]),t._v("，用"),n("code",[t._v("@Provides")]),t._v("标注方法的返回值，即我们需要"),n("code",[t._v("@Inject")]),t._v("的类型")]),t._v(" "),n("li",[t._v("用"),n("code",[t._v("@Component(modules = AModule.class)")]),t._v("指定"),n("code",[t._v("注射器")]),t._v("的"),n("code",[t._v("注射液")])]),t._v(" "),n("li",[t._v("接下来与"),n("code",[t._v("简单使用")]),t._v("的步骤"),n("code",[t._v("3~5")]),t._v("一致")])])]),t._v(" "),n("li",[t._v("通过"),n("code",[t._v("Module")]),t._v("传参（主要用于"),n("code",[t._v("Module")]),t._v("类的构造方法带参且被使用的情况）\n"),n("ol",[n("li",[t._v("用"),n("code",[t._v("@Module")]),t._v("标注"),n("code",[t._v("Module类")]),t._v("，用"),n("code",[t._v("@Provides")]),t._v("标注方法的返回值，即我们需要"),n("code",[t._v("@Inject")]),t._v("的类型。其中方法的返回值可能与"),n("code",[t._v("Module")]),t._v("构造方法的参数有关")]),t._v(" "),n("li",[t._v("用"),n("code",[t._v("@Component(modules = AModule.class)")]),t._v("指定"),n("code",[t._v("注射器")]),t._v("的"),n("code",[t._v("注射液")])]),t._v(" "),n("li",[t._v("编译项目，自动生成"),n("code",[t._v("DaggerComponent")]),t._v("类，类名为"),n("code",[t._v("Dagge+我们定义的Component的名字")])]),t._v(" "),n("li",[t._v("在被注射类中调用"),n("code",[t._v('DaggerXXX.builder().aModule(new AModule("xxx")).build().injectTo(this);')]),t._v(",即"),n("code",[t._v("打针")]),t._v("。"),n("strong",[t._v("注：此时的"),n("code",[t._v("Module")]),t._v("需要手动传入")])]),t._v(" "),n("li",[t._v("在被注射类中直接使用"),n("code",[t._v("注射液")])])])]),t._v(" "),n("li",[t._v("自定义"),n("code",[t._v("Builder")]),t._v("（上述使用的"),n("code",[t._v("Builder")]),t._v("是"),n("code",[t._v("APT")]),t._v("自动生成的，现在来自定义"),n("code",[t._v("Builder")]),t._v("）\n"),n("ol",[n("li",[t._v("与上述的"),n("code",[t._v("1~2")]),t._v("步骤一致")]),t._v(" "),n("li",[t._v("自定义一个接口类，并用"),n("code",[t._v("@Component.Builder")]),t._v("标注。其中有两个方法："),n("strong",[t._v("返回值为本身的方法+返回值为"),n("code",[t._v("XXXComponent")]),t._v("的方法")]),n("br"),t._v("\n例："),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("modules "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AModule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestComponent")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("injectTo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainActivity")]),t._v(" mainActivity"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n     "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Builder")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Builder")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Builder")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("aModule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AModule")]),t._v(" aModule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n         "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestComponent")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])])]),t._v(" "),n("li",[t._v("接下来与上述的"),n("code",[t._v("3~5")]),t._v("一致")])])]),t._v(" "),n("li",[t._v("使用"),n("code",[t._v("@BindsInstance")]),t._v("（为了精简"),n("code",[t._v("Builder")]),t._v("中"),n("code",[t._v("aModule")]),t._v("方法）\n"),n("ol",[n("li",[t._v("改造"),n("code",[t._v("Module")]),t._v("，将构造方法中的参数变为方法的形参")]),t._v(" "),n("li",[t._v("修改"),n("code",[t._v("Component")]),t._v("，将返回值为"),n("code",[t._v("Builder")]),t._v("的方法参数作修改")]),t._v(" "),n("li",[n("code",[t._v("打针")]),t._v("的时候输入的参数作精简\n"),n("strong",[t._v("注：目的是为了在"),n("code",[t._v("打针")]),t._v("的时候不用手动"),n("code",[t._v("new")]),t._v("一个对象，而是直接传入对象所需要的参数值")])])])]),t._v(" "),n("li",[t._v("使用"),n("code",[t._v("dependencies")]),t._v("实现"),n("code",[t._v("Component")]),t._v("依赖"),n("code",[t._v("Component")]),t._v(" "),n("ol",[n("li",[n("code",[t._v("Module")]),t._v("类正常，不改变")]),t._v(" "),n("li",[t._v("父注射器要把注入类返回")]),t._v(" "),n("li",[t._v("子注射器需要依赖父注射器，通过"),n("code",[t._v("dependencies")])]),t._v(" "),n("li",[t._v("子注射器"),n("code",[t._v("打针")]),t._v("的时候需要父注射器的实例")])])]),t._v(" "),n("li",[t._v("使用"),n("code",[t._v("@subComponent")]),t._v("实现"),n("code",[t._v("Component")]),t._v("依赖"),n("code",[t._v("Component")])]),t._v(" "),n("li",[t._v("使用"),n("code",[t._v("@Subcomponent.Builder")]),t._v("实现"),n("code",[t._v("Component")]),t._v("依赖"),n("code",[t._v("Component")])])])]),t._v(" "),n("li",[n("code",[t._v("Dagger2")]),t._v("中常见的注解：\n"),n("ul",[n("li",[n("code",[t._v("@Named")]),t._v("：用于标识不同的初始化路径")]),t._v(" "),n("li",[n("code",[t._v("@Qualifier")])]),t._v(" "),n("li",[n("code",[t._v("@Singleton")]),t._v("：作用域单例（与该"),n("code",[t._v("DaggerComponent")]),t._v("的生命周期一致）")]),t._v(" "),n("li",[n("code",[t._v("@Scope")])]),t._v(" "),n("li",[n("code",[t._v("Provider")]),t._v("：一种工厂模式的容器")]),t._v(" "),n("li",[n("code",[t._v("Lazy")]),t._v("：懒加载容器，只有调用"),n("code",[t._v("get()")]),t._v("的时候才会生成实例，并且实例只有一份")])])])]),t._v(" "),n("h2",{attrs:{id:"share"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#share"}},[t._v("#")]),t._v(" Share")]),t._v(" "),n("p",[t._v("暂无内容")]),t._v(" "),n("Vssue",{attrs:{title:"第三十二周ARTS总结"}})],1)}),[],!1,null,null,null);s.default=e.exports}}]);