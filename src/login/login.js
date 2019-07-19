import React,{Component} from 'react'

export class Login extends Component{
    constructor(props){
        super(props);
        this.state={
               outhImg:''
        }
    }

    getOuthImg(){
        fetch('http://www.baoli.com:4200/finas/api/captcha',{
            method:'GET',
            headers:{
                "Content-Type":"image/svg+xml; charset=utf-8"
            }
          }).then((res)=>{
              return res.text()
            })
            .then((res)=>{
                   let svg=document.createDocumentFragment();
                 //  svg.innerHTML=res;
               this.setState((state,props)=>{
               
                   return { outhImg:res}
               })
            })
    }

    componentDidMount(){
       this.getOuthImg();
    }
    render(){
        return (
            <div>
               <form name="loginForm">
                    <div>
                        <input type="text" placeholder="请输入账户"/>
                    </div>
                    <div>
                        <input type="text" placeholder="请输入密码"/>
                    </div>
                    <div>
                       <img src="http://www.baoli.com:4200/finas/api/captcha"/>
                    </div>
                    <div>
                        <button type="submit">登录</button>
                    </div>
               </form>
            </div>
        )
    }
}