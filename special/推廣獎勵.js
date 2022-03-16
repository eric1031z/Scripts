
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


var topic = "每日推廣";
var today = new Date();
var todayp = (today.getMonth()+1) + "/" + today.getDate(); 

var pack = [
   [

	 [2450000,2,0,-1],
	 [5062002,6,0,-1],
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
			msg += "#L" + a + "#"+icon5+"#b《 #k#r" + todayp + " 推廣#k#b 》#k #d 領取獎勵#k\r\n";
		}
		if(cm.getPlayer().getPrizeLog(todayp + "廣") > 0){
		    cm.sendSimple(cm.getPlayer().getPrizeLog(todayp + "推廣") > 0 ? "您已完成#r" + todayp + " #k推廣" : msg);
		}else{
			cm.sendOk("您今日尚未推廣或GM尚未登記完成名單!請稍後!");
			cm.dispose();
		}
	}else if(status == 1){
		this. sel = selection;
        if(sel < 0){
			cm.dispose();
		}else{
		
		var extra = icon5 + " #b今日推廣獎勵#k\r\n";
		for(var bj = 0 ; bj < pack[sel].length ; bj++) {
			if(pack[sel][bj][2] != 2){
				var date = pack[sel][bj][3] == -1 ? "#b無期限#k" : ("#b" + pack[sel][bj][3] + "天#k");
			    extra += icon3 + " #d獎勵#k #b #i" + pack[sel][bj][0] + " # #z" + pack[sel][bj][0] + "##k 共 : #r" + pack[sel][bj][1] + " 個#k (" + date + ")\r\n";
				
			}
		}
		extra += icon3 + " #d獎勵#k  #b200GASH#k\r\n";
		cm.sendYesNo(extra);
		}
	}else if(status == 2){
		var checkitems = 1;
		
		if(checkitems > 1){
			cm.sendOk(notice);
			cm.dispose();
		}else {

			for(var par = 0; par < pack[sel].length ; par++){
				
			    cm.gainItem(pack[sel][par][0],pack[sel][par][1],pack[sel][par][3]);
							
			}
			cm.getPlayer().modifyCSPoints(0,200,true);
			cm.sendOk("謝謝您的推廣!");
			cm.getPlayer().setPrizeLog(todayp + "推廣");
			cm.dispose();
		}
	}
}
		