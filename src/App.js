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
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

import classes from "./App.module.css"

export default class App extends Component {

  state = {
    invoice: {
      items: [],
      total: 0.0,
      date: new Date(),
      customerName:"",
      address:"",
      aadhar:"",
      pan:""
    },
    item:{
      description:"",
      unit:"",
      quantity:0,
      rate:0.0,
      price:0.0,
    },
    units: ["Mts", "Pc"],
    //particulars: ["Admission Fee","Annual Fee","Tution Fee","Library Fee", "Games Fee", "Computer Fee", "Others Fee", "Exam Fee", "Transport Fee", "Late Fee"],
    
  };

  addItem = () => {
    let invoice = {...this.state.invoice};
    let item = {...this.state.item};
    item.price = item.rate * item.quantity;
    invoice.items.push({...item});
    item.description = "";
    item.price = 0;
    item.quantity = 0;
    item.rate = 0;
    this.setState({invoice, item});
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
        title = "Tax Invoice" 
        titleTypographyProps = {{variant: "h5"}}
        >
      </CardHeader>
      <CardContent>
        <Card className={classes.container} 
            id="toBePrinted" ref={el => (this.componentRef = el)}>
          <CardContent>
            <Grid container direction="row" justify="flex-start" spacing={1} alignItems="center">
              <Grid item xs={12}>
                <Typography style={{textAlign:"center", fontSize:"10px"}}>TAX INVOICE</Typography>
                <Typography style={{textAlign:"center", fontSize:"24px"}}>LAXMI VASTRALAYA</Typography>
                <Typography style={{textAlign:"center"}}>Chowk Kasimabad, Ghazipur</Typography>
                <Typography style={{textAlign:"center"}}>GSTIN: 09APYPG4485J1Z0</Typography>
              </Grid>
              <Grid item xs={9}> </Grid>
              <Grid item xs={3}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
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
              <Grid item xs={2}>
                <Typography>Name</Typography>
              </Grid>
              <Grid item xs={10}>
                <TextField className="width100percent" 
                  value={this.state.invoice.customerName}
                  onChange={e => {
                    let invoice = {...this.state.invoice};
                    invoice.customerName = e.target.value;
                    this.setState({invoice});
                  } }
                  />
              </Grid>
              <Grid item xs={2}>
                <Typography>Address</Typography>
              </Grid>
              <Grid item xs={10}>
                <TextField className="width100percent" 
                  value={this.state.invoice.address}
                  onChange={e => {
                    let invoice = {...this.state.invoice};
                    invoice.address = e.target.value;
                    this.setState({invoice});
                  } }
                  />
              </Grid>
              <Grid item xs={2}>
                <Typography>Aadhan No</Typography>
              </Grid>
              <Grid item xs={4}>
                <TextField className="width100percent" 
                  value={this.state.invoice.aadhar}
                  onChange={e => {
                    let invoice = {...this.state.invoice};
                    invoice.aadhar = e.target.value;
                    this.setState({invoice});
                  } }
                  />
              </Grid>
              <Grid item xs={2}>
                <Typography>PAN No</Typography>
              </Grid>
              <Grid item xs={4}>
                <TextField className="width100percent" 
                  value={this.state.invoice.pan}
                  onChange={e => {
                    let invoice = {...this.state.invoice};
                    invoice.pan = e.target.value;
                    this.setState({invoice});
                  } }
                  />
              </Grid>

              {/* row */}
              <Grid item xs={5}>
                <TextField className="width100percent" label="Item Description" 
                  value={this.state.item.description}
                  onChange={e => {
                    let item = {...this.state.item};
                    item.description = e.target.value;
                    this.setState({item});
                    }}/>
              </Grid>   
              <Grid item xs={2}>
                <FormControl className={ "width100percent " }>
                  <InputLabel id="language-label">Unit</InputLabel>
                  <Select
                    value={this.state.item.unit}
                    onChange={e => {
                      let item = {...this.state.item};
                      item.unit = e.target.value;
                      this.setState({item});
                    }}
                  >
                    {this.state.units.map(name => ( <MenuItem key={name.id} value={name}> {name} </MenuItem> ))}
                  </Select>
                </FormControl>
              </Grid> 
              <Grid item xs={2}>
                <TextField className="width100percent" label="Quantity" 
                  value={this.state.item.quantity}
                  onChange={e => {
                    let item = {...this.state.item};
                    item.quantity = e.target.value;
                    this.setState({item});
                    }}/>
              </Grid>
              <Grid item xs={2}>
                <TextField className="width100percent" label="Rate" 
                  value={this.state.item.rate}
                  onChange={e => {let item = {...this.state.item};
                  item.rate = e.target.value;
                  this.setState({item});
                  }}/>
              </Grid>
              <Grid item xs={1}>
                <Button className="width100percent" variant="contained" onClick={this.addItem} color="primary">Add</Button>
              </Grid>
              {/* row */}
              <Grid item xs={12}>
                <TableContainer>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Sr No</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="center">SHN Code</TableCell>
                        <TableCell align="center">QTY</TableCell>
                        <TableCell align="center">Rate</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.invoice.items.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell align="center">{index + 1}</TableCell>
                          <TableCell align="left">{item.description}</TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center">{item.quantity + " " + item.unit}</TableCell>
                          <TableCell align="center">{item.rate}</TableCell>
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
