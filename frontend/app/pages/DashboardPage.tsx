import React, { useState } from "react";
import CreateTokenForm from '../components/CreateTokenForm'
import TokenList from "../components/TokenList";

interface DashboardPageProps {
  account: string;
  onDisconnect: () => void;
}

interface Token {
  address: string;
  name: string;
  symbol: string;
  supply: string;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ account, onDisconnect }) => {
  const [tokens, setTokens] = useState<Token[]>([])

  const handleTokenCreated = (newToken: Token) => {
    setTokens([...tokens, newToken])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-linear-to-r from-purple-600 to-purple-900 text-white p-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">🪙 Token Dashboard</h1>
          <div className="flex gap-4 items-center">
            <span className="bg-white/20 backdrop:blur-lg px-4 py-2 rounded-full font-mono">
              {account.slice(0, 6)}...{account.slice(-4)}
            </span>
            <button
            onClick={onDisconnect}
            className="bg-white/20 border border-white px-6 py-2 rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 font-medium"
          >
            Disconnect
          </button>
          </div>
        </div>
      </div>

    <div className="max-w-7xl mx-auto p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <CreateTokenForm onTokenCreated={handleTokenCreated} />
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <TokenList tokens={tokens} account={account} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default DashboardPage