# erc20-deployer

ERC20 tokens contract deployer for the following EVM-compatible chains:
- Ethereum
- BNB Smart Chain
- Polygon

## How to deploy

1. Install dependencies
```
npm install
```

2. Update `./contracts/Token.sol` constructor. First parameter is `token description` while second parameter is `token symbol`, e.g.
```js
contract Token is ERC20, ERC20Burnable {
    constructor() ERC20("USDT DEMO", "USDT") {
        _mint(msg.sender, 1000000000e18);
    }
}
```

3. Enter deployer mnemonic in `.env`, e.g.
```toml
MNEMONIC=this is a sample mnemonic only which it really is
```

4. Run deploy command, refer to `package.json` for list of commands.
```
yarn deploy-testnet
```

*NOTE: Make sure you have enough balance to deploy contracts"*