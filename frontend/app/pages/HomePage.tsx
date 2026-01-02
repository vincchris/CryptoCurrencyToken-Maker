import React from "react";

interface HomePageProps {
  onConnect: () => void;
  account: string | null;
}

const HomePage: React.FC<HomePageProps> = ({ onConnect, account }) => {
  return(
    <div className="min-h-screen bg-linear-to-br from-purple-600 to-purple-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="text-center text-white mb-16">
          <h1 className="text-6xl font-bold mb-4">
            Crypto Token Maker
          </h1>
          <p className="text-2xl mb-4 opacity-95">
            Create Your own cryptocurrency tokens in minutes
          </p>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            No coding required. Just connect your wallet and start creating ERC20 tokens on Ethereum blockchain
          </p>

          {!account ? (
            <button
              onClick={onConnect}
              className="bg-white text-purple-600 px-10 py-4 text-xl font-semibold rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Connect MetaMask Wallet
            </button>
          ) : (
            <div className="inline-block bg-white/20 backdrop-blur-lg px-8 py-4 rounded-full">
              <p className="mb-1">Connected</p>
              <p className="font-mono text-sm">
                {account.slice(0, 6)}...{account.slice(-4)}
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300 shadow-xl">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Fast & Easy
            </h3>
            <p className="text-gray-600">
              Create tokens in just a few clicks
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300 shadow-xl">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Secure
            </h3>
            <p className="text-gray-600">
              Smart Contracts audited and tested
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300 shadow-xl">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Your Token
            </h3>
            <p className="text-gray-600">
              Full Control and ownership
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage