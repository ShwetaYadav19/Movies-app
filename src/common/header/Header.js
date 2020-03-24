import React ,{Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelpertext from '@material-ui/core/FormHelperText';
import ReactDOM from  'react-dom';
import BookShow from '../../screens/bookshow/BookShow'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


const TabContainer = function(props) {
    return(
           <Typography component="div" style={{padding:0, textAlign:'center'}} >
              {props.children}
           </Typography>
    );
}
TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}


class Header extends Component{
    constructor()
    {
      super();
      this.state ={
          modalIsOpen : false,
          value : 0,
          usernameRequired : "dispNone",
          passwordRequired : "dispNone",
          firstnameRequired : "dispNone",
          lastnameRequired : "dispNone",
          emailRequired : "dispNone",
          contactnoRequired : "dispNone",
          username : "",
          password : "",
          firstname : "",
          lastname : "",
          email : "",
          contactno : "",


      }
    }

    openModalHandler = () =>{
        this.setState({modalIsOpen : true})
      
    }

    closeModalHandler = () =>{
        this.setState ({modalIsOpen : false});
        this.setState({ usernameRequired: "dispNone" });
        this.setState({ passwordRequired: "dispNone" });
        this.setState({ firstnameRequired: "dispNone" });
        this.setState({ lastnameRequired: "dispNone" });
        this.setState({ emailRequired: "dispNone" });
        this.setState({ contactnoRequired: "dispNone" });
        this.setState({value : 0});
      
    }

    tabChangeHandler = (event, value) =>{
        this.setState({value})
    }

    loginClickHandler = (e) =>{
        e.stopPropagation(); 
        this.state.username === "" ? 
        this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        e.stopPropagation();
        this.state.password === "" ? 
        this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });
    }

    registerClickHandler = (e) =>{
        e.stopPropagation(); 
        this.state.firstname === "" ? 
        this.setState({ firstnameRequired: "dispBlock" }) : this.setState({ firstnameRequired: "dispNone" });
        e.stopPropagation();
        this.state.lastname === "" ? 
        this.setState({ lastnameRequired: "dispBlock" }) : this.setState({ lastnameRequired: "dispNone" });
        e.stopPropagation();
        this.state.password === "" ? 
        this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });
        e.stopPropagation();
        this.state.email === "" ? 
        this.setState({ emailRequired: "dispBlock" }) : this.setState({ emailRequired: "dispNone" });
        e.stopPropagation();
        this.state.contactno === "" ? 
        this.setState({ contactnoRequired: "dispBlock" }) : this.setState({ contactnoRequired: "dispNone" });
    }

    usernameChangeHandler = (e) =>{
        this.setState({username : e.target.value});
    }

    passwordChangeHandler = (e) =>{
        this.setState({password : e.target.value});
    }
    firstnameChangeHandler = (e) =>{
        this.setState({firstname : e.target.value});
    }

    lastnameChangeHandler = (e) =>{
        this.setState({lastname : e.target.value});
    }
    emailChangeHandler = (e) =>{
        this.setState({email : e.target.value});
    }

    contactnoChangeHandler = (e) =>{
        this.setState({contactno : e.target.value});
    }

    bookshowHandler = () =>{
        ReactDOM.render(<BookShow/>, document.getElementById('root'));
    }



    render(){
        return (

         <div>
               <header className="app-header">
                   <img src={logo} className="app-logo" alt="logo"/>
                     <div className="login-button">
                	    <Button variant="contained" color="default" onClick={this.openModalHandler}>
                            Login
                        </Button>
                     </div>
                     { this.props.showBookShowButton === 'true' ?
                     <div className="bookshow-button">
                	    <Button variant="contained" color="primary" onClick={this.bookshowHandler}>
                            Book Show
                        </Button>
                     </div> : ""}
                </header>
                <Modal arialHideApp={false} isOpen={this.state.modalIsOpen} content="Login" 
                onRequestClose={this.closeModalHandler}  style={customStyles}>
                <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                     <Tab label="Login" /> 
                     <Tab label="Register"/>
                    
                </Tabs>
                {this.state.value === 0 && 
                <TabContainer>
                   <FormControl required>
                       <InputLabel htmlFor="username">UserName</InputLabel>
                        <Input id="username" type="text"  username={this.state.username} onChange={this.usernameChangeHandler}/>
                        <FormHelpertext className={this.state.usernameRequired}><span className="red">required</span>
                        </FormHelpertext>
                    </FormControl><br/><br/>
                    <FormControl required>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" type="password"  password={this.state.password} onChange={this.passwordChangeHandler}/>
                        <FormHelpertext className={this.state.passwordRequired}><span className="red">required</span>
                        </FormHelpertext>
                   </FormControl><br/><br/>
                   <Button variant="contained" color="primary" onClick={this.loginClickHandler}>
                    LOGIN
                    </Button>
                </TabContainer>  
                } 

                      {this.state.value === 1 && 
                <TabContainer>
                   <FormControl required>
                       <InputLabel htmlFor="firstname">First Name</InputLabel>
                        <Input id="firstname" type="text"  firstname={this.state.firstname} onChange={this.firstnameChangeHandler}/>
                        <FormHelpertext className={this.state.firstnameRequired}><span className="red">required</span>
                        </FormHelpertext>
                    </FormControl><br/><br/>
                    <FormControl required>
                       <InputLabel htmlFor="lastname">Last Name</InputLabel>
                        <Input id="lastname" type="text"  firstname={this.state.lastname} onChange={this.lastnameChangeHandler}/>
                        <FormHelpertext className={this.state.lastnameRequired}><span className="red">required</span>
                        </FormHelpertext>
                    </FormControl><br/><br/>
                    <FormControl required>
                       <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" type="text"  email={this.state.email} onChange={this.emailChangeHandler}/>
                        <FormHelpertext className={this.state.emailRequired}><span className="red">required</span>
                        </FormHelpertext>
                    </FormControl><br/><br/>
                    <FormControl required>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" type="password"  password={this.state.password} onChange={this.passwordChangeHandler}/>
                        <FormHelpertext className={this.state.passwordRequired}><span className="red">required</span>
                        </FormHelpertext>
                   </FormControl><br/><br/>
                   <FormControl required>
                       <InputLabel htmlFor="contactno">Contact No.</InputLabel>
                        <Input id="contactno" type="text"  email={this.state.contactno} onChange={this.contactnoChangeHandler}/>
                        <FormHelpertext className={this.state.contactnoRequired}><span className="red">required</span>
                        </FormHelpertext>
                    </FormControl><br/><br/>
                   <Button variant="contained" color="primary" onClick={this.registerClickHandler}>
                    REGISTER
                    </Button>
                </TabContainer>  
                }  
                </Modal>
   

         </div>

        )
    }
}

export default Header;