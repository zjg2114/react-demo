import React, { Component } from 'react'
import {HeaderWrapper,Logo,Nav, NavItem, NavSearch, Addition, Button}  from './style'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            focused:true
        };

    }
    
    render(){
        return(
            <HeaderWrapper>
                <Logo></Logo>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='right'>
                    <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <CSSTransition in={this.state.focused}
                       timeout={200} 
                       classNames="sides"
                    >
                    <NavSearch onFocus={this.handleInputFocus} onBlur={this.handleInputBlur} className={this.state.focused?'focused':''}>                       
                    </NavSearch>
                    </CSSTransition>
                    <i className={this.state.focused ? 'focused iconfont zoom': 'iconfont zoom'}>
							&#xe614;
						</i>
                </Nav>
                <Addition>
                    <Button className='reg'>注册</Button>
                    <Button className='writting'>写文章</Button>
                </Addition>
            </HeaderWrapper>
        )
            
        
    }
    handleInputFocus=()=>{
        this.setState({
            focused:true
        })
    }
    handleInputBlur=()=>{
        this.setState({
            focused:false
        })
    }
}
const mapStateToProps=(state)=>{
    return{
        focused:state.focused
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {}
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)