
import React from 'react';
import ReactDOM from 'react-dom'
export  const Modal=function({
    title='模态框',
    body='默认内容',
    footer,
    visible=false,
    onOk=()=>{},
    onClose=()=>{}
}){
   
   return (
       visible? <div style={{width:'500px',height:'280px',position:'fixed',top:'42%',left:'42%',zIndex:'100'}}>
             <header>{title}</header>
             <div>
                 {body}
             </div>
             <div>
               {footer? footer():<p><button onClick={(e)=>{onOk(e)}}>确定</button><button onClick={(e)=>{onClose(e)}}>取消</button></p>}
             </div>
        </div> : null
   ) 
}
Modal.info=function(props){
   let div=document.createElement('div');
   document.body.appendChild(div); 
   let modal=(
              <div  style={{width:'500px',height:'280px',position:'fixed',top:'42%',left:'42%',zIndex:'100'}}>
                   <header>{props.title}</header>
                   <div> {props.body}</div>
              </div>
   )
   return ReactDOM.render(modal,div)
}
