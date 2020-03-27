import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import Home from '../../screens/home/Home';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './ConfirmShow.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Alert } from '@material-ui/lab';

class ConfirmShow extends Component{
    constructor(){
        super();
        this.state = {
            location : "",
            language : "",
            showTime : "",
            showDate : "",
            tickets : 0,
            showConfirmAlert : "dispNone"
    
        }
    }
    backToHomeHandler = () => {
        ReactDOM.render(<Home/>,document.getElementById('root'))
    }
    confirmBookingHandler = () =>{
       this.setState({showConfirmAlert : "dispBlock"}); 
    }
    render(){
        return(
            <div>
                <Header/>
              <div className="back">
              <div className={this.state.showConfirmAlert}>
                        <Alert  severity="success" onClose={() => {ReactDOM.render(<Home/>,document.getElementById('root'))}} variant="filled"> 
                                Booking Confirmed!
                            </Alert>
                    </div>
                <Typography onClick={this.backToHomeHandler}>
                    &#60; Back to Movie Details
                 </Typography>
                 <Card className="cardStyle">
                   <CardContent>
    
                    <Typography variant="headline" component="h2">
                     SUMMARY
                    </Typography>   <br/>
                    <div>
                    <Typography><span className="bold">Location: </span><span>{this.props.location}</span></Typography>
                    </div>
                    <div>
                    <Typography><span className="bold">Language: </span>{this.props.language}</Typography>
                    </div>
                    <div>
                    <Typography><span className="bold">Show Date: </span>{this.props.showDate}</Typography>
                    </div>
                    <div>
                    <Typography><span className="bold">Show Time: </span>{this.props.showTime}</Typography>
                    </div>
                    <div>
                    <Typography><span className="bold">Tickets: </span>{this.props.tickets}</Typography>
                    </div>
                    <div>
                    <Typography><span className="bold">Unit Price: </span>{this.props.unitPrice}</Typography>
                    </div><br/><br/>
                    <FormControl>
                        <div className="coupon">
                        <Input id="couponcode" type="text" placeholder="Coupon Code"></Input>
                        <Button variant="contained" onClick={this.couponCodeApplyHandler} color="primary" id="couponConfirmButton">
                           APPLY
                        </Button> 
                        </div>
                    </FormControl><br/><br/>

                <Typography >
                <span className="bolder">  Total Price : Rs.{this.props.totalPrice}</span>
                 </Typography> <br/><br/>
                 <Button variant="contained" onClick={this.confirmBookingHandler} color="primary" >
                           CONFIRM BOOKING
                </Button> 
                 </CardContent> 
                 </Card>   
             </div>


            </div>
        );
    }
}

export default ConfirmShow;