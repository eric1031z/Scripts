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
		msg += "                   #e#b四王副本 - 皇后#k\r\n\r\n";
		msg += icon1 + " #b1.#k #d本副本限制至少需#k#r4種不同職業#k\r\n";
		msg += icon1 + " #b2.#k #d本副本限制#k#r200等#k#d以上才能入場#k\r\n";
		msg += icon1 + " #b3.#k #d本副本限制#k#r3小時#k#d內完成#k\r\n";
		msg += icon1 + " #b4.#k #d副本內每#k#r5秒#k#d才能補給一次#k\r\n";
		msg += icon1 + " #b5.#k #d副本內可使用#k#r萬能療傷藥#k,但會減少#k#r規範區的大小#k\r\n";
		msg += icon1 + " #b6.#k #d副本內每#k#r20#k#d秒生成4隻護衛軍,存活至下一次生成#k\r\n";
		msg += icon1 + " #b7.#k #d副本內每#k#r15#k#d秒重製一次規範區#k\r\n";
		msg += icon1 + " #b8.#k #d唯有在規範區內才能對怪物造成有效的傷害,於規範區外的人數若超過1人則於規範區外造成傷害將使角色直接死亡,若只有一人則其造成傷害大幅下降#k\r\n";
		msg += icon1 + " #b9.#k #d若在規範區外的人數超過1人則於規範區外的人將會每秒損失20%最大生命的血量#k\r\n";
		msg += icon1 + " #b10.#k #d組隊每使用3次萬能療傷藥將小幅度縮小規範圈的範圍,最低縮減至原本之30%#k\r\n";
		msg += icon1 + " #b11.#k #d組隊死亡次數每5次將會消除玩家BUFF狀態且暈眩玩家#k\r\n";
        msg += icon1 + " #b12.#k #d若全隊均位於規範圈,則啟動消除DEBUFF效果(尚未)\r\n";
		msg += icon1 + " #b13.#k #d未消滅之護衛軍將回復皇后3E的血量,至多10E\r\n";
		msg += icon1 + " #b14.#k #d皇后之攻擊將附帶負面效果,且20%機率造成魅惑#k\r\n";


		cm.sendYesNo(msg);
	}else if(status == 1){
          

		if (cm.getParty() != null) {
            if (cm.getDisconnected("Chaoss4") != null) {
                cm.getDisconnected("Chaoss4").registerPlayer(cm.getPlayer());
			 
             } else if (cm.isLeader()) {
						var job = Array();
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
						
						
						
						
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 200 || ccPlayer.getOneTimeLog(todayp + "皇后") >= 3) {
                                next = false;
                         
                            }
							
							if(ccPlayer != null){
							   job.push(ccPlayer.getJob());	
							}
                        }

                        if(jobcount(job) < 1 && !cm.getPlayer().isGM()){
							cm.sendOk("需至少四種不同職業");
							cm.dispose();
						}else{	
						
                        if (next) {
                            var q = cm.getEventManager("Chaoss4");
                            if (q == null) {
                                cm.sendOk("找不到腳本，請聯繫GM！");
								cm.dispose();
					
                            } else {
								var x = cm.getPlayer().getParty().getMembers().iterator();
			                    while(x.hasNext()){
				                    var p = x.next();
				                    var chr = MapleCharacter.getCharacterByName(p);
									if(chr !=null){
										chr.setOneTimeLog(todayp + "皇后");
									}
				                    
			                    }				
                                q.startInstance(cm.getParty(), cm.getMap());	
								cm.dispose();
                            }
                        } else {
                            cm.sendOk("全部隊友必須達到200等.");
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
			