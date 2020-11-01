import React, { Component } from 'react';
import FormComponent from './components/FormComponent'
import './App.css'

class App extends Component {

	state = {
		loading: true,
		vendor: null
	};

	async componentDidMount() {
		var result = await fetch('http://localhost:9000/api/v1/detail')
		var data = await result.json()
		this.setState({ loading: false, vendor: data })
		console.log(data);
	}

	render() {
          
		return (
			<div className="form">
				<FormComponent/>
				{
				this.state.loading ? <div>loading...</div> : <div><ul className="list">
					<li>Invoice uploaded is : {this.state.vendor.invoices_uploaded}</li>
					<li>Total amount is : {this.state.vendor.amount_total}</li>
					<li>Total vendors : {this.state.vendor.vendor_unique.length}</li>
				</ul></div>
			}</div>
		);
	}
}


export default App; 
