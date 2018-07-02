import React, {Component} from 'react';
import { Card, Button ,Icon,Header} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import {Link} from '../routes';

class CampaignIndex extends Component {
	static async getInitialProps(){
		const campaigns = await factory.methods.getDeployedCampaigns().call();
	
		return { campaigns };
	}
	
	renderCampaigns() {
		const items = this.props.campaigns.map(address => {
			return {
				header:address,
				description:(
					<Link route={`/campaigns/${address}`}>
					<a><p style={{color:'teal'}}>View Campaign <Icon name='right arrow' /></p></a>
					</Link>
				),
				fluid: true
			};
		});
		
		return <Card.Group items={items} />;
	}
	
	render(){
		return (
			<Layout>
				<div>
					<div>
					
					<img src='../static/crowdfunding.png' style={{width:400, height:350}} />
						<section style={{maxWidth:550, color:'grey',marginLeft:500,marginTop:-250}}>
							<h1>Raising funds for your project from the public without an intermediary.</h1>
						</section>	
						
						<h2 style={{marginTop:200}}>Start funding your ideas</h2>
							
						<section style={{ color:'teal', marginTop: 10 }}>
							<h4>Sometimes a good idea takes a lot of funds and collective effort. You could ask for donations, but donors prefer to give to projects they are more certain will get traction and proper funding. This is an example where a crowdfunding would be ideal: you set up a goal and a deadline for reaching it. If you miss your goal, the donations are returned, therefore reducing the risk for donors. Since the code is open and auditable, there is no need for a centralized, trusted platform and therefore the only fees everyone will pay are just the gas fees.</h4>
						</section>
					</div>
					<div style={{margin:100}}>
						<Header as='h2' icon textAlign='center' color='teal'>
    							  	<Icon name='users'  circular />
      								<Header.Content>
        							Open Campaigns!!!
      								</Header.Content>
  				 	 	</Header>
  				 	 </div>
					<Link route="/campaigns/new">
						<a>
							<Button animated='fade' floated="right" basic color='teal'>
								 <Button.Content visible><p style={{color:'teal'}}>Create Campaigns</p></Button.Content>
    								  <Button.Content hidden>
        							  <Icon name='add circle' color='teal' />
        							  </Button.Content>
							</Button>
						</a>
					</Link>
					{ this.renderCampaigns() }
			</div>
		</Layout>
		);
	}
}

export default CampaignIndex;