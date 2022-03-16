
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





var item = [1003864,1012377,1052613,1122253,1132229,1102563];
var choose = [1302279,1312157,1322207,1332229,1372181,1382213,1402202,1412139,1422144,1432171,1442227,1452209,1462197,1472218,1482172,1492183,1522098,1532102];


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
	    if(status == 0){
			status = 0;
		}else{
			cm.dispose();
		}
		//cm.sendOk(status);
		//cm.dispose();
	}
	
    if (status == 0) {
		var msg = "#e";
		msg += icon5 + " #d30等獎勵大放送!\r\n";
		msg += icon1 + " #b您將必定獲得以下獎勵 :#k\r\n";
		for(var i = 0 ; i < item.length ; i ++){
			msg += icon3 + " #i" + item[i] + "# #z" + item[i] + "#\r\n";
		}
		msg += icon1 + " #b請選擇適合您的武器 :#k\r\n";
		for(var j = 0; j < choose.length; j++){
			msg += "#L" + j + "# #i" + choose[j] + "# #z" + choose[j] + "#\r\n";
		}
		cm.sendSimple(msg);
	}else if(status == 1){
		this. sel = selection;
		cm.sendYesNo("#e你確定要領取物品 : #r#z" + choose[sel] + "##k 嗎?" );
	}else if(status == 2){
		//var sel = selection;
		for(var i = 0 ; i < item.length ; i ++){
			cm.gainItem(item[i],1);
		}
		cm.gainItem(choose[sel],1);
		cm.sendOk("非常好!!繼續前進吧!");
		cm.dispose();
	}
}