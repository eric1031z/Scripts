load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.tools.packet);
importPackage(Packages.client);
importPackage(Packages.server);

var status;
var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/0/10#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";


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
	if(mode <= 0){
		cm.dispose();
		cm.openNpc(9010000,"功能專區");
	}
	
    if (status == 0){
		cm.sendYesNo(icon3 + " #d二段跳與萬能騎寵(騎寵倉庫)領取#k\r\n" + icon1 + " #b請確認鍵盤上之#k #r#e9#n#k #b鍵無設置#k");
	}else if(status == 1){
		
		cm.teachSkill(4111006,30,30);
		cm.teachSkill(80001003,1,1);
		cm.putKey(10, 1, 4111006);
		cm.putKey(11, 1, 80001003);
		cm.sendOk("#d已成功學習技能#k");
		cm.dispose();
		
	}
}	