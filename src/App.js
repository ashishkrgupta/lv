import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import PrintIcon from '@material-ui/icons/Print';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ReactToPrint from "react-to-print";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider, 
  KeyboardDatePicker,
  DatePicker
} from '@material-ui/pickers';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

import classes from "./App.module.css"

export default class App extends Component {

  state = {
    invoice: {
      items: [],
      total: 500.0,
      date: new Date(),
    },
    particulars: ["Admission Fee","Annual Fee","Tution Fee","Library Fee", "Games Fee", "Computer Fee", "Others Fee", "Exam Fee", "Transport Fee", "Late Fee"],
    
  };

  addItem = () => {
    let invoice = {...this.state.invoice};
    invoice.items.push({description:this.state.currentParticular, rate:500.00, price:this.state.currentPrice});
    this.setState({invoice, currentParticular:"", currentPrice:0});
  }


  render() {
    let total = 0;
    this.state.invoice.items.forEach(i => { total += i.price});
    return (<Card >
      <CardHeader
        style={{textAlign:"center", height:"25px"}}
        action={
          <ReactToPrint
           trigger = { () => <IconButton>
            <PrintIcon />
          </IconButton>}
          content={() => this.componentRef}
          />
        }
        title = "Fee Receipt" 
        titleTypographyProps = {{variant: "h5"}}
        >
      </CardHeader>
      <CardContent>
        <Card className={classes.container} 
            id="toBePrinted" ref={el => (this.componentRef = el)}>
          <CardContent>
            <Grid container direction="row" justify="flex-start" spacing={1} alignItems="center">
              <Grid item xs={12}>
                <Typography style={{textAlign:"center", fontSize:"24px"}}>GURUKUL SHIKSHAN SANSTHAN</Typography>
                <Typography style={{textAlign:"center"}}>(Robertsganj, Mirzapur, UP. ESTD: 2020)</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>Student Name</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>Ashish</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>Class</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>Class 2</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>Payment Date</Typography>
              </Grid>
              <Grid item xs={8}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    className="width100percent"
                    disableFuture
                    autoOk
                    variant="inline"
                    format="dd/MM/yyyy"
                    views={["year", "month", "date"]}
                    value={this.state.invoice.date }
                    onChange={date => {
                      let invoice = {...this.state.invoice};
                      invoice.date = date;
                      this.setState({invoice});
                    }}
                  />
                  </MuiPickersUtilsProvider>
              </Grid>
              {/* row */}
              <Grid item xs={4}>
                <Autocomplete className="width100percent"
                  options={this.state.particulars}
                  style={{ width: "100%" }}
                  inputValue={this.state.currentParticular}
                  onChange={(e, val) => {this.setState({currentParticular: val});}}
                  renderInput={params => <TextField style={{ width: "100%" }} {...params} label="Particular" />}
                />
              </Grid>
              <Grid item xs={2}>
                { this.state.currentParticular === "Tution Fee" && <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    //style={{width:"50%"}}
                    label="From"
                    autoOk
                    variant="inline"
                    format="MM/yyyy"
                    views={["month"]}
                    value={this.state.from }
                    onChange={date => {
                      this.setState({from: date});
                    }}
                  />
                </MuiPickersUtilsProvider>}
              </Grid>
              <Grid item xs={2}>
                { this.state.currentParticular === "Tution Fee" && <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    //style={{width:"50%"}}
                    label="To"
                    autoOk
                    variant="inline"
                    format="MM/yyyy"
                    views={["month"]}
                    value={this.state.to }
                    onChange={date => {
                      this.setState({to: date});
                    }}
                  />
                </MuiPickersUtilsProvider>}
              </Grid>
                
                  
              <Grid item xs={2}>
                <TextField className="width100percent" label="Price" 
                  onChange={e => {this.setState({currentPrice: parseFloat(e.target.value)})}}/>
              </Grid>
              <Grid item xs={2}>
                <Button className="width100percent" variant="contained" onClick={this.addItem} color="primary">Add</Button>
              </Grid>
              {/* row */}
              <Grid item xs={12}>
                <TableContainer>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Sr No</TableCell>
                        <TableCell align="left">Particulars</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.invoice.items.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell align="center">{index + 1}</TableCell>
                          <TableCell align="left">{item.description}</TableCell>
                          <TableCell align="center">{item.price}</TableCell>
                          <TableCell align="center"><DeleteIcon onClick={ () =>
                            {
                              let invoice = {...this.state.invoice};
                              invoice.items.splice(index, 1);
                              this.setState({invoice})
                            }
                          }/></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item xs={8}> </Grid>
              <Grid item xs={2}> <Typography>Total</Typography> </Grid>
              <Grid item xs={2}> {
                total
              } </Grid>
            </Grid>
          </CardContent>
        </Card>

        
      </CardContent>
    </Card>);
  }

}
