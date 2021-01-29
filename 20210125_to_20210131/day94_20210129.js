/*
React hooks在平时开发中需要注意的问题和原因
*/

/*
1.不要再循环，条件或嵌套函数中调用Hook，必须始终在React函数的顶层使用hook
这是因为React需要利用调用顺序来正确更新相应的状态，以及调用相应的钩子函数。一旦在循环或条件分支语句中调用Hook，就容易导致调用顺序的不一致性，从而产生难以预料的后果

2.使用useState时候，使用push,pop,splice等直接更改数组对象的坑
使用push直接更改数组无法获取到新值，应该采用析构方式，但是在class里面不会有这个问题。
function Indicatorfilter() {
    let [num,setNums] = useState([0,1,2,3])
    const test = () => {
      // 这里坑是直接采用push去更新num
      // setNums(num)是无法更新num的
      // 必须使用num = [...num ,1]
      num.push(1)
      // num = [...num ,1]
      setNums(num)
    }
  return (
      <div className='filter'>
        <div onClick={test}>测试</div>
          <div>
            {num.map((item,index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
      </div>
    )
  }

  class Indicatorfilter extends React.Component<any,any>{
    constructor(props:any){
        super(props)
        this.state = {
            nums:[1,2,3]
        }
        this.test = this.test.bind(this)
    }

    test(){
        // class采用同样的方式是没有问题的
        this.state.nums.push(1)
        this.setState({
            nums: this.state.nums
        })
    }

    render(){
        let {nums} = this.state
        return(
            <div>
                <div onClick={this.test}>测试</div>
                    <div>
                        {nums.map((item:any,index:number) => (
                            <div key={index}>{item}</div>
                        ))}
                    </div>
            </div>

        )
    }
  }
*/


/*
useState设置状态的时候，只有第一次生效，后期需要更新状态，必须通过useEffect

const TableDeail = ({
    columns,
}:TableData) => {
    const [tabColumn, setTabColumn] = useState(columns)
}

// 正确的做法是通过useEffect改变这个值
const TableDeail = ({
    columns,
}:TableData) => {
    const [tabColumn, setTabColumn] = useState(columns)
    useEffect(() =>{setTabColumn(columns)},[columns])
}
*/

/*
善用useCallback
父组件传递给子组件事件句柄时，如果我们没有任何参数变动可能会选用useMemo。但是每一次父组件渲染子组件就算没有变化也会跟着渲染一次
*/

/*
不要滥用useContext
可以使用基于useContext封装的状态管理工具。
*/