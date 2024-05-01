(()=>{"use strict";var e={156:function(e,o,s){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(o,"__esModule",{value:!0});const n=t(s(252)),r=t(s(163)),c=t(s(305)),a=t(s(130));t(s(818)).default.config();const i=(0,n.default)(),l=process.env.PORT||3e3;i.use(n.default.json({limit:"10mb",strict:!1})),i.use(c.default);const u=(0,r.default)();u.setApiVersion("2023-10"),u.setToken(String(process.env.MONDAY_KEY)),u.api("query { users { name } }").then((e=>console.log(JSON.stringify(e)))),new a.default.Connection({loginUrl:"https://login.salesforce.com"});const d=new a.default.OAuth2({loginUrl:"https://ringcentral13-dev-ed.develop.my.salesforce.com",clientId:"3MVG91oqviqJKoEEAneVrcc_pZjUOwGy91xgvPlcRhGj7Z5_CyuD_Jv.9hvXrBrJnX5Z4IbgsnXyCMoXyl5i1",clientSecret:"88A4B83C9675AD4E29CEF640C5033B315EAC5539504614BC886F6D240C1875F0",redirectUri:"http://localhost:3000/token"});i.get("/api/accounts",(function(e,o){e.session.accessToken&&e.session.instanceUrl||o.redirect("/");let s=new a.default.Connection({oauth2:d,accessToken:e.session.accessToken,instanceUrl:e.session.instanceUrl}),t=[],n=s.query("SELECT id, name FROM account LIMIT 10").on("record",(function(e){t.push(e)})).on("end",(function(){console.log("total in database : "+n.totalSize),console.log("total fetched : "+n.totalFetched),o.json(t)})).on("error",(function(e){console.error(e)})).run({autoFetch:!0,maxFetch:4e3})})),i.use(n.default.static("./build")),i.get("/auth/login",(function(e,o){o.redirect(d.getAuthorizationUrl({scope:"api id web refresh_token"}))})),i.get("/token",(function(e,o){const s=new a.default.Connection({oauth2:d}),t=e.query.code;s.authorize(t,(function(o,t){if(o)return console.error("This error is in the auth callback: "+o);console.log("Access Token: "+s.accessToken),console.log("Instance URL: "+s.instanceUrl),console.log("refreshToken: "+s.refreshToken),console.log("User ID: "+t.id),console.log("Org ID: "+t.organizationId),e.session.accessToken=s.accessToken,e.session.instanceUrl=s.instanceUrl,e.session.refreshToken=s.refreshToken,encodeURIComponent("true")}))})),i.listen(l,(()=>{console.log(`⚡️[server]: Server started on ${l}`)}))},845:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.health=void 0,o.health=(e,o)=>{o.status(200).json({message:"wm-api is up 🟢"})}},305:function(e,o,s){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(o,"__esModule",{value:!0});const n=s(845),r=s(713),c=t(s(252)).default.Router();c.get("/health",n.health),c.get("/api/version",((e,o)=>{(0,r.sendSuccessResponse)({res:o,data:{release:process.env.RELEASE_NUMBER||.1,build:process.env.BUILD_NUMBER||.1,date:process.env.BUILD_DATE||(new Date).toISOString().replace("T"," ").slice(0,19)},message:null,statusCode:200})})),o.default=c},713:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.sendSuccessResponse=o.delay=o.validateEmail=void 0,o.validateEmail=e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),o.delay=e=>new Promise((o=>setTimeout(o,e))),o.sendSuccessResponse=({res:e,data:o={},message:s,statusCode:t,count:n,clearCookie:r=!1})=>{n&&(o.count=n);let c={data:o};return r&&e.clearCookie("accessToken"),e.status(t).json(c)}},818:e=>{e.exports=require("dotenv")},252:e=>{e.exports=require("express")},130:e=>{e.exports=require("jsforce")},163:e=>{e.exports=require("monday-sdk-js")}},o={};!function s(t){var n=o[t];if(void 0!==n)return n.exports;var r=o[t]={exports:{}};return e[t].call(r.exports,r,r.exports,s),r.exports}(156)})();
//# sourceMappingURL=index.js.map