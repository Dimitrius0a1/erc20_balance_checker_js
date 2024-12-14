
const { ethers } = require("ethers");

// Настройка провайдера
const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID"); // Замените на ваш URL Infura

// Адрес контракта токена и ABI
const tokenAddress = "TOKEN_CONTRACT_ADDRESS"; // Замените на адрес токена ERC-20
const walletAddress = "WALLET_ADDRESS"; // Замените на адрес кошелька
const abi = [
  "function balanceOf(address account) view returns (uint256)",
  "function decimals() view returns (uint8)"
];

(async () => {
  try {
    // Создание экземпляра контракта
    const tokenContract = new ethers.Contract(tokenAddress, abi, provider);

    // Получение данных
    const balance = await tokenContract.balanceOf(walletAddress);
    const decimals = await tokenContract.decimals();
    const formattedBalance = ethers.formatUnits(balance, decimals);

    console.log(`Баланс токенов: ${formattedBalance}`);
  } catch (error) {
    console.error("Ошибка:", error);
  }
})();
