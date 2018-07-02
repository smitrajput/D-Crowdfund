import React,{Component} from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid,Button,Header,Icon } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';

class CampaignShow extends Component{
	static async getInitialProps(props){
		const campaign = Campaign(props.query.address);
		
		const summary = await campaign.methods.getSummary().call();
		
		return {
			address: props.query.address, 
			minimumContribution: summary[0],
			balance: summary[1],
			requestsCount: summary[2],
			approversCount: summary[3],
			manager: summary[4]
		};
	}

	renderCards(){
		const {
			balance,
			manager,
			minimumContribution,
			requestsCount,
			approversCount
		} = this.props;
		
		return(
			<Card.Group>
				<Card>
					<Card.Content>
						<Card.Header style={{overflowWrap:'break-word', color:'teal'}}> 
							<Icon fitted name='id badge outline' size='big' /> {manager} 
						</Card.Header>
						<Card.Meta>Address of Manager</Card.Meta>
						<Card.Description>The manager created this campaign and can create requests to withdraw money.</Card.Description>
					</Card.Content>
				</Card>
				
				<Card>
					<Card.Content>
						<Card.Header  style={{overflowWrap:'break-word', color:'teal'}}> <Icon fitted name='bitcoin' size='big' /> { minimumContribution } </Card.Header>
						<Card.Meta>Minimum Contribution (wei)</Card.Meta>
						<Card.Description>You must contribute atleast to become an approver.</Card.Description>
					</Card.Content>
				</Card>
				
				<Card>
					<Card.Content>
						<Card.Header  style={{overflowWrap:'break-word', color:'teal'}}> <Icon fitted name='send outline' size='big' /> { requestsCount } </Card.Header>
						<Card.Meta>Number of Requests</Card.Meta>
						<Card.Description>A request tries to withdraw money from the contract. Requests must be approvers by approvers.</Card.Description>
					</Card.Content>
				</Card>
				
				<Card>
					<Card.Content>
						<Card.Header  style={{overflowWrap:'break-word', color:'teal'}}> <Icon fitted name='spy' size='big' /> { approversCount } </Card.Header>
						<Card.Meta>Numbers of approvers</Card.Meta>
						<Card.Description>Number of people who have already donated to this campaign.</Card.Description>
					</Card.Content>
				</Card>
				
				<Card>
					<Card.Content>
						<Card.Header  style={{overflowWrap:'break-word', color:'teal'}}> <Icon fitted name='bitcoin' size='big' /> { web3.utils.fromWei(balance,'ether') } </Card.Header>
						<Card.Meta>Campaign Balance (ether)</Card.Meta>
						<Card.Description>The balance is how much money this campaign has left to spend.</Card.Description>
					</Card.Content>
				</Card>
			</Card.Group>
		);
	}
	
	render() {
		return(
			<Layout>
				<div style={{margin:50}}>
						<Header as='h2' icon textAlign='center' color='teal'>
    							  	<Icon name='users'  circular />
      								<Header.Content>
        							 Campaigns Details...
      								</Header.Content>
  				 	 	</Header>
  				 	 </div>
				<Grid>
					<Grid.Row>
					<Grid.Column  width={10}>
						{this.renderCards()}
					</Grid.Column>
				  	
					<Grid.Column  width={6}>
						<ContributeForm address= { this.props.address } />
					</Grid.Column>
					</Grid.Row>
					
					<Grid.Row>
					<Grid.Column>
						<Link route={`/campaigns/${this.props.address}/requests`}>
							<a>	
								<Button animated color='teal'>
      									<Button.Content visible>View Request</Button.Content>
      										<Button.Content hidden>
      								        	<Icon name='right arrow' />
      										</Button.Content>
    									</Button>
							</a>
						</Link>
					</Grid.Column>
					</Grid.Row>
				</Grid>
				
			</Layout>
		);
	}
}

export default CampaignShow;