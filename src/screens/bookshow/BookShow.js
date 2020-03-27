import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './BookShow.css';
import Header from '../../common/header/Header';
import Home from '../../screens/home/Home';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
 import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select'; 
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import TextField from '@material-ui/core/TextField';
import FormHelpertext from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import ConfirmShow from './ConfirmShow';


class BookShow extends Component{

    constructor(){
        super();
        this.state = {
            location : "",
            language : "",
            showTime : "",
            showDate : "",
            locationRequired : "dispNone",
            languageRequired : "dispNone",
            showDateRequired : "dispNone",
            showTimeRequired : "dispNone",
            ticketsRequired : "dispNone",
            tickets : 0,
            availableTickets : 20,
            unitPrice : 50
        }
    }
    backToHomeHandler = () => {
        ReactDOM.render(<Home/>,document.getElementById('root'))
    }
    locationChangeHandler = (e) => {
        this.setState({location : e.target.value})
    }
    languageChangeHandler = (e) => {
        this.setState({language : e.target.value})
    }
    showDateChangeHandler = (e) => {
        this.setState({showDate : e.target.value})
    }
    showTimeChangeHandler = (e) => {
        this.setState({showTime : e.target.value})
    }
    ticketsChangeHandler = (e) => {
        this.setState({tickets : e.target.value})
    }

    bookShowHandler = () =>{
        this.state.location === "" ? 
        this.setState({ locationRequired: "dispBlock" }) : this.setState({ locationRequired: "dispNone" });
        this.state.language === "" ? 
        this.setState({ languageRequired: "dispBlock" }) : this.setState({ languageRequired: "dispNone" });
        this.state.showDate === "" ? 
        this.setState({ showDateRequired: "dispBlock" }) : this.setState({ showDateRequired: "dispNone" });
        this.state.showTime === "" ? 
        this.setState({ showTimeRequired: "dispBlock" }) : this.setState({ showTimeRequired: "dispNone" });
        this.state.tickets === 0 ? 
        this.setState({ ticketsRequired: "dispBlock" }) : this.setState({ ticketsRequired: "dispNone" });

        if(this.state.location !== "" && this.state.language !== "" && this.state.showDate !== ""
         && this.state.showTime !== "" &&  this.state.tickets !== 0  ){
            ReactDOM.render(<ConfirmShow location={this.state.location} language={this.state.language}
            showDate={this.state.showDate} showTime={this.state.showTime} tickets={this.state.tickets} unitPrice={this.state.unitPrice}
            totalPrice={this.state.tickets*this.state.unitPrice}/>,document.getElementById('root'))
         }
    }

    
    render(){
        return (
            <div>
              <Header/>
              <div className="back">
                <Typography onClick={this.backToHomeHandler}>
                    &#60; Back to Movie Details
                 </Typography>    
             </div>
            <Card className="cardStyle">
                <CardContent>
                <Typography variant="headline" component="h2">
                   BOOK SHOW
                 </Typography>   <br/>
                 </CardContent>  
                 <FormControl required className="formControl">
                     <InputLabel htmlFor="location">Choose Location
                      </InputLabel>   
                      <Select value={this.state.location} onChange={this.locationChangeHandler}>
                       {location.map(loc => (
                            <MenuItem key={"loc"+loc.id} value={loc.location}>
                                {loc.location}
                             </MenuItem>   
                       ))}
                      </Select>
                      <FormHelpertext className={this.state.locationRequired}><span className="red">Required</span>
                       </FormHelpertext>
                 </FormControl>
                 <FormControl required className="formControl">
                     <InputLabel htmlFor="language">Choose Language
                      </InputLabel>   
                      <Select value={this.state.language} onChange={this.languageChangeHandler}>
                       {language.map(lan => (
                            <MenuItem key={"lan"+lan.id} value={lan.language}>
                                {lan.language}
                             </MenuItem>   
                       ))}
                      </Select>
                      <FormHelpertext className={this.state.languageRequired}><span className="red">Required</span>
                       </FormHelpertext>
                 </FormControl>
                 <FormControl required className="formControl">
                     <InputLabel htmlFor="showDate">Show Date
                      </InputLabel>   
                      <Select value={this.state.showDate} onChange={this.showDateChangeHandler}>
                       {showDate.map(date => (
                            <MenuItem key={"date"+date.id} value={date.showDate}>
                                {date.showDate}
                             </MenuItem>   
                       ))}
                      </Select>
                      <FormHelpertext className={this.state.showDateRequired}><span className="red">Required</span>
                       </FormHelpertext>
                 </FormControl>
                 <FormControl required className="formControl">
                     <InputLabel htmlFor="showTime">Show Time
                      </InputLabel>   
                      <Select value={this.state.showTime} onChange={this.showTimeChangeHandler}>
                       {showTime.map(time => (
                            <MenuItem key={"time"+time.id} value={time.showTime}>
                                {time.showTime}
                             </MenuItem>   
                       ))}
                      </Select>
                      <FormHelpertext className={this.state.showTimeRequired}><span className="red">Required</span>
                       </FormHelpertext>
                 </FormControl>


                 <FormControl required className="formControl">
                     <InputLabel htmlFor="tickets">Tickets : {this.state.availableTickets}
                      </InputLabel> 
                      <Input id="tickets" value={this.state.tickets !==0 ? this.state.tickets : ""} onChange={this.ticketsChangeHandler}>                      </Input>
                      <FormHelpertext className={this.state.ticketsRequired}><span className="red">Required</span>
                       </FormHelpertext>
                 </FormControl><br/> <br/>
                 <Typography >
                   Unit Price : Rs.{this.state.unitPrice}
                 </Typography> <br/> 
                 <Typography >
                   Total Price : Rs.{this.state.unitPrice*this.state.tickets}
                 </Typography>  <br/>
                 <Button variant="contained" onClick={this.bookShowHandler} color="primary" >
                     BOOK SHOW
                 </Button> 
      
            </Card>    
          </div>


              
        );
    }
}
export default BookShow;