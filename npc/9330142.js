
load('nashorn:mozilla_compat.js');
importPackage(Packages.server);
importPackage(Packages.client.inventory);
importPackage(Packages.tools.packet.CField.UIPacket);
importPackage(Packages.constants);
var status = -1;


function start(){
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
		for(var map = 749080127 ; map < 749080141 ; map++){
			msg += "#L" + map + "##b#m" + map + "##k#l\r\n";
		}
		//cm.sendSimple("請選擇您想進入的首領通道\r\n" + msg);
		cm.sendOk("嗨囉");
		cm.dispose();
	}else if(status == 1){
		var sel = selection;
		if(!cm.haveItem(5252014,1)){
			cm.sendOk("您身上並沒有#i5252014##z5252014#");
			cm.dispose();
		}else if(cm.getPlayer().getClient().getChannelServer().getMapFactory().getMap(sel).getCharactersSize()>0){
			cm.sendOk("裡面已經有人在挑戰");
			cm.dispose();
		}else{
			cm.warp(sel,0);
			cm.gainItem(5252014,-1);
			cm.dispose();
		}
	}
}
			