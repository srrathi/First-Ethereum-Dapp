import React, { useEffect, useState } from 'react'
import './App.css';
import Electionabi from './contracts/Election.json'
import Web3 from 'web3';
import Navbar from './components/Navbar';
import Body from './Body';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    loadWeb3();
    LoadBlockchaindata();
  }, []);


  const [currentAccount, setCurrentAccount] = useState("");
  const [loader, setLoader] = useState(true);
  const [electionSm, setElectionSm] = useState();
  const [Candidate1, setCandidate1] = useState();
  const [Candidate2, setCandidate2] = useState();

  const voteCandidate = async (candidateid) => {
    setLoader(true);
    // console.log(electionSm);
    await electionSm.methods.Vote(candidateid).send({from: currentAccount}).on('transactionhash',()=>{
      console.log("Successfully Ran");
    });
    setLoader(false);
  }



  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
      window.alert("Non Ethreum Browser detected. You should consider trying Metamsk!");
    }
  };

  const LoadBlockchaindata = async () => {
    setLoader(true);
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setCurrentAccount(account);
    const networkId = await web3.eth.net.getId();
    const networkData = Electionabi.networks[networkId];

    if (networkData) {
      const election = new web3.eth.Contract(Electionabi.abi, networkData.address);
      const candidate1 = await election.methods.candidates(1).call();
      const candidate2 = await election.methods.candidates(2).call();
      setCandidate1(candidate1);
      setCandidate2(candidate2);

      // console.log(candidate1);
      // console.log(candidate2);
      setElectionSm(election);
      // console.log(election);
      setLoader(false);
    }
    else {
      window.alert("The smart contract is not deployed to current network")
    }
  }


  if (loader) {
    return <div><h2>Loading...</h2></div>
  }

  return (
    <div className="App">
      <Navbar account={currentAccount} />
      <Body Candidate1={Candidate1} Candidate2={Candidate2} voteCandidate={voteCandidate} account={currentAccount} />
      <Footer />
    </div>
  );
}

export default App;
