import React, {Component} from 'react';
import Layout from '../../../components/Layout';
import {Button,Table,Icon,Message} from 'semantic-ui-react';
import { Link } from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';

class RequestIndex extends Component{
	static async getInitialProps(props){
		const {address} =props.query;
		const campaign = Campaign(address);
		const requestCount = await campaign.methods.getRequestsCount().call();
		const approversCount = await campaign.methods.approversCount().call();
		
		const requests = await Promise.all(
			Array(parseInt(requestCount))
				.fill()
				.map((element, index) => {
				return campaign.methods.requests(index).call();
			})
		);
		
		return {address,requests,requestCount,approversCount};
	}
	
	renderRow(){
		return this.props.requests.map((request, index) => {
			return (
				<RequestRow
					key={index}
					id={index}
					request = {request}
					address={this.props.address}
					approversCount={this.props.approversCount}
			 	 />
			);
		});
	}
	
	render(){
	
	
		const {Header,Row, HeaderCell,Body} = Table;
		
		return(
			<Layout>
				<div style={{marginTop:50, textAlign:'center',color:'teal'}}>
				<Header as='h1' icon>
    							  	<Icon name='users' circular />
    							  	Requests...
  				 	 	</Header>
  				 	 	
  				 </div>
				<Link route = {`/campaigns/${this.props.address}/requests/new`}>
					<a>
						<Button animated floated='right' color='teal' style={{marginBottom:10}}>
      									<Button.Content visible>Add Request</Button.Content>
      										<Button.Content hidden>
      								        	<Icon name='add circle' />
      										</Button.Content>
    									</Button>
					</a>
				</Link>
				<Table>
					<Header>
						<Row>
							<HeaderCell style={{color:'teal'}}>ID</HeaderCell>
							<HeaderCell style={{color:'teal'}}>Description</HeaderCell>
							<HeaderCell style={{color:'teal'}}>Amount</HeaderCell>
							<HeaderCell style={{color:'teal'}}>Recipient</HeaderCell>
							<HeaderCell style={{color:'teal'}}>Approval Count</HeaderCell>
							<HeaderCell style={{color:'teal'}}>Approve</HeaderCell>
							<HeaderCell style={{color:'teal'}}>Finalize</HeaderCell>
						</Row>
					</Header>
					<Body>
						{this.renderRow()}
					</Body>
				</Table>
				<div><p style={{color:'teal'}}>Found {this.props.requestCount} requests.</p></div>
				<Message warning>
					<ul>
						<li>This Table is related to stuffs required for the project or startup programmes.</li>
						<li>Approve will be applicable by the contributors(paying the minimum amount to campaigns) only.</li>
						<li>Finalize means to send the money to the recipient as the sufficient amount of approvals has been received.</li>
 					</ul>
				</Message>
			</Layout> 
		);
	}
}

export default RequestIndex; 