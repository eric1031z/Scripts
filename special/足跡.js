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
var today = new Date();
var todayp = (today.getMonth()+1) + "/" + (today.getDate()); 

function start(){
	status = -1;
	action(1,0,0);
}




function action(mode, type, selection) {
	
    var point = 0;
	var set1 = cm.getPlayer().getPrizeLog(todayp + "任務") > 0 ? check : uncheck;
	if(set1 == check){
		point += 20;
	}
	
	var set2 = cm.getPlayer().getPrizeLog(todayp + "簽到") > 0 ? check : uncheck;
	if(set2 == check){
		point += 5;
	}
	
	var set3 = cm.getPlayer().getPrizeLog(todayp + "G轉") > 0 ? check : uncheck;
	if(set3 == check){
		point += 10;
	}
	
	var set4 = cm.getPlayer().getPrizeLog(todayp + "無償超轉") > 0 ? check : uncheck;
	if(set4 == check){
		point += 5;
	}
	
	var set5 = cm.getPlayer().getPrizeLog(todayp + "有償超轉") > 0 ? check : uncheck;
	if(set5 == check){
		point += 20;
	}
	
	var set6 = cm.getPlayer().getOneTimeLog(todayp + "炎魔") > 0 ? check : uncheck;
	if(set6 == check){
		point += 5;
	}
	
	var set7 = cm.getPlayer().getOneTimeLog(todayp + "龍王") > 0 ? check : uncheck;
	if(set7 == check){
		point += 10;
	}
	
	var set8 = cm.getPlayer().getOneTimeLog(todayp + "女皇") > 0 ? check : uncheck;
	if(set8 == check){
		point += 10;
	}
	
	var yesterday = ((today.getMonth() + 1) < 10 ? "0"+ (today.getMonth() + 1) : (today.getMonth()+1)) + "/" + (today.getDate()-1); 
	var set9 = cm.getPlayer().getOneTimeLog(yesterday + "全服") > 0 ? check : uncheck;
	if(set9 == check){
		point += 10;
	}
	
	var set10 = cm.getPlayer().getPrizeLog(todayp + "普轉") > 0 ? check : uncheck;
	if(set10 == check){
		point += 5;
	}
	
	var set11 = cm.getPlayer().getPrizeLog(todayp + "超綠") > 0 ? check : uncheck;
	if(set11 == check){
		point += 10;
	}
	
	var set12 = cm.getPlayer().getPrizeLog(todayp + "101") > 0 ? check : uncheck;
	if(set12 == check){
		point += 10;
	}
	
	var set13 = cm.getPlayer().getPrizeLog(todayp + "女神") > 0 ? check : uncheck;
	if(set13 == check){
		point += 10;
	}
	
	var set14 = cm.getPlayer().getPrizeLog(todayp + "造型") > 0 ? check : uncheck;
	if(set14 == check){
		point += 5;
	}
	
	var set15 = cm.getPlayer().getPrizeLog(todayp + "轉生") > 0 ? check : uncheck;
	if(set15 == check){
		point += 20;
	}
	
	var set16 = cm.getPlayer().getPrizeLog(todayp + "推文禮包") > 0 ? check : uncheck;
	if(set16 == check){
		point += 10;
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
		msg += "    " + icon5 + " #d暖光谷每日足跡 日期 : #k #b" + todayp + "#k\r\n\r\n";
		msg += "    " + icon1 + " 完成以下指定的項目皆可獲得對應點數\r\n";
		msg += "    " + icon1 + " 累積不同的點數可得到相對應的好禮\r\n";
		msg += "    " + icon1 + " 今日總累積點數 : #r" + point + "#k\r\n\r\n";
		msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
		
		
		msg += "    " + set1 + " #b完成每日任務#k #r(20點)#k\r\n";
		msg += "    " + set2 + " #b完成每日簽到#k #r(5點)#k\r\n";
		msg += "    " + set3 + " #b抽過3次GASH轉#k #r(10點)#k\r\n";
		msg += "    " + set10 + " #b抽過一次普轉#k #r(5點)#k\r\n";
		msg += "    " + set4 + " #b抽過無償超轉#k #r(5點)#k\r\n";
		msg += "    " + set5 + " #b抽過有償超轉#k #r(20點)#k\r\n";
		msg += "    " + set6 + " #b打倒殘暴炎魔#k #r(5點)#k\r\n";
		msg += "    " + set7 + " #b打倒闇黑龍王#k #r(10點)#k\r\n";
		msg += "    " + set8 + " #b打到西格諾斯#k #r(10點)#k\r\n";
		msg += "    " + set9 + " #b領取全服贊助#k #r(10點)#k\r\n";
		msg += "    " + set11 + " #b完成超綠組隊#k #r(5點)#k\r\n";
		msg += "    " + set12 + " #b完成101組隊#k #r(10點)#k\r\n";
		msg += "    " + set13 + " #b完成女神組隊#k #r(10點)#k\r\n";
		msg += "    " + set14 + " #b更換過髮型#k #r(5點)#k\r\n";
		msg += "    " + set15 + " #b完成一次轉生#k #r(20點)#k\r\n";
		msg += "    " + set16 + " #b領取推文獎勵#k #r(10點)#k\r\n";

		
		cm.sendOk(msg);
		cm.dispose();
	}
}