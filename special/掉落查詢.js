
load('nashorn:mozilla_compat.js');
importPackage(Packages.util);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
importPackage(Packages.constants);


var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";

var status;
var h1=-1;
var h2=-1;

function start(){
	status = -1;
	str = "";
	select = -1;
	str += "\r\n#L1#" + icon3 + " #e掉落查詢#n#l#k";
	cm.sendSimple(icon5 + " #b掉落查詢系統可提共您物品掉落的準確資訊:#k" + str );
	
}

function action(mode,type,selection){
	if (mode == 1) {
        status++;
		
    } else {
        status--;
    }
	if(mode <= 0){
		cm.dispose();
		//cm.openNpc(9010000,"功能專區");
	}
	
	switch (status) {
	case 0:
		str = selection;
		cm.sendGetText("請輸入想查詢道具:");
		break;
	case 1:
		cm.sendOk(cm.searchData(str, cm.getText()));
		break;
	case 2:
	    h2=selection;
		if (!cm.foundData(str, cm.getText())) {
			cm.dispose();
			return;
		}else
		cm.getMobs(h2);
		cm.dispose();
	}
}
