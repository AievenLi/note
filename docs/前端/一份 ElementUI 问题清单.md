# 一份 ElementUI 问题清单

[前端大全](javascript:void(0);) *2021-08-26 11:50*

↓推荐关注↓

![img](http://mmbiz.qpic.cn/mmbiz_png/mshqAkialV7FvgHwjwFbEbT0nNZU2AVPsmAuuZfXfp0Yc8H3FNkbiaKZYUJNichcJ3lZj4HiceOTXAeTnPHJrLFklA/0?wx_fmt=png&wx_head=1)

**大前端技术之路**

分享Web前端，Node.js、React Native等大前端技术栈精选

19篇原创内容



公众号



**1、form 下面只有一个 input 时回车键刷新页面**

原因是触发了表单默认的提交行为，给el-form 加上@submit.native.prevent就行了。

```
<el-form inline @submit.native.prevent>
  <el-form-item label="订单号">
    <el-input
      v-model="query.orderNo"
      :placeholder="输入订单号查询"
      clearable
      @keyup.enter.native="enterInput"
    />
  </el-form-item>
</el-form>
```

#### 2、表格固定列最后一行显示不全

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHpssZlraPuhssJSzL6hEgTncMRq3ldIKkkQnte5rBmh50WrtYA8ciccRUQT199ibpMLOqztjS1swibjg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)image.png

这种情况有时在宽度刚好处于临界值状态时会出现。因为固定列是独立于表格body动态计算高度的，出现了固定列高度小于表格高度所以造成最后一行被遮挡。

```
// 设置全局
.el-table__fixed-right {
  height: 100% !important;
}
```

#### 3、气泡确认框文档里的confirm事件不生效

> 版本：element-ui: "2.13.2"， vue: "2.6.10"

```
// 将confirm改为onConfirm
@onConfirm="onDeleteOrder(row.id)"
```

#### 4、输入框用正则限制但绑定值未更新

看到项目里有下面这么一段代码：

```
<el-input 
  v-model="form.retailMinOrder" 
  placeholder="请输入" 
  onkeyup="value=value.replace(/[^\d.]/g,'')" 
/>
```

这样做虽然输入框的显示是正确的，但绑定的值是没有更新的，将 onkeyup 改为 oninput 即可。

- PS：经评论区的兄弟指正，输入中文后 v-model 会失效，下面的方式更好一点：

```
<el-input 
  v-model="form.retailMinOrder" 
  placeholder="请输入" 
  @keyup.native="form.retailMinOrder=form.retailMinOrder.replace(/[^\d.]/g,'')"
/>
```

#### 5、去除type="number"输入框聚焦时的上下箭头

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHpssZlraPuhssJSzL6hEgTnP71dkNAzbb7YFDBGmqCyPU5Vg1ibEg9mWB4aVXjA4DrOhMkQ1b2OF5A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)image.png

```
/* 设置全局 */
.clear-number-input.el-input::-webkit-outer-spin-button,
.clear-number-input.el-input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none !important;
} 
.clear-number-input.el-input input[type="number"]::-webkit-outer-spin-button,
.clear-number-input.el-input input[type="number"]::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none !important;
}
.clear-number-input.el-input {
  -moz-appearance: textfield;
} 
.clear-number-input.el-input input[type="number"] {
  -moz-appearance: textfield;
}
<el-input type="number" class="clear-number-input" />
```

#### 6、只校验表单其中一个字段

在一些用户注册场景中，提交整个表单前有时候我们会做一些单独字段的校验，例如发送手机验证码，发送时我们只需要校验手机号码这个字段，可以这样做：

```
this.$refs['form'].validateField('mobile', valid => {
  if (valid) {
    // 发送验证码
  }
})
```

如果需要多个参数，将参数改为数组形式即可。

#### 7、弹窗重新打开时表单上次的校验信息未清除

有人会在open时在$nextTick里重置表单，而我选择在关闭时进行重置。

```
<el-dialog @close="onClose">
  <el-form ref="form">
  </el-form>
</el-dialog>

// 弹窗关闭时重置表单
onClose() {
  this.$refs['form'].resetFields()
}
```

#### 8、表头与内容错位

网上也有其他一些办法，但我记得对我没什么作用，后来我是用下面这个办法：

```
// 全局设置
.el-table--scrollable-y .el-table__body-wrapper {
 overflow-y: overlay !important;
}
```

#### 9、表单多级数据结构校验问题

```
<el-form :model="form">
  <el-form-item label="部门" prop="dept"></el-form-item>
  <el-form-item label="姓名" prop="user.name"></el-form-item>
</el-form>
rules: {
  'user.name': [{ required: true, message: '姓名不能为空', trigger: 'blur' }]
}
```

#### 10、表格跨分页多选

看到项目里有小伙伴手动添加代码去处理这个问题，其实根据文档，只需加上row-key和reserve-selection即可。

```
<el-table row-key="id">
  <el-table-column type="selection" reserve-selection></el-table-column>
</el-table>
```

#### 11、根据条件高亮行并去除默认hover颜色

```
<el-table :row-class-name="tableRowClassName">
</el-table>

tableRowClassName({ row }) {
  return row.status === 2 ? 'highlight' : ''
}

// 设置全局
.el-table .highlight {
  background-color: #b6e8fe;
  &:hover > td {
    background-color: initial !important;
  }
  td {
    background-color: initial !important;
  }
}
```

#### 12、表单不想显示label但又想显示必填星号怎么办

```
// label给个空格即可
<el-form>
  <el-table>
    <el-table-column label="名称">
      <template>
        <el-form-item label=" ">
           <el-input placeholder="名称不能为空" />
        </el-form-item>
      </template>
    </el-table-column>
  </el-table>
</el-form>
```

#### 13、table 内嵌 input 调用 focus 方法无效

```
<el-table>
  <el-table-column label="名称">
    <template>
      <el-input ref="inputRef" />
    </template>
  </el-table-column>
</el-table>

// 无效
this.$refs['inputRef'].focus()
this.$refs['inputRef'][0].focus()
this.$refs['inputRef'].$el.children[0].focus()

// 有效
<el-input id="inputRef" />
document.getElementById('inputRef').focus()
```

#### 14、表格内容超出省略

看到有小伙伴在代码里自己手动去添加CSS来实现，害，又是一个不看文档的反面例子，其实只要加个show-overflow-tooltip就可以了，还自带tooltip效果，不香吗？

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)image.png

```
<el-table-column label="客户名称" prop="customerName" show-overflow-tooltip>
</el-table-column>
```

#### 15、el-tree 展开/收起所有节点

```
<el-tree ref="tree"></el-tree>

expandTree(expand = true) {
  const nodes = this.$refs['tree'].store._getAllNodes()
  nodes.forEach(node => {
    node.expanded = expand
  })
}
```

#### 16、哪天想起什么或遇到什么再更新。。。

> 作者：8号的凌晨4点
>
> https://juejin.cn/post/6981083988286767117





\- EOF -

推荐阅读 点击标题可跳转

1、[Element UI 源码中学到的技巧](http://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651578815&idx=3&sn=af4f10618ab1a7eb944911e98188911c&chksm=8025367eb752bf6874206ca42dbd8fa42f34a076b56cfed31384cf84706a504cef5cc2a3a7ae&scene=21#wechat_redirect)

2、[盘点那些真正能提升工作幸福度的小工具](http://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651578859&idx=2&sn=1f8a98f1c77c4decffd65f88ca929e3e&chksm=8025362ab752bf3cbcfae8a05920ec152abef44122387dddc35b0572abc619bff0589b999a34&scene=21#wechat_redirect)

3、[【CSS】骨架屏 Skeleton 效果](http://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651569342&idx=2&sn=4c0eff40338bf810ee5b62dc95b85b87&chksm=80256b7fb752e269b07cff59c3d07f4930b0885e037d186549edf8cffa3a05f80e42ad581d2e&scene=21#wechat_redirect)



