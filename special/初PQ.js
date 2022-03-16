load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.tools.packet);
importPackage(Packages.server.life);
importPackage(Packages.client);

var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var need = "#fEffect/ItemEff/004/4#";

var today = new Date();
var todayp = (today.getMonth()+1) + "/" + today.getDate(); 

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
		msg += "                   #e#b初級考驗 - 樂樹#k\r\n\r\n";
		msg += icon1 + " #d本副本限定等級#k #r150等#k #d可進入\r\n";
		msg += icon1 + " #d本副本僅可單人挑戰#k\r\n";
		msg += icon1 + " #d初/中/高副本每日累積可挑戰#k #r3次#k\r\n";


		cm.sendYesNo(msg);
	}else if(status == 1){
          

		if (cm.getParty() != null) {
            if (cm.getDisconnected("PQ1") != null) {
                cm.getDisconnected("PQ1").registerPlayer(cm.getPlayer());
			 
             } else if (cm.isLeader()) {
						var job = Array();
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
						
						
						
						
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 150 || ccPlayer.getPrizeLog(todayp + "航海") >= 3) {
                                next = false;
                         
                            }
							
							if(ccPlayer != null){
							   job.push(ccPlayer.getJob());	
							}
                        }
                        if(party.size() > 1){
							cm.sendOk("本副本僅可單人進入");
							cm.dispose();
						}else{

                            if (next) {
                                var q = cm.getEventManager("PQ1");
                                if (q == null) {
                                    cm.sendOk("找不到腳本，請聯繫GM！");
								    cm.dispose();
					
                                } else {
								    var x = cm.getPlayer().getParty().getMembers().iterator();
			                        while(x.hasNext()){
				                        var p = x.next();
				                        var chr = MapleCharacter.getCharacterByName(p);
									    if(chr !=null){
										    chr.setPrizeLog(todayp + "航海");
									    }
				                    
			                        }				
                                    q.startInstance(cm.getParty(), cm.getMap());	
								    cm.dispose();
                                }
                            } else {
                                cm.sendOk("全部隊友必須達到150等或已挑戰過3次");
							    cm.dispose();
		
                            }
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
			