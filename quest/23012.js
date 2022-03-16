var status = -1;



function start(mode, type, selection) {
	qm.sendNext("這是一個很...重要的決定!");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {

        if (qm.getJob() == 3000) {
			qm.expandInventory(1, 4);
            qm.expandInventory(2, 4);
            qm.expandInventory(4, 4);
            qm.gainItem(1462092, 1);
			qm.gainItem(2061000, 1000);
			qm.gainItem(2061000, 1000);
			qm.gainItem(2061000, 1000);
            qm.changeJob(3300);
            qm.teachSkill(30001061, 1, 0);
            qm.teachSkill(30001062, 1, 0);
            qm.getPlayer().fakeRelog();
        }
        qm.forceCompleteQuest();
        qm.dispose();
    
}