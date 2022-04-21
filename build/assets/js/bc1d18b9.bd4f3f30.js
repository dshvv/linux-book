"use strict";(self.webpackChunklinux_book=self.webpackChunklinux_book||[]).push([[389],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return d}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.createContext({}),o=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=o(e.components);return a.createElement(m.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),s=o(n),d=l,N=s["".concat(m,".").concat(d)]||s[d]||k[d]||r;return n?a.createElement(N,p(p({ref:t},i),{},{components:n})):a.createElement(N,p({ref:t},i))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=s;var u={};for(var m in t)hasOwnProperty.call(t,m)&&(u[m]=t[m]);u.originalType=e,u.mdxType="string"==typeof e?e:l,p[1]=u;for(var o=2;o<r;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8055:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return k}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),p=["components"],u={hide_title:!0},m=void 0,o={unversionedId:"\u7b2c2\u7ae0_\u5e38\u7528\u547d\u4ee4",id:"\u7b2c2\u7ae0_\u5e38\u7528\u547d\u4ee4",title:"\u7b2c2\u7ae0_\u5e38\u7528\u547d\u4ee4",description:"\u4ec0\u4e48\u662fshell",source:"@site/docs\\\u7b2c2\u7ae0_\u5e38\u7528\u547d\u4ee4.md",sourceDirName:".",slug:"/\u7b2c2\u7ae0_\u5e38\u7528\u547d\u4ee4",permalink:"/linux-book/build/docs/\u7b2c2\u7ae0_\u5e38\u7528\u547d\u4ee4",editUrl:"https://github.com/dshvv/linux-book/docs/\u7b2c2\u7ae0_\u5e38\u7528\u547d\u4ee4.md",tags:[],version:"current",frontMatter:{hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u7b2c1\u7ae0_\u4ec0\u4e48\u662flinux",permalink:"/linux-book/build/docs/\u7b2c1\u7ae0_\u4ec0\u4e48\u662flinux"}},i={},k=[{value:"\u4ec0\u4e48\u662fshell",id:"\u4ec0\u4e48\u662fshell",level:2},{value:"Shell \u73af\u5883",id:"shell-\u73af\u5883",level:2},{value:"\u547d\u4ee4-echo",id:"\u547d\u4ee4-echo",level:2},{value:"\u8bed\u6cd5-\u53d8\u91cf",id:"\u8bed\u6cd5-\u53d8\u91cf",level:2},{value:"\u8bed\u6cd5-\u6570\u7ec4",id:"\u8bed\u6cd5-\u6570\u7ec4",level:2},{value:"\u8bed\u6cd5-\u8fd0\u7b97\u7b26",id:"\u8bed\u6cd5-\u8fd0\u7b97\u7b26",level:2}],s={toc:k};function d(e){var t=e.components,n=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662fshell"},"\u4ec0\u4e48\u662fshell"),(0,r.kt)("p",null,"Shell \u662f\u4e00\u4e2a\u7528 C \u8bed\u8a00\u7f16\u5199\u7684\u7a0b\u5e8f\uff0c\u5b83\u662f\u7528\u6237\u4f7f\u7528 Linux \u7684\u6865\u6881\u3002\n\u6211\u4eec\u6240\u8981\u505a\u7684\u5c31\u662f\u5b66\u4e60\u597d\u5e38\u7528\u7684shell\u811a\u672c,\u53ea\u6709\u8fd9\u6837\u624d\u80fd\u66f4\u597d\u7684\u4f7f\u7528linux\u3002"),(0,r.kt)("h2",{id:"shell-\u73af\u5883"},"Shell \u73af\u5883"),(0,r.kt)("p",null,"Shell \u7f16\u7a0b\u8ddf JavaScript\u3001php \u7f16\u7a0b\u4e00\u6837\uff0c\u53ea\u8981\u6709\u4e00\u4e2a\u80fd\u7f16\u5199\u4ee3\u7801\u7684\u6587\u672c\u7f16\u8f91\u5668\u548c\u4e00\u4e2a\u80fd\u89e3\u91ca\u6267\u884c\u7684\u811a\u672c\u89e3\u91ca\u5668\u5c31\u53ef\u4ee5\u4e86\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","Linux \u7684 Shell \u79cd\u7c7b\u4f17\u591a\uff0c\u5e38\u89c1\u7684\u6709\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Bourne Shell\uff08/usr/bin/sh\u6216/bin/sh\uff09\nBourne Again Shell\uff08/bin/bash\uff09\nC Shell\uff08/usr/bin/csh\uff09\nK Shell\uff08/usr/bin/ksh\uff09\nShell for Root\uff08/sbin/sh\uff09\n\u2026\u2026\n")),(0,r.kt)("p",null,"\u4e0d\u540c\u7684shell\u5177\u5907\u4e0d\u540c\u7684\u529f\u80fd\uff0cshell\u8fd8\u51b3\u5b9a\u4e86\u811a\u672c\u4e2d\u51fd\u6570\u7684\u8bed\u6cd5\uff0c\u6d41\u884c\u7684shell\u6709ash\u3001bash\u3001ksh\u3001csh\u3001zsh\u7b49\uff0c\u4e0d\u540c\u7684shell\u90fd\u6709\u81ea\u5df1\u7684\u7279\u70b9\u4ee5\u53ca\u7528\u9014\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u672c\u6559\u7a0b\u5173\u6ce8\u7684\u662f Bash\uff0c\u4e5f\u5c31\u662f Bourne Again Shell\uff0c\u7531\u4e8e\u6613\u7528\u548c\u514d\u8d39\uff0cBash \u5728\u65e5\u5e38\u5de5\u4f5c\u4e2d\u88ab\u5e7f\u6cdb\u4f7f\u7528\u3002\u540c\u65f6\uff0cBash \u4e5f\u662f\u5927\u591a\u6570Linux \u7cfb\u7edf\u9ed8\u8ba4\u7684 Shell\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5728\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u4eba\u4eec\u5e76\u4e0d\u533a\u5206 Bourne Shell \u548c Bourne Again Shell\uff0c\u6240\u4ee5\uff0c\u50cf #!/bin/sh\uff0c\u5b83\u540c\u6837\u4e5f\u53ef\u4ee5\u6539\u4e3a #!/bin/bash\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"#!")," \u544a\u8bc9\u7cfb\u7edf\u5176\u540e\u8def\u5f84\u6240\u6307\u5b9a\u7684\u7a0b\u5e8f\u5373\u662f\u89e3\u91ca\u6b64\u811a\u672c\u6587\u4ef6\u7684 Shell \u7a0b\u5e8f"),(0,r.kt)("p",null,"\u67e5\u770b\u5f53\u524d\u4f7f\u7528\u7684shell\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"echo $SHELL\n")),(0,r.kt)("h2",{id:"\u547d\u4ee4-echo"},"\u547d\u4ee4-echo"),(0,r.kt)("p",null,"\u5148\u5b66\u8fd9\u4e00\u4e2a\u547d\u4ee4\u5427\uff0c\u5b66\u4f1a\u4e86\u8fd9\u4e2a\u547d\u4ee4\u65b9\u4fbf\u540e\u8fb9\u7684\u5b66\u4e60\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","echo \u6307\u4ee4\u4e0e PHP \u7684 echo \u6307\u4ee4\u7c7b\u4f3c\uff0c\u90fd\u662f\u7528\u4e8e\u5b57\u7b26\u4e32\u7684\u8f93\u51fa\u3002\u547d\u4ee4\u683c\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'echo "hello"\n')),(0,r.kt)("p",null,"\u5728shel\u4e2d\u53cc\u5f15\u53f7\u5176\u5b9e\u662f\u53ef\u4ee5\u7701\u7565\uff0c\u4ee5\u4e0b\u547d\u4ee4\u4e0e\u4e0a\u9762\u5b9e\u4f8b\u6548\u679c\u4e00\u81f4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"echo hello\n")),(0,r.kt)("p",null,"ehco\u8fd8\u6709\u4e2a\u91cd\u8981\u7684\u80fd\u529b\uff0c\u5b83\u53ef\u4ee5\u5c06\u5185\u5982\u6307\u5b9a\u8f93\u51fa\u5230\u5177\u4f53\u6587\u4ef6\u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'echo "It is a test" > myfile\n')),(0,r.kt)("h2",{id:"\u8bed\u6cd5-\u53d8\u91cf"},"\u8bed\u6cd5-\u53d8\u91cf"),(0,r.kt)("p",null,"\u53d8\u91cf\u5c31\u662f\u53ef\u4ee5\u53d8\u5316\u7684\u91cf\uff0c\u662f\u7a0b\u5e8f\u4e2d\u6700\u57fa\u672c\u7684\u5b58\u50a8\u5355\u5143\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u5b9a\u4e49"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5b9a\u4e49\u4e00\u4e2a\u53d8\u91cf\uff0c\u6253\u5370\u51fa\u6765\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u7136\u540e\u4fee\u6539\u4e0b\uff0c\u518d\u6253\u5370\u4e00\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'myName="\u5f20\u4e09"\necho $myName \nmyName="\u674e\u56db" # \u5df2\u5b9a\u4e49\u7684\u53d8\u91cf\uff0c\u53ef\u4ee5\u88ab\u91cd\u65b0\u8d4b\u503c\necho ${myName}\n')),(0,r.kt)("p",null,"\u4f7f\u7528\u4e00\u4e2a\u5b9a\u4e49\u8fc7\u7684\u53d8\u91cf\uff0c\u53ea\u8981\u5728\u53d8\u91cf\u540d\u524d\u9762\u52a0\u7f8e\u5143\u7b26\u53f7\u5373\u53ef,\u5916\u9762\u7684\u82b1\u62ec\u53f7\u662f\u53ef\u9009\u7684,\u4f46\u8fd8\u662f\u63a8\u8350\u7528\u82b1\u62ec\u53f7\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5220\u9664"),(0,r.kt)("br",{parentName:"p"}),"\n","\u4f7f\u7528 unset \u547d\u4ee4\u53ef\u4ee5\u5220\u9664\u53d8\u91cf\uff0c\u53d8\u91cf\u88ab\u5220\u9664\u540e\u4e0d\u80fd\u518d\u6b21\u4f7f\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'myName="\u5f20\u4e09"\nunset myName\necho $myName\n')),(0,r.kt)("p",null,"\u4ee5\u4e0a\u5b9e\u4f8b\u6267\u884c\u5c06\u6ca1\u6709\u4efb\u4f55\u8f93\u51fa\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53ea\u8bfb"),(0,r.kt)("br",{parentName:"p"}),"\n","\u4f7f\u7528 readonly \u547d\u4ee4\u53ef\u4ee5\u5c06\u53d8\u91cf\u5b9a\u4e49\u4e3a\u53ea\u8bfb\u53d8\u91cf\uff0c\u53ea\u8bfb\u53d8\u91cf\u7684\u503c\u4e0d\u80fd\u88ab\u6539\u53d8\uff0c\u4e5f\u4e0d\u80fd\u88ab\u5220\u9664\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u8fd9\u4e2a\u5c31\u5f88\u50cf\u5176\u4ed6\u8bed\u8a00\u4e2d\u7684\u5e38\u91cf\u4e86\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'myUrl="https://www.google.com"\nreadonly myUrl\nmyUrl="https://www.baidu.com"\n')),(0,r.kt)("p",null,"\u8fd0\u884c\u811a\u672c\uff0c\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"myUrl: \u53ea\u8bfb\u53d8\u91cf\n")),(0,r.kt)("h2",{id:"\u8bed\u6cd5-\u6570\u7ec4"},"\u8bed\u6cd5-\u6570\u7ec4"),(0,r.kt)("p",null,"Bash Shell \u53ea\u652f\u6301\u4e00\u7ef4\u6570\u7ec4\uff0c\u521d\u59cb\u5316\u65f6\u4e0d\u9700\u8981\u5b9a\u4e49\u6570\u7ec4\u5927\u5c0f\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",'\u4e0b\u6807\u7531 0 \u5f00\u59cb\uff0c\u7528\u62ec\u53f7\u6765\u8868\u793a\uff0c\u5143\u7d20\u7528"\u7a7a\u683c"\u7b26\u53f7\u5206\u5272\u5f00\u3002'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b9a\u4e49"),"   "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'myArr=(A B "C" D)\n')),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e0b\u6807\u6765\u5b9a\u4e49\u6570\u7ec4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"myArr[0]=A\nmyArr[1]=B\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bfb\u53d6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'myArr=(A "B")\necho "\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e3a: ${myArr[0]}"\necho "\u7b2c\u4e8c\u4e2a\u5143\u7d20\u4e3a: ${myArr[1]}"\necho "\u6570\u7ec4\u7684\u5143\u7d20\u4e3a: ${myArr[*]}"\necho "\u6570\u7ec4\u7684\u5143\u7d20\u4e2a\u6570\u4e3a: ${#myArr[*]}"\n# \u4f7f\u7528@ \u6216 * \u53ef\u4ee5\u83b7\u53d6\u6570\u7ec4\u4e2d\u7684\u6240\u6709\u5143\u7d20\uff0c \u524d\u8fb9\u52a0\u4e00\u4e2a\uff03\u5219\u83b7\u53d6\u4e2a\u6570\n')),(0,r.kt)("h2",{id:"\u8bed\u6cd5-\u8fd0\u7b97\u7b26"},"\u8bed\u6cd5-\u8fd0\u7b97\u7b26"),(0,r.kt)("p",null,"Shell \u548c\u5176\u4ed6\u7f16\u7a0b\u8bed\u8a00\u4e00\u6837\uff0c\u652f\u6301\u591a\u79cd\u8fd0\u7b97\u7b26\uff0c\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7b97\u6570\u8fd0\u7b97\u7b26"),(0,r.kt)("li",{parentName:"ul"},"\u5173\u7cfb\u8fd0\u7b97\u7b26"),(0,r.kt)("li",{parentName:"ul"},"\u5e03\u5c14\u8fd0\u7b97\u7b26"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32\u8fd0\u7b97\u7b26"),(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u6d4b\u8bd5\u8fd0\u7b97\u7b26")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7b97\u672f\u8fd0\u7b97"),(0,r.kt)("br",{parentName:"p"}),"\n","\u539f\u751fbash\u4e0d\u652f\u6301\u7b80\u5355\u7684\u6570\u5b66\u8fd0\u7b97\uff0c\u4f46\u662f\u53ef\u4ee5\u901a\u8fc7\u5176\u4ed6\u547d\u4ee4\u6765\u5b9e\u73b0\uff0c\u4f8b\u5982 awk \u548c expr \u3002",(0,r.kt)("br",{parentName:"p"}),"\n","expr \u662f\u4e00\u6b3e\u8868\u8fbe\u5f0f\u8ba1\u7b97\u5de5\u5177\uff0c\u6700\u5e38\u7528\uff0c\u4f7f\u7528\u5b83\u80fd\u5b8c\u6210\u8868\u8fbe\u5f0f\u7684\u6c42\u503c\u64cd\u4f5c\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5b8c\u6574\u7684\u8868\u8fbe\u5f0f\u8981\u88ab ",(0,r.kt)("inlineCode",{parentName:"p"},"``")," \u5305\u542b\uff0c\u8868\u8fbe\u5f0f\u4e24\u4fa7\u6709\u7a7a\u683c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'sum1=`expr 1 + 2`\necho "\u4e24\u6570\u4e4b\u548c\u4e3a : $sum1"\n\nnum1=2\nnum2=3 \nsum2=`expr $1 + $2`\necho "\u4e24\u6570\u4e4b\u548c\u4e3a : $sum2"\n')),(0,r.kt)("p",null,"\u9664\u4e86\u52a0\u6cd5\u4e4b\u5916\u8fd8\u6709\u8fd9\u4e9b\u7b97\u6570\u8fd0\u7b97\u7b26"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd0\u7b97\u7b26"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3e\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"\u52a0\u6cd5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expr $a + $b")," \u7ed3\u679c\u4e3a 30\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u51cf\u6cd5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expr $a - $b")," \u7ed3\u679c\u4e3a -10\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e58\u6cd5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expr $a \\* $b")," \u7ed3\u679c\u4e3a  200\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9664\u6cd5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expr $b / $a")," \u7ed3\u679c\u4e3a 2\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u4f59"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expr $b % $a")," \u7ed3\u679c\u4e3a 0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"="),(0,r.kt)("td",{parentName:"tr",align:null},"\u8d4b\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"a=$b \u628a\u53d8\u91cf b \u7684\u503c\u8d4b\u7ed9 a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"=="),(0,r.kt)("td",{parentName:"tr",align:null},"\u76f8\u7b49"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6bd4\u8f83\u4e24\u4e2a\u6570\u5b57\uff0c\u76f8\u540c\u5219\u8fd4\u56de true\u3002\t","[ $a == $b ]"," \u8fd4\u56de false\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"!="),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u76f8\u7b49"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6bd4\u8f83\u4e24\u4e2a\u6570\u5b57\uff0c\u4e0d\u76f8\u540c\u5219\u8fd4\u56de true\u3002\t","[ $a != $b ]"," \u8fd4\u56de true\u3002")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5173\u7cfb\u8fd0\u7b97\u7b26"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5173\u7cfb\u8fd0\u7b97\u7b26\u53ea\u652f\u6301\u6570\u5b57\u6bd4\u8f83\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u6bd4\u5982\u68c0\u6d4b\u4e24\u4e2a\u6570\u662f\u5426\u76f8\u7b49\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'a=1\nb=2\nif [ $a -eq $b ]\nthen echo "a\u3001b\u76f8\u7b49" \nelse echo "a\u3001b\u4e0d\u7b49"\nfi\n')),(0,r.kt)("p",null,"\u5982\u4e0aif...then...fi \u662f\u6761\u4ef6\u8bed\u53e5\uff0c\u540e\u7eed\u4f1a\u8bb2\u3002\n\u9664\u4e86\u662f\u5426\u76f8\u7b49\u7684\u6bd4\u8f83\u5916\uff0c\u8fd8\u6709\u8fd9\u4e9b\u5173\u7cfb\u8fd0\u7b97\u7b26"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd0\u7b97\u7b26"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3e\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-eq"),(0,r.kt)("td",{parentName:"tr",align:null},"\u68c0\u6d4b\u4e24\u4e2a\u6570\u662f\u5426\u76f8\u7b49\uff0c\u76f8\u7b49\u8fd4\u56de true\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"[ $a -eq $b ]"," \u8fd4\u56de false\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-ne"),(0,r.kt)("td",{parentName:"tr",align:null},"\u68c0\u6d4b\u4e24\u4e2a\u6570\u662f\u5426\u4e0d\u76f8\u7b49\uff0c\u4e0d\u76f8\u7b49\u8fd4\u56de true\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"[ $a -ne $b ]"," \u8fd4\u56de true\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-gt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u68c0\u6d4b\u5de6\u8fb9\u7684\u6570\u662f\u5426\u5927\u4e8e\u53f3\u8fb9\u7684\uff0c\u5982\u679c\u662f\uff0c\u5219\u8fd4\u56de true\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"[ $a -gt $b ]"," \u8fd4\u56de false\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-lt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u68c0\u6d4b\u5de6\u8fb9\u7684\u6570\u662f\u5426\u5c0f\u4e8e\u53f3\u8fb9\u7684\uff0c\u5982\u679c\u662f\uff0c\u5219\u8fd4\u56de true\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"[ $a -lt $b ]"," \u8fd4\u56de true\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-ge"),(0,r.kt)("td",{parentName:"tr",align:null},"\u68c0\u6d4b\u5de6\u8fb9\u7684\u6570\u662f\u5426\u5927\u4e8e\u7b49\u4e8e\u53f3\u8fb9\u7684\uff0c\u5982\u679c\u662f\uff0c\u5219\u8fd4\u56de true\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"[ $a -ge $b ]"," \u8fd4\u56de false\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-le"),(0,r.kt)("td",{parentName:"tr",align:null},"\u68c0\u6d4b\u5de6\u8fb9\u7684\u6570\u662f\u5426\u5c0f\u4e8e\u7b49\u4e8e\u53f3\u8fb9\u7684\uff0c\u5982\u679c\u662f\uff0c\u5219\u8fd4\u56de true\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"[ $a -le $b ]"," \u8fd4\u56de true\u3002")))))}d.isMDXComponent=!0}}]);