import Web3 from 'web3';

let web3;

if (typeof window !=='undefined' && typeof window.web3 !=='undefined') {
	// We are in browser and metamask is running.
	web3 = new Web3(window.web3.currentProvider);
} else {
	// We are in server  OR the user is not running metamask
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/jVETSZwQm7wI0uH7adqt'
	);
	web3 = new Web3(provider);
}

export default web3;
