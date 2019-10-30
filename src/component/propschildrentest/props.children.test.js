import {Component} from 'react';

export class PropsChildrenTest extends Component{
    
    constructor(props){
         super(props);
         this.state={
              user:{
                    name:'quantianchao'
              }
         }
    }

    update(){
        this.setState((state)=>{
            return {
                  user:{
                      name:'lijiaqiang'
                  }
            }
        });
    }

    componentDidMount(){
        setTimeout(()=>{
            this.update();
        },2000)
    }

    render(){
        return  this.props.children(this.state.user)
    }
}