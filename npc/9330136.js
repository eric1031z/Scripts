load('nashorn:mozilla_compat.js');
importPackage(Packages.server);



var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var need = "#fEffect/ItemEff/004/4#";



var status = -1;

function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }
	
	if(mode == 0){
		cm.dispose();
	}
	
	if(status == 0){
		var msg = "";
		msg += icon5 + " #e#d特殊轉蛋區#k\r\n";
		msg += "#L0#" + icon3 + " #b技能轉蛋#k\r\n";
		msg += "#L1#" + icon3 + " #b椅子轉蛋#k\r\n";
		msg += "#L2#" + icon3 + " #b稱號轉蛋#k\r\n";
		msg += "#L3#" + icon3 + " #b潛能轉蛋#k\r\n";
		msg += "#L4#" + icon3 + " #b五潛轉蛋#k\r\n";
		cm.sendSimple(msg);
	}else if(status == 1){
		var sel = selection;
		if(sel == 0){
			cm.dispose();
			cm.openNpc(9330136,"技能轉蛋");
		}else if(sel == 1){
			cm.dispose();
			cm.openNpc(9330136,"椅子轉蛋");
		}else if(sel == 2){
			cm.dispose();
			cm.openNpc(9330136,"稱號轉蛋");
		}else if(sel == 3){
			cm.dispose();
			cm.openNpc(9330136,"應用潛能");
		}else if(sel == 4){
			cm.dispose();
			cm.openNpc(9330136,"應用五排");
		}
	}
}