load('nashorn:mozilla_compat.js');
importPackage(Packages.handling.world);
importPackage(Packages.tools.packet);
importPackage(Packages.server);
importPackage(Packages.client.inventory);
importPackage(Packages.client);

var eventmapid = 105200310;
var returnmap = 910000000;

function init() {
	
    // After loading, ChannelServer
}

function setup(partyid) {
    var instanceName = "FOUR2" + partyid;

    var eim = em.newInstance(instanceName);
    
    var map = eim.createInstanceMapS(eventmapid);
	map.resetFully();
	map.setConsumeItemCoolTime(5);
	
	var mob = em.getMonster(8920000);
	
	var modified = em.newMonsterStats();
	modified.setOExp(mob.getMobExp() * 1);
    modified.setOHp(36000000000);
    modified.setOMp(15999999999);
	
	
	
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(24,135));
	
	respawnTask(eim);
	restrict(eim);
	monsterSpawn(eim);
	eim.setProperty("death",0);
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
	var count = 0;
	var x = map.getAllMonstersThreadsafe().iterator();
	while(x.hasNext()){
		var mon = x.next();
		if(!mon.getStats().isBoss()){
			if(mon.getStats().getId() == 3503003 || mon.getStats().getId() == 3503005 || mon.getStats().getId() == 3503007 || mon.getStats().getId() == 3503009){
				map.killMonster(mon);
				count ++;
			}   
		}	
	}
	
	var boss = map.getMonsterById(8920000);
	var heal = 300000000*count >= 1000000000 ? 1000000000 : 300000000*count;
	boss.heal(heal,0,true);
	
	var modified1 = em.newMonsterStats();
	modified1.setOExp(m1.getMobExp() * 1);
    modified1.setOHp(1199999999);
    modified1.setOMp(1199999999);
	
	var modified2 = em.newMonsterStats();
	modified2.setOExp(m2.getMobExp() * 1);
    modified2.setOHp(1199999999);
    modified2.setOMp(1199999999);
	
	var modified3 = em.newMonsterStats();
	modified3.setOExp(m3.getMobExp() * 1);
    modified3.setOHp(1199999999);
    modified3.setOMp(1199999999);
	
	var modified4 = em.newMonsterStats();
	modified4.setOExp(m4.getMobExp() * 1);
    modified4.setOHp(1199999999);
    modified4.setOMp(1199999999);
	
	m1.setOverrideStats(modified1);
	m2.setOverrideStats(modified2);
	m3.setOverrideStats(modified3);
	m4.setOverrideStats(modified4);

	
	eim.registerMonster(m1);
	eim.registerMonster(m2);
	eim.registerMonster(m3);
	eim.registerMonster(m4);
	

	
	map.spawnMonsterOnGroundBelow(m1, new java.awt.Point(Math.floor(Math.random()* 780)*(Math.floor(Math.random()* 2) == 0 ? 1 : -1),135));
	map.spawnMonsterOnGroundBelow(m2, new java.awt.Point(Math.floor(Math.random()* 780)*(Math.floor(Math.random()* 2) == 0 ? 1 : -1),135));
	map.spawnMonsterOnGroundBelow(m3, new java.awt.Point(Math.floor(Math.random()* 780)*(Math.floor(Math.random()* 2) == 0 ? 1 : -1),135));
	map.spawnMonsterOnGroundBelow(m4, new java.awt.Point(Math.floor(Math.random()* 780)*(Math.floor(Math.random()* 2) == 0 ? 1 : -1),135));
	
	eim.schedule("monsterSpawn",20000);
}

function restrict(eim){
	var map = eim.getMapInstance(0);
	var player = map.getCharacters().iterator();
	var count = map.checkArea();
	while(player.hasNext()){
		var p = player.next();
		if(!p.inRestrictArea() && count > 1){
			var loss = p.getStat().getMaxHp()*0.05;
			var hp = p.getStat().getHp();
			var result = hp - loss <= 0 ? 0 : hp - loss;
			p.getStat().setHp(result,p);
			p.updateSingleStat(MapleStat.HP, result);
			p.dropMessage("請盡速前往規範區！");
		}
	}
	
	eim.schedule("restrict",1000);
}

function respawnTask(eim){
    var map = eim.getMapInstance(0);
	var x = map.getAllMonstersThreadsafe().iterator();
	while(x.hasNext()){
		var mon = x.next();
		if(!mon.getStats().isBoss()){
			if(mon.getStats().getId() == 9400378){
				map.killMonster(mon);
			}   
		}	
	}
	
	var mob1 = em.getMonster(9400378);
	var mob2 = em.getMonster(9400378);
	
	var modified1 = em.newMonsterStats();
	modified1.setOExp(mob1.getMobExp() * 1);
    modified1.setOHp(999999999999);
    modified1.setOMp(999999999999);
	
    var modified2 = em.newMonsterStats();
	modified2.setOExp(mob2.getMobExp() * 1);
    modified2.setOHp(999999999999);
    modified2.setOMp(999999999999);
	
	mob1.setOverrideStats(modified1);
	mob2.setOverrideStats(modified2);
		
	eim.registerMonster(mob1);
	eim.registerMonster(mob2);
    var po = Math.floor(Math.random()* 505);
	var adjust = Math.floor(Math.random()* 2) == 0 ? 1 : -1;
	var ad2 = (400 - map.getConsumePotion()/3) < 150 ? 150 : (400 - map.getConsumePotion()/3);
	
	var p1 = po*adjust;
	var p2 = po*adjust + ad2;
	
	
	map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(p1,135));
	map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(p2,135));
	//map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(p1,135));
	//map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(p1,135));
	
	map.setRStart(p1);
	map.setREnd(p2);
	eim.broadcastPlayerMsg(5,"規範區已重新界定,請盡速移動至該區域！");

	eim.schedule("respawnTask",30000);
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
	eim.restartEventTimer(3000);
}

function playerDead(eim, player) {
	var map = eim.getMapInstance(0);
    var death = parseInt(eim.getProperty("death"));
	eim.setProperty("death",death+1);
	
	
	if(parseInt(eim.getProperty("death"))%5 == 0 && parseInt(eim.getProperty("death")) > 0){
		var map = eim.getMapInstance(0); 
	    var chr = map.getCharacters().iterator();
	    while(chr.hasNext()){
		    var player = chr.next();
			player.cancelAllBuffs();
		    player.disease(123,2);
	    }
	}
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