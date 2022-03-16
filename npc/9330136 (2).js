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
		msg += "#L0#" + icon3 + " #b技能書轉蛋(包含母書)#k\r\n";
		cm.sendSimple(msg);
	}
}