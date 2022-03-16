function start() {
    var mapid = 0;
    if (cm.getQuestStatus(1608) == 1) {
        mapid = 931050410;
    }
	if (cm.getQuestStatus(1611) == 1){
		mapid = 931050411;
	}
	if (cm.getQuestStatus(1613) == 1){
		mapid = 931050423;
	}
	if (cm.getQuestStatus(1615) == 1){
		mapid = 931050412;
	}
	if (cm.getQuestStatus(1620) == 1){
		mapid = 931050413;
	}
	if (cm.getQuestStatus(1621) == 1){
		mapid = 931050414;
	}
	if (cm.getQuestStatus(1623) == 1){
		mapid = 931050415;
	}
	if (cm.getQuestStatus(1627) == 1){
		mapid = 931050417;
	}
	if (cm.getQuestStatus(1628) == 1){
		cm.completeQuest(1628);
	}
	if (cm.getQuestStatus(1629) == 1){
		mapid = 931050418;
	}
	if (cm.getQuestStatus(1631) == 1){
		mapid = 931050419;
	}
	if (cm.getQuestStatus(1632) == 1 || cm.getMapId() == 240010600){
		mapid = 931050420;
	}
	if (cm.getQuestStatus(1632) == 1 || cm.getMapId() == 240010500){
		mapid = 931050421;
	}
	if (cm.getQuestStatus(1634) == 1 ){
		mapid = 931050422;
	}
	
    if (mapid != 0) {
        //cm.getMap(mapid).respawn(true);
        cm.resetMap(mapid);
        cm.warp(mapid, 0);
    }else{
		cm.sendOk("我是一扇\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\門。");
		cm.dispose();
	}
    cm.dispose();
}
