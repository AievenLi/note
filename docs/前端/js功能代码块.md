###### 时间补0

````js
function time(value){
     if (!value) return ''
  if (value.indexOf(':') === -1) return value
  let result = ''
  const arr = value.split(':')
  // hour
  if (parseInt(arr[0]) < 10) {
    result = '0' + arr[0]
  } else {
    result = arr[0]
  }
  if (parseInt(arr[1]) < 10) {
    result = result + ':0' + arr[1]
  } else {
    result = result + ':' + arr[1]
  }
  if (parseInt(arr[2]) < 10) {
    result = result + ':0' + arr[2]
  } else {
    result = result + ':' + arr[2]
  }
  return result
}

````

###### 金额补零

`````js
/**
 * 金额数据处理
 */
function test (value) {
  if (!value) return '0.00'

  const result = parseFloat(value)

  if (Number.isInteger(result)) {
    return result
  }

  return result.toFixed(2)
}
`````

###### 移动端适配

````js
// 定义最大的fontSize
const MAX_FONT_SIZE = 42
// 监听html文档被解析完成的事件
document.addEventListener('DOMContentLoaded', () => {
  // 获取HTML标签
  const html = document.querySelector('html')
  // 获取根元素 fontssize 标准，屏幕宽度/10
  let fontSize = window.innerWidth / 10
  // 获取到的fontsize 不允许超过我们定义的最大值
  fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
  // 定义根源html fontsize 的大小（rem）
  html.style.fontSize = fontSize + 'px'
})
````

###### 判断是否是iphonex

````js
/**
 *判断当前设备是否是iphonex
 *@return boolean true 表示当前设备为iphonex。false就表示不为ipnonex
 */
const isIphonex = () => {
  if (typeof window !== 'undefined' && window) {
    return /iphone/gi.test(window.navigator.userAgent) && window.screen.height >= 812
  }
  return false
}
window.isIphoneX = isIphonex()
````

###### md5加密

````js
/* eslint-disable */
!(function(a) {
    'use strict';
    function b(a, b) {
      var c = (65535 & a) + (65535 & b),
        d = (a >> 16) + (b >> 16) + (c >> 16);
      return (d << 16) | (65535 & c);
    }
    function c(a, b) {
      return (a << b) | (a >>> (32 - b));
    }
    function d(a, d, e, f, g, h) {
      return b(c(b(b(d, a), b(f, h)), g), e);
    }
    function e(a, b, c, e, f, g, h) {
      return d((b & c) | (~b & e), a, b, f, g, h);
    }
    function f(a, b, c, e, f, g, h) {
      return d((b & e) | (c & ~e), a, b, f, g, h);
    }
    function g(a, b, c, e, f, g, h) {
      return d(b ^ c ^ e, a, b, f, g, h);
    }
    function h(a, b, c, e, f, g, h) {
      return d(c ^ (b | ~e), a, b, f, g, h);
    }
    function i(a, c) {
      (a[c >> 5] |= 128 << c % 32), (a[(((c + 64) >>> 9) << 4) + 14] = c);
      var d,
        i,
        j,
        k,
        l,
        m = 1732584193,
        n = -271733879,
        o = -1732584194,
        p = 271733878;
      for (d = 0; d < a.length; d += 16)
        (i = m),
          (j = n),
          (k = o),
          (l = p),
          (m = e(m, n, o, p, a[d], 7, -680876936)),
          (p = e(p, m, n, o, a[d + 1], 12, -389564586)),
          (o = e(o, p, m, n, a[d + 2], 17, 606105819)),
          (n = e(n, o, p, m, a[d + 3], 22, -1044525330)),
          (m = e(m, n, o, p, a[d + 4], 7, -176418897)),
          (p = e(p, m, n, o, a[d + 5], 12, 1200080426)),
          (o = e(o, p, m, n, a[d + 6], 17, -1473231341)),
          (n = e(n, o, p, m, a[d + 7], 22, -45705983)),
          (m = e(m, n, o, p, a[d + 8], 7, 1770035416)),
          (p = e(p, m, n, o, a[d + 9], 12, -1958414417)),
          (o = e(o, p, m, n, a[d + 10], 17, -42063)),
          (n = e(n, o, p, m, a[d + 11], 22, -1990404162)),
          (m = e(m, n, o, p, a[d + 12], 7, 1804603682)),
          (p = e(p, m, n, o, a[d + 13], 12, -40341101)),
          (o = e(o, p, m, n, a[d + 14], 17, -1502002290)),
          (n = e(n, o, p, m, a[d + 15], 22, 1236535329)),
          (m = f(m, n, o, p, a[d + 1], 5, -165796510)),
          (p = f(p, m, n, o, a[d + 6], 9, -1069501632)),
          (o = f(o, p, m, n, a[d + 11], 14, 643717713)),
          (n = f(n, o, p, m, a[d], 20, -373897302)),
          (m = f(m, n, o, p, a[d + 5], 5, -701558691)),
          (p = f(p, m, n, o, a[d + 10], 9, 38016083)),
          (o = f(o, p, m, n, a[d + 15], 14, -660478335)),
          (n = f(n, o, p, m, a[d + 4], 20, -405537848)),
          (m = f(m, n, o, p, a[d + 9], 5, 568446438)),
          (p = f(p, m, n, o, a[d + 14], 9, -1019803690)),
          (o = f(o, p, m, n, a[d + 3], 14, -187363961)),
          (n = f(n, o, p, m, a[d + 8], 20, 1163531501)),
          (m = f(m, n, o, p, a[d + 13], 5, -1444681467)),
          (p = f(p, m, n, o, a[d + 2], 9, -51403784)),
          (o = f(o, p, m, n, a[d + 7], 14, 1735328473)),
          (n = f(n, o, p, m, a[d + 12], 20, -1926607734)),
          (m = g(m, n, o, p, a[d + 5], 4, -378558)),
          (p = g(p, m, n, o, a[d + 8], 11, -2022574463)),
          (o = g(o, p, m, n, a[d + 11], 16, 1839030562)),
          (n = g(n, o, p, m, a[d + 14], 23, -35309556)),
          (m = g(m, n, o, p, a[d + 1], 4, -1530992060)),
          (p = g(p, m, n, o, a[d + 4], 11, 1272893353)),
          (o = g(o, p, m, n, a[d + 7], 16, -155497632)),
          (n = g(n, o, p, m, a[d + 10], 23, -1094730640)),
          (m = g(m, n, o, p, a[d + 13], 4, 681279174)),
          (p = g(p, m, n, o, a[d], 11, -358537222)),
          (o = g(o, p, m, n, a[d + 3], 16, -722521979)),
          (n = g(n, o, p, m, a[d + 6], 23, 76029189)),
          (m = g(m, n, o, p, a[d + 9], 4, -640364487)),
          (p = g(p, m, n, o, a[d + 12], 11, -421815835)),
          (o = g(o, p, m, n, a[d + 15], 16, 530742520)),
          (n = g(n, o, p, m, a[d + 2], 23, -995338651)),
          (m = h(m, n, o, p, a[d], 6, -198630844)),
          (p = h(p, m, n, o, a[d + 7], 10, 1126891415)),
          (o = h(o, p, m, n, a[d + 14], 15, -1416354905)),
          (n = h(n, o, p, m, a[d + 5], 21, -57434055)),
          (m = h(m, n, o, p, a[d + 12], 6, 1700485571)),
          (p = h(p, m, n, o, a[d + 3], 10, -1894986606)),
          (o = h(o, p, m, n, a[d + 10], 15, -1051523)),
          (n = h(n, o, p, m, a[d + 1], 21, -2054922799)),
          (m = h(m, n, o, p, a[d + 8], 6, 1873313359)),
          (p = h(p, m, n, o, a[d + 15], 10, -30611744)),
          (o = h(o, p, m, n, a[d + 6], 15, -1560198380)),
          (n = h(n, o, p, m, a[d + 13], 21, 1309151649)),
          (m = h(m, n, o, p, a[d + 4], 6, -145523070)),
          (p = h(p, m, n, o, a[d + 11], 10, -1120210379)),
          (o = h(o, p, m, n, a[d + 2], 15, 718787259)),
          (n = h(n, o, p, m, a[d + 9], 21, -343485551)),
          (m = b(m, i)),
          (n = b(n, j)),
          (o = b(o, k)),
          (p = b(p, l));
      return [m, n, o, p];
    }
    function j(a) {
      var b,
        c = '';
      for (b = 0; b < 32 * a.length; b += 8) c += String.fromCharCode((a[b >> 5] >>> b % 32) & 255);
      return c;
    }
    function k(a) {
      var b,
        c = [];
      for (c[(a.length >> 2) - 1] = void 0, b = 0; b < c.length; b += 1) c[b] = 0;
      for (b = 0; b < 8 * a.length; b += 8) c[b >> 5] |= (255 & a.charCodeAt(b / 8)) << b % 32;
      return c;
    }
    function l(a) {
      return j(i(k(a), 8 * a.length));
    }
    function m(a, b) {
      var c,
        d,
        e = k(a),
        f = [],
        g = [];
      for (f[15] = g[15] = void 0, e.length > 16 && (e = i(e, 8 * a.length)), c = 0; 16 > c; c += 1) (f[c] = 909522486 ^ e[c]), (g[c] = 1549556828 ^ e[c]);
      return (d = i(f.concat(k(b)), 512 + 8 * b.length)), j(i(g.concat(d), 640));
    }
    function n(a) {
      var b,
        c,
        d = '0123456789abcdef',
        e = '';
      for (c = 0; c < a.length; c += 1) (b = a.charCodeAt(c)), (e += d.charAt((b >>> 4) & 15) + d.charAt(15 & b));
      return e;
    }
    function o(a) {
      return unescape(encodeURIComponent(a));
    }
    function p(a) {
      return l(o(a));
    }
    function q(a) {
      return n(p(a));
    }
    function r(a, b) {
      return m(o(a), o(b));
    }
    function s(a, b) {
      return n(r(a, b));
    }
    function t(a, b, c) {
      return b ? (c ? r(b, a) : s(b, a)) : c ? p(a) : q(a);
    }
    'function' == typeof define && define.amd
      ? define(function() {
          return t;
        })
      : (a.md5 = t);
  })(this);
````

````js
  selectRow(selection, row) {
      if(selection.length > 1){
        let del_row = selection.shift()
        this.$refs.table.toggleRowSelection(del_row, false)
        this.$message.info('只能选择一项')
      } else if(selection.length === 1) {
        this.multipleSelection = selection
      } else if(selection.length === 0) {
        this.$message.info('请选择一项')
      }
    },
````

###### 选择单选

###### 如果首字母是数子取全部，或者中文第一个字符

````js
 first: (val) =>
      (val = String(parseInt(val)) === 'NaN' ? val.substring(0, 1) : parseInt(val))
  },
````

###### 下载文件流

````js
  exportPDF(this.form.id).then(res => {
          if (res.status === 200) {
            let headersName = ''
            if (res.headers['content-disposition']) {
              headersName = res.headers['content-disposition'].split('=')[1]
            } else {
              headersName = '工程变更申请'
            }
            let fileName = decodeURI(headersName)
            let blob = new Blob([res.data], { type: 'application/pdf' })
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
              window.navigator.msSaveBlob(blob, fileName)
            } else {
              let objectUrl = URL.createObjectURL(blob)
              const link = document.createElement('a')
              link.href = objectUrl
              link.download = fileName
              link.click()
              URL.revokeObjectURL(objectUrl)
            }
          }
        })
````



###### 导出pdf

````js

	/**
		 * 导出PDF
		 */
		$scope.exportPDF = function() {
			var url = "equipment/exportPDF.do";
			var graphType = 1; //非浮式
			if($scope.type=='浮式'){
				graphType = 2; //浮式
			}	
			var data = {platformId:$scope.platformid,graphType:graphType};
		    var type = 'application/octet-stream';
		    commonService.post(url,data,{responseType:"arraybuffer"}).success(function (data, status, headers, config) {
			   var fileName = "井控装置单("+$scope.platformname+").pdf";	
               saveAs(new Blob([data], { type: type }), fileName);  // 中文乱码
           });
		};
````

````js
风险管控台账
 // const reader = res.body.getReader()
  // console.log(reader)
  const contentDisposition = res.headers.get("content-disposition")
  const contentType = res.headers.get("content-type")
  const filename = contentDisposition.match(/filename="(.+)"/)[1]
  const file = new Blob([res.body], { type: contentType }) // this is not working
  const objectUrl = URL.createObjectURL(file)
  .then((response) => response.blob())
.then((blob) => URL.createObjectURL(blob))
.then((href) => {
  const a = document.createElement("a")
  document.body.appendChild(a)
  a.style = "display: none"
  a.href = href
  a.download = fileName
  a.click()
})
````

````
window.open("http://www.w3school.com.cn","_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400")

````

###### 改变游览器动态窗口

````
  let  addHeight = () =>{
      this.height = window.innerHeight
    }
     window.addEventListener('resize',debuce(addHeight,1000))
      function debuce(fn,time){
        let timer = null
        return function (){
          if(timer!==null){
            clearTimeout(timer)
          }
           timer = setTimeout(fn,time)
        }
````

###### 函数防抖

````
 function debuce(fn,time){
        let timer = null
        return function (){
          if(timer!==null){
            clearTimeout(timer)
          }
           timer = setTimeout(fn,time)
        }
````

###### 函数节流

````
function throttle(cd,time=300){
    var t = null;
    return function(){
        if(t) return;
        t = setTimeout(() => {
            cd.call(this);
            t = null;
        }, time);
    }
}
````

vue2.0过滤器

````
import filters from '@/utils/filter.js'
Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]))
````

###### 下载excel

```js
export const csvDownload = <T = any>(
  param: any
) => new Promise<{ param: ReponseDataStruct<T> }>(() => {
  const myDate = wijmo.Globalize.formatDate(new Date(), 'yyyyMMddHHmm');
  const fileName = `AAR0020_${myDate}.csv`;

  const workbook = new ExcelJS.Workbook();
  workbook.addWorksheet("sheet1");
  const worksheet = workbook.getWorksheet("sheet1");
  worksheet.columns = [
    { header: "法人コード", key: "hjnCd" },
    { header: "店舗", key: "tenCd" },
    { header: "棚卸予定日付", key: "tnoYotYmd" },
    { header: "部門コード", key: "bmnCd" },
    { header: "棚卸区分", key: "tnoKb" },
    { header: "棚卸年月度", key: "tnoMdo" },
    { header: "棚卸基準日付", key: "tnoKjuYmd" },
    { header: "随時棚卸確定区分", key: "ztnKteKb" },
    { header: "一斉棚卸仮確定区分", key: "itnKarKteKb" },
    { header: "一斉棚卸本確定区分", key: "itnHonKteKb" },
    { header: "部門名", key: "bmn10ktKj" },
  ];

  worksheet.addRows(param);

  const uint8Array = workbook.csv.writeBuffer(); // csvの場合
  const blob = new Blob([uint8Array], { type: 'application/octet-binary;charset=utf-8' });
  if ('download' in document.createElement('a')) {
    // 非IE
    const elink = document.createElement('a');
    elink.download = fileName;
    elink.style.display = 'none';
    // オンにする
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    URL.revokeObjectURL(elink.href);
    document.body.removeChild(elink);
  } else {
    (navigator as any).msSaveBlob(blob, fileName);
  }
});
```

###### 判断数字

```js
// typeof + isFinite  但是NaN和infinty 也是数字类型
function isNumber(num){
    return typeof num === 'number' && isFinite(num)
}

// typeof + isFinite //  isFinite(null) / true 会帅选NaN和infinity
function isNumber(num){
    return typeof num === 'number' && isFinite(num)
}

//最推荐正则
function isNumber(num){
    return /^[0-9]+.?[0-9]*$/.test(num)
}
```



