load('nashorn:mozilla_compat.js');
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools);


var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var need = "#fEffect/ItemEff/004/4#";

var status = -1;
var color = Array(0,1,2,3,4,6,7,8,9,10,11,13,15,16,18,19);

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if(mode == 0){
		status = 0;
	}
	
    if (status == 0) {
		var msg = ""
		msg += "          " + icon5 + " #e#d【護膚專區】#k #b更換皆為免費#k#n\r\n\r\n";
		msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
		msg += "       #L999#" + need + " #d離開頁面#k#l   #L9999#" + need + " #d回造型區#k#l\r\n\r\n";
		msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
		msg += "#L0#" + icon3 + " #e#b變更膚色#k#n#l ";
		cm.sendSimple(msg);
	}else if(status == 1){
		this. k = selection;
		if(k == 999){
			cm.dispose();
		}else if(k == 9999){
			cm.dispose();
			cm.openNpc(9010000,"造型專區");
		}else{
		    
		    cm.sendStyle("#d護膚中心#k\r\n#b希望你會喜歡!#k",color);
		}
	}else if(status == 2){
		this. k = selection;
		cm.getPlayer().setSkinColor(color[k]);
		cm.getPlayer().updateSingleStat(MapleStat.SKIN, color[k]);
		cm.sendOk("#d已成功變更顏色! 希望您會喜歡!#k");
		cm.dispose();
	}
}
		