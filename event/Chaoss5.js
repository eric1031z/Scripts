load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.server.life);

var eveMap = 779000001;
var eveMob = 8880500;
var eveMob2 = 8880501;
var reMap = 910000000;
var modHp = 399999999999;

function init() {
    em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
	em.setProperty("leader", "true");

    var eim = em.newInstance("Chaoss5");
    var map = eim.createInstanceMap(eveMap);
	map.resetFully();
	map.setConsumeItemCoolTime(3);
	var mob = em.getMonster(eveMob);
	var mob2 = em.getMonster(eveMob2);
	var modified = em.newMonsterStats();
    modified.setOHp(modHp);
    modified.setOMp(modHp);
	mob.setOverrideStats(modified);
	mob2.setOverrideStats(modified);
	
	eim.registerMonster(mob);
	eim.registerMonster(mob2);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(483,340));
	map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(-386,340));
    eim.startEventTimer(7200000); //2 hr
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
   	if (mapid != eveMap) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
	em.setProperty("state", "0");
		em.setProperty("leader", "true");
    }
	}
}

function playerDisconnected(eim, player) {
    return 0;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, reMap);
    em.setProperty("state", "0");
		em.setProperty("leader", "true");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
	em.setProperty("state", "0");
		em.setProperty("leader", "true");
    }
}

function monsterValue(eim, mobId) {
    return 1;
}

function allMonstersDead(eim) {
    var state = em.getProperty("state");

    if (state.equals("1")) {
	em.setProperty("state", "2");
    } else if (state.equals("2")) {
	em.setProperty("state", "3");
    }
}

function playerRevive(eim, player) {
    return false;
}

function clearPQ(eim) {
scheduledTimeout(eim);
}
function leftParty (eim, player) {}
function disbandParty (eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}