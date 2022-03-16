
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


var topic = "分享獎勵補";
var today = new Date();
var todayp = (today.getMonth()+1) + "/" + today.getDate(); 

var pack = [
   [
     [4470002,3,-1],
   ]
];



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
		var msg =  icon5 + " #e#d" + topic + "#k\r\n";
		
		for(var a = 0 ; a < pack.length ; a++){
			msg += "#L" + a + "#" + icon3 + "#b分享獎勵#k #d 領取獎勵#k\r\n";
		}
		if(cm.getPlayer().getPrizeLog("分") > 0){
		    cm.sendSimple(cm.getPlayer().getPrizeLog("分享獎勵補") > 0 ? "#e您獲得過此獎勵" : msg);
		}else{
			cm.sendOk("您並未在分享獎勵名單中");
			cm.dispose();
		}
	}else if(status == 1){
		this. sel = selection;
        if(sel < 0){
			cm.dispose();
		}else{
		
		var extra = icon5 + " #e#b分享獎勵補#k\r\n";
		for(var bj = 0 ; bj < pack[sel].length ; bj++) {
			if(pack[sel][bj][2] != 2){
				var date = pack[sel][bj][2] == -1 ? "#b無期限#k" : ("#b" + pack[sel][bj][2] + "天#k");
			    extra += icon3 + " #d獎勵#k #b #i" + pack[sel][bj][0] + " # #z" + pack[sel][bj][0] + "##k 共 : #r" + pack[sel][bj][1] + " 個#k (" + date + ")\r\n";
				
			}
		}
		cm.sendYesNo(extra);
		}
	}else if(status == 2){
		var checkitems = 1;
		
		if(checkitems > 1){
			cm.sendOk(notice);
			cm.dispose();
		}else {
			for(var par = 0; par < pack[sel].length ; par++){
				
			    cm.gainItemNoTrade(pack[sel][par][0],pack[sel][par][1],pack[sel][par][2]);
							
			}
			cm.sendOk("謝謝您的分享!");
			cm.getPlayer().setPrizeLog("分享獎勵補");
			cm.dispose();
		}
	}
}
		