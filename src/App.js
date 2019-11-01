import React,{Component} from 'react'

//import {RouterEx} from './router/RouterEx';
//import {Login} from './login/login';
import {TcLoading} from './component/loading/loading';
import { PropsChildrenTest } from './component/propschildrentest/props.children.test';
import {Modal} from './component/modal/modal';
class App extends Component{
  constructor(props){
      super(props);
      this.state={
        visible:false,
        title:'你好吗',
        body:'大家好，我是张家辉',
        // footer:()=>{
        //   return <button>提交</button>
        // },
        onOk:()=>{
           this.closeModal();
        },
        onClose:()=>{
          this.closeModal();
        }
      }
  }
  
  openModal(){
    this.setState((prevState, props) =>{
        return {
           visible:true
        }
    } )
  }

  closeModal(){
    this.setState((prevState, props) =>{
        return {
           visible:false
        }
    } )
  }

  openModalInfo(){
    Modal.info({title:'wo shi info',body:'info body'});
  }
  render() {
    return (
           <div>
              <h3>loading组件</h3>
              <TcLoading visible/>
              <h3>propschildren测试组件</h3>
              <PropsChildrenTest>
                {(user)=><p>{user.name}</p>}
              </PropsChildrenTest>
              <h4>测试modal,
                <button onClick={(e)=>this.openModal(e)}>点击打开modal</button>
                <button onClick={(e)=>this.closeModal(e)}>关闭modal</button>
                <button onClick={(e)=>this.openModalInfo(e)}>调用Modal.info</button>
              </h4>
              <Modal {...this.state}></Modal>
           </div>
    )
  }
}


export default App;
