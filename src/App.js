import React,{Component} from 'react'

//import {RouterEx} from './router/RouterEx';
//import {Login} from './login/login';
import {TcLoading} from './component/loading/loading';
import { PropsChildrenTest } from './component/propschildrentest/props.children.test';

class App extends Component{
  render() {
    return (
           <div>
              <h3>loading组件</h3>
              <TcLoading visible/>
              <h3>propschildren测试组件</h3>
              <PropsChildrenTest>
                {(user)=><p>{user.name}</p>}
              </PropsChildrenTest>
           </div>
    )
  }
}


export default App;
