代码风格   zui

​     最大概念就是将组件抽象成函数  函数式组件 组件是一个返回界面的函数

数据更新机制

代码重用性 



vue3

sfc 单文件组件
newData = React.addons.update 深拷贝

代码风格   zui

​     最大概念就是将组件抽象成函数  函数式组件 组件是一个返回界面的函数

数据更新机制

代码重用性 



vue3

sfc 单文件组件

export const appContext = React.createContext(defaultContextValue);
常用hooks

useState() 装态钩子
纯函数没有状态 用于设置和使用组件的状态属性

useEffect() 副作用钩子
可以实现特定的功能，如异步请求


useEffect 和useLayoutEffect 调用的时机不一样

先调用再渲染会阻塞页面

export const appSetStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
>(undefined);

useCallback() 记忆函数 可以防止因为组件重新渲染，导致方法被重新创建，起到缓存作用

useMemo() 返回一个记忆函数 更适合函数计算
区别

useCallback 不会执行第一个参数函数，而是将其返回,useMemo 会执行第一个函数并将结果返回给你

useRef()保存引用值 保存到dom节点 传入初始值 current 获取dom节点上的值 useRef<HTMLButtonElement | null>


useReducer() action 钩子

newData = React.addons.update 深拷贝


