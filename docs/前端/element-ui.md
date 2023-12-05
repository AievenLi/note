###### 获取设置 tree 节点

```js
this.$refs.tree.setCheckedKeys([]);
this.$refs.tree.getCheckedNodes();
this.$refs.tree.getCheckedKeys();
this.$refs.tree.setChecked(i.id, false);
```

table 居中

```
:cell-style = "{textAlign:'center'}"
:header-cell-style="{textAlign:'center'}" //表头居中
```

###### el-input只能输入数字TS

````js
<template>
  <div class="about">
    <el-input placeholder="市场价" @input="limitInput($event,'mkPrice')" v-model.trim="form.mkPrice" />

    <el-input placeholder="零售价" @input="limitInput($event,'slPrice')" v-model.trim="form.slPrice" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
  /**
   * 自有属性，定义后会在生成在construct构造器内容
   */
  form: any = {
    mkPrice: 0,
    slPrice: 0,
  };

  /**
   * methods
   */
  // ts版本
  limitInput(value: string, name: string) {
    let val: any = "" + value;
    val =
      val
        .replace(/[^\d^\.]+/g, "")
        .replace(/^0+(\d)/, "$1")
        .replace(/^\./, "0.")
        .match(/^\d*(\.?\d{0,2})/g)[0] || "";
   this.form[name] = val
  }
}
</script>
````

###### 递归 el-cascader 

````js
  props: {
        checkStrictly: true,
        lazy: true,
        emitPath: false,
        lazyLoad(node, resolve) {
          setTimeout(() => {
            if (node.level === 0) {
              getUserbyUser(getUser().userId).then(response => {
                findChildDeptByOrgId(response.data.parentId).then(response => {
                  const nodes = response.data.data.map((item, index) => ({
                    value: item.id,
                    label: item.name,
                    level: item.level,
                  }))
                  resolve(nodes)
                })
              })
            } else {
              findChildDeptByOrgId(node.value).then(response => {
                const nodes = response.data.data.map((item, index) => ({
                  value: item.id,
                  label: item.name,
                  level: item.level,
                  leaf: item.level >= 4,
                }))
                resolve(nodes)
              })
            }
          }, 50)
        },
      },
````

