load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.tools.packet);
importPackage(Packages.constants);
importPackage(Packages.client.inventory);
importPackage(Packages.server);



var status ;


var wear = [
    [1004422,1102775,1082636,1052882,1073030,1152174],
	[1004423,1102794,1082637,1052887,1073032,1152176],
	[1004424,1102795,1082638,1052888,1073033,1152177],
	[1004425,1102796,1082639,1052889,1073034,1152178],
	[1004426,1102797,1082640,1052890,1073035,1152179],	
];

var weapon = [
    [1302333,1312199,1322250,1402251,1412177,1422184,1432214,1442268],
	[1382259,1372222],
	[1522138,1462239,1452252],
	[1472261,1332274],
	[1482216,1492231,1532144],
];



var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var need = "#fEffect/ItemEff/004/4#";



var status = -1;

function start(){
	
	action(1,0,0);
}


function action(mode,type,selection){
	if(mode==1){
		status ++ ;
	}else {
		status --;
	}
	
	if(mode == 0){
		cm.dispose();
	}
	
	
	var donate = cm.getPlayer().getDonate();
	
	if(status == 0){
		var msg = "";
		msg += icon3 + " #e#d暖光11月贊助回饋！#k\r\n";
		msg += icon1 + " #b贊助滿#k#r10000元#k#b的玩家 可自選一種職業的全套航海#k\r\n";
		msg += icon1 + " #b領取回饋前請確認#k #r身上的裝備欄位足夠#k\r\n";
		msg += "#L0#" + icon5 + " 劍士\r\n";
		msg += "#L1#" + icon5 + " 法師\r\n";
		msg += "#L2#" + icon5 + " 弓手\r\n";
		msg += "#L3#" + icon5 + " 盜賊\r\n";
		msg += "#L4#" + icon5 + " 海盜\r\n";
		cm.sendSimple(msg);
	}else if(status == 1){
		this. s = selection;
		var msg = "";
		msg += icon1 + " #e#b您將獲得以下的裝備 :#k#d\r\n";
		for(var i = 0 ; i < wear[s].length; i ++){
			msg += "#i" + wear[s][i] + "# #z" + wear[s][i] + "#\r\n";
		}
		msg += "\r\n" + icon1 + " #b加一個自選武器,請謹慎選擇 :#k\r\n";
		for(var j = 0 ; j < weapon[s].length; j++){
			msg += "#L" + j + "# #i" + weapon[s][j] + "# #z" + weapon[s][j] + "#\r\n";
		}
		cm.sendSimple(msg);
	}else if(status == 2){
		this. sel = selection;
		if(cm.getPlayer().getDonate() < 10000){
			cm.sendOk("此回饋對象為累積贊助達10000之玩家");
			cm.dispose();
		}else if(cm.getPlayer().getPrizeLog("贊助回饋") > 0){
			cm.sendOk("您已領過此回饋獎勵");
			cm.dispose();
		}else{
			for(var i = 0 ; i < wear[s].length; i ++){
			    cm.gainItem(wear[s][i],1);
		    }
			cm.gainItem(weapon[s][sel],1);
			cm.getPlayer().setPrizeLog("贊助回饋");
			cm.sendOk("領取成功!");
			cm.dispose();
		}
	}
}