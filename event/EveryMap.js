load('nashorn:mozilla_compat.js');
importPackage(Packages.handling.world);
importPackage(Packages.tools.packet);
importPackage(Packages.server);
importPackage(Packages.client.inventory);
importPackage(Packages.client);

var eventmapid = 105200410;
var returnmap = 105200000;

function init() {
	
    // After loading, ChannelServer
}

function setup(partyid) {
    var instanceName = "FOUR1" + partyid;

    var eim = em.newInstance(instanceName);
    
    var map = eim.createInstanceMapS(eventmapid);
	var mob = em.getMonster(8930000);
	
	var modified = em.newMonsterStats();
	modified.setOExp(mob.getMobExp() * 1);
    modified.setOHp(15999999999);
    modified.setOMp(15999999999);
	
	
	
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-197,443));
	map.setConsumeItemCoolTime(5);
	eim.setProperty("death",0); //死亡
	eim.setProperty("mob1",0); 
	eim.setProperty("mob2",0); 
	eim.setProperty("mob3",0); 
	eim.setProperty("mob4",0); 
    autoDrop(eim);
	monsterSpawn(eim);
	
	eim.startEventTimer(180*60*1000);
    return eim;
}

function beginQuest(eim) { // Custom function
    if (eim != null) {
        eim.startEventTimer(1000); // After 5 seconds -> scheduledTimeout()
    }
}


var MobsRand = [3503003,3503005,3503007,3503009];

function monsterSpawn(eim) { // Custom function
    var map = eim.getMapInstance(0);
    
	var v1 = eim.getProperty("mob1");
	var v2 = eim.getProperty("mob2");
	var v3 = eim.getProperty("mob3");
	var v4 = eim.getProperty("mob4");

	if(map.getMobsSize() >= 80){
		eim.broadcastPlayerMsg(5,"怪物數量高於限制數量,挑戰失敗");
		eim.disposeIfPlayerBelow(100, returnmap);
		
	}
    var ch = map.getCharacters().iterator();
	while(ch.hasNext()){
		var pl = ch.next();
		if(v1 < 10 || v2 < 10 || v3 < 10 || v4 < 10){
			//pl.cancelAllBuffs();
		}
		
		var m1 = MobsRand[Math.floor(Math.random()*MobsRand.length)];
		var m2 = MobsRand[Math.floor(Math.random()*MobsRand.length)];
		
		var mob1 = em.getMonster(m1);
	    var mob2 = em.getMonster(m2);
		
		var modified1 = em.newMonsterStats();
	    modified1.setOExp(mob1.getMobExp() * 1);
        modified1.setOHp(mob1.getMobMaxHp() * 25);
        modified1.setOMp(mob1.getMobMaxMp() * 30);
	
        var modified2 = em.newMonsterStats();
	    modified2.setOExp(mob2.getMobExp() * 1);
        modified2.setOHp(mob2.getMobMaxHp() * 25);
        modified2.setOMp(mob2.getMobMaxMp() * 30);
		
		mob1.setOverrideStats(modified1);
	    mob2.setOverrideStats(modified2);
		
		eim.registerMonster(mob1);
	    eim.registerMonster(mob2);
		
		map.spawnMonsterOnGroundBelow(mob1, pl.getPosition());
		map.spawnMonsterOnGroundBelow(mob2, pl.getPosition());
	}
    	   
    eim.schedule("monsterSpawn", 20000);	   
}






function autoDrop(eim){
   var map = eim.getMapInstance(0);
   var v1 = parseInt(eim.getProperty("mob1"));
   var v2 = parseInt(eim.getProperty("mob2"));
   var v3 = parseInt(eim.getProperty("mob3"));
   var v4 = parseInt(eim.getProperty("mob4"));
   
   map.spawnAutoDrop(2022433,new java.awt.Point(-197,443));
   map.spawnAutoDrop(2022431,new java.awt.Point(-197,443));
   
   if(v1 > 10){
	   map.spawnAutoDrop(2022431,new java.awt.Point(-197,443));
   }
   
   if(v2 > 10){
	   map.spawnAutoDrop(2022433,new java.awt.Point(-197,443));
   }
   
   
   var time = (15000 + (parseInt(eim.getProperty("death"))/8)*2000 - (v1/10)*1000) < 10000 ? 10000 : (15000 + (parseInt(eim.getProperty("death"))/8)*2000 - (v1/10)*1000);
   eim.schedule("autoDrop", time);
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
    // Happens when player dies
	var currentDeath = eim.getProperty("death");
	var newDeath = parseInt(currentDeath)  + 1;
	eim.setProperty("death",newDeath);
	
	
	if(eim.getProperty("death") >= 80){
		eim.broadcastPlayerMsg(5,"隊伍死亡次數超過限制,挑戰失敗");
		eim.disposeIfPlayerBelow(100, returnmap);
	}else{
		eim.broadcastPlayerMsg(5,"當前隊伍累積死亡次數 : " + eim.getProperty("death"));
	}
	
	
	
}

function playerRevive(eim, player) {}

function playerDisconnected(eim, player) {
    playerExit(eim, player);
}

function monsterValue(eim, mobId) {
	var v1 = parseInt(eim.getProperty("mob1"));
	var v2 = parseInt(eim.getProperty("mob2"));
	var v3 = parseInt(eim.getProperty("mob3"));
	var v4 = parseInt(eim.getProperty("mob4"));
	var currentDeath = eim.getProperty("death");
	
	var newV1 = v1 + 1;
	var newV2 = v2 + 1;
	var newV3 = v3 + 1;
	var newV4 = v4 + 1;
	
    if(mobId == 3503003){
		eim.setProperty("mob1",newV1);
		eim.broadcastPlayerMsg(5,"已擊殺劍兵！累積擊殺 : " + eim.getProperty("mob1"));
	}else if(mobId == 3503005){
		eim.setProperty("mob2",newV2);
		eim.broadcastPlayerMsg(5,"已擊殺斧頭兵！累積擊殺 : " + eim.getProperty("mob2"));
	}else if(mobId == 3503007){
		eim.setProperty("mob3",newV3);
		eim.broadcastPlayerMsg(5,"已擊殺盾牌兵！累積擊殺 : " + eim.getProperty("mob3"));
	}else if(mobId == 3503009){
		eim.setProperty("mob4",newV4);
		var msg = "";
		if(parseInt(eim.getProperty("mob4"))%2 == 0){
			var newDeath = parseInt(currentDeath)  - 1;
		    eim.setProperty("death",newDeath);
			msg += " 且死亡數扣 1";
		}
		
		
		eim.broadcastPlayerMsg(5,"已擊殺狼騎手！ 累積擊殺 : " + eim.getProperty("mob4") + msg);
		
	}
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