load('nashorn:mozilla_compat.js');
importPackage(Packages.handling.world);
importPackage(Packages.tools.packet);
importPackage(Packages.server);
importPackage(Packages.client.inventory);
importPackage(Packages.client);

var eventmapid = 105300305;
var returnmap = 910000000;

function init() {
	
    // After loading, ChannelServer
}

function setup(partyid) {
    var instanceName = "PQ2" + partyid;

    var eim = em.newInstance(instanceName);
    
    var map = eim.createInstanceMapS(eventmapid);
	map.resetFully();
	//map.setConsumeItemCoolTime(5);
	
	var mob = em.getMonster(9451160);
	
	var modified = em.newMonsterStats();
	modified.setOExp(mob.getMobExp() * 1);
    modified.setOHp(120000000000);
    modified.setOMp(15999999999);
	
	
	
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-49,-338));
	

	monsterSpawn(eim);

	eim.startEventTimer(180*60*1000);
    return eim;
}

function beginQuest(eim) { // Custom function
    if (eim != null) {
        eim.startEventTimer(1000); // After 5 seconds -> scheduledTimeout()
    }
}


function monsterSpawn(eim){
	var map = eim.getMapInstance(0);
	var m1 = em.getMonster(3503003);
	var m2 = em.getMonster(3503005);
	var m3 = em.getMonster(3503007);
	var m4 = em.getMonster(3503009);
	
	eim.registerMonster(m1);
	eim.registerMonster(m2);
	eim.registerMonster(m3);
	eim.registerMonster(m4);

	map.spawnMonsterOnGroundBelow(m1, new java.awt.Point(142,-309));
	map.spawnMonsterOnGroundBelow(m2, new java.awt.Point(244,-295));
	map.spawnMonsterOnGroundBelow(m3, new java.awt.Point(244,-295));
	map.spawnMonsterOnGroundBelow(m4, new java.awt.Point(142,-309));

	eim.schedule("monsterSpawn",30000);
}



function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != eventmapid) {
        eim.unregisterPlayer(player);
        eim.disposeIfPlayerBelow(0, 0);
    }
}

function scheduledTimeout(eim) {
    if( eim == null )
        return;
   
    eim.disposeIfPlayerBelow(100, returnmap);
	
	
}

function allMonstersDead(eim){
	eim.restartEventTimer(30000);
}

function playerDead(eim, player) {
}

function playerRevive(eim, player) {}

function playerDisconnected(eim, player) {
    playerExit(eim, player);
}

function monsterValue(eim, mobId) {
	
    return 0;
}

function leftParty(eim, player) {
    // Happens when a player left the party
    eim.unregisterPlayer(player);

    var map = em.getMapFactory().getMap(returnmap);
    player.changeMap(map, map.getPortal(0));

    eim.disposeIfPlayerBelow(0, 0);
}

function disbandParty(eim, player) {
    // Boot whole party and end
    eim.disposeIfPlayerBelow(100, returnmap);
}

function playerExit(eim, player) {
    var map = em.getMapFactory().getMap(returnmap);

    eim.unregisterPlayer(player);
    player.changeMap(map, map.getPortal(0));
}

function clearPQ(eim) {
    // Happens when the function EventInstanceManager.finishPQ() is invoked by NPC/Reactor script
}

function removePlayer(eim, player) {
    eim.dispose();
    // Happens when the funtion NPCConversationalManager.removePlayerFromInstance() is invoked
}

function registerCarnivalParty(eim, carnivalparty) {
    // Happens when carnival PQ is started. - Unused for now.
}

function onMapLoad(eim, player) {
    // Happens when player change map - Unused for now.
}

function cancelSchedule() {}

function dispose(eim) {
    
}