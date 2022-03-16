
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

var foc = "#fEffect/ItemEff/004/2#";


var topic = "雙社團每日推文";



var prized = [ //日期大的擺上面!!!!!!!!!
    ["10/30",1],


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
		var msg = "";
		msg += icon5 + " #e#d推文獎勵超級大放送#k\r\n";
		msg += icon1 + " #b雙社團當日推文滿#k #r100則#k #b全服可領#k #r200個#k #i5062002#\r\n";
		msg += icon1 + " #b只有#k #r當日註冊前(包含當日)#k #b的玩家可以領取此獎勵\r\n";
		msg += icon1 + " #b只保留#k #r7日內#k #b的獎勵紀錄，請務必盡早領取!#k\r\n";
		var count = 0;
		for(var i = 0 ; i < prized.length ; i++){
			if(count < 7 && prized[i][1] == 1){
				//if(cm.getPlayer().getPrizeLog(prized[sel][0] + "推文禮包") == 0){
					msg += "#L" + i + "#" + icon3 + " 【" + prized[i][0] + "】推文大禮包\r\n";	
				    count ++;
				//}
				
			}
		}
		cm.sendSimple(msg);
	}else if(status == 1){
		var sel = selection;
		if(prized[sel] == null){
			cm.sendOk("統計尚未開始!");
			cm.dispose();
		}else if(cm.getPlayer().getPrizeLog(prized[sel][0] + "推文禮包") > 0){
			cm.sendOk("您已經領取過這個禮包囉!");
			status = -1;
		}else{
			/*if(cm.isBeforeCreate("2020/" + prized[sel][0])){
				cm.sendOk("本獎勵只提共給 #r" + prized[sel][0] + "(包含)#k 前註冊的玩家喔!");
				cm.dispose();
			}else{
				cm.gainItem(5062002,200);
				cm.getPlayer().setPrizeLog(prized[sel][0] + "推文禮包");
				cm.sendOk("爽起來!!!!!!");
				status = -1;
			}*/
			cm.gainItem(5062002,200);
			cm.getPlayer().setPrizeLog(prized[sel][0] + "推文禮包");
			cm.sendOk("爽起來!!!!!!");
			status = -1;
		}
	}
}



function modify(a){
	var day1 = new Date(); 
	day1.setTime(day1.getTime()-24*60*60*1000*a);
    var s1 = (day1.getMonth()+1) + "/" + day1.getDate();
	return s1;
	
}
		