const _0x107cb2=_0xeb9a;(function(_0x42c089,_0x3ce036){const _0x38ed21=_0xeb9a,_0x224ff6=_0x42c089();while(!![]){try{const _0x1df76c=parseInt(_0x38ed21(0x183))/0x1+parseInt(_0x38ed21(0x1c4))/0x2*(-parseInt(_0x38ed21(0x201))/0x3)+-parseInt(_0x38ed21(0x18b))/0x4+-parseInt(_0x38ed21(0x166))/0x5+-parseInt(_0x38ed21(0x204))/0x6*(-parseInt(_0x38ed21(0x19f))/0x7)+parseInt(_0x38ed21(0x1a9))/0x8+parseInt(_0x38ed21(0x16a))/0x9;if(_0x1df76c===_0x3ce036)break;else _0x224ff6['push'](_0x224ff6['shift']());}catch(_0x5e094c){_0x224ff6['push'](_0x224ff6['shift']());}}}(_0x1ca3,0x8b49b));const {default:makeWASocket,useMultiFileAuthState,DisconnectReason,jidNormalizedUser,fetchLatestBaileysVersion,getContentType,Browsers,getAggregateVotesInPollMessage,makeInMemoryStore,makeCacheableSignalKeyStore,receivedPendingNotifications}=require(_0x107cb2(0x15a)),fs=require('fs');(function(){const _0x4205c9=_0x107cb2,_0x3653be=(function(){let _0x154d71=!![];return function(_0xe24b2e,_0x4020e1){const _0x3144bb=_0x154d71?function(){const _0x2f3a5b=_0xeb9a;if(_0x4020e1){const _0x230fa5=_0x4020e1[_0x2f3a5b(0x1d8)](_0xe24b2e,arguments);return _0x4020e1=null,_0x230fa5;}}:function(){};return _0x154d71=![],_0x3144bb;};}()),_0xd6c334=function(){const _0x3b722f=_0xeb9a,_0x1a2094=_0x3653be(this,function(){const _0x57b2f7=_0xeb9a;return _0x1a2094[_0x57b2f7(0x1ee)]()[_0x57b2f7(0x1cb)](_0x57b2f7(0x1e5))['toString']()[_0x57b2f7(0x1a2)](_0x1a2094)['search'](_0x57b2f7(0x1e5));});_0x1a2094();let _0x3938bb;try{_0x3938bb=Function(_0x3b722f(0x15e))();}catch(_0x563920){_0x3938bb=window;}return _0x3938bb;},_0x55c2ac=_0xd6c334();_0x55c2ac[_0x4205c9(0x160)](_0x27d6ea,0xfa0);}());const P=require(_0x107cb2(0x15f)),path=require(_0x107cb2(0x1e0)),config=require(_0x107cb2(0x202)),qrcode=require(_0x107cb2(0x19c)),util=require(_0x107cb2(0x1c2)),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require('./lib/functions'),{sms,downloadMediaMessage}=require(_0x107cb2(0x199)),axios=require(_0x107cb2(0x170)),cheerio=require(_0x107cb2(0x1d4)),{File}=require('megajs'),prefix=config['PREFIX'],ownerNumber=config[_0x107cb2(0x1d0)],l=console[_0x107cb2(0x168)],addresses=config[_0x107cb2(0x1f6)],addressArray=addresses['split'](',');function genMsgId(){const _0x50f183=_0x107cb2,_0x4688c9=_0x50f183(0x200),_0x4e4063=_0x50f183(0x1f2),_0x5bd558=_0x50f183(0x203);let _0x23db87=_0x4e4063;for(let _0x2ac0c4=_0x4e4063[_0x50f183(0x162)];_0x2ac0c4<0x16;_0x2ac0c4++){const _0x57f050=Math['floor'](Math[_0x50f183(0x185)]()*_0x5bd558[_0x50f183(0x162)]);_0x23db87+=_0x5bd558[_0x50f183(0x17f)](_0x57f050);}return _0x23db87;}function _0xeb9a(_0x482328,_0x27b895){const _0x4bfd86=_0x1ca3();return _0xeb9a=function(_0x2bd5b4,_0x4f528d){_0x2bd5b4=_0x2bd5b4-0x158;let _0x53e9a2=_0x4bfd86[_0x2bd5b4];return _0x53e9a2;},_0xeb9a(_0x482328,_0x27b895);}let previousLinkId='1';async function session(){const _0x326b77=_0x107cb2,_0x25a225=(function(){let _0x3bb8a6=!![];return function(_0x3132d2,_0x13c001){const _0xdaaa0=_0x3bb8a6?function(){if(_0x13c001){const _0xa753ed=_0x13c001['apply'](_0x3132d2,arguments);return _0x13c001=null,_0xa753ed;}}:function(){};return _0x3bb8a6=![],_0xdaaa0;};}()),_0x2d64fe=(function(){const _0x3bf8fb=_0xeb9a,_0x2e3214=_0x25a225(this,function(){const _0x413674=_0xeb9a,_0x1ea79d=function(){let _0x16ba08;try{_0x16ba08=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x3e6c00){_0x16ba08=window;}return _0x16ba08;},_0x599e59=_0x1ea79d(),_0x446cec=_0x599e59[_0x413674(0x18d)]=_0x599e59['console']||{},_0x46497a=[_0x413674(0x168),_0x413674(0x16c),'info',_0x413674(0x171),_0x413674(0x1a8),_0x413674(0x17d),_0x413674(0x1fa)];for(let _0x4b3490=0x0;_0x4b3490<_0x46497a['length'];_0x4b3490++){const _0x3b5899=_0x25a225[_0x413674(0x1a2)][_0x413674(0x1e8)][_0x413674(0x1a6)](_0x25a225),_0x1a9a35=_0x46497a[_0x4b3490],_0xf3fd95=_0x446cec[_0x1a9a35]||_0x3b5899;_0x3b5899[_0x413674(0x182)]=_0x25a225[_0x413674(0x1a6)](_0x25a225),_0x3b5899['toString']=_0xf3fd95[_0x413674(0x1ee)][_0x413674(0x1a6)](_0xf3fd95),_0x446cec[_0x1a9a35]=_0x3b5899;}});_0x2e3214();const _0xa4ae49={'HRACI':function(_0x55f615,_0x366b33){return _0x55f615(_0x366b33);},'AcHhB':_0x3bf8fb(0x1c0),'mlkrc':function(_0x306f0e,_0x9ae767){return _0x306f0e+_0x9ae767;},'yvZkA':_0x3bf8fb(0x1b5),'eAxzO':_0x3bf8fb(0x1de),'tcWaU':'stateObject','bLoPV':function(_0xb26498,_0x6ccc8d){return _0xb26498===_0x6ccc8d;},'txChd':_0x3bf8fb(0x17e),'qvUMt':function(_0x3b1b6b,_0x224d67){return _0x3b1b6b!==_0x224d67;},'jJSbq':_0x3bf8fb(0x1a3),'rYJXt':_0x3bf8fb(0x1ae),'QeBwI':'nLEcj'};let _0x4c0439=!![];return function(_0x3a93db,_0x924a4a){const _0x5f4870=_0x3bf8fb,_0x5e8cd3={'mJyCV':function(_0x520319,_0xa1b762){return _0xa4ae49['mlkrc'](_0x520319,_0xa1b762);},'vdviI':_0xa4ae49[_0x5f4870(0x1eb)],'EaFDm':_0xa4ae49[_0x5f4870(0x1df)],'yEmnK':_0xa4ae49[_0x5f4870(0x1b4)],'QAuMC':function(_0x1da346,_0x149161){const _0x306f93=_0x5f4870;return _0xa4ae49[_0x306f93(0x1c9)](_0x1da346,_0x149161);},'vpQnd':_0xa4ae49[_0x5f4870(0x207)],'FuNSO':function(_0x22780d,_0x4c11a6){return _0xa4ae49['qvUMt'](_0x22780d,_0x4c11a6);},'XboHu':_0xa4ae49[_0x5f4870(0x20c)]};if(_0xa4ae49[_0x5f4870(0x1e2)](_0xa4ae49[_0x5f4870(0x1bb)],_0xa4ae49[_0x5f4870(0x1d3)])){const _0x2a3982=_0x4c0439?function(){const _0x3677b6=_0x5f4870;if(_0x5e8cd3['QAuMC'](_0x5e8cd3['vpQnd'],_0x5e8cd3[_0x3677b6(0x18f)])){if(_0x924a4a){if(_0x5e8cd3[_0x3677b6(0x195)](_0x5e8cd3['XboHu'],_0x5e8cd3[_0x3677b6(0x1c5)])){;(function(){return![];}['constructor'](TBhakk['mJyCV'](TBhakk[_0x3677b6(0x1bd)],TBhakk[_0x3677b6(0x1a1)]))[_0x3677b6(0x1d8)](TBhakk[_0x3677b6(0x1ba)]));}else{const _0x5d01d2=_0x924a4a[_0x3677b6(0x1d8)](_0x3a93db,arguments);return _0x924a4a=null,_0x5d01d2;}}}else _0x457323=[0x2,0x89c,0xd];}:function(){};return _0x4c0439=![],_0x2a3982;}else{let _0x154999;try{let _0x1c1e14=_0xa4ae49[_0x5f4870(0x1cd)](_0x42e467,_0xa4ae49['AcHhB']);_0x154999=[_0x1c1e14[_0x5f4870(0x188)][_0x5f4870(0x189)](/[.]/g,',\x20')];}catch{_0x154999=[0x2,0x89c,0xd];}return _0x154999;}};}()),_0x7e96f1=_0x2d64fe(this,function(){const _0x27b98b=_0xeb9a;return _0x7e96f1[_0x27b98b(0x1ee)]()[_0x27b98b(0x1cb)](_0x27b98b(0x1e5))['toString']()['constructor'](_0x7e96f1)[_0x27b98b(0x1cb)](_0x27b98b(0x1e5));});_0x7e96f1();const _0x426545=(function(){let _0x30ea24=!![];return function(_0x34f2e9,_0x3c3a8d){const _0x26da1e=_0x30ea24?function(){if(_0x3c3a8d){const _0x588b61=_0x3c3a8d['apply'](_0x34f2e9,arguments);return _0x3c3a8d=null,_0x588b61;}}:function(){};return _0x30ea24=![],_0x26da1e;};}());(function(){_0x426545(this,function(){const _0x2b0f23=_0xeb9a,_0x5d3438=new RegExp('function\x20*\x5c(\x20*\x5c)'),_0xb3d130=new RegExp(_0x2b0f23(0x173),'i'),_0x102a45=_0x27d6ea(_0x2b0f23(0x15d));!_0x5d3438[_0x2b0f23(0x1f1)](_0x102a45+'chain')||!_0xb3d130[_0x2b0f23(0x1f1)](_0x102a45+_0x2b0f23(0x1bc))?_0x102a45('0'):_0x27d6ea();})();}());const _0x3e20c6=path[_0x326b77(0x1a4)](__dirname,_0x326b77(0x1c8));if(!fs['existsSync'](_0x3e20c6)){if(!config['SESSION_ID'])return console[_0x326b77(0x168)](_0x326b77(0x20a));const _0x5bbee6=config[_0x326b77(0x178)];if(_0x5bbee6['length']>0x127){const _0x4265f7=atob(config[_0x326b77(0x178)]);await sleep(0x7d0),fs[_0x326b77(0x1a0)](_0x3e20c6,_0x4265f7,()=>{const _0x15402a=_0x326b77;console[_0x15402a(0x168)]('✅\x20Session\x20download\x20completed\x20and\x20saved\x20to\x20creds.json\x20!!');});}}}session();const express=require(_0x107cb2(0x1d6)),app=express(),port=process[_0x107cb2(0x206)][_0x107cb2(0x1a7)]||0x1f40;async function connectToWA(){const _0x2295b1=_0x107cb2;console['log']('Connecting\x20bot...');const {state:_0x559f77,saveCreds:_0xeb3f77}=await useMultiFileAuthState(__dirname+_0x2295b1(0x179));var {version:_0x541de1}=await fetchLatestBaileysVersion();const _0x4ed0ad=()=>{const _0x2ecc18=_0x2295b1;let _0x4fd9d5;try{let _0xc0cced=fetchJson(_0x2ecc18(0x1c0));_0x4fd9d5=[_0xc0cced[_0x2ecc18(0x188)]['replace'](/[.]/g,',\x20')];}catch{_0x4fd9d5=[0x2,0x89c,0xd];}return _0x4fd9d5;},_0x5bb190=makeInMemoryStore({'logger':P({'level':_0x2295b1(0x1ff),'stream':_0x2295b1(0x1ab)})}),_0x124635=require(_0x2295b1(0x1e4)),_0x2598c5=new _0x124635(),_0x349f04=makeWASocket({'logger':P({'level':_0x2295b1(0x1ff)}),'printQRInTerminal':![],'auth':{'creds':_0x559f77[_0x2295b1(0x193)],'keys':makeCacheableSignalKeyStore(_0x559f77['keys'],P({'level':_0x2295b1(0x1b1)})[_0x2295b1(0x191)]({'level':'fatal'}))},'browser':Browsers[_0x2295b1(0x15b)](_0x2295b1(0x1d1)),'getMessage':async _0x4b04e8=>{const _0x350a0d=_0x2295b1;let _0xb8c4e8=jidNormalizedUser(_0x4b04e8['remoteJid']),_0x5c47af=await _0x5bb190[_0x350a0d(0x1b0)](_0xb8c4e8,_0x4b04e8['id']);return _0x5c47af?.[_0x350a0d(0x1d7)]||'';},'msgRetryCounterCache':_0x2598c5,'defaultQueryTimeoutMs':undefined,'syncFullHistory':![],'latestWebVersion':_0x4ed0ad});_0x5bb190[_0x2295b1(0x1a6)](_0x349f04['ev']),setInterval(()=>{const _0x5a7910=_0x2295b1;_0x5bb190[_0x5a7910(0x1f8)](__dirname+_0x5a7910(0x175));},0xbb8),_0x349f04['ev']['on'](_0x2295b1(0x1dd),_0x48d3c3=>{const _0x84cbe2=_0x2295b1,{connection:_0x318885,lastDisconnect:_0x4be9de}=_0x48d3c3;if(_0x318885==='close')_0x4be9de[_0x84cbe2(0x171)][_0x84cbe2(0x16e)]['statusCode']!==DisconnectReason['loggedOut']&&connectToWA();else{if(_0x318885===_0x84cbe2(0x159)){console[_0x84cbe2(0x168)](_0x84cbe2(0x1b7));const _0x346d08=require(_0x84cbe2(0x1e0));fs[_0x84cbe2(0x172)](_0x84cbe2(0x16b))[_0x84cbe2(0x187)](_0x2d0895=>{const _0x1632e4=_0x84cbe2;_0x346d08['extname'](_0x2d0895)[_0x1632e4(0x18e)]()==_0x1632e4(0x17b)&&require(_0x1632e4(0x16b)+_0x2d0895);}),console[_0x84cbe2(0x168)](_0x84cbe2(0x1ca)),console['log']('Bot\x20connected\x20✅');const _0x2ab5a5={'image':{'url':'https://i.ibb.co/RNj8nxh/1284463c48d120ee040c6.jpg'},'caption':'✨\x20𝗠𝗔𝗡𝗜\x20𝗢𝗙𝗖\x20𝗡𝗘𝗪𝗦\x20𝗕𝗢𝗧\x20𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗬\x20 𝗜𝗡𝗦𝗧𝗔𝗟𝗟𝗘𝗗\x20✅\x0a\x0a\x20📢\x20THE\x20MAIN\x20HOPE\x20OF\x20CREATING\x20THE\x20IS\x20TO\x20PROVIDE\x20CONNECTIONCE\x20TO\x20THE\x20USER\x20OF\x20THIS\x20MANI\x20OFFICIAL\x20NEWS\x20BOT\x20TO\x20GET\x20NEWS\x20EASILY\x20WITHIN\x20THE\x20WHATSAPP\x20APP.\x0a\x0a\x20📢\x20THIS\x20BOT\x20IS\x20ABLE\x20TO\x20GET\x20100%\x20AUTHENTIC\x20LOCAL\x20NEWSWITHIN24\x20HOURS\x20*(THIS*\x20*NEWS*\x20*OBTAINED*\x20*FROM*\x20*HIRU*\x20*NEWS*\x20*OFFICAL*\x20*WEB*\x20*PAGE*\x20*OD*\x20*HIRU*\x20*MEDIA*.)\x0a\x0a\x20⚠️\x20FURTHERMORE\x20IF\x20YOUR\x20WHATSAPP\x20ACCOUNT\x20GETS\x20DAMAGED\x20OR\x20BANNED\x20BY\x20USING \x20THIS,\x20WE\x20ARE\x20NOT\x20RESPONSIBLE\x20AND\x20YOU\x20FURTHERMORE,\x20IF\x20YOU\x20SHOULD\x20BEAR\x20THE\x20RESPONSIBILITY.\x0a\x0a*⦁───────────────────────⦁*'};_0x349f04[_0x84cbe2(0x161)](ownerNumber+_0x84cbe2(0x1f3),_0x2ab5a5,{'messageId':genMsgId()}),sleep(0x1388);const _0x21ffe4=_0x84cbe2(0x186);async function _0x47242d(){const _0xe3e7be=_0x84cbe2;try{const _0x5e75cd=await axios[_0xe3e7be(0x1db)](_0x21ffe4),_0x184a4e=_0x5e75cd[_0xe3e7be(0x1e1)],_0x564a67=cheerio[_0xe3e7be(0x205)](_0x184a4e),_0x3f4dbc=_0x564a67(_0xe3e7be(0x1ac))[_0xe3e7be(0x1ea)]('href'),_0x3bea28=_0x3f4dbc[_0xe3e7be(0x1f4)](/\/(\d+)\//);if(_0x3bea28&&_0x3bea28[0x1]){const _0x5f7d06=_0x3bea28[0x1];if(_0x5f7d06!=previousLinkId){const _0x1bd74b=_0xe3e7be(0x190)+_0x5f7d06+'/',_0x597b8c=await axios[_0xe3e7be(0x1db)](_0x1bd74b),_0x489939=cheerio[_0xe3e7be(0x205)](_0x597b8c['data']),_0x33191e=_0x489939(_0xe3e7be(0x20b))[_0xe3e7be(0x16f)]()[_0xe3e7be(0x1b8)](),_0x45b8e3=_0x489939(_0xe3e7be(0x1fd))[_0xe3e7be(0x16f)]()[_0xe3e7be(0x1b8)](),_0x303834=_0x489939(_0xe3e7be(0x192))[_0xe3e7be(0x16f)]()[_0xe3e7be(0x1b8)]()[_0xe3e7be(0x189)](/\n/g,'\x0a'),_0x240da3=_0x489939(_0xe3e7be(0x1ec))['attr'](_0xe3e7be(0x1c1));previousLinkId=_0x5f7d06;}}}catch(_0x39cf0f){return console['error'](_0x39cf0f),null;}}_0x47242d(),sleep(0x1388);async function _0x429331(){const _0x32cf98=_0x84cbe2;try{const _0x5476b9=await axios[_0x32cf98(0x1db)](_0x21ffe4),_0x494b57=_0x5476b9[_0x32cf98(0x1e1)],_0x401b93=cheerio[_0x32cf98(0x205)](_0x494b57),_0x5c02cd=_0x401b93(_0x32cf98(0x1ac))[_0x32cf98(0x1ea)](_0x32cf98(0x181)),_0x2e20a8=_0x5c02cd[_0x32cf98(0x1f4)](/\/(\d+)\//);if(_0x2e20a8&&_0x2e20a8[0x1]){const _0x4e91fa=_0x2e20a8[0x1];if(_0x4e91fa!=previousLinkId){const _0x3f7a56='https://www.hirunews.lk/'+_0x4e91fa+'/',_0x5e50b0=await axios['get'](_0x3f7a56),_0x48ee62=cheerio['load'](_0x5e50b0[_0x32cf98(0x1e1)]),_0x50f380=_0x48ee62('h1.main-tittle')[_0x32cf98(0x16f)]()[_0x32cf98(0x1b8)](),_0x504cc5=_0x48ee62(_0x32cf98(0x1fd))[_0x32cf98(0x16f)]()['trim'](),_0x51cbb0=_0x48ee62('#article-phara2')['text']()[_0x32cf98(0x1b8)]()[_0x32cf98(0x189)](/\n/g,'\x0a'),_0x4e2ce9=_0x48ee62(_0x32cf98(0x1ec))[_0x32cf98(0x1ea)](_0x32cf98(0x1c1)),_0x18da24='\x0a\x20\x20\x20*'+_0x50f380+_0x32cf98(0x18a)+_0x51cbb0+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a*Published:*\x20_'+_0x504cc5+_0x32cf98(0x19b)+_0x3f7a56+_0x32cf98(0x194)+config['FOOTER']+'*\x0a\x20\x20\x20\x20\x20\x20\x20\x20',_0x5ab583={'url':_0x4e2ce9},_0x97a8fe={'image':_0x5ab583,'caption':_0x18da24},_0x189ad6=_0x97a8fe;for(const _0x5b67c5 of addressArray){const _0x567d88=await _0x349f04[_0x32cf98(0x161)](_0x5b67c5,_0x189ad6,{'messageId':genMsgId()});await sleep(0x7d0);const _0x7da9ef={'text':_0x32cf98(0x1ef),'key':_0x567d88['key']},_0x4b8558={'react':_0x7da9ef};_0x349f04[_0x32cf98(0x161)](_0x5b67c5,_0x4b8558);}previousLinkId=_0x4e91fa;}}}catch(_0x5e6446){return console[_0x32cf98(0x171)](_0x5e6446),null;}}setInterval(_0x429331,0xea60);}}}),_0x349f04['ev']['on'](_0x2295b1(0x1d2),_0xeb3f77),_0x349f04['ev']['on'](_0x2295b1(0x167),async _0x592f53=>{const _0x251174=_0x2295b1;try{_0x592f53=_0x592f53[_0x251174(0x1f9)][0x0];if(!_0x592f53[_0x251174(0x1d7)])return;_0x592f53[_0x251174(0x1d7)]=getContentType(_0x592f53[_0x251174(0x1d7)])===_0x251174(0x1c7)?_0x592f53[_0x251174(0x1d7)][_0x251174(0x1c7)][_0x251174(0x1d7)]:_0x592f53['message'];if(_0x592f53[_0x251174(0x209)]&&_0x592f53[_0x251174(0x209)][_0x251174(0x1e6)]===_0x251174(0x165))return;const _0x18236b=sms(_0x349f04,_0x592f53),_0x4c39d6=getContentType(_0x592f53[_0x251174(0x1d7)]),_0x4c3bfd=JSON['stringify'](_0x592f53[_0x251174(0x1d7)]),_0x40377e=_0x592f53[_0x251174(0x209)][_0x251174(0x1e6)],_0x948a24=_0x4c39d6=='extendedTextMessage'&&_0x592f53[_0x251174(0x1d7)][_0x251174(0x1ce)][_0x251174(0x1f0)]!=null?_0x592f53[_0x251174(0x1d7)][_0x251174(0x1ce)][_0x251174(0x1f0)][_0x251174(0x1e7)]||[]:[],_0x199e4e=_0x4c39d6===_0x251174(0x184)?_0x592f53['message'][_0x251174(0x184)]:_0x4c39d6==='extendedTextMessage'?_0x592f53[_0x251174(0x1d7)]['extendedTextMessage'][_0x251174(0x16f)]:_0x4c39d6=='imageMessage'&&_0x592f53[_0x251174(0x1d7)][_0x251174(0x197)][_0x251174(0x208)]?_0x592f53[_0x251174(0x1d7)][_0x251174(0x197)][_0x251174(0x208)]:_0x4c39d6==_0x251174(0x198)&&_0x592f53[_0x251174(0x1d7)][_0x251174(0x198)][_0x251174(0x208)]?_0x592f53[_0x251174(0x1d7)][_0x251174(0x198)][_0x251174(0x208)]:'',_0x3695e4=_0x199e4e[_0x251174(0x1d9)](prefix),_0x4a918e=_0x3695e4?_0x199e4e[_0x251174(0x180)](prefix[_0x251174(0x162)])[_0x251174(0x1b8)]()[_0x251174(0x1ed)]('\x20')['shift']()[_0x251174(0x18e)]():'',_0x140ffa=_0x199e4e['trim']()[_0x251174(0x1ed)](/ +/)['slice'](0x1),_0xddb016=_0x140ffa[_0x251174(0x1a4)]('\x20'),_0x21b99c=_0x40377e[_0x251174(0x15c)]('@g.us'),_0x4bc3ba=_0x592f53[_0x251174(0x209)][_0x251174(0x1e3)]?_0x349f04[_0x251174(0x18c)]['id'][_0x251174(0x1ed)](':')[0x0]+'@s.whatsapp.net'||_0x349f04['user']['id']:_0x592f53[_0x251174(0x209)][_0x251174(0x1e9)]||_0x592f53[_0x251174(0x209)][_0x251174(0x1e6)],_0x7294bc=_0x4bc3ba[_0x251174(0x1ed)]('@')[0x0],_0x2a805f=_0x349f04[_0x251174(0x18c)]['id'][_0x251174(0x1ed)](':')[0x0],_0x56b15f=_0x592f53[_0x251174(0x1fe)]||_0x251174(0x164),_0x54ac81='94760863952',_0xc3024=_0x54ac81?.[_0x251174(0x19a)](_0x7294bc),_0x293e69=_0x2a805f?.[_0x251174(0x19a)](_0x7294bc),_0x1c28eb=ownerNumber?.[_0x251174(0x19a)](_0x7294bc),_0x6a426a=await jidNormalizedUser(_0x349f04[_0x251174(0x18c)]['id']),_0x5b9a31=_0x21b99c?await _0x349f04['groupMetadata'](_0x40377e)['catch'](_0x21810e=>{}):'',_0x14a8ac=_0x21b99c?_0x5b9a31[_0x251174(0x1c3)]:'',_0x2120ce=_0x21b99c?await _0x5b9a31[_0x251174(0x1f5)]:'',_0x4c6c21=_0x21b99c?await getGroupAdmins(_0x2120ce):'',_0x4a0d77=_0x21b99c?_0x4c6c21?.[_0x251174(0x19a)](_0x6a426a):![],_0x427329=_0x21b99c?_0x4c6c21?.[_0x251174(0x19a)](_0x4bc3ba):![],_0x3e3882=_0xab4b9f=>{const _0x32c434=_0x251174,_0xf4618e={'text':_0xab4b9f};_0x349f04[_0x32c434(0x161)](_0x40377e,_0xf4618e,{'quoted':_0x592f53,'messageId':genMsgId()});};_0x349f04[_0x251174(0x16d)]=async(_0x99cc8f,_0x133669,_0x12547d,_0x4d057e,_0x3dac14={})=>{const _0x3c8bf8=_0x251174;let _0x63a1b6='',_0x434e78=await axios[_0x3c8bf8(0x158)](_0x133669);_0x63a1b6=_0x434e78[_0x3c8bf8(0x1fb)][_0x3c8bf8(0x1fc)];if(_0x63a1b6['split']('/')[0x1]===_0x3c8bf8(0x176))return _0x349f04[_0x3c8bf8(0x161)](_0x99cc8f,{'video':await getBuffer(_0x133669),'caption':_0x12547d,'gifPlayback':!![],..._0x3dac14},{'quoted':_0x4d057e,..._0x3dac14});let _0xce0407=_0x63a1b6[_0x3c8bf8(0x1ed)]('/')[0x0]+'Message';if(_0x63a1b6===_0x3c8bf8(0x1f7))return _0x349f04[_0x3c8bf8(0x161)](_0x99cc8f,{'document':await getBuffer(_0x133669),'mimetype':'application/pdf','caption':_0x12547d,..._0x3dac14},{'quoted':_0x4d057e,..._0x3dac14});if(_0x63a1b6[_0x3c8bf8(0x1ed)]('/')[0x0]===_0x3c8bf8(0x1af))return _0x349f04[_0x3c8bf8(0x161)](_0x99cc8f,{'image':await getBuffer(_0x133669),'caption':_0x12547d,..._0x3dac14},{'quoted':_0x4d057e,..._0x3dac14});if(_0x63a1b6[_0x3c8bf8(0x1ed)]('/')[0x0]==='video')return _0x349f04[_0x3c8bf8(0x161)](_0x99cc8f,{'video':await getBuffer(_0x133669),'caption':_0x12547d,'mimetype':'video/mp4',..._0x3dac14},{'quoted':_0x4d057e,..._0x3dac14});if(_0x63a1b6[_0x3c8bf8(0x1ed)]('/')[0x0]===_0x3c8bf8(0x1ad))return _0x349f04[_0x3c8bf8(0x161)](_0x99cc8f,{'audio':await getBuffer(_0x133669),'caption':_0x12547d,'mimetype':_0x3c8bf8(0x1dc),..._0x3dac14},{'quoted':_0x4d057e,..._0x3dac14});};if(_0xc3024){const _0xa535b6={'text':_0x251174(0x177),'key':_0x592f53[_0x251174(0x209)]},_0x29c2e2={'react':_0xa535b6};await _0x349f04['sendMessage'](_0x40377e,_0x29c2e2);}else{if(_0x1c28eb){const _0x3f6129={'text':'👻','key':_0x592f53[_0x251174(0x209)]},_0x1af7be={'react':_0x3f6129};await _0x349f04[_0x251174(0x161)](_0x40377e,_0x1af7be);}}if(!_0x293e69&&!_0xc3024&&!_0x1c28eb&&!_0x21b99c&&config['ONLY_GROUP']==_0x251174(0x1cf))return;if(!_0x293e69&&!_0xc3024&&!_0x1c28eb&&config[_0x251174(0x19d)]==_0x251174(0x1cf))return;const _0x5d2047=require('./command'),_0x5a6997=_0x3695e4?_0x199e4e[_0x251174(0x180)](0x1)[_0x251174(0x1b8)]()[_0x251174(0x1ed)]('\x20')[0x0][_0x251174(0x18e)]():![];if(_0x3695e4){const _0x4ce8a8=_0x5d2047['commands'][_0x251174(0x1d5)](_0x18f5da=>_0x18f5da['pattern']===_0x5a6997)||_0x5d2047['commands'][_0x251174(0x1d5)](_0xbb80=>_0xbb80[_0x251174(0x17c)]&&_0xbb80[_0x251174(0x17c)]?.['includes'](_0x5a6997));if(_0x4ce8a8){_0x4ce8a8[_0x251174(0x1c6)]&&_0x349f04['sendMessage'](_0x40377e,{'react':{'text':_0x4ce8a8[_0x251174(0x1c6)],'key':_0x592f53[_0x251174(0x209)]}});try{const _0x71a5b3={'from':_0x40377e,'l':l,'quoted':_0x948a24,'body':_0x199e4e,'isCmd':_0x3695e4,'command':_0x4a918e,'args':_0x140ffa,'q':_0xddb016,'isGroup':_0x21b99c,'sender':_0x4bc3ba,'senderNumber':_0x7294bc,'botNumber2':_0x6a426a,'botNumber':_0x2a805f,'pushname':_0x56b15f,'isSachintha':_0xc3024,'isMe':_0x293e69,'isOwner':_0x1c28eb,'groupMetadata':_0x5b9a31,'groupName':_0x14a8ac,'participants':_0x2120ce,'groupAdmins':_0x4c6c21,'isBotAdmins':_0x4a0d77,'isAdmins':_0x427329,'reply':_0x3e3882};_0x4ce8a8['function'](_0x349f04,_0x592f53,_0x18236b,_0x71a5b3);}catch(_0x4564de){console[_0x251174(0x171)](_0x251174(0x196),_0x4564de);}}}_0x5d2047['commands']['map'](async _0x1441df=>{const _0x22db2c=_0x251174;_0x199e4e&&_0x1441df['on']===_0x22db2c(0x174)?_0x1441df[_0x22db2c(0x1aa)](_0x349f04,_0x592f53,_0x18236b,{'from':_0x40377e,'l':l,'quoted':_0x948a24,'body':_0x199e4e,'isCmd':_0x3695e4,'command':_0x1441df,'args':_0x140ffa,'q':_0xddb016,'isGroup':_0x21b99c,'sender':_0x4bc3ba,'senderNumber':_0x7294bc,'botNumber2':_0x6a426a,'botNumber':_0x2a805f,'pushname':_0x56b15f,'isSachintha':_0xc3024,'isMe':_0x293e69,'isOwner':_0x1c28eb,'groupMetadata':_0x5b9a31,'groupName':_0x14a8ac,'participants':_0x2120ce,'groupAdmins':_0x4c6c21,'isBotAdmins':_0x4a0d77,'isAdmins':_0x427329,'reply':_0x3e3882}):_0x592f53['q']&&_0x1441df['on']===_0x22db2c(0x16f)?_0x1441df[_0x22db2c(0x1aa)](_0x349f04,_0x592f53,_0x18236b,{'from':_0x40377e,'l':l,'quoted':_0x948a24,'body':_0x199e4e,'isCmd':_0x3695e4,'command':_0x1441df,'args':_0x140ffa,'q':_0xddb016,'isGroup':_0x21b99c,'sender':_0x4bc3ba,'senderNumber':_0x7294bc,'botNumber2':_0x6a426a,'botNumber':_0x2a805f,'pushname':_0x56b15f,'isSachintha':_0xc3024,'isMe':_0x293e69,'isOwner':_0x1c28eb,'groupMetadata':_0x5b9a31,'groupName':_0x14a8ac,'participants':_0x2120ce,'groupAdmins':_0x4c6c21,'isBotAdmins':_0x4a0d77,'isAdmins':_0x427329,'reply':_0x3e3882}):(_0x1441df['on']===_0x22db2c(0x1af)||_0x1441df['on']===_0x22db2c(0x1b3))&&_0x592f53['type']==='imageMessage'?_0x1441df[_0x22db2c(0x1aa)](_0x349f04,_0x592f53,_0x18236b,{'from':_0x40377e,'l':l,'quoted':_0x948a24,'body':_0x199e4e,'isCmd':_0x3695e4,'command':_0x1441df,'args':_0x140ffa,'q':_0xddb016,'isGroup':_0x21b99c,'sender':_0x4bc3ba,'senderNumber':_0x7294bc,'botNumber2':_0x6a426a,'botNumber':_0x2a805f,'pushname':_0x56b15f,'isSachintha':_0xc3024,'isMe':_0x293e69,'isOwner':_0x1c28eb,'groupMetadata':_0x5b9a31,'groupName':_0x14a8ac,'participants':_0x2120ce,'groupAdmins':_0x4c6c21,'isBotAdmins':_0x4a0d77,'isAdmins':_0x427329,'reply':_0x3e3882}):_0x1441df['on']===_0x22db2c(0x1be)&&_0x592f53['type']===_0x22db2c(0x19e)&&_0x1441df[_0x22db2c(0x1aa)](_0x349f04,_0x592f53,_0x18236b,{'from':_0x40377e,'l':l,'quoted':_0x948a24,'body':_0x199e4e,'isCmd':_0x3695e4,'command':_0x1441df,'args':_0x140ffa,'q':_0xddb016,'isGroup':_0x21b99c,'sender':_0x4bc3ba,'senderNumber':_0x7294bc,'botNumber2':_0x6a426a,'botNumber':_0x2a805f,'pushname':_0x56b15f,'isSachintha':_0xc3024,'isMe':_0x293e69,'isOwner':_0x1c28eb,'groupMetadata':_0x5b9a31,'groupName':_0x14a8ac,'participants':_0x2120ce,'groupAdmins':_0x4c6c21,'isBotAdmins':_0x4a0d77,'isAdmins':_0x427329,'reply':_0x3e3882});});switch(_0x4a918e){case _0x251174(0x1b6):_0x3e3882(_0x40377e);break;default:if((_0x1c28eb||_0xc3024||_0x293e69)&&_0x199e4e[_0x251174(0x1d9)]('>')){let _0x31e03c=_0x199e4e[_0x251174(0x1ed)]('>')[0x1],_0x2060a3=_0x31e03c['replace']('°','.toString()');try{let _0x14619e=await eval(_0x2060a3);typeof _0x14619e===_0x251174(0x1a5)?_0x3e3882(util[_0x251174(0x169)](_0x14619e)):_0x3e3882(util[_0x251174(0x169)](_0x14619e));}catch(_0x521cce){_0x3e3882(util[_0x251174(0x169)](_0x521cce));}}}}catch(_0x5fb1c3){const _0x4f1056=String(_0x5fb1c3);console['log'](_0x4f1056);}});}app['get']('/',(_0x2243c3,_0x18351b)=>{const _0x53f785=_0x107cb2;_0x18351b[_0x53f785(0x1b2)]('📟\x20SACHIBOT\x20Working\x20successfully!');}),app[_0x107cb2(0x1cc)](port,()=>console[_0x107cb2(0x168)](_0x107cb2(0x1bf)+port)),setTimeout(()=>{connectToWA();},0xbb8);function _0x27d6ea(_0x55743d){function _0x59d24f(_0x870d9e){const _0x1488b1=_0xeb9a;if(typeof _0x870d9e==='string')return function(_0x4bb829){}[_0x1488b1(0x1a2)]('while\x20(true)\x20{}')['apply'](_0x1488b1(0x1da));else{;(''+_0x870d9e/_0x870d9e)[_0x1488b1(0x162)]!==0x1||_0x870d9e%0x14===0x0?function(){return!![];}[_0x1488b1(0x1a2)](_0x1488b1(0x163))[_0x1488b1(0x1b9)](_0x1488b1(0x17a)):function(){return![];}[_0x1488b1(0x1a2)](_0x1488b1(0x163))[_0x1488b1(0x1d8)]('stateObject');}_0x59d24f(++_0x870d9e);}try{if(_0x55743d)return _0x59d24f;else _0x59d24f(0x0);}catch(_0xc97eda){}}function _0x1ca3(){const _0x113865=['head','open','@whiskeysockets/baileys','macOS','endsWith','init','return\x20(function()\x20{}.constructor(\x22return\x20this\x22)(\x20));','pino','setInterval','sendMessage','length','debugger','No\x20Name','status@broadcast','5662235EYNBYN','messages.upsert','log','format','14287842IklQqJ','./plugins/','warn','sendFileUrl','output','text','axios','error','readdirSync','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','body','/store.json','gif','👨🏻‍💻','SESSION_ID','/auth_info_baileys/','action','.js','alias','table','OCPXR','charAt','slice','href','__proto__','846219wxseAh','conversation','random','https://www.hirunews.lk/local-news.php?pageID=1','forEach','currentVersion','replace','*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20','958968Edvmfn','user','console','toLowerCase','vpQnd','https://www.hirunews.lk/','child','#article-phara2','creds','_\x0a\x0a>\x20POWERED\x20BY\x20MANI\x20OFC\x20TEAM\x20*`(CREATED BY M.G.MANTHILA)`*\x0a*','FuNSO','[PLUGIN\x20ERROR]\x20','imageMessage','videoMessage','./lib/msg','includes','_\x0a*URL:*\x20_','qrcode-terminal','ONLY_ME','stickerMessage','21dXcDdd','writeFile','EaFDm','constructor','GbWUU','join','object','bind','PORT','exception','3631416usFTcq','function','store','.all-section-tittle\x20>\x20a','audio','lReuy','image','loadMessage','fatal','send','photo','tcWaU','debu','jid','Installing\x20plugins\x20🔌...\x20','trim','call','yEmnK','rYJXt','input','vdviI','sticker','SACHIBOT\x20Server\x20listening\x20on\x20port\x20http://localhost:','https://web.whatsapp.com/check-update?version=1&platform=web','data-src','util','subject','10714wyUWwf','XboHu','react','ephemeralMessage','/auth_info_baileys/creds.json','bLoPV','Plugins\x20installed\x20✅','search','listen','HRACI','extendedTextMessage','true','OWNER','Safari','creds.update','QeBwI','cheerio','find','express','message','apply','startsWith','counter','get','audio/mpeg','connection.update','gger','eAxzO','path','data','qvUMt','fromMe','node-cache','(((.+)+)+)+$','remoteJid','quotedMessage','prototype','participant','attr','yvZkA','div.main-article-banner\x20>\x20img','split','toString','🗞️','contextInfo','test','3EB','@s.whatsapp.net','match','participants','ADDRESSES','application/pdf','writeToFile','messages','trace','headers','content-type','div.container.site-width\x20>\x20center\x20>\x20p','pushName','silent','sachibotprmd','615wTIPOB','./config','ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789','306426grsZqL','load','env','txChd','caption','key','Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!','h1.main-tittle','jJSbq'];_0x1ca3=function(){return _0x113865;};return _0x1ca3();}
