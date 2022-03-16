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


var ticket = 5640007;

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
	
	if(status == 0){
		var msg = "#e";
		msg += "             " + icon5 + " #d破功專區#k\r\n";
		msg += icon1 + " 每一次破功皆須消耗一個 #i" + ticket + "#\r\n";
		msg += icon1 + " 基礎傷害上限為 : #r200萬#k\r\n";
		msg += icon1 + " 每次破功傷害提升 : #r50萬#k\r\n";
		msg += icon1 + " 本系統最高破功提升至 : #r2500萬#k\r\n";
		msg += icon1 + " #d當前角色傷害上限 :#k #r" + (cm.getPlayer().getOverPower() + 4)*50 + "萬#k\r\n\r\n";
		msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n\r\n";
		msg += icon3 + " #b是否要破功呢? 若要的話請點選#k #r「是」#k\r\n";
		cm.sendYesNo(msg);
	}else if(status == 1){
		var over = cm.getPlayer().getOverPower();
		if(!cm.haveItem(ticket)){
			cm.sendOk("#e您的身上並沒有#i" + ticket + "#!");
			cm.dispose();
		}else if(over >= 46){
			cm.sendOk("#e您已達破攻系統的極限 : #r2500萬#k");
			cm.dispose();
		}else{
			cm.getPlayer().setOverPower(over+1);
			cm.gainItem(ticket,-1);
			cm.sendOk("#e#d已成功完成破攻!#k");
			status = -1
		}
	}
}
		