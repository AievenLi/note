# 一：简介

```
　　MySQL是一种开放源代码的关系型数据库管理系统（RDBMS），使用最常用的数据库管理语言--结构化查询语言（SQL）进行数据库管理。
　　MySQL是开放源代码的，因此任何人都可以在General Public License的许可下下载并根据个性化的需要对其进行修改。
　　MySQL因为其速度、可靠性和适应性而备受关注。大多数人都认为在不需要事务化处理的情况下，MySQL是管理内容最好的选择。
　　
　　但是，最新版本不一定是最好的，很多企业并不会选择最新的版本，因为可能存在许多BUG，不稳定，数据迁移也比较麻烦，更严重的可能会数据丢失。
　　所以，这里来讲一下相对稳定的MySQL5.7的安装方式。
```

# 二：安装过程

## 1.先到MySQL官网下载安装包，选择5.7.30版本，系统根据自己的系统来选择，我选择的是 Microsoft Windows，然后选择 504.8M 的那个，点击 “Download”进行下载

### 网址：https://dev.mysql.com/downloads/windows/installer/5.7.html

[![01](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809165701.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809165701.png)

## 2.直接点击左下角的 “No thanks, just start my download”

[![02](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809170102.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809170102.png)

## 3.下载完成后，会得到这样的安装包，双击打开

[![03](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809170403.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809170403.png)

## 4.选择 “Custom” 进行自定义配置，点击“Next”

[![04](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809171204.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809171204.png)

## 5.逐级点开 “MySQL Server” - "MySQL Server" - "MySQL Server 5.7" - "MySQL Server 5.7.30 - X64"，然后点击绿色箭头

[![05](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809171505.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809171505.png)

## 6.单击右边的 "MySQL Server 5.7.30 - X64"，然后点击右下角不起眼的蓝色小字 “Advanced Options”

[![06](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809171806.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809171806.png)

## 7.这里可以自定义 安装路径 和 数据存放路径（虽然说默认路径也可以，但是还是推荐自己提前创建一个安装的路径，然后安装，便于管理和查找数据）

[![07](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809172107.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809172107.png)

## 8.因为选择了自己创建的路径，所以该路径已存在，它会警告你是否继续，直接点 “OK”即可

[![08](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809172408.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809172408.png)

## 9.直接点击 “Next”

[![09](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809172809.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809172809.png)

## 10.直接点 “Yes”即可

[![10](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809173110.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809173110.png)

## 11.点击 “Next”

[![11](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809173411.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809173411.png)

## 12.这里它会提示你，有一个 “Microsoft Visua C++2013”这个库没装，点击 “Excute”安装（没有跳出这个界面的说明已经装了，可以不予理会，直接点“Next”）

[![12](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809173712.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809173712.png)

## 13.大狗 “I agree to the license terms and conditions”，点击 “Install”

[![13](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809174013.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809174013.png)

## 14.点击 “Close”

[![14](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809174314.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809174314.png)

## 15.这里可以看到有个原谅色的 “√”，就说明安装上了，点击 “Next”

[![15](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809174615.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809174615.png)

## 16.点击 “Excute”

[![16](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809175016.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809175016.png)

## 17.点击 “Next”

[![17](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809175317.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809175317.png)

## 18.再点击 “Next”

[![18](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809175618.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809175618.png)

## 19.继续点击 “Next”

[![19](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809180119.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809180119.png)

## 20.这里默认的就行了，点击 “Next”，(上面的3306是MySQL数据库的默认端口号，不用去动它)

[![20](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809180520.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809180520.png)

### 如果有遇到下面这种情况的，可能是开着类似于phpstudy的集成环境 占用着3306这个端口 断开服务即可

[![重启](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_200505075220%E9%87%8D%E5%90%AF.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_200505075220重启.png)

## 21.这里可以设置数据库的密码，可以简单，可以复杂，只要自己记得住就行，然后点击 “Next”

[![21](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809180921.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809180921.png)

## 22.这里也直接默认的就行，然后点击 “Next”，（红框里打勾的意思是：把MySQL加到开机启动项，开机就默认启动MySQL服务）

[![22](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809181222.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809181222.png)

## 23.点击 “Excute”

[![23](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809181523.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809181523.png)

## 24.点击 “Finish”

[![24](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809181824.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809181824.png)

## 25.点击 “Next”

[![25](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809182225.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809182225.png)

## 26.点击 “Finish”

[![26](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809182626.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809182626.png)

## 27.点击左下角的 “Windows开始图标”，可以看到安装成功了，点击第一个

[![27](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809182927.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809182927.png)

## 28.然后会跳出来一个类似于CMD命令行的界面，输入密码刚刚的密码

[![28](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809183328.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809183328.png)

## 29.能跳出如下界面，就说明安装成功了

[![29](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809183629.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809183629.png)

## 30.然后输入数据库查看命令来试试（命令后面有个分号别忘记加）：show databases;

[![30](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809184030.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_20042809184030.png)

# 三：添加环境变量

## 1.添加了环境变量才能在命令行直接找到，先找到mysql的bin目录

[![001](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_200430030444001.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_200430030444001.png)

## 2.回到桌面 - 此电脑 - 右键 - 属性

[![002](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_200430030448002.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_200430030448002.png)

## 3.高级系统设置 - 环境变量 - Path - 编辑

[![img](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_200430030452003.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_200430030452003.png)

## 4.点击 “新建” - 复制之前的路径，粘贴到左边 - 点击 “确定”

[![004](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_200430030456004.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_200430030456004.png)

## 5.点击 “确定” - 点击 “确定”

[![005](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_200430030501005.png)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_200430030501005.png)

### 数据库安装 成功！

[![启动](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_200428095537%E5%90%AF%E5%8A%A8.jpg)](https://images.cnblogs.com/cnblogs_com/xuexianqi/1753384/o_200428095537启动.jpg)