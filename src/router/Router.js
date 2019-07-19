import React,{Component} from 'react';






const RouterContext=React.createContext()

class Router extends Component{
    
    constructor(props){
       super(props);
       this.state={
            path:'/',
            updateHistoryPath:this.updateHistoryPath,
            router:this
       };
    }

   updateHistoryPath(path){
       window.history.pushState(path,`title-${path}`,path)
       this.setState((state)=>{
           return {
                 path:path
           }
       });
   } 

   componetDidMount(){
      
   }

   componentWillUnmount(){

   }

   renderChildren(){
      return this.props.children.map((children)=>{
          return children
       })
   }

   render(){
        return (
            <RouterContext.Provider value={this.state}>
                {this.renderChildren()}
            </RouterContext.Provider>
             
        )
    }
}

class Link extends Component{

    constructor(props){
       super(props);
     
    }

   
    render(){
        return (
            <RouterContext.Consumer>
               {
                   ({updateHistoryPath,router})=>
                    (
                     <a className="link" href="javascript:void(0)" onClick={(e)=>updateHistoryPath.call(router,this.props.to)}> {this.props.children}</a>
                    )     
               }
            </RouterContext.Consumer>
            
        )
    }
}

class Route extends Component{

    constructor(props){
        super(props);
        this.state={};
     }

     render(){
          const RenderComponent = this.props.component ;
          return (
            <RouterContext.Consumer>
                {
                  ({path})=>{
                     let reg=new RegExp("^"+this.props.path+"\/?","g"); 
                     if(path.match(reg)){
                        return <RenderComponent/>
                     }else{
                        return <></>
                     } 
                  }
                }
            </RouterContext.Consumer>    
          )
     }
}

export default  Router;
export {Link,Route}
