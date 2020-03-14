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
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

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
      pan:"",
      cgst:0,
      sgst:0,
      grandTotal:0,
    },
    item:{
      description:"",
      unit:"Pc",
      quantity:"",
      rate:"",
      price:"",
    },
    units: ["Mts", "Pc"],
    openAlert: false,
    alertMessage: "",
  };

  addItem = () => {
    let invoice = {...this.state.invoice};
    let item = {...this.state.item};
    let alertMessage = this.validateItem(item);
    if (alertMessage === null) {
      item.price = item.rate * item.quantity;
      invoice.items.push({...item});
      item.description = "";
      item.price = "";
      item.quantity = "";
      item.rate = "";
      let total = 0;
      this.state.invoice.items.forEach(i => { total += i.price});
      invoice.total = total;
      invoice.grandTotal = total + invoice.sgst + invoice.cgst;
      this.setState({invoice, item, openAlert: false});
    } else {
      this.setState({alertMessage, openAlert: true});
    }
    
  }

  validateItem = item => {
    if (item.description === "") {
      return "Please enter item description";
    }
    if (isNaN(item.rate) || item.rate <= 0) {
      return "Please enter valid Rate";
    }
    if (isNaN(item.quantity) || item.quantity <= 0) {
      return "Please enter valid Quantity";
    }
    if (item.unit === "Pc" && (item.quantity % 1) !== 0) {
      return "Quantity can not be in fraction for Pc.";
    }
    return null
  }

  render() {
    return (
    <div>
      <Collapse in={this.state.openAlert}>
        <Alert
          severity="error"
          action={
            <IconButton
              size="small"
              onClick={() => { this.setState({openAlert: false}); }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          { this.state.alertMessage }
        </Alert>
      </Collapse>
    <Card >
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
                <Typography style={{textAlign:"center"}}>Chowk Kasimabad, Ghazipur. <span style={{fontSize:"11px"}}>GSTIN: 09APYPG4485J1Z0</span></Typography>
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
                <Typography>Aadhar No</Typography>
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
                    {this.state.units.map(name => ( <MenuItem key={name} value={name}> {name} </MenuItem> ))}
                  </Select>
                </FormControl>
              </Grid> 
              <Grid item xs={2}>
                <TextField className="width100percent" label="QTY" 
                  value={this.state.item.quantity}
                  onChange={e => {
                    if(!isNaN(e.target.value)) {
                      let item = {...this.state.item};
                      item.quantity = e.target.value === "" ? "" : parseFloat(e.target.value);
                      this.setState({item});
                    }
                    }}/>
              </Grid>
              <Grid item xs={2}>
                <TextField className="width100percent" label="Rate" 
                  value={this.state.item.rate}
                  onChange={e => {
                    if(!isNaN(e.target.value)) {
                      let item = {...this.state.item};
                      item.rate = e.target.value === "" ? "" : parseFloat(e.target.value);
                      this.setState({item});
                    }
                  }}/>
              </Grid>
              <Grid item xs={1}>
                <Button className="width100percent" variant="contained" onClick={this.addItem} color="primary">Add</Button>
              </Grid>
              {/* row */}
              <Grid item xs={12}>
                <TableContainer>
                  <Table className={classes.table} size="small" aria-label="simple table" >
                    <TableHead>
                      <TableRow style={{borderTop: "solid"}}>
                        <TableCell align="center" style={{width:"10px"}}>Sr No</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="center" style={{width:"50px"}}>SHN Code</TableCell>
                        <TableCell align="center" style={{width:"50px"}}>QTY</TableCell>
                        <TableCell align="center" style={{width:"100px"}}>Rate</TableCell>
                        <TableCell align="center" style={{width:"100px"}}>Price</TableCell>
                        <TableCell align="center" style={{width:"20px"}}></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.invoice.items.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell align="center">{index + 1}</TableCell>
                          <TableCell align="left">{item.description}</TableCell>
                          <TableCell align="center" ></TableCell>
                          <TableCell align="center" >{item.quantity + " " + item.unit}</TableCell>
                          <TableCell align="center" >{item.rate}</TableCell>
                          <TableCell align="center" >{item.price}</TableCell>
                          <TableCell align="center" ><DeleteIcon onClick={ () =>
                            {
                              let invoice = {...this.state.invoice};
                              invoice.items.splice(index, 1);
                              this.setState({invoice})
                            }
                          }/></TableCell>
                        </TableRow>
                      ))}
                      <TableRow style={{borderTop: "solid"}}>
                        <TableCell rowSpan={4} colSpan={3}></TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell></TableCell>
                        <TableCell align="center">{ this.state.invoice.total }</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="right" >CGST</TableCell>
                        <TableCell align="center">2.5%</TableCell>
                        <TableCell align="center">{ this.state.invoice.cgst }</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="right" >SGST</TableCell>
                        <TableCell align="center">2.5%</TableCell>
                        <TableCell align="center">{ this.state.invoice.sgst }</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="right">Grand Total</TableCell>
                        <TableCell></TableCell>
                        <TableCell align="center">{ this.state.invoice.grandTotal }</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        
      </CardContent>
    </Card>
    </div>
    );
  }

}
