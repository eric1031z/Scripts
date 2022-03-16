
var status;

var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var need = "#fEffect/ItemEff/004/4#";


var hp = 4470008;
var mp = 4470009;


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
		msg += icon5 + "#e#d血魔大躍進#k\r\n;
		msg += icon1 + "#b每一個#k #i" + hp + "# #r#z" + hp + "##k #b將提供#k #r15-30#k #b的血量\r\n";
		msg += icon1 + "#b每一個#k #i" + mp + "# #r#z" + mp + "##k #b將提供#k #r15-30#k #b的血量\r\n";
		cm.sendSimple(msg);
	}
}