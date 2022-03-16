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


var today = new Date();
var todayp = (today.getMonth()+1) + "/" + (today.getDate()); 

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
		var b1 = cm.getPlayer().getOneTimeLog(todayp + "炎魔");
		var b2 = cm.getPlayer().getOneTimeLog(todayp + "龍王");
		var b3 = cm.getPlayer().getOneTimeLog(todayp + "皮卡");
		var b4 = cm.getPlayer().getOneTimeLog(todayp + "女皇");
		var b5 = cm.getPlayer().getOneTimeLog(todayp + "阿卡");
		var b6 = cm.getPlayer().getOneTimeLog(todayp + "拉圖");
		var b7 = cm.getPlayer().getOneTimeLog(todayp + "凡雷");
		var msg = "";
		msg += "                 " + icon5 + " #b#eBOSS剩餘次數資訊#k\r\n\r\n";
		msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
		msg += icon3 + " #d鐘王#k #b剩餘 :#k #r" + (30-b6) + "次#k#d(30次/天)\r\n";
		msg += icon3 + " #d炎魔#k #b剩餘 :#k #r" + (30-b1) + "次#k#d(30次/天)\r\n";
		msg += icon3 + " #d龍王#k #b剩餘 :#k #r" + (30-b2) + "次#k#d(30次/天)\r\n";
		msg += icon3 + " #d皮卡#k #b剩餘 :#k #r" + (10-b3) + "次#k#d(10次/天)\r\n";
		msg += icon3 + " #d女皇#k #b剩餘 :#k #r" + (5-b4) + "次#k#d(5次/天)\r\n";
		msg += icon3 + " #d阿卡#k #b剩餘 :#k #r" + (5-b5) + "次#k#d(5次/天)\r\n";
		msg += icon3 + " #d凡雷#k #b剩餘 :#k #r" + (5-b7) + "次#k#d(5次/天)\r\n";
		cm.sendOk(msg);
		cm.dispose();
	}
}