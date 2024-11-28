# cryptoChain
![Node](https://img.shields.io/badge/Node-20.18.0-green)
![RedisServer](https://img.shields.io/badge/RedisServer-7.4.0-blue)
![Express](https://img.shields.io/badge/Express-4.21.1-orange)
![Redis](https://img.shields.io/badge/Redis-3.1.2-yellow)



This is a cryptochain clone project built using Node.js, Express, Redis, and Test-Driven Development (TDD) tests. It provides a basic implementation of a cryptocurrency blockchain network, allowing users to create and manage transactions, mine new blocks, and maintain the distributed ledger.

##  Introduction

This cryptochain clone project is designed to serve as a foundation for understanding and experimenting with cryptocurrency blockchain technology. It aims to provide a simple and easy-to-use platform for developers to explore the core concepts of blockchain, such as block creation, transaction management, and consensus mechanisms.

The project utilizes Node.js and Express for the backend implementation. Additionally, it includes a comprehensive suite of TDD tests to ensure the reliability and correctness of the codebase.

## Features

-   Create and manage cryptocurrency transactions
-   Mine new blocks and add them to the blockchain
-   Validate the integrity of the blockchain
-   Implement a basic consensus mechanism (Proof of Work)
-   Provide a RESTful API for interacting with the blockchain
-   Comprehensive TDD tests to ensure code quality and functionality

## Installation

1.  Clone the repository:
```bash
git clone https://github.com/nmhdzdeh/cryptoChain.git
```
2.  Install the dependencies:
```bash
cd cryptoChain
npm install
```
3.  Set up the Redis server:
    -   Install Redis on your system 
    -   Start the Redis server

## Usage

1.  Start the server:
```bash
npm run start
```
2.  Access the application in your browser or using a tool like Postman:
    -  The default server runs on  `http://localhost:3000`

## API Endpoints

The project provides the following API endpoints:

-   `POST /transact`: Create a new cryptocurrency transaction
-   `GET /blocks`: Retrieve the list of blocks in the blockchain
-   `GET /mine-transaction`: Mine a new block and add it to the blockchain
-   `GET /transaction-pool-map`: Get the transactions before mining
-   `GET /wallet-info`: Get the information of each wallet


## Testing


This project uses Test-Driven Development (TDD) to ensure the reliability and correctness of the codebase. The tests are written using a testing framework like Jest or Mocha.

To run the tests:
```bash
npm run test
```
The test suite covers various aspects of the project, including:

-   Transaction creation and validation
-   Block creation and mining
-   Blockchain validation and integrity checks

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue in the GitHub repository.

## License

This project is licensed under the [MIT License](./LICENSE).
