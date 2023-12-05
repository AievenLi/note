````vue
<template>
    <div ref="word">
        <p>在线查看word</p>
        <div id="luckysheet" style="
        margin: 0px;
        padding: 0px;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
      "></div>
    </div>
</template>

<script>
import { Loading } from "element-ui";
import Axios from "axios"
import { asynLoad } from "./loadin"
import { defaultOptions, renderAsync } from "docx-preview";
import LuckyExcel from 'luckyexcel';
let loading
export default {
    data() {
        return {

        }
    },
    created() {
        this.init()
    },
    methods: {
        init() {
            // loading = Loading.service({ //开始loading加载动画
            //     lock: true,
            //     text: "报告文件加载中...",
            //     background: "rgba(0, 0, 0, 0)",
            // });
            const url = this.$route.query.data
            // this.getWordCode(url)
            console.log(222);
            this.loadPlugins();

        },
        getWordCode(url) {
            Axios.get(url, {
                responseType: 'blob'
            }).then(({ data }) => {
                const option = {
                    className: "docx", //class name/prefix for default and document style classes
                    inWrapper: true, //enables rendering of wrapper around document content
                    ignoreWidth: false, //disables rendering width of page
                    ignoreHeight: false, //disables rendering height of page
                    ignoreFonts: false, //disables fonts rendering
                    breakPages: true, //enables page breaking on page breaks
                    ignoreLastRenderedPageBreak: true, //disables page breaking on lastRenderedPageBreak elements
                    experimental: true, //enables experimental features (tab stops calculation)
                    trimXmlDeclaration: true, //if true, xml declaration will be removed from xml documents before parsing
                    useBase64URL: false, //if true, images, fonts, etc. will be converted to base 64 URL, otherwise URL.createObjectURL is used
                    useMathMLPolyfill: false, //includes MathML polyfills for chrome, edge, etc.
                    showChanges: false, //enables experimental rendering of document changes (inserions/deletions)
                    debug: true, //enables additional logging
                    renderHeaders: true,
                    renderFooters: true,
                    renderFootnotes: true,
                    renderEndnotes: true,
                }
                renderAsync(data, this.$refs['word'], null, option)
                loading.close();//关闭loading
            })
        },


        // getEecel(url) {
        //     Axios.get(url, {
        //         responseType: 'blob'
        //     }).then(({ data }) => {
        //         LuckyExcel.transformExcelToLucky(data, function (exportJson, luckysheetfile) {
        //             console.log(exportJson);
        //             // After obtaining the converted table data, use luckysheet to initialize or update the existing luckysheet workbook
        //             // Note: Luckysheet needs to introduce a dependency package and initialize the table container before it can be used
        //             luckysheet.create({
        //                 container: 'luckysheet', // luckysheet is the container id
        //                 data: exportJson.sheets,
        //                 title: '22222',
        //                 userInfo: exportJson.info.creator
        //             });
        //         });

        //     })

        // },
        loadPlugins() {
            const baseURL = '//cdn.jsdelivr.net/npm/luckysheet@latest/dist';
            Promise.all([
                asynLoad(`${baseURL}/plugins/css/pluginsCss.css`, true),
                asynLoad(`${baseURL}/plugins/plugins.css`, true),
                asynLoad(`${baseURL}/css/luckysheet.css`, true),
                asynLoad(`${baseURL}/assets/iconfont/iconfont.css`, true),
                asynLoad(`${baseURL}/plugins/js/plugin.js`),
                asynLoad(`${baseURL}/luckysheet.umd.js`)
            ])
                .then(() => {
                    luckysheet = window.luckysheet;
                    this.getOriginFile(); // 获取远端文件
                })
                .catch(res => {
                })
        },
        getOriginFile() {
            const url = this.$route.query.data
            Axios.get(url, { responseType: 'blob' }).then(({ data }) => {
                this.initexcel(data); // 开始渲染
            }).catch(e => {
            }).finally(() => {
            })
        },
        // 渲染方法，接受文件对象，如果是本地文件直接传入文件即可
        initexcel(file) {
            luckysheet.destroy(); // 先销毁当前容器
            LuckyExcel.transformExcelToLucky(file, exportJson => {
                if (exportJson.sheets === null || !exportJson.sheets.length) {
                    this.$message.error('无法读取excel文件的内容,当前不支持xls文件!');
                    return;
                }
                console.log(exportJson);
                luckysheet.create({
                    container: 'luckysheet',
                    showinfobar: false,
                    lang: 'zh',
                    data: exportJson.sheets,
                    title: exportJson.info.name,
                    userInfo: exportJson.info.creator
                });
            });

        }

    },
    mounted() {
        const url = this.$route.query.data

    },

}
</script>

<style></style>
````

```
export function asynLoad(src, isCss = false) {
    return new Promise(res => {
        let el;
        if (isCss) {
            el = document.createElement('link');
            el.rel = 'stylesheet';
            el.href = src;
        } else {
            el = document.createElement('script');
            el.src = src;
        }
        document.documentElement.appendChild(el);
        el.onload = el.onreadystatechange = function () {
            if (
                !this.readyState ||
                this.readyState == 'loaded' ||
                this.readyState == 'complete'
            ) {
                res(true);
            }
            this.onload = this.onreadystatechange = null;
        };
    });
}

```

