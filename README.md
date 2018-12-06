# Blog_Dapp
Blog platform on blockchain

prerequisities:-</br>
NPM</br> 
EOS Blockcahin</br> 
Web Browser</br>

Steps to build:<br/>
1.Go to blog folder then execute following commands<br/>
 --> **eosio-cpp -abigen blog.cpp -o blog.wasm**<br/>
 --> **cleos set contract YOUR_ACCOUNT_NAME ../blog**

2.Now add your private key in your eos-client.js file(path of file is frontend/src/lib)<br/>
3.Now open app.js(frontend/src/App.js) and eos-client.js(frontend/src/lib/eos-client.js) and enter your account name<br/>   instead of **YOUR_ACCOUNT**<br/> 
4.Open terminal in frontend folder and execute below commands<br/>
  --> **npm install**<br/>
  --> **npm start** Go on localhost:3000 to see output

Watch demo video of this dapp over here https://www.youtube.com/watch?v=vuDhdnP0_CA&feature=youtu.be
