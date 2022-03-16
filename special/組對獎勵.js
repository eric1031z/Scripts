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

var check = "#fUI/UIWindow/Memo/check1#";
var uncheck = "#fUI/UIWindow/Memo/check0#";

var topic = "限購商店";

var today = new Date();
var todayp = (today.getMonth()+1) + "/" + today.getDate(); 

function start(){
	status = -1;
	action(1,0,0);
}




function action(mode, type, selection) {
    
	
	var pq1 = cm.getPlayer().getPrizeLog("超綠" + todayp) > 0 ? check : uncheck;
	var pq2 = cm.getPlayer().getPrizeLog("101" + todayp) > 0 ? check : uncheck;
	var pq3 = cm.getPlayer().getPrizeLog("女神" + todayp) > 0 ? check : uncheck;
	var pq4 = cm.getPlayer().getPrizeLog("月妙" + todayp) > 0 ? check : uncheck;
	
	var pass = false;
	if(cm.getPlayer().getPrizeLog("超綠" + todayp) > 0 && cm.getPlayer().getPrizeLog("101" + todayp) > 0 && cm.getPlayer().getPrizeLog("女神" + todayp) > 0 && cm.getPlayer().getPrizeLog("月妙" + todayp) > 0){
		pass = true;
	}
	
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if(mode == 0){	
		cm.dispose();
	}
	
	if(status == 0){
		var msg = "#e";
		msg += icon5 + " #d每日組隊獎勵#k 日期 :#k #r" + todayp + "#k\r\n\r\n";
		msg += icon1 + " 超綠 : " + pq1 + "\r\n";
		msg += icon1 + " 玩具 : " + pq2 + "\r\n";
		msg += icon1 + " 女神 : " + pq3 + "\r\n";
		msg += icon1 + " 月妙 : " + pq4 + "\r\n";
		msg += icon3 + " #b只要完成以上組隊任務即可獲得#k : #i5640002#\r\n";  
		if(pass){
			cm.sendYesNo(msg + "" + icon3 + " #b若要領取請點選#k #r「是」#k");
		}else{
			cm.sendOk(msg);
			cm.dispose();
		}
	}else if(status == 1){
		if(cm.getPlayer().getPrizeLog(todayp + "組隊獎勵") > 0){
			cm.sendOk("#e您已完成過今日的組隊獎勵!");
			cm.dispose();
		}else{
			cm.gainItem(5640002,1);
			cm.gainItem(5062002,200);
			cm.getPlayer().setPrizeLog(todayp + "組隊獎勵");
			cm.sendOk("#e已發送獎勵!");
			cm.dispose();
		}
	}
}