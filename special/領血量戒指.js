load('nashorn:mozilla_compat.js');
importPackage(Packages.client);

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


var hp = 4470008;
var mp = 4470009;
var sel = -1;
var s = -1;

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
		msg += icon5 + " #e#d血魔大躍進#k\r\n";
		msg += foc + " 當前實際血/魔量值 :#k #r" + cm.getPlayer().getStat().getMaxHp() + "/" + cm.getPlayer().getStat().getMaxMp() + "#k\r\n";
		msg += foc + " 當前血量提升倍率 :#k #r" + cm.getPlayer().getStat().getPHP() + " %#k\r\n";
		msg += icon1 + " #b每一個#k #i" + hp + "# #r#z" + hp + "##k #b將提供#k #r15-30#k #b的血量\r\n";
		msg += icon1 + " #b每一個#k #i" + mp + "# #r#z" + mp + "##k #b將提供#k #r15-30#k #b的魔量#k\r\n";
		msg += "#L0#" + icon3 + " 我要洗血!\r\n";
		msg += "#L1#" + icon3 + " 我要洗魔!\r\n";
		cm.sendSimple(msg);
	}else if(status == 1){
		sel = selection;
		cm.sendGetNumber(icon5 + " #b請輸入欲洗血/魔的次數#k",1,1,20);
	}else if(status == 2){
		s = selection;
		if(sel == 0){
			
			var count = cm.getPlayer().itemQuantity(hp);
			if(cm.getPlayer().getStat().getMaxHp() >= 99999){
				cm.sendOk("#b您的血量已經到達最高值#k #r99999#k");
				status = -1;
			}else if(count < s){
				cm.sendOk("#b您的#k #r#z" + hp + "##k #b不足#k #r" + s + "#k #b個#k");
				status = -1;
			}else{
				var msg = "#e";
			    var total = 0;
			    for(var i = 0 ; i < s ; i ++){
				    var rand = Math.floor(Math.random()*16) + 15;
				    msg += icon1 + " #d第#k #r" + (i+1) +  "#k #d次洗血提升#k - #b" + rand + "#k\r\n";
				    total += rand;
			    }
			    msg += "-------------------------------------------\r\n";
				msg += icon1 + " #r以下顯示均為不含裝備加成的實際血量提升#k\r\n";
			    msg += icon5 + " #b本次洗血次數共 : #k#r" + s + "#k #b次 共提升 #r" + total + "#k #b點HP\r\n";
			    msg += icon5 + " #b角色HP由#k #r" + cm.getPlayer().getStat().getMaxHp();
			    cm.getPlayer().getStat().setMaxHp(cm.getPlayer().getStat().getMaxHp() + total, cm.getPlayer());
			    cm.getPlayer().updateSingleStat(MapleStat.MAXHP, cm.getPlayer().getStat().getMaxHp());
				msg += "#k #b提升至#k #r" + (cm.getPlayer().getStat().getMaxHp()) + "#k\r\n";
			    cm.gainItem(hp,-s);
			    cm.sendOk(msg);
			    status = -1;
			}
			
		}else if(sel == 1){
			var count = cm.getPlayer().itemQuantity(mp);
			if(cm.getPlayer().getStat().getMaxMp() >= 99999){
				cm.sendOk("#b您的魔量已經到達最高值#k #r99999#k");
				status = -1;
			}else if(count < s){
				cm.sendOk("#b您的#k #r#z" + mp + "##k #b不足#k #r" + s + "#k #b個#k");
				status = -1;
			}else{
				var msg = "#e";
			    var total = 0;
			    for(var i = 0 ; i < s ; i ++){
				    var rand = Math.floor(Math.random()*16) + 15;
				    msg += icon1 + " #d第#k #r" + (i+1) +  "#k #d次洗魔提升#k - #b" + rand + "#k\r\n";
				    total += rand;
			    }
			    msg += "-------------------------------------------\r\n";
				msg += icon1 + " #r以下顯示均為不含裝備加成的實際魔量提升#k\r\n";
			    msg += icon5 + " #b本次洗魔次數共 : #k#r" + s + "#k #b次 共提升 #r" + total + "#k #b點MP\r\n";
			    msg += icon5 + " #b角色MP由#k #r" + cm.getPlayer().getStat().getMaxMp();
			    cm.getPlayer().getStat().setMaxMp(cm.getPlayer().getStat().getMaxMp() + total, cm.getPlayer());
			    cm.getPlayer().updateSingleStat(MapleStat.MAXMP, cm.getPlayer().getStat().getMaxMp());
				msg += "#k #b提升至#k #r" + (cm.getPlayer().getStat().getMaxMp()) + "#k\r\n";
			    cm.gainItem(mp,-s);
			    cm.sendOk(msg);
			    status = -1;
			}
		}
	}
}