import eosjs from 'eosjs2'

const rpc = new eosjs.Rpc.JsonRpc('http://jungle2.cryptolions.io:80');
const signatureProvider = new eosjs.SignatureProvider(['YOUR_PRIVATE_KEY']);

export default class EOSClient {
  constructor(contractName, contractSender) {
    this.contractName = 'YOUR_ACCOUNT';
    this.contractSender = 'YOUR_ACCOUNT';

    this.eos = new eosjs.Api({ rpc, signatureProvider })
  }

  getTableRows = table => {
    return rpc.get_table_rows({json: true, code: this.contractSender, scope: this.contractName, table});
  };

  transaction = (action, data) => {
    return this.eos.pushTransaction({
      blocksBehind: 3,
      expireSeconds: 30,
      actions: [
        {
          account: this.contractName,
          name: action,
          authorization: [
            {
              actor: this.contractSender,
              permission: 'active'
            }
          ],
          data: {
            ...data
          }
        }
      ]
    });
  };
}
