
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.util);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
var status;
var icon1 = "#fUI/UIWindow/Quest/icon0#"; //黃驚嘆
var icon5 = "#fItem/Etc/0422/04220176/info/iconRaw#"; //new
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //藍圈
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時


var topic = "每日奧術任務";
var today = new Date();
var todayp = (today.getMonth()+1) + "/" + today.getDate(); 

var pack = [
   [
     [4034922,30,2,-1],	 // 0 = 獎勵  2 = 所需材料
	 [4034923,30,2,-1],
	 [4034924,30,2,-1],
	 [4034925,30,2,-1],
	 
     [5062002,30,0,-1],
	 [2049116,2,0,-1],
	 [4001578,5,0,-1],

	 
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
		var msg =  icon3 + " #d【" + topic + "】#k\r\n";
		
		for(var a = 0 ; a < pack.length ; a++){
			msg += "#L" + a + "#"+icon5+"#b《 #k#r" + todayp + " 每日奧術任務#k#b 》#k #d 查看任務通知#k\r\n";
		}
		cm.sendSimple(cm.getPlayer().getPrizeLog(todayp + "奧術") > 0 ? "您已完成#r" + todayp + " #k每日奧術任務" : msg);
	}else if(status == 1){
		this. sel = selection;
		if(sel < 0){
			cm.dispose();
		}else{
		var memo = "#b【此任務需要物品為】 :#k\r\n";
		var needs = "";
		for(var b = 0 ; b < pack[sel].length ; b++) {
			if(pack[sel][b][2] == 2){ 
			   needs += "#i" + pack[sel][b][0] + " # #z" + pack[sel][b][0] + "# 共 : #r" + pack[sel][b][1] + " 個#k\r\n";
			}
		}
		memo += needs + "\r\n-------------------------------------------------\r\n";
		var extra = "";
		for(var bj = 0 ; bj < pack[sel].length ; bj++) {
			if(pack[sel][bj][2] != 2){
				var date = pack[sel][bj][3] == -1 ? "#b無期限#k" : ("#b" + pack[sel][bj][3] + "天#k");
			    extra += "#d獎勵#k #b #i" + pack[sel][bj][0] + " # #z" + pack[sel][bj][0] + "##k 共 : #r" + pack[sel][bj][1] + " 個#k (" + date + ")\r\n";
			}
		}
		memo += "#r【可兌換】  : #k\r\n" + extra; 
		cm.sendYesNo(memo);
		}
	}else if(status == 2){
		var checkitems = 1;
		var notice = "#b您欲完成#k #r" + todayp + "任務 #b缺少以下材料 ：#k\r\n";
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
			        cm.gainItemPeriod(pack[sel][par][0],pack[sel][par][1],pack[sel][par][3]);
				}else if(pack[sel][par][2] == 2){
					cm.gainItem(pack[sel][par][0],-pack[sel][par][1]);
				}					
			}
			cm.sendOk("謝謝您的兌換!");
			cm.getPlayer().setPrizeLog(todayp + "奧術");
			cm.dispose();
		}
	}
}
		