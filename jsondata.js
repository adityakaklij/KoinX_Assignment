// Test data from Normal tx.

const { ethers } = require("ethers")
const Web3 = require('web3');

let m = {
    status: '1',
    message: 'OK',
    result: [
      {
        blockNumber: '14609155',
        timeStamp: '1650284543',
        hash: '0x25f745fc71d9ddd0db561d06a023e6c654089861dc4625cdc81743afd3228982',
        nonce: '112207',
        blockHash: '0xa48498a87afc3714f3e6edce2fd3344ddbdb85e77eaf85bed3afa60f879616e1',
        transactionIndex: '220',
        from: '0xf598b81ef8c7b52a7f2a89253436e72ec6dc871f',
        to: '0xce94e5621a5f7068253c42558c147480f38b5e0d',
        value: '10003420000000000',
        gas: '105000',
        gasPrice: '29489937413',
        isError: '0',
        txreceipt_status: '1',
        input: '0x',
        contractAddress: '',
        cumulativeGasUsed: '14067378',
        gasUsed: '21000',
        confirmations: '2030222',
        methodId: '0x',
        functionName: ''
      },
      {
        blockNumber: '14636492',
        timeStamp: '1650654993',
        hash: '0x5bb7936a0a9381f62c2c6c761818a937c89eeeae340658f505138c9174279cb0',
        nonce: '150308',
        blockHash: '0x8b56db4a4dacbe520d6dfa89971e7f209c00b484072e9dc4083ff6fb46bed29a',
        transactionIndex: '35',
        from: '0xb04c0eb29c72cebc467b9d4944d29116fa02c44a',
        to: '0xce94e5621a5f7068253c42558c147480f38b5e0d',
        value: '10002160000000000',
        gas: '105000',
        gasPrice: '57338292678',
        isError: '0',
        txreceipt_status: '1',
        input: '0x',
        contractAddress: '',
        cumulativeGasUsed: '2128721',
        gasUsed: '21000',
        confirmations: '2002885',
        methodId: '0x',
        functionName: ''
      },
      {
        blockNumber: '14660126',
        timeStamp: '1650975744',
        hash: '0x90b9388cb96171fcfd75015164dafa1bd8d46c4846d8b2f42e8ea618ffafe70e',
        nonce: '91234',
        blockHash: '0x55a4d205cf24e7fc87a1e30cd07aba3751256d4a43ea7f2d04ebad9820095e18',
        transactionIndex: '32',
        from: '0x0392b64b8bfda184f0a72ce37d73dc7df978c4f7',
        to: '0xce94e5621a5f7068253c42558c147480f38b5e0d',
        value: '10003320000000000',
        gas: '105000',
        gasPrice: '41644101261',
        isError: '0',
        txreceipt_status: '1',
        input: '0x',
        contractAddress: '',
        cumulativeGasUsed: '3011289',
        gasUsed: '21000',
        confirmations: '1979251',
        methodId: '0x',
        functionName: ''
      },
      {
        blockNumber: '14673415',
        timeStamp: '1651156640',
        hash: '0x2e8137a324385ff6802e11955dcaee7c8fa3ed9f5c763f6e3606e302db5845f0',
        nonce: '0',
        blockHash: '0x303c9198481b0a8c419a3435dcbc562b8985f047987a9735fbaaa0e763a01c0a',
        transactionIndex: '275',
        from: '0x67134f54c1768ff1cbd381b829d29264c9b3e834',
        to: '0xce94e5621a5f7068253c42558c147480f38b5e0d',
        value: '8519213888151000',
        gas: '21000',
        gasPrice: '69748862469',
        isError: '0',
        txreceipt_status: '1',
        input: '0x',
        contractAddress: '',
        cumulativeGasUsed: '25231946',
        gasUsed: '21000',
        confirmations: '1965962',
        methodId: '0x',
        functionName: ''
      },
      {
        blockNumber: '14710286',
        timeStamp: '1651658911',
        hash: '0x553fc397524d73719d7aa9d70e71de4d6c87602b30f9d8ca03776036ac94dfce',
        nonce: '96241',
        blockHash: '0x62774dac62ee885ffeaad96240a9f0f1a9e8268612e2a049ac3d20231f6701e5',
        transactionIndex: '12',
        from: '0xb2723beacce4bc54f23544343927f048cef6bd5a',
        to: '0xce94e5621a5f7068253c42558c147480f38b5e0d',
        value: '10357020000000000',
        gas: '105000',
        gasPrice: '52544651381',
        isError: '0',
        txreceipt_status: '1',
        input: '0x',
        contractAddress: '',
        cumulativeGasUsed: '1549821',
        gasUsed: '21000',
        confirmations: '1929091',
        methodId: '0x',
        functionName: ''
      },
      {
        blockNumber: '14741266',
        timeStamp: '1652083148',
        hash: '0x5e32868d2900d270c7ca18698875d41eaf5b53ad51a4bdd7227a64b7a0f8c768',
        nonce: '2',
        blockHash: '0x3148c76d498364807b91557c0301aaef66d71d3f851aa1ec48207638d512258a',
        transactionIndex: '204',
        from: '0x009bdfdc34d511d90290e0da686a11dc059bd6d9',
        to: '0xce94e5621a5f7068253c42558c147480f38b5e0d',
        value: '8141037218947432',
        gas: '21000',
        gasPrice: '24147034270',
        isError: '0',
        txreceipt_status: '1',
        input: '0x',
        contractAddress: '',
        cumulativeGasUsed: '17357693',
        gasUsed: '21000',
        confirmations: '1898111',
        methodId: '0x',
        functionName: ''
      },
      {
        blockNumber: '14741314',
        timeStamp: '1652083662',
        hash: '0xdaec5b2363ce41abc072db44051914b4557755be498c62c1a77424af2f714450',
        nonce: '0',
        blockHash: '0x8572d46c8b36d0440ade2ab6d72ca59662d86f143030cacd6b83197de63cea9c',
        transactionIndex: '255',
        from: '0x0f640d1b4be597bdb2908ad552b10d8570c7e604',
        to: '0xce94e5621a5f7068253c42558c147480f38b5e0d',
        value: '17151787593366000',
        gas: '21000',
        gasPrice: '22097865429',
        isError: '0',
        txreceipt_status: '1',
        input: '0x',
        contractAddress: '',
        cumulativeGasUsed: '19251567',
        gasUsed: '21000',
        confirmations: '1898063',
        methodId: '0x',
        functionName: ''
      },
      {
        blockNumber: '14793312',
        timeStamp: '1652801386',
        hash: '0xd20845f9b701096ad3d86bd466559589c058fe70187be00efcb909d80b3572af',
        nonce: '0',
        blockHash: '0xf6cd3ece92518c73c6892afca0b0586b02b1b347e86acd5926c23892e94ba3da',
        transactionIndex: '177',
        from: '0x5171489dd674aa19c11c28d87a867412bed798f5',
        to: '0xce94e5621a5f7068253c42558c147480f38b5e0d',
        value: '23644225281603000',
        gas: '21000',
        gasPrice: '30809541483',
        isError: '0',
        txreceipt_status: '1',
        input: '0x',
        contractAddress: '',
        cumulativeGasUsed: '17643264',
        gasUsed: '21000',
        confirmations: '1846065',
        methodId: '0x',
        functionName: ''
      },
      {
        blockNumber: '14793690',
        timeStamp: '1652806251',
        hash: '0x1d6fd65ab2eefb36b6b841edd71d470578fe589b0eb31ceb069cb4c3b71745a0',
        nonce: '0',
        blockHash: '0x66b790fc21c1fa4acb0ea977f2a9f0aa921292fcd8d99202306f42a2a792a512',
        transactionIndex: '318',
        from: '0xfb2621d55fc4c84ab8e6760ff9af9a2830259571',
        to: '0xce94e5621a5f7068253c42558c147480f38b5e0d',
        value: '33063854901102004',
        gas: '21000',
        gasPrice: '27647809222',
        isError: '0',
        txreceipt_status: '1',
        input: '0x',
        contractAddress: '',
        cumulativeGasUsed: '18649287',
        gasUsed: '21000',
        confirmations: '1845687',
        methodId: '0x',
        functionName: ''
      },
      {
        blockNumber: '14793690',
        timeStamp: '1652806251',
        hash: '0x6bcf566f165be2f00beb9ff1417ecfbb0f11139122779899ed43816b933f5d30',
        nonce: '0',
        blockHash: '0x66b790fc21c1fa4acb0ea977f2a9f0aa921292fcd8d99202306f42a2a792a512',
        transactionIndex: '405',
        from: '0x052854cb136b9a5d62c96dff99459fa1adb167a0',
        to: '0xce94e5621a5f7068253c42558c147480f38b5e0d',
        value: '33009827022960004',
        gas: '21000',
        gasPrice: '27647809222',
        isError: '0',
        txreceipt_status: '1',
        input: '0x',
        contractAddress: '',
        cumulativeGasUsed: '29836323',
        gasUsed: '21000',
        confirmations: '1845687',
        methodId: '0x',
        functionName: ''
      }
    ]
  }
  

  // for (let i = 0; i < (m.result).length; i ++ ){

  //     console.log("Block Hash",m.result[i].blockHash)
  //     console.log( "From:- ", m.result[i].from)
  //     console.log("to:- ",m.result[i].to)
  //     console.log("Value:- ",m.result[i].value)
  //     console.log("Is Error:- ",m.result[i].isError)
  //     console.log("functionName:- ",m.result[i].functionName)
  // }

  // ethers.utils.parseUnits("10","ether")

  // let m2 = ethers.utils.parseUnits("10000","ether")
  // console.log(m2)

const weiValue = Web3.utils.toWei('1', 'ether');
console.log(weiValue);

const etherValue = Web3.utils.fromWei('1000000000000000000', 'ether');
console.log(etherValue);


  // List of tx.
//   address -> details
