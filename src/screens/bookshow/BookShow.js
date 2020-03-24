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
import Button from '@material-ui/core/Button';


class BookShow extends Component{

    constructor(){
        super();
        this.state = {
            location : "",
            language : "",
            showTime : "",
            showDate : "",
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
                 </FormControl>


                 <FormControl required className="formControl">
                     <InputLabel htmlFor="tickets">Tickets : {this.state.availableTickets}
                      </InputLabel> 
                      <Input id="tickets" value={this.state.tickets !==0 ? this.state.tickets : ""} onChange={this.ticketsChangeHandler}>                      </Input>
                 </FormControl><br/> <br/>
                 <Typography >
                   Unit Price : Rs.{this.state.unitPrice}
                 </Typography> <br/> 
                 <Typography >
                   Total Price : Rs.{this.state.unitPrice*this.state.tickets}
                 </Typography>  <br/>
                 <Button variant="contained" onClick={this.bookShowHandler} color="primary">
                     BOOK SHOW
                 </Button> 
      
            </Card>    
          </div>


              
        );
    }
}
export default BookShow;