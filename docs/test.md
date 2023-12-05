yum whatprovides semanage 反查命令

下载linux 镜像

http://wiki.centos.org/zh/Download

````
lsb_release -a  查看linux 版本号
unname -a  查看linx内核 
df 查看磁盘空间
df -Th 用m计量空间
cd / 返回跟目录
ls -la  目录列表
lrwxr-xr-x  r读 w写 x执行 d目录  
lrwxrwxrwx  l（用户权限）（组权限）（其他权限）
top 查看系统进程 cpu资源内存资源
mkdir test  创建目录
cd test/
ls
touch test.txt
ls
vi test.txt i(编辑) :wq(保存)
cat test.txt  查看 test.txt
echo 'adasda' >>  test.txt  添加内容
echo 'adasda' >>  test.txt  覆盖内容
rm -r testdir/ 删除目录
rm -rf 强制删除
wget 
tar zxvf div.tar.gz  解压缩 （z:gz 结尾 x:解压缩 v解压过程 f使用归档名字）
tar zcvf div.tar.gz div1.1 压缩
ps -ef | grep docker  查看进程  | 筛选docker进程
kill -9 24556 (-9强制终止 pid)


service sshd 查看ssh
service sshd stop 关闭ssh
service sshd restart 重启sshd
systemctl status firewalld.service


````



semanage port -a -t ssh_port_t -p tcp 10022

告诉模块需要重启

 semanage port -l |grep ssh

查看添加的端口号

semanage port -d -t ssh_port_t -p tcp 22 删除端口号

service sshd restart 重启服务

https://segmentfault.com/a/1190000014571631



查看防火墙

firewall-cmd --list-state

添加防火墙端口

firewall-cmd --add-port=20080/tcp  --zone=public --permanent

firewall-cmd --reload

x现象