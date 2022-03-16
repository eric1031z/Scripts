var status;

var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var need = "#fEffect/ItemEff/004/4#";

var topic = "贊助累積"; //裡包js名稱

//定義獎勵
var pack = [
    [
	  ["1000"],
	  ["累積#k #r#e1000#n#k #b贊助獎勵","物品如下 :"],
	  [1114400,1],
	  [4470002,3],
	  [2022179,10],
	  [2450000,5],
	  [5062002,50],
	],
	
    [
	  ["3000"],
	  ["累積#k #r#e3000#n#k #b贊助獎勵","物品如下 :"],
	  [1114400,1],
	  [4470002,3],
	  [2022179,30],
	  [2450000,10],
	  [5062002,50],
	],
	
	[
	  ["5000"],
	  ["累積#k #r#e5000#n#k #b贊助獎勵","物品如下 :"],
	  [1082749,1],//手套
	  [1672089,1],
	  [4470002,10],
	  [5640005,5],
	  [5220010,5],
	],
	
	[
	  ["8000"],
	  ["累積#k #r#e8000#n#k #b贊助獎勵","物品如下 : #d全屬9% 應用潛能#k"],
      [4470002,5],
	  [4470003,5],
	  [5640005,3],
	  [5220010,5],
	  [5062002,888],
	  [5640007,2],
	  [4280001,1],
	  [5490001,1],
	],
	
	[
	  ["10000"],
	  ["累積#k #r#e10000#n#k #b贊助獎勵","物品如下 :"],
	  [1073464,1],//手套
	  [2046056,3],
	  [2046057,3],
	  [2046140,3],
	  [2046141,3],
	  [2046391,3],
	  [2046392,3],
	  [2046509,3],
	  [2046510,3],
	  [4470003,3],
	],
	
	[
	  ["13000"],
	  ["累積#k #r#e13000#n#k #b贊助獎勵","物品如下 : #d全屬9% 應用潛能#k"],
      [4470002,5],
	  [4470003,8],
	  [5640005,5],
	  [5220010,5],
	  [5062002,888],
	  [5640007,3],
	  [4280001,2],
	  [5490001,2],
	],
	
	[
	  ["15000"],
	  ["累積#k #r#e15000#n#k #b贊助獎勵","物品如下 :"],
	  [1132322,1],//手套
	  [4470003,5],
	  [5220010,10],
	  [5640005,10],
	  [1202253,1],
	],
	
	[
	  ["20000"],
	  ["累積#k #r#e20000#n#k #b贊助獎勵","物品如下 :#d破功突破至3000萬#k"],
	  [1005583,1],//手套
	  [4470003,5],
	  [2046056,5],
	  [2046057,5],
	  [2046140,5],
	  [2046141,5],
	  [2046391,5],
	  [2046392,5],
	  [2046509,5],
	  [2046510,5],
	],
	
	[
	  ["25000"],
	  ["累積#k #r#e25000#n#k #b贊助獎勵","物品如下 :"],
	  [1012724,1],//手套
	  [4470003,10],
	  [5220010,10],
	  [1113231,1],
	  [2046389,3],
	  [2046390,3],
	],
	
	[
	  ["30000"],
	  ["累積#k #r#e30000#n#k #b贊助獎勵","物品如下 :#d破功突破至5000萬，可以退一件裝的捲軸#k"],
	  [1114401,1],//手套
	  [1114401,1],
	  [4470003,10],
      [5640005,20],
	],
	
	[
	  ["35000"],
	  ["累積#k #r#e35000#n#k #b贊助獎勵","物品如下 :"],
	  [1103281,1],//手套
	  [1113211,1],
	  [4470003,10],
	  [2046389,3],
      [2046390,3],
	],
	
	[
	  ["40000"],
	  ["累積#k #r#e40000#n#k #b贊助獎勵","物品如下 :#d破功突破至7500萬#k"],
	  [1703023,1],//手套
	  [1143174,1],
	  [4470003,10],
	  [2046054,3],
	  [2046055,3],
	  [2046138,3],
	  [2046139,3],
	  [2046389,3],
      [2046390,3],
	  [2046507,3],
	  [2046508,3],
	],
	
	[
	  ["45000"],
	  ["累積#k #r#e45000#n#k #b贊助獎勵","物品如下 :\r\n#d另有200全屬AD/AP輪迴 與V卷任選6張找GM領取#k"],
	  [4470014,5],
	  [4470003,5],
	],
	
	[
	  ["50000"],
	  ["累積#k #r#e50000#n#k #b贊助獎勵","物品如下 :\r\n#d另有250全屬AD/AP點裝上衣 與V卷任選7張找GM領取領取#k"],
	  [4470014,6],
	  [4470003,6],
	],
	
	[
	  ["55000"],
	  ["累積#k #r#e55000#n#k #b贊助獎勵","物品如下 :\r\n#d另有250全屬AD/AP點裝下衣<可以跟上衣合成套服能力500 V卷任選7張找GM領取#k"],
	  [4470014,7],
	  [4470003,7],
	],
	
	[
	  ["60000"],
	  ["累積#k #r#e60000#n#k #b贊助獎勵","物品如下 :\r\n#d另有300全屬AD/AP透明眼睛  自選潛能2條,V卷任選8張找GM領取#k"],
	  [4470014,8],
	  [4470003,8],
	],

];



function start(){
	status = -1;
	action(1,0,0);
}




function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if(mode == 0){
		cm.dispose();
	}
	
    if (status == 0) {
		var msg =  "             " + icon5 + " #e#d累積贊助#k #b當前累積 :#k#r" + cm.getPlayer().getDonate() + "#k#n\r\n\r\n";
		msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
		for(var a = 0 ; a < pack.length ; a++){
			var canbuy = pack[a][0][1] > 200 ? "無限制" :  pack[a][0][1];
			msg += "#L" + a + "#" + icon3 + " #b" + pack[a][1][0] + "#k\r\n";
		}
		cm.sendSimple(msg);
	}else if(status == 1){
		this. sel = selection;
		var memo = icon5 + " #b" + pack[sel][1][0] + "累積贊助內容物為以下  " +"#k\r\n";
		memo += icon5 + " #r#e" + pack[sel][1][1] + "#k#n\r\n\r\n";
		
// 定義文字	
		
						
			
		for(var b = 2 ; b < pack[sel].length ; b++){
			var date = pack[sel][b][2] == -1 ? "無期限" : (pack[sel][b][2] + "天");
			
			memo += get + " #e#d#i" + pack[sel][b][0] + "# #z" + pack[sel][b][0] + "##k 共 : #r" + pack[sel][b][1] + " 個#k#n\r\n"; 
		}
		var deal = pack[sel][0][1] > 200 ? "無限制" :  pack[sel][0][1];
		memo += "\r\n" + need + " #e#b需要累積 : #k #r" + pack[sel][0][0] + " #k #b贊助#k#n";
		if((cm.getPlayer().getDonate() >= pack[sel][0][0] && cm.getPlayer().getPrizeLog("領取贊助" + pack[sel][0][0]) == 0) || cm.getPlayer().isGM()){
		    cm.sendYesNo(memo);
		}else{
			cm.sendOk(memo);
			status = -1;
		}
	}else if(status == 2){
	    for(var c = 2 ; c < pack[sel].length ; c++){
			if(pack[sel][c][2] == null){
				if(sel > 1){
					cm.gainItem(pack[sel][c][0],pack[sel][c][1]);
				}else{
					cm.gainItemNoTrade(pack[sel][c][0],pack[sel][c][1],-1);
				}
				
			}else if(pack[sel][c][3] == null){
			    cm.gainItemP1(pack[sel][c][0],pack[sel][c][1],pack[sel][c][2],cm.getPlayer().getClient());
			}else if(pack[sel][c][4] == null){
				cm.gainItemP2(pack[sel][c][0],pack[sel][c][1],pack[sel][c][2],pack[sel][c][3],cm.getPlayer().getClient());
			}else if(pack[sel][c][5] == null){
				cm.gainItemP3(pack[sel][c][0],pack[sel][c][1],pack[sel][c][2],pack[sel][c][3],pack[sel][c][4],cm.getPlayer().getClient());
			}else{
				cm.gainItem(pack[sel][c][0],pack[sel][c][1],pack[sel][c][2],pack[sel][c][3],pack[sel][c][4],pack[sel][c][5],pack[sel][c][6],pack[sel][c][7],pack[sel][c][8],pack[sel][c][9],pack[sel][c][10],pack[sel][c][11],pack[sel][c][12],pack[sel][c][13],pack[sel][c][14],pack[sel][c][15]);
			}
			
			
		}
        
		if(pack[sel][0][0] == "8000" || pack[sel][0][0] == "13000"){
		    cm.setPCount(cm.getPlayer().getId(),40086,1,4);	
		}else if(pack[sel][0][0] == "20000"){
			cm.getPlayer().setOverPower(56);
		}else if(pack[sel][0][0] == "30000"){
			cm.getPlayer().setOverPower(96);
		}else if(pack[sel][0][0] == "40000"){
			cm.getPlayer().setOverPower(196);
		}
      

		cm.getPlayer().setPrizeLog("領取贊助" + pack[sel][0][0]);
		cm.sendOk("#d謝謝您的贊助!#k");
		cm.dispose();
	}
}
		