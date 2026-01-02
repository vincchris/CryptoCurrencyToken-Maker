interface Ethereum {
  isMetaMask?: boolean;
  request: (args: { method: string; params?: any[] }) => Promise<any>;
  on: (event: string, callback: (...args: any[]) => void) => void;
  removeListener: (event: string, callback: (...args: any[]) => void) => void;
  removeAllListeners?: (event: string) => void;
}

interface Window {
  ethereum?: Ethereum;
}

declare global {
  interface Window {
    ethereum?: Ethereum;
  }
}

export {};