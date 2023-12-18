# Currency Converter API

This is a simple API for currency conversion, allowing users to convert an amount from one currency to another.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Endpoint](#endpoint)
  - [Parameters](#parameters)
  - [Example](#example)
- [Testing](#testing)

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) @16.20.2 installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Verna0214/currency-converter-api.git
   ```
2. Change into the project directory:
    ```bash
    cd currency-converter-api
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

### Endpoint
The API has a single endpoint:
- `GET /`: Convert an amount from one currency to another.

### Parameters
- `source`: The source currency code.
- `target`: The target currency code.
- `amount`: The amount to convert.

### Example
- To convert 100 USD to JPY:
  ```bash
  curl "http://localhost:3000/?source=USD&target=JPY&amount=$100"
  ```

- Response:
  ```bash
  {
    "msg": "success",
    "amount": "$11,180.1"
  }
  ```

## Testing
To run tests, use the following command:
```bash
npm run test
```