load('nashorn:mozilla_compat.js');
importPackage(Packages.handling.world);
importPackage(Packages.tools.packet);
importPackage(Packages.server);
importPackage(Packages.client.inventory);
importPackage(Packages.client);

var eventmapid = 779000001;
var returnmap = 450001000;

function init() {
	
    // After loading, ChannelServer
}

function setup(partyid) {
    var instanceName = "Will" + partyid;

    var eim = em.newInstance(instanceName);
    
    var map = eim.createInstanceMapS(eventmapid);
	var mob = em.getMonster(8870000);
	
	eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(410,340));
	map.setConsumeItemCoolTime(5);
	eim.setProperty("delay",0);
	eim.setProperty("death",0);
    autoDrop(eim);
	bombSpawn(eim);
    cancelBuff(eim);
	monsterSpawn(eim);
	
	eim.startEventTimer(180*60*1000);
    return eim;
}

function beginQuest(eim) { // Custom function
    if (eim != null) {
        eim.startEventTimer(1000); // After 5 seconds -> scheduledTimeout()
    }
}

function monsterSpawn(eim) { // Custom function
    var map = eim.getMapInstance(0);
    var mob1 = em.getMonster(8644508);
	var mob2 = em.getMonster(8644509);
	var mob3 = em.getMonster(8644504);
	var mob4 = em.getMonster(8644505);
	var mob5 = em.getMonster(8644503);
	var mob6 = em.getMonster(8644710);
	var mob7 = em.getMonster(8644711);
	
	eim.registerMonster(mob1);
	eim.registerMonster(mob2);
	eim.registerMonster(mob3);
	eim.registerMonster(mob4);
	eim.registerMonster(mob5);
	eim.registerMonster(mob6);
	eim.registerMonster(mob7);
	var z = 0;
	var mp = map.getCharacters().iterator();

    while(mp.hasNext()){
       var pl = mp.next();
	   pl.cancelAllBuffs();	  
    }
	
	var x = map.getAllMonstersThreadsafe().iterator();
	while(x.hasNext()){
		var mon = x.next();
		if(!mon.getStats().isBoss()){
			if(mon.getStats().getId()!= 9300166){
			   z++;
            }
			
			
		    map.killMonster(mon);
		}
		
		if(mon.getStats().getId() == 9300166){
			map.killMonster(mon);
		}
	}
	eim.setProperty("delay",z);
   
	map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(400,340));
	map.spawnMonsterOnGroundBelow(mob3, new java.awt.Point(420,340));
	map.spawnMonsterOnGroundBelow(mob4, new java.awt.Point(390,340));
	map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(380,340));
	map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point(430,340));
	map.spawnMonsterOnGroundBelow(mob6, new java.awt.Point(370,340));
	map.spawnMonsterOnGroundBelow(mob7, new java.awt.Point(360,340));
	   
   
	   	   
   eim.schedule("monsterSpawn", 20000);	   
}

function cancelBuff(eim){
	var map = eim.getMapInstance(0);
	var mp = map.getCharacters().iterator();

    while(mp.hasNext()){
       var pl = mp.next();
	   pl.cancelAllBuffs();	  
	   pl.disease(128,10);
	   pl.disease(120,10);
	   pl.getStat().setMp(0,pl);
	   pl.updateSingleStat(MapleStat.MP, 0);
    }
	
	eim.schedule("cancelBuff", 4000);	
}


function bombSpawn(eim) { // Custom function

   var map = eim.getMapInstance(0);
   var mob = em.getMonster(9300166);
  
   eim.registerMonster(mob);
   var players = map.getCharacters().iterator();
   if(players.hasNext()){
	   var p = players.next();
	   map.spawnMonsterOnGroundBelow(mob, p.getPosition());
	   //map.killMonster(mob);
	   
   }
   
   eim.schedule("bombSpawn", 4000);
  
}

function autoDrop(eim){
   var map = eim.getMapInstance(0);
   var x = map.getCharacters().iterator();
   var count = 0;
   while(x.hasNext()){
       var p = x.next();
	   if(count <= 1){
	     map.spawnAutoDrop(2022433,p.getPosition());
	     map.spawnAutoDrop(2022432,p.getPosition());
	   }
	   //p.cancelAllBuffs();
	   count ++;
   }
   
   
   eim.schedule("autoDrop", 20000 + 3000*parseInt(eim.getProperty("delay")));
   //World.Broadcast.broadcastMessage(CWvsContext.serverNotice(6, eim.getProperty("delay")));
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
    // Happens when player dies
	var x = parseInt(eim.getProperty("death"));
	eim.setProperty("death",x+1);
	var map = eim.getMapInstance(0); 
	var chr = map.getCharacters().iterator();
	while(chr.hasNext()){
		var player = chr.next();
		player.disease(128,10);
		player.getStat().setHp(10000,player);
		player.getStat().setMp(0,player);
		player.updateSingleStat(MapleStat.HP, 0);
		player.updateSingleStat(MapleStat.MP, 0);
	}
	
	var mob1 = map.getMonsterById(8880302);
	var mob2 = map.getMonsterById(8880303);
	
	var up = parseInt(eim.getProperty("death"));
	if(up >= 20){
		up = 20;
	}
	
	if(mob1 != null){
		mob1.heal(100000000*up,0,true);
	}
	
	if(mob2 != null){
		mob2.heal(100000000*up,0,true);
	}
	
	
}

function playerRevive(eim, player) {}

function playerDisconnected(eim, player) {
    playerExit(eim, player);
}

function monsterValue(eim, mobid) {
    return 0;
    // Invoked when a monster that's registered has been killed
    // return x amount for this player - "Saved Points"
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