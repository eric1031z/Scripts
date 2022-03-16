load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.tools.packet);
importPackage(Packages.server.life);
importPackage(Packages.client);

var icon1 = "#fUI/UIWindow/Quest/icon0#"; //黃驚嘆
var icon5 = "#fUI/UIWindow/Quest/icon5/0#"; //new
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
;;!//錯誤

var cost = 100;

function start(){
	status = -1
	action(1,0,0);
}


function action(mode,type,selection){
	if(mode==1){
		status ++ ;
	}else {
		status --;
	}
	
	if(mode == 0){
		cm.dispose();
		
	}
	
	if(status == 0){
		var msg = "";
		msg += "                   #b【雙神來襲】#k\r\n";
		//msg += icon3 + " #b1.#k #d本副本限制至少需#k#r4種不同職業#k\r\n";
		msg += icon3 + " #b1.#k #d本副本限制#k#r150等#k#d以上才能入場#k\r\n";
		

		cm.sendYesNo(msg);
	}else if(status == 1){
          

		if (cm.getParty() != null) {
            if (cm.getDisconnected("Chaoss5") != null) {
                cm.getDisconnected("Chaoss5").registerPlayer(cm.getPlayer());
             } else if (cm.isLeader()) {
						var job = Array();
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
						
						
						
						
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 150) {
                                next = false;
                         
                            }
							
                        }

                       
						
                        if (next) {
                            var q = cm.getEventManager("Chaoss5");
                            if (q == null) {
                                cm.sendOk("找不到腳本，請聯繫GM！");
								cm.dispose();
					
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());	
								cm.dispose();
                            }
                        } else {
                            cm.sendOk("全部隊友必須達到150等.");
							cm.dispose();
		
                        }
                    } else {
                        cm.sendOk("你不是隊長.");
						cm.dispose();
	
                    }
                } else {
                    cm.sendOk("你沒有隊伍.");
					cm.dispose();

                }
	
   }
}


function jobcount(job){
	var n = job.length;
	job.sort();
	var count = 0;
	for(var i = 0; i < n ; i++){
		if(job[i] != job[i-1]){
			count ++;
		}
	}
	return count;
}
			