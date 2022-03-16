load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.tools.packet);
importPackage(Packages.server.life);
importPackage(Packages.client);

var status = -1;
var today = new Date();
var todayp = (today.getMonth()+1) + "/" + today.getDate(); 

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	
	if( mode == 0){
		cm.dispose();
	}
	
	if (status == 0) {
		var check = 0;
		var index = "";
			
		
		if (cm.getPlayer().getMapId() == 270050200) {
			cm.sendYesNo("您想要回去戰鬥嗎??");
			status = 2;
		} else if(cm.getPlayer().getMap().countMonsterById(8820008) == 0 && cm.getPlayer().getMap().countMonsterById(8820010) == 0 && cm.getPlayer().getMap().getInUse() == 0) {	
			cm.sendYesNo("召喚皮卡啾!");
			status = 3;
		} else{
			cm.sendYesNo("您想要出去了嗎??");
		} 
	} else if (status == 1) {
		
		cm.warp(270050000, 0);
		cm.dispose();
		
	} else if (status == 3) {
		cm.warp(270050100, 0);
		cm.dispose();
	} else if (status == 4) {
		cm.forceStartReactor(270050100, 2709000);
		cm.getPlayer().getMap().setInUse(1);
		cm.dispose();
	}
}
