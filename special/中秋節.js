
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.util);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
var status;

var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var need = "#fEffect/ItemEff/004/4#";

var to = "#fEffect/ItemEff/004/6#";


var topic = "雙11超級任務";
var today = new Date();
var todayp = (today.getMonth()+1) + "/" + today.getDate(); 

var pack = [
   [
     [4470004,3,2,-1],	 // 0 = 獎勵  2 = 所需材料
	 [4470005,2,2,-1],  //改這邊
	 [4000273,500,2,-1],
	 [4000276,500,2,-1],
	 [4000272,500,2,-1],
	 [4000271,500,2,-1],
	 [4470007,50,2,-1],
	 [4001517,200,2,-1],

	 [2049116,3,0,-1],//尊爵轉
	 [4470003,1,0,-1],
	 [4470002,2,0,-1],
	 [5062002,888,0,-1],
	 [2022530,5,0,-1],
	 [2450000,5,0,-1],
	 [4470010,5,0,-1],
	 [5640002,1,0,-1],
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
		var msg =  "                   " + icon5 + " #e#d【" + topic + "】#k#n\r\n\r\n";
		msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
		for(var a = 0 ; a < pack.length ; a++){
			msg += "#L" + a + "#"+icon3+"#b《 #k#r#e" + "雙11" + " 任務#n#k#b 》#k #d 查看任務通知#k\r\n";
		}
		cm.sendSimple(cm.getPlayer().getPrizeLog("雙11任務") > 0 ? "您已完成#r" + "雙11" + " #k任務" : msg);
	}else if(status == 1){
		this. sel = selection;
		if(sel < 0){
			cm.dispose();
		}else{
		var memo = icon5 + " #e#b【此任務需要物品為】 :#k\r\n";
		var needs = "";
		for(var b = 0 ; b < pack[sel].length ; b++) {
			if(pack[sel][b][2] == 2){ 
			   needs += need + " #i" + pack[sel][b][0] + " # #z" + pack[sel][b][0] + "# 共 : #r" + pack[sel][b][1] + " 個#k\r\n";
			}
		}
		memo += needs + "\r\n\r\n";
		memo += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n\r\n";
		var extra = "";
		for(var bj = 0 ; bj < pack[sel].length ; bj++) {
			if(pack[sel][bj][2] != 2){
				var date = pack[sel][bj][3] == -1 ? "#b無期限#k" : ("#b" + pack[sel][bj][3] + "天#k");
			    extra += get + " #d獎勵#k #b #i" + pack[sel][bj][0] + " # #z" + pack[sel][bj][0] + "##k 共 : #r" + pack[sel][bj][1] + " 個#k (" + date + ")\r\n";
			}
		}
		memo += icon5 + " #r【可兌換】  : #k\r\n" + extra; 
		cm.sendYesNo(memo);
		}
	}else if(status == 2){
		var checkitems = 1;
		var notice = "#b您欲完成#k #r" + "雙11" + "任務 #b缺少以下材料 ：#k\r\n";
		for(var cc = 0 ; cc < pack[sel].length ; cc ++){
			if(pack[sel][cc][2] == 2 && !cm.haveItem(pack[sel][cc][0],pack[sel][cc][1])){
				checkitems ++;
				notice += "#d缺少材料#k :#i" + pack[sel][cc][0] + "# #z" + pack[sel][cc][0] + "# 共 #r " + pack[sel][cc][1] + "個#k\r\n";
			}
		}
		if(checkitems > 1){
			cm.sendOk(notice);
			cm.dispose();
		}else {
			

			for(var par = 0; par < pack[sel].length ; par++){
				if(pack[sel][par][2] < 2){
			        cm.gainItemNoTrade(pack[sel][par][0],pack[sel][par][1],pack[sel][par][3]);
				}else if(pack[sel][par][2] == 2){
					cm.gainItem(pack[sel][par][0],-pack[sel][par][1]);
				}					
			}
			//cm.getPlayer().modifyCSPoints(1,500,true);
			cm.sendOk("謝謝您的兌換!");
			cm.getPlayer().setPrizeLog("雙11任務");
			cm.dispose();
		}
	}
}
		