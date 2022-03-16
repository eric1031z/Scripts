load('nashorn:mozilla_compat.js');
importPackage(Packages.server.life);
importPackage(java.awt.Point);

var status = -1;

function action(mode, type, selection) {
	if (cm.getMap().getAllMonstersThreadsafe().size() > 0) {
		cm.dispose();	
		return;
	}
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
		cm.resetMap(272030400);
		
		cm.sendNextNoESC("(某處傳來穩定背誦咒文的聲音)", 2144019);
    } else if (status == 1) {
		cm.sendPlayerToNpc("這...!! 不會阿卡伊農已經解除封印了吧?");
    } else if (status == 2) {
		cm.sendPlayerToNpc("阿卡伊農!! 馬上停止!!");
	} else if (status == 3) {
		cm.sendNextNoESC("...最後才說時間不足... 這比倒回時間付出的代價還要慘忍.", 2144019);
	} else if (status == 4) {
		cm.sendNextNoESC("敢妨礙我,我會讓你付出代價的. 你已經無處可逃了,這裡將是你的墳場.", 2144019);
		cm.getPlayer().getMap().spawnMonsterOnGroundBelow(MapleLifeFactory.getMonster(8860000),new java.awt.Point(1,-181));
		cm.removeNpc(272030400, 2144020);
		cm.dispose();
	}
}
