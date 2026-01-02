import React, { useState } from 'react';

interface CreateTokenFormProps {
  onTokenCreated: (token: Token) => void;
}

interface Token {
  address: string;
  name: string;
  symbol: string;
  supply: string;
}

const CreateTokenForm: React.FC<CreateTokenFormProps> = ({ onTokenCreated }) => {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [supply, setSupply] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !symbol || !supply) {
      alert('Please fill all fields');
      return;
    }

    setLoading(true);

    try {
      // TODO: Call smart contract to create token
      // const result = await createToken(name, symbol, supply);

      // Dummy response for now
      const newToken: Token = {
        address: '0x' + Math.random().toString(16).slice(2, 42),
        name,
        symbol,
        supply
      };

      onTokenCreated(newToken);

      // Reset form
      setName('');
      setSymbol('');
      setSupply('');

      alert('Token created successfully!');
    } catch (error) {
      console.error('Error creating token:', error);
      alert('Failed to create token');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='text-black'>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Create New Token
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Token Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., My Awesome Token"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
            disabled={loading}
          />
          <p className="text-xs text-gray-500 mt-1">
            The full name of your token
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Token Symbol
          </label>
          <input
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value.toUpperCase())}
            placeholder="e.g., MAT"
            maxLength={10}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
            disabled={loading}
          />
          <p className="text-xs text-gray-500 mt-1">
            3-5 characters (e.g., BTC, ETH)
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Initial Supply
          </label>
          <input
            type="number"
            value={supply}
            onChange={(e) => setSupply(e.target.value)}
            placeholder="e.g., 1000000"
            min="1"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
            disabled={loading}
          />
          <p className="text-xs text-gray-500 mt-1">
            Number of tokens to create
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-linear-to-r from-purple-600 to-purple-900 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Creating...
            </span>
          ) : (
            '✨ Create Token'
          )}
        </button>
      </form>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>ℹ️ Note:</strong> Creating a token requires gas fees. You will own the token and receive the initial supply.
        </p>
      </div>
    </div>
  );
};

export default CreateTokenForm;