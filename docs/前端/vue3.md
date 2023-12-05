```
"feat",
        "fix",
        "perf",
        "style",
        "docs",
        "test",
        "refactor",
        "build",
        "ci",
        "chore",
        "revert",
        "wip",
        "workflow",
        "types",
        "release"
```



````
props:{
obj:{
	type:Objec as PropType<User>
}
}
参数类型
const foo = ref<{a:number,b:string}| null>(null) 接收
dom类型
const title = ref<htmlheadELement | null>(null) 
组件类型
const helloworld =ref<InstanceType<typeof helloword >| null>(null) 
按钮类型
const handleChange = (evt:Event)=>{
 consoloe.log((evt.target as HTMLInputElement).value)
}

````

```
const props = defineProps({
 msg:{
  type:string,
  default:''
 }
})

const props = defineProps<{
foo:string,
bar?:number
}>

interface Props {
msg?:string
}
const props = widthDefaults(defineProps<props>(),{
msg:hello
})



const emit = defineEmits(['increment'])
emit('increment')
const emit = defineEmits<{
(e:'change',id:number):void
(e:'update',value:string):void
}>()
```





`tsx语法`

```
import { defineComponent, ref } from "vue";
export default defineComponent({
    props:{
        msg:{
            type:String,
            require:true
        }
    },
    setup(props){
      const count = ref(0)
      return ()=>(
        <div>
            <h1>{props.msg}</h1>
            <h1>{count.value}</h1>
        </div>
      )
    }
})
```

