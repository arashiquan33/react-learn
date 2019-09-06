
import React,{Component} from 'react';

/**
 * props:{
 *         visible:bolean
 *           
 *  
 *   }
 */

export class TcLoading extends Component{
       constructor(props){
           super(props);
           this.boxRef=React.createRef();
       }
       getLoadingSvg(){
           const svg=document.createElementNS("http://www.w3.org/2000/svg","svg");
           svg.setAttribute("width","100%");
           svg.setAttribute("height","100%");
           const circle=document.createElementNS("http://www.w3.org/2000/svg","circle");
           circle.setAttribute("cx",20);
           circle.setAttribute("cy",20);
           circle.setAttribute("r",10);
           circle.setAttribute("stroke","black");
           circle.setAttribute("stroke-width","1");
           svg.appendChild(circle);
           return svg;
       }
       componentDidMount(){
          // let svg=this.getLoadingSvg();
          // ReactDOM.render(svg,this.boxRef.current);
       }
       render(){
           let _render;
           if(this.props.visible){
              _render=(
                         <div class="tc-loading" ref={this.boxRef} style={{width:'40px',height:'40px'}}>
                             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="18" stroke="black" strokeWidth="2" fill="none">
                                </circle>
                                <circle class="tc-loading-point" cx="0" cy="18" r="2" stroke="red" strokeWidth="1" fill="red">
                                </circle>     
                             </svg>
                             请稍后...
                         </div>
                      ); 
           }else{
              _render=2; 
           }
           return _render;
       }
}