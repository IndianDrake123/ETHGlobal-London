import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
const contractABI = [/* ABI here */];
const contractAddress = '/* Contract Address here */';

const contract = new web3.eth.Contract(contractABI, contractAddress);

export const signExperience = async (employerWalletAddress, employeeWalletAddress, experienceDetails) => {
    // Function to call smart contract method for signing experience
    const data = await contract.methods.signExperience(employeeWalletAddress, experienceDetails).send({ from: employerWalletAddress });
    return data;
};

export const uploadResume = async (employeeWalletAddress, resumeHash) => {
    // Function to call smart contract method for uploading resume
    const data = await contract.methods.uploadResume(resumeHash).send({ from: employeeWalletAddress });
    return data;
};
