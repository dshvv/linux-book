---
hide_title: true
---


## 什么是shell
有没有想过你在linux上输入的命令回车之后为何能被执行？    
回车之后，你的命令其实会被shell去解释这条命令，所以核心是shell

shell 是一个用 C 语言编写的软件(也称之为脚本解释器)，它是用户使用 Linux 的桥梁。       
shell脚本，是一种为 shell软件 编写的脚本。  
学习好shell脚本,才能更好的使用linux。

## shell 环境
跟 js、php 编程一样，只要有一个能解释执行shell脚本解释器就可以了。linux 的 shell解释器种类众多，常见的有：
```shell
Bourne Shell（/usr/bin/sh或/bin/sh）
Bourne Again Shell（/bin/bash）
C Shell（/usr/bin/csh）
K Shell（/usr/bin/ksh）
Shell for Root（/sbin/sh）
zsh
……
```
由于易用和免费，bash（也就是 Bourne Again Shell） 在日常工作中被广泛使用，也是大多数linux 系统默认的 shell。

查看你的linux系统自带哪些shell
```shell
cat /etc/shells
```

查看当前使用的shell类型
```shell
echo $SHELL
```

## 指定shell
`#!` 用来指定用何解释 来此脚本文件的 Shell程序，如指定使用Bash
```shell
#!/bin/sh
...
```

## 运行 Shell 脚本
运行 Shell 脚本有两种方法，分别如下：

方式1：作为可执行程序, 将代码保存到test.sh
```shell
./test.sh  #执行脚本
```

方式2：运行解释器+参数（shell 脚本的文件名）
```shell
/bin/sh test.sh # 同理推导出php可以这样执行/bin/php test.php
```


<!-- 

## 命令-echo
先学这一个命令吧，学会了这个命令方便后边的学习。    
echo 指令与 PHP 的 echo 指令类似，都是用于字符串的输出。命令格式：
```shell
echo "hello"
```
在shel中双引号其实是可以省略，以下命令与上面实例效果一致
```shell
echo hello
```

ehco还有个重要的能力，它可以将内如指定输出到具体文件中
```shell
echo "It is a test" > myfile
```

## 语法-变量
变量就是可以变化的量，是程序中最基本的存储单元。      
**定义**  
定义一个变量，打印出来。   
然后修改下，再打印一下
```shell
myName="张三"
echo $myName 
myName="李四" # 已定义的变量，可以被重新赋值
echo ${myName}
```
使用一个定义过的变量，只要在变量名前面加美元符号即可,外面的花括号是可选的,但还是推荐用花括号。

**删除**   
使用 unset 命令可以删除变量，变量被删除后不能再次使用。
```shell
myName="张三"
unset myName
echo $myName
```
以上实例执行将没有任何输出。

**只读**   
使用 readonly 命令可以将变量定义为只读变量，只读变量的值不能被改变，也不能被删除。    
这个就很像其他语言中的常量了。
```shell
myUrl="https://www.google.com"
readonly myUrl
myUrl="https://www.baidu.com"
```
运行脚本，结果如下：
```shell
myUrl: 只读变量
```

## 语法-数组
Bash Shell 只支持一维数组，初始化时不需要定义数组大小。   
下标由 0 开始，用括号来表示，元素用"空格"符号分割开。

**定义**   
```shell
myArr=(A B "C" D)
```

也可以使用下标来定义数组
```shell
myArr[0]=A
myArr[1]=B
```
**读取**
```shell
myArr=(A "B")
echo "第一个元素为: ${myArr[0]}"
echo "第二个元素为: ${myArr[1]}"
echo "数组的元素为: ${myArr[*]}"
echo "数组的元素个数为: ${#myArr[*]}"
# 使用@ 或 * 可以获取数组中的所有元素， 前边加一个＃则获取个数
```

## 语法-运算符
Shell 和其他编程语言一样，支持多种运算符，包括：
* 算数运算符
* 关系运算符
* 布尔运算符
* 字符串运算符
* 文件测试运算符

**算术运算**    
原生bash不支持简单的数学运算，但是可以通过其他命令来实现，例如 awk 和 expr 。   
expr 是一款表达式计算工具，最常用，使用它能完成表达式的求值操作。    
完整的表达式要被 ` `` ` 包含，表达式两侧有空格。
```shell
sum1=`expr 1 + 2`
echo "两数之和为 : $sum1"

num1=2
num2=3 
sum2=`expr $1 + $2`
echo "两数之和为 : $sum2"
```
除了加法之外还有这些算数运算符

| 运算符 |	说明 |	举例 |
| --- | --- | --- |
| + | 加法 | `expr $a + $b` 结果为 30。 |
| - | 减法 | `expr $a - $b` 结果为 -10。 |
| * | 乘法 | `expr $a \* $b` 结果为  200。 |
| / | 除法 | `expr $b / $a` 结果为 2。 |
| % | 取余 | `expr $b % $a` 结果为 0。 |
| = | 赋值 | a=$b 把变量 b 的值赋给 a。 |
| == |	相等 | 用于比较两个数字，相同则返回 true。	[ $a == $b ] 返回 false。 |
| != |	不相等 | 用于比较两个数字，不相同则返回 true。	[ $a != $b ] 返回 true。 |


**关系运算符**   
关系运算符只支持数字比较。   
比如检测两个数是否相等。
```shell
a=1
b=2
if [ $a -eq $b ]
then echo "a、b相等" 
else echo "a、b不等"
fi
```
如上if...then...fi 是条件语句，后续会讲。
除了是否相等的比较外，还有这些关系运算符

| 运算符 | 说明 | 举例 |
| --- | --- | --- |
| -eq |	检测两个数是否相等，相等返回 true。 | [ $a -eq $b ] 返回 false。 |
| -ne |	检测两个数是否不相等，不相等返回 true。 | [ $a -ne $b ] 返回 true。 |
| -gt |	检测左边的数是否大于右边的，如果是，则返回 true。 |	[ $a -gt $b ] 返回 false。 |
| -lt |	检测左边的数是否小于右边的，如果是，则返回 true。 |	[ $a -lt $b ] 返回 true。 |
| -ge |	检测左边的数是否大于等于右边的，如果是，则返回 true。 |	[ $a -ge $b ] 返回 false。 |
| -le |	检测左边的数是否小于等于右边的，如果是，则返回 true。 |	[ $a -le $b ] 返回 true。 | -->