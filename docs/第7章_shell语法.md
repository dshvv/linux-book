---
hide_title: true
---


## 变量
**定义和使用变量**
```shell
my_name="张三" # 定义变量
echo $my_name # 使用一个定义过的变量，只要在变量名前面加美元符号即可
echo 请叫我 ${my_name}GG # 变量名外面的花括号是可选的，是为了帮助解释器识别变量的边界
```

**删除变量**
```shell
unset 变量
```

**只读变量**

只读变量不能修改，也不能删除
```shell
readonly my_age=18 # readonly来标识这是一个只读变量
my_age=20 # 修改变量，此处会报错
unset my_age # 删除变量，此处会报错
```

**变量类型**

运行shell时，会同时存在三种变量：
* 局部变量 在脚本或命令中定义，仅在当前shell实例中有效，其它shell启动的程序不能访问局部变量。
* 环境变量 所有的程序，包括shell启动的程序，都能访问环境变量。
* shell变量 由shell程序设置的特殊变量。


## 数据类型
shell是`弱类型`的编程语言，即便如此，我们也要了解一下它有哪些数据类型

### 字符串
**如何定义**

字符串是shell编程中最常用最有用的数据类型，可以用单引号，也可以用双引号，也可以不用引号。


```shell
one=hello
two='hello'
three="hello"
echo one,two,three # 打印输出 hello,hello,hello
```
**拼接**

单引号里无法使用转义字符，而双引号里可以有。
```shell
my_name="张三"

# 单引号里的任何字符都会原样输出，单引号字符串中的$变量是无效的，而双引号里可以。
name_1='hello, ${my_name}'
name_2="hello, ${my_name}"
echo $name_1  $name_2

# 单双引号都可以再嵌套一层表示变量。
name_3="hello, "$my_name""
name_4='hello, '$my_name''# 刚好解决了单引号不能使用$引入变量的问题
echo $name_3  $name_4

# 单引号里不能使用转义字符，双引可以
echo "Hello, I know you are \"$my_name\"!" # √
echo 'Hello, I know you are \'$my_name\'!' # ×
```

**长度、提取和查找**
```shell
my_name="abcde"
echo ${#my_name}   # 获取字符串长度，输出 5
echo ${my_name:1:3} # 提取子字符串，从第2位截取3个字符，输出 bcd
echo `expr index "$my_name" b`  # 查找子字符串，b出现在第2位置上，所以输出输出 2
```

### 数组
bash仅支持一维数组，不限制数组的大小，下标由 0 开始编号。获取数组中的元素要利用下标。

在 Shell 中，用括号来表示数组，数组元素用"空格"符号分割开。
```shell
my_arr=(茄子 土豆 西红柿 辣椒 豆角) # 定义数组
echo ${my_arr[1]} # 获取第2个元素，打印：土豆
echo ${my_arr[*]} # 使用@ 或 * 可以获取数组中的所有元素，打印：茄子 土豆 西红柿 辣椒 豆角
echo ${#my_arr[*]} # 数组元素个数，打印：5
```

## 运算符
Shell 和其他编程语言一样，支持多种运算符，包括：
* 算数运算符
* 关系运算符
* 布尔运算符
* 字符串运算符
* 文件测试运算符