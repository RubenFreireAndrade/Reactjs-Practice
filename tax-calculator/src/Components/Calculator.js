import React from 'react'

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetInputField = this.resetInputField.bind(this);
    this.calculateTax = this.calculateTax.bind(this);
  };
  
  handleSubmit(e) {
    e.preventDefault();
  };

  handleChange(e) {
    this.setState({value: e.target.value});
    console.log(e.target.value);
  };

  resetInputField() {
    this.setState({value: ''});
  };

  calculateTax() {
    const personalAllowence = 12570;
    const basicRate = 50270;
    const higherRate = 150000;
    const additionalRate = Number.MAX_SAFE_INTEGER;
    if (isNaN(this.state.value)) {
      this.setState({
        value: '',
        total: ''
      });
    }

    if(this.state.value < personalAllowence){
      let yearlySalary = this.state.value;
      this.setState({
        yearly: '£' + yearlySalary.toLocaleString('en-UK'),
        payable: '£0',
        profit: '£' + yearlySalary.toLocaleString('en-UK'),
        value: ''
      });
    }

    if(this.state.value > personalAllowence && this.state.value < basicRate){
      let yearlySalary = this.state.value;
      let taxPayable = (Number(yearlySalary) * 0.2);
      let netProfit = yearlySalary - taxPayable;
      
      this.setState({
        yearly: '£' + yearlySalary.toLocaleString('en-UK'),
        payable: '£' + taxPayable.toLocaleString('en-UK'),
        profit: '£' + netProfit.toLocaleString('en-UK'),
        value: ''
      });
    }

    if(this.state.value > basicRate && this.state.value < higherRate){
      let yearlySalary = this.state.value;
      let taxPayable = (Number(yearlySalary) * 0.4);
      let netProfit = yearlySalary - taxPayable;
      
      this.setState({
        yearly: '£' + yearlySalary.toLocaleString('en-UK'),
        payable: '£' + taxPayable.toLocaleString('en-UK'),
        profit: '£' + netProfit.toLocaleString('en-UK'),
        value: ''
      });
    }

    if(this.state.value > higherRate && this.state.value < additionalRate){
      let yearlySalary = this.state.value;
      let taxPayable = (Number(yearlySalary) * 0.45);
      let netProfit = yearlySalary - taxPayable;
      
      this.setState({
        yearly: '£' + yearlySalary.toLocaleString('en-UK'),
        payable: '£' + taxPayable.toLocaleString('en-UK'),
        profit: '£' + netProfit.toLocaleString('en-UK'),
        value: ''
      });
    }
  };

  render() {
    return (
      <>
        <div className='calculator-container'>
          <form className='input-container' onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='Your Yearly Salary'></input>
            <button onClick={this.calculateTax}>Calculate</button>
            <button onClick={this.resetInputField}>Clear Field</button>
          </form>
    
          <div className='calculation-container'>
            <div>
              <label>You Entered:</label>
              <h2 id='payable-tax'>{this.state.yearly}</h2>
              <label>Tax Payable:</label>
              <h2 id='payable-tax'>{this.state.payable}</h2>
              <label>Profit:</label>
              <h2 id='after-tax'>{this.state.profit}</h2>
              {/* <label>Contributions:</label> */}
              {/* <h3 id='contributions'></h3> */}
            </div>
          </div>
        </div>
      </>
    )
  };
};

export default Calculator;