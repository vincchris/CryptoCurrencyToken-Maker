"use client"

import { useState } from "react"
import HomePage from "../pages/HomePage"
import DashboardPage from "../pages/DashboardPage"

const Page = () => {
  const [account, setAccount] = useState<string | null>(null);

  const handleConnect = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask!');
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      setAccount(accounts[0]);
    } catch (error) {
      console.error('Error connecting wallet:', error);
      alert('Failed to connect wallet');
    }
  };

  const handleDisconnect = () => {
    setAccount(null);
  };

  return (
    <>
      {!account ? (
        <HomePage onConnect={handleConnect} account={account} />
      ) : (
        <DashboardPage account={account} onDisconnect={handleDisconnect} />
      )}
    </>
  )
}

export default Page;