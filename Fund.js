const { ethers } = require("hardhat");

async function CreateNewFunding(wallet_address , target_amount)
{
    const Contract = await ethers.getContractFactory("Funding");
    const contract = await Contract.deploy(wallet_address , target_amount);
    await contract.deployed();
    return contract.address;
}

async function GetFundingContract(contract_address)
{
    const Cntrct = require("./artifacts/contracts/Test.sol/Funding.json");
    const signer = new ethers.providers.JsonRpcProvider("https://polygon-rpc.com").getSigner();
    let cntr = new ethers.Contract(contract_address, Cntrct.abi, signer);
    return cntr;
}

async function Donate(contract_address , amount  , wallet_address)
{
    //const wallet = new ethers.Wallet(wallet_address, ethers.provider);
    const donation_amount = ethers.utils.parseUnits(amount.toString(),'ether');
    const contract = await GetFundingContract(contract_address);
    const tx = contract.connect(wallet_address).donate({value: donation_amount});
    return tx;
}

exports.CreateNewFunding = CreateNewFunding;
exports.GetFundingContract = GetFundingContract;
exports.Donate = Donate;