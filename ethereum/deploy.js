const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');


const provider = new HDWalletProvider(
'salute tissue drink laundry attend outdoor spray punch category dawn forest erode',
'httpls://rinkeby.infura.io/v3/23a3d87c9d1043eba20daaccb889d5b1'

);

const web3 = new Web3(provider);

const deploy = async () =>{
	const accounts = await web3.eth.getAccounts();

	console.log('Attempting to deploy from account', accounts[0]);

const result = await new web3.eth.Contract(
	JSON.parse(compiledFactory.interface)
	)
	.deploy({data : '0x'+compiledFactory.bytecode })
	.send({gas:'1000000',from:accounts[0]});

	
    console.log('Contract deployed to',result.options.address);
};

deploy();
