import React from "react";

interface Token {
  address: string;
  name: string;
  symbol: string;
  supply: string;
}

interface TokenListProps {
  tokens: Token[]
  account: string;
}

const TokenList: React.FC<TokenListProps> = ({ tokens, account }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Your Tokens ({tokens.length})
      </h2>

      {tokens.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🪙</div>
          <p className="text-gray-500 text-lg mb-2">No tokens yet</p>
          <p className="text-gray-400 text-sm">
            Create your first token using the form
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {tokens.map((token, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {token.name}
                  </h3>
                  <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {token.symbol}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Total Supply</p>
                  <p className="text-lg font-bold text-gray-800">
                    {parseFloat(token.supply).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <p className="text-xs text-gray-500 mb-1">Contract Address</p>
                <p className="font-mono text-sm text-gray-700 break-all">
                  {token.address}
                </p>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium text-xs">
                  Transfer
                </button>
                <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm">
                  Mint
                </button>
                <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium text-sm">
                  Burn
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TokenList