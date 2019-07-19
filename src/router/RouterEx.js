import Router,{Link,Route} from './Router'
import React,{Component} from 'react'

class Home extends Component{
    render() {
      return <h3>Home</h3>
    }
  }
  
  
  class About extends Component{
    render() {
      return <h3>About</h3>
    }
  }
  
  class List extends Component{
    render() {
      return(  
          <React.Fragment>
            <h3></h3> 
             <ul>
                <li>
                    <Link to="/list">列表</Link>
                </li>
            </ul>
            <div>
                <Route path="/list" component={ListIndex}></Route>
                <Route path="/list/detail" component={ListDetail}></Route>
            </div>    
          </React.Fragment>
        )
    }
  }
  
  
  class ListIndex extends Component{
     render(){
        let items=[
             {
               name:'张三',
               id:"zs"
             },
             {
              name:'李四',
              id:"ls"
            }
        ];
        return (
           <div>
               {
                 items.map((item)=><p key={item.id}><Link to={`/list/detail/${item.id}`}>{item.name}</Link></p>)
               }
           </div>
        )
     }
  }
  
  class ListDetail extends Component{
     render(){
        console.log(this);
        return(
            <div>
                <p>www</p>
            </div>
        )
     }
  }



export class RouterEx extends Component{
 render() {
    return (
      <div>
        <h1>欢迎回来,菜单如下:</h1>
  
        <Router>
            <ul>
                <li>
                   <Link to="/">HOME</Link>
                </li>
                <li>
                   <Link to="/about">ABOUT</Link>
                </li>
                <li>
                   <Link to="/list">LIST</Link>
                </li>
            </ul>
            <h3>主体内容：</h3>
            <div>
              <Route path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/list" component={List}></Route>
            </div>
         </Router>
        </div>
 
    )
  }
}