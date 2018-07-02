import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(campaignFactory.interface),
	'0xb732937d951FadDc21944ea01d639AF71027E102'
);

export default instance;
