###### 秒杀组件

````vue
<template>
  <div class="count-down">
    <!-- 12点场 00:32:18 -->
    <span class="count-down-end-time">{{ endHours }}点场</span>
    <span class="count-down-surplus">{{ surplus | filterTime }}</span>
  </div>
</template>

<script>
// import { setInterval, clearInterval } from 'timers'
/**
 * 接收一个时间(时间场)，自动计算时间并且倒计时
 */
export default {
  props: {
    endHours: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data () {
    return {
      // 展示活动状态
      surplus: '',
      // 活动开始差距秒数
      diffSeconds: 0,
      interval: undefined
    }
  },
  created: function () {
    this.computedSurplusTime()
  },
  methods: {
    /**
     * 计算时间
     */
    computedSurplusTime: function () {
      if (this.interval) clearInterval(this.interval)
      const date = new Date()
      /**
       * 当前时间大于活动时间，活动已结束
       */
      if (date.getHours() > this.endHours) {
        this.surplus = '活动已结束'
        return
      }

      /**
       * 当前时间等于活动时间，活动进行中
       */
      if (date.getHours() === this.endHours) {
        this.surplus = '活动进行中'
        return
      }

      /**
       * 当前时间小于活动时间，活动未开始，进行倒计时,
       * -1 表示 预计时间为 16点 ， 当前为 12点00分，
       * 那么差距应该是 3个小时 59分 59秒，而不是4个小时
       */
      const diffHours = this.endHours - date.getHours() - 1
      const diffMinutes = 60 - date.getMinutes() - 1
      const diffSeconds = 60 - date.getSeconds()
      /**
       * 获取差距秒数
       */
      this.diffSeconds = diffHours * 3600 + diffMinutes * 60 + diffSeconds
      this.interval = setInterval(() => {
        this.diffSeconds -= 1
      }, 1000)
    }
  },
  watch: {
    /**
     * 监听秒数变化，转化为对应的时间，
     * 时间补0，可以直接在这里补0，也可以使用 filters 去补0，
     * 课程中为了介绍filters的概念，将使用 filters 补0
     */
    diffSeconds: function (newV, oldV) {
      // math.floor  向下取整
      /**
       * 当前的秒数 / 3600 向下取整 获取所有的小时数
       * 当前的秒数 / 60 向下取整 获取所有的分钟数，对 60 进行取模，获取到超过小时的分钟数
       * 当前秒数直接对 60 取模 ， 获取单独的描述
       */
      const hours = Math.floor(newV / 3600)
      const minutes = Math.floor(newV / 60) % 60
      const seconds = newV % 60
      this.surplus = hours + ':' + minutes + ':' + seconds

      // 如果当前倒计时秒数已经为 0 的情况下，重新去计算时间
      if (newV === 0) {
        this.computedSurplusTime()
      }
    },
    /**
     * 父组件主动修改了时间的话，
     * 那么重新计算时间
     */
    endHours: function () {
      this.computedSurplusTime()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@css/style.scss";

.count-down {
  display: flex;
  font-size: px2rem(14);
  margin-left: $marginSize;

  span {
    display: inline-block;
    padding: px2rem(2) px2rem(4) px2rem(2) px2rem(4);
  }

  &-end-time {
    background-color: $mainColor;
    border-top-left-radius: px2rem(4);
    border-bottom-left-radius: px2rem(4);
    border: px2rem(1) solid $mainColor;
    color: white;
  }

  &-surplus {
    background-color: white;
    border-top-right-radius: px2rem(4);
    border-bottom-right-radius: px2rem(4);
    color: $mainColor;
    border: px2rem(1) solid $mainColor;
  }
}
</style>

````

###### 轮播图组件

`````vue
<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(item, index) in swiperImgs" :key="index">
      <img
        class="swiper-slide-img"
        :src="item"
        alt=""
        srcset=""
        :style="{ height: height }"
      />
    </swiper-slide>
    <!-- Optional controls -->
    <template v-slot:pagination>
      <div class="swiper-pagination"></div>
    </template>
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    height: {
      type: String,
      default: 'auto'
    },
    swiperImgs: {
      type: Array,
      required: true,
      default: function () {
        return []
      },
      /**
       * 1、圆点切换
       * 2、数字
       */
      paginationType: {
        type: String,
        default: '1'
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },

  data () {
    return {
      // swiper 配置
      swiperOption: {
        // 自动切换
        autoplay: true,
        // 自动高度，让 siwper 的高度跟随 slide 的高度变化
        autoHeight: true,
        // 设置分页器效果
        pagination: {
          // 分页器对应的 html 元素
          el: '.swiper-pagination',
          // 分页器的样式
          type: 'bullets',
          // 分页器内元素的类名
          bulletClass: 'custom-bullet-class'
        }
      }
    }
  },
  methods: {
    // 根据分页器类型配置对应的分页器
    initPaginationLayout () {
      switch (this.paginationType) {
        case '1':
          this.swiperOption.pagination = {
            el: '.swiper-pagination',
            type: 'bullets',
            bulletClass: 'custom-bullet-class'
          }
          break
        case '2':
          this.swiperOption.pagination = {
            el: '.swiper-pagination',
            type: 'fraction'
          }
          break
      }
    }
  }
}
</script>
<style lang="scss">
@import "@css/style.scss";
.swiper-container {
  .swiper-wrapper {
    .swiper-slide {
      background-color: white;
      .swiper-slide-img {
        width: 100%;
      }
    }
  }

  .swiper-pagination {
    bottom: px2rem(12);
    .custom-bullet-class {
      box-sizing: border-box;
      border-radius: 100%;
      height: px2rem(6);
      width: px2rem(6);
      border: px2rem(1) solid #fff;
      margin: 0 px2rem(4);
      display: inline-block;
      opacity: 1;
    }

    .swiper-pagination-bullet-active {
      background: white;
    }
  }

  .swiper-pagination-fraction {
    left: auto;
    right: 0;
    width: auto;
    font-size: $minInfoSize;
    background-color: rgba(0, 0, 0, 0.3);
    padding: px2rem(6) px2rem(18);
    border-top-left-radius: px2rem(16);
    border-bottom-left-radius: px2rem(16);
    bottom: px2rem(32);
    color: white;

    .swiper-pagination-current {
      font-size: $titleSize;
      font-weight: bold;
    }
  }
}
</style>

`````

###### toolbar组件

````vue
<template>
  <div class="tool-bar" :class="[{'iphonex-bottom':$store.state.isIphoneX}]">
    <div
      class="tool-bar-item"
      :class="{ 'tool-bar-item-class': index === selectItemIndex }"
      @touchstart="onChangeFragment(item,index)"
      v-for="(item, index) in toolBarData"
      :key="index"
    >
      <img :src="[index === selectItemIndex? item.hIcon:item.nIcon]" alt class="tool-bar-item-img" />
      <p
        class="tool-bar-item-name"
        :class="{ 'tool-bar-item-name-h': index === selectItemIndex }"
      >{{ item.name }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      toolBarData: [
        {
          nIcon: require('@img/home-n.svg'),
          hIcon: require('@img/home-h.svg'),
          name: '首页',
          componentName: 'home'
        },
        {
          nIcon: require('@img/shopping-n.svg'),
          hIcon: require('@img/shopping-h.svg'),
          name: '购物车',
          componentName: 'shopping'
        },
        {
          nIcon: require('@img/my-n.svg'),
          hIcon: require('@img/my-h.svg'),
          name: '我的',
          componentName: 'my'
        }
      ],
      selectItemIndex: 0
    }
  },
  methods: {
    onChangeFragment (item, index) {
      this.selectItemIndex = index
      this.$emit('onChangeFragment', item.componentName)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@css/style.scss";
.tool-bar {
  width: 100%;
  height: px2rem(46);
  display: flex;
  justify-content: space-around;
  background-color: white;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.2);
  border-top: 1px solid #e5e5e5;
  &-item {
    text-align: center;
    padding: px2rem(4) px2rem(12);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-img {
      width: px2rem(22);
      height: px2rem(22);
    }
    &-name {
      font-size: $minInfoSize;
      margin-top: px2rem(6);
      &-h {
        color: $mainColor;
      }
    }
  }
}
</style>

````

````
.icon{
	width:1em;
	height:1em;
}
<g-button><svg><use xlink:href="#i-settings"></use></svg></g-button>


````

###### 表单组件

````
<template>
  <div>
    <p>{{ title }}</p>
    <el-divider></el-divider>
    <el-form ref="form" :model="form" label-width="120px" inline>
      <el-form-item v-for="(item,index) in props" :key="index+'props'" :label="item.label" >
        <el-date-picker  v-if="item.name === 'el-date-picker'" v-model="form[item.id]" 
        type="month" style="width: 180px" 
        :placeholder="item.placeholder" format="yyyy-MM" value-format="yyyy-MM">
        </el-date-picker>
          <el-select v-if="item.name === 'el-select'" v-model="form[item.id]" :placeholder="item.placeholder">
           <el-option v-for="(ite) in item.options" :key="ite.label" :label='ite.label' :value="ite.label">
           </el-option>
          </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="margin-left: 20px" @click="getData()">查询</el-button>
        <el-button type="primary" style="margin-left: 20px" @click="$emit('reset')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-divider v-if="!utils"></el-divider>
    <ul class="nav" v-if="!utils">
      <li v-if="save" @click="clickSave()"><i class="el-icon-folder"></i>&nbsp;保存</li>
      <li v-if="save">|</li>
      <li @click="printyl()"><i class="el-icon-mobile"></i>&nbsp;打印预览</li>
      <li>|</li>
      <li @click="print()"><i class="el-icon-printer"></i>&nbsp;打印</li>
      <li>|</li>
      <li><i class="el-icon-download"></i>&nbsp;导出</li>
    </ul>
    <el-card class="print-v" v-show="printV">
      <div class="title">
        <p>打印预览</p>
        <el-tooltip class="item" effect="dark" content="关闭" placement="left-end">
          <i @click="printV = false" class="el-icon-circle-close"></i>
        </el-tooltip>
      </div>
      <div id="print-v-main">
        <img :src="printImg" alt="" /><br /><br />
        <el-button style="text-align: center" type="primary" @click="print()">打印</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
import { getDate } from '@/utils/form.js'
export default {
  props: {
    value:{
      type:Object,
      default:()=>{}
    },
    props: {
      type: Array,
      default: () => []
        
    },
    title: {
      type: String,
      default: '统计管理',
    },
    utils: {
      type: Boolean,
    },
    success: {
      type: Function,
      default: () => {},
    },
    save: {
      type: Boolean,
      default: false,
    },
    reset:{
      type:Function,
      default:()=>{}
    }
  },
  data() {
    return {
      form:{
        time:Object.values(getDate()).join('-')
      },
      timeValue: getDate(1),
      printV: false,
      printImg: null,
    }
  },
  methods: {
    print() {
      let newhtml = document.getElementById('printmain').innerHTML
      let oldhtml = document.body.innerHTML
      document.body.innerHTML = newhtml

      window.print()
      document.body.innerHTML = oldhtml
      window.location.reload()
      return true
    },
    printyl() {
      let newhtml = document.getElementById('printmain')
      html2canvas(newhtml).then(canvas => {
        this.printImg = canvas.toDataURL()
        console.log(canvas.toDataURL())
        this.printV = true
      })
    },
    resetHand(){
      console.log(this.form);
      for(const i in this.form){
       this.form[i]=null
      }
      this.$emit('input',this.form)
      this.reset(this.form)
    },

    getData() {
      this.success(this.form)
    },
    clickSave() {
      this.save(this.form)
    },
  },
  created() {
    this.getData()
    this.form = this.value
  },
}
</script>

<style lang="scss" scoped>
$height: 40px;
.nav {
  display: flex;
  height: $height;
  cursor: pointer;
  > li {
    margin-left: 20px;
  }
}
.el-icon-mobile {
  color: rgb(76, 76, 76);
}

/* 打印 */
.printmain {
  text-align: center;
  vertical-align: middle;
  > div {
    display: inline-block;
  }
}
.print-v {
  width: 1000px;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -400px;
}
.print-v .title {
  display: flex;
  justify-content: space-between;
  p {
    font-size: 16px;
  }
}
#print-v-main {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>

````

表单组件

````
<template>
  <div>
    <p>{{ title }}</p>
    <el-divider v-if="props.length> 0"></el-divider>
    <el-form v-if="props.length> 0" ref="form" :model="form" label-width="120px" inline>
      <el-form-item v-for="(item,index) in props" :key="index+'props'" :label="item.label" >
        <el-date-picker  v-if="item.name === 'el-date-picker'" v-model="form[item.id]" 
        type="month" style="width: 180px" 
        :placeholder="item.placeholder" format="yyyy-MM" value-format="yyyy-MM">
        </el-date-picker>
        <el-select v-if="item.name === 'el-select'" v-model="form[item.id]" :placeholder="item.placeholder">
           <el-option v-for="(ite) in item.options" :key="ite.label" :label='ite.label' :value="ite.label">
           </el-option>
        </el-select>
        <el-input v-if="item.name === 'el-input'" v-model="form[item.id]"></el-input>
        <el-date-picker  v-if="item.name === 'el-date-picker-date'" v-model="form[item.id]" 
          type="date" style="width: 180px" 
          :placeholder="item.placeholder" format="yyyy-MM-dd" value-format="yyyy-MM-dd">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="margin-left: 20px" @click="getData(0)">查询</el-button>
         <!-- <el-button type="primary" style="margin-left: 20px" @click="getData(1)">客户查询</el-button> -->
        <el-button type="primary" style="margin-left: 20px" @click="resetHand()">重置</el-button>
      </el-form-item>
    </el-form>
    <slot></slot>
    <el-divider v-if="!utils"></el-divider>
    <ul class="nav" v-if="!utils">
      <li v-if="save" @click="clickSave()"><i class="el-icon-folder"></i>&nbsp;保存</li>
      <li v-if="save">|</li>
      <li @click="printyl()"><i class="el-icon-mobile"></i>&nbsp;打印预览</li>
      <li>|</li>
      <li @click="print()"><i class="el-icon-printer"></i>&nbsp;打印</li>
      <li>|</li>
      <li @click="exExcel()"><i  class="el-icon-download"></i>&nbsp;导出</li>
    </ul>
    <el-card class="print-v" v-show="printV">
      <div class="title">
        <p>打印预览</p>
        <el-tooltip class="item" effect="dark" content="关闭" placement="left-end">
          <i @click="printV = false" class="el-icon-circle-close"></i>
        </el-tooltip>
      </div>
      <div id="print-v-main">
        <img :src="printImg" alt="" /><br /><br />
        <el-button style="text-align: center" type="primary" @click="print()">打印</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
import { getDate } from '@/utils/form.js'
export default {
  props: {
    value:{
      type:Object,
      default:()=>{}
    },
    props: {
      type: Array,
      default: () => []
        
    },
    // props: [
    //     {
    //       name: 'el-date-picker',
    //       id: 'time',
    //       label: '请选择时间:',
    //       type: 'reportYear',
    //       placeholder: '请选择',
    //     },
    //     {
    //       name: 'el-select',
    //       id: 'supplierId',
    //       label: '请选择供应商:',
    //       placeholder: '请选择',
    //       options: [],
    //     },
    //     {
    //       name: 'el-select',
    //       label: '请选择客户:',
    //       id: 'customerId',
    //       placeholder: '请选择',
    //       options: [],
    //     },
    //   ],
    title: {
      type: String,
      default: '统计管理',
    },
    utils: {
      type: Boolean,
    },
    success: {
      type: Function,
      default: () => {},
    },
    save: {
      type: Function,
      default: false,
    },
    exExcel:{
      type:Function,
      default:()=>{ }
    },
    reset:{
      type:Function,
      default:()=>{}
    }
  },
  data() {
    return {
      form:{
        time:Object.values(getDate()).join('-')
      },
      timeValue: getDate(1),
      printV: false,
      printImg: null,
    }
  },
  methods: {
    print() {
      let newhtml = document.getElementById('printmain').innerHTML
      let oldhtml = document.body.innerHTML
      document.body.innerHTML = newhtml

      window.print()
      document.body.innerHTML = oldhtml
      window.location.reload()
      return true
    },
    printyl() {
      let newhtml = document.getElementById('printmain')
      html2canvas(newhtml).then(canvas => {
        this.printImg = canvas.toDataURL()
        console.log(canvas.toDataURL())
        this.printV = true
      })
    },
    resetHand(){
      console.log(this.form);
      for(const i in this.form){
       this.form[i]=null
      }
      this.$emit('input',this.form)
      this.reset(this.form)
    },

    getData(x) {
      // 0 供应商 1 客户
      const obj = Object.assign({},this.form)
    // if(x) {delete obj.supplierId}
    // else delete obj.customerId
      

      this.success(obj)
    },
    clickSave() {
      this.save(this.form)
    },
  },
  created() {
    this.getData()
    this.form = this.value
  },
}
</script>

<style lang="scss" scoped>
$height: 40px;
.nav {
  display: flex;
  height: $height;
  cursor: pointer;
  > li {
    margin-left: 20px;
  }
}
.el-icon-mobile {
  color: rgb(76, 76, 76);
}

/* 打印 */
.printmain {
  text-align: center;
  vertical-align: middle;
  > div {
    display: inline-block;
  }
}
.print-v {
  width: 1000px;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -400px;
}
.print-v .title {
  display: flex;
  justify-content: space-between;
  p {
    font-size: 16px;
  }
}
#print-v-main {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>

````

###### 附件上传

````
<el-form-item label="上传证书图片(jpg,png)">
        <el-upload ref="upload" :action="Action" list-type="picture-card" :before-upload="beforeAvatarUpload"
          :file-list="queryParams.files" :on-preview="handlePictureCardPreview" :headers="Headers" :data="{
              parentId: 'manageship',
            }" :on-success="onSuccess" :on-remove="handleRemove" :limit="10">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="picVisible" :modal="false">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
</el-form-item>
  /* 查看大图*/
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.picVisible = true;
    },
     /* 限制文件类型*/
    beforeAvatarUpload(file) {
      const isPNG = file.type === "image/png" || file.type === "image/jpeg";
      const isLt10M = file.size / 1024 / 1024 < 10;
      if (!isPNG) {
        this.$message.error("图片只能是 JPG、png 格式!");
      }
      if (!isLt10M) {
        this.$message.error("图片不能大于10MB!");
      }
      return isPNG && isLt10M;
    },
      /* 上传成功 */
    onSuccess(response, file, fileList) {
      this.queryParams.files = this.queryParams.files || [];
      console.log(this.queryParams.files);
      this.queryParams.files.push({
        url: `${BaseUrl}${response.data.id}`,
        attachId: response.data.id,
        attachType: response.data.type,
        attachName: response.data.name,
        attachSize: response.data.size,
        attachPath: response.data.path,
        attachStuff: response.data.suffix,
      });
    },

    /* 删除文档 */
    handleRemove({ attachId }) {
      archiveDocDel(attachId).finally(() => {
        this.queryParams.files = this.queryParams.files.filter((item) => {
          return item.attachId !== attachId;
        });
        console.log(this.queryParams.files);
      });
    },
````

