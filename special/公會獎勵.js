load('nashorn:mozilla_compat.js');
importPackage(Packages.util);
importPackage(Packages.client);

var status = -1;
var picked = 0;
var state = -1;



var icon1 = "#fEffect/CharacterEff/1112925/0/0#";
var icon2 = "#fEffect/CharacterEff/1112926/0/0#";
var icon6 = "#fEffect/CharacterEff/1112904/1/0#";

var friend = [

  
   
   [
     [10],
	 [300,1],
   ],
   
   [
     [30],
	 [500,1],
   ],
   
   [
     [70],
	 [900,1],
   ],
   
   [
     [100],
	 [1500,0],
   ],
]




function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
	
	if(cm.getPlayer().getGuild()==null){
		var buddy = 0;
	}else{
	    buddy = cm.getPlayer().getGuild().getMembers().size();
	}
	
	
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2 || status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
		var msg = "";
		for(var z = 0 ; z < friend.length ; z++){
			var point = friend[z][1][1] == 1 ? "楓點" : "GASH"
			msg += "#L" + z + "#" + icon6 + "#d《滿#k #r" + friend[z][0][0] + "#k #d公會成員》#k　#b獲得 :#k #r" + friend[z][1][0] + " 點" + point + "#l\r\n"; 
		}
		
        cm.sendYesNo(icon1 + "#b【苡蝶谷公會獎勵】#k #d當前公會數 :#k #r" + buddy + "#k #d人#k\r\n" + msg);
    } else if (status == 1) {
		var sel = selection;
		if(buddy < friend[sel][0][0]){
			cm.sendOk("您目前的公會成員數還不足 #r" + friend[sel][0][0] + "#k 人喔!");
			cm.dispose();
		}else if(cm.getPlayer().getPrizeLog("公會" + friend[sel][0][0] + "獎勵") >0){
			cm.sendOk("您已經領取過此獎勵了!");
			cm.dispose();
		}else{
			cm.getPlayer().modifyCSPoints(2,friend[sel][1][0],true);
			cm.getPlayer().setPrizeLog("公會" + friend[sel][0][0] + "獎勵");
			cm.sendOk("已成功領取 :#r" + friend[sel][0][0] + " #k公會獎勵");
			cm.dispose();
		}
	}
}
