# JurStatus smart contract repo

This repo contains code for the __JurStatus__ contract.

## How to run

Make sure you have Nodejs installed in your machine.

_1_ Install `truffle` and `ganache-cli` globally in your machine.

```sh
yarn add global truffle
npm i -g truffle
```

```sh
yarn add global ganache-cli
npm i -g ganache-cli
```

__2__ Pull or clone the repo.

__3__ Install dependencies.

```sh
yarn install
```

or

```sh
npm i
```

__4__ Cd into the repo.

```sh
cd sm-contract
```

__5__ Run `truffle develop`. This will spawn a `truffle develop` terminal.

```sh
truffle(develop)>
```

Here, run `compile` to compile the __JurStatus__ contract. 

```sh
truffle(develop)> compile
```

Next, run `migrate` to run the contract migrations.

```sh
truffle(develop)> migrate
```

## Run tests

In the `truffle develop` terminal, run `test`:

```sh
truffle(develop)> test
```
