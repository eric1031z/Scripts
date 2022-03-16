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
		msg += "                   #e#b四王副本 - 貝倫#k\r\n\r\n";
		msg += icon1 + " #b1.#k #d本副本限制至少需#k#r4種不同職業#k\r\n";
		msg += icon1 + " #b2.#k #d本副本限制#k#r190等#k#d以上才能入場#k\r\n";
		msg += icon1 + " #b3.#k #d本副本限制#k#r3小時#k#d內完成#k\r\n";
		msg += icon1 + " #b4.#k #d副本內每#k#r5秒#k#d才能補給一次#k\r\n";
		msg += icon1 + " #b5.#k #d副本內無法使用#k#r萬能療傷藥#k\r\n";
		msg += icon1 + " #b6.#k #d副本內每#k#r20#k#d秒會於各玩家附近生成#k#r2隻小怪#k\r\n";
		msg += icon1 + " #b7.#k #d副本內祭壇左邊區域 遠攻傷害減至#k#r1/4#k#d近攻傷害減至#k#r2/5#k\r\n";
		msg += icon1 + " #b8.#k #d副本內祭壇左邊區域 遠攻承受傷害#k#r70%最大生命#k#d近攻承受傷害#k#r60%最大生命#k\r\n";
		msg += icon1 + " #b9.#k #d副本內祭壇右邊區域 傷害統一減至#k#r3/5#k\r\n";
		msg += icon1 + " #b10.#k #d副本內祭壇右邊區域 承受傷害統一#k#r90%最大生命#k\r\n";
		msg += icon1 + " #b11.#k #d每#k#r15秒#k#d生成立即使用之#k#r組隊萬能療傷藥與藥水#k\r\n";
        msg += icon1 + " #b12.#k #d每20秒將會消除玩家所有BUFF效果\r\n";
		msg += icon1 + " #b13.#k #d擊殺4種衛兵各達10隻將抵免定時消除BUFF\r\n";
		msg += icon1 + " #b14.#k #d擊殺10隻劍兵將多生成1個組隊萬能療傷藥#k\r\n";
		msg += icon1 + " #b15.#k #d擊殺10隻斧頭兵將多生成1個50%藥水#k\r\n";
		msg += icon1 + " #b16.#k #d每擊殺10劍盾牌兵將減少藥水生成時間1秒#k\r\n";
		msg += icon1 + " #b17.#k #d每擊殺2隻狼騎手將減少一次死亡累積#k\r\n";
		msg += icon1 + " #b18.#k #d隊伍死亡累積次數達#r80次#k#d則挑戰失敗#k\r\n";
		msg += icon1 + " #b19.#k #d未消滅怪物達#r80隻#k#d則挑戰失敗#k\r\n";
		msg += icon1 + " #b20.#k #d未消滅怪物達#r15隻#k#d則貝倫再減傷1/4#k\r\n";
		msg += icon1 + " #b21.#k #d每累積10次死亡將提升藥水生成時間#k#r2秒#k\r\n";

		cm.sendYesNo(msg);
	}else if(status == 1){
          

		if (cm.getParty() != null) {
            if (cm.getDisconnected("EveryMap") != null) {
                cm.getDisconnected("EveryMap").registerPlayer(cm.getPlayer());
			 
             } else if (cm.isLeader()) {
						var job = Array();
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
						
						
						
						
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 190 || ccPlayer.getOneTimeLog(todayp + "威爾") >= 3) {
                                next = false;
                         
                            }
							
							if(ccPlayer != null){
							   job.push(ccPlayer.getJob());	
							}
                        }

                        if(jobcount(job) < 1){
							cm.sendOk("需至少四種不同職業");
							cm.dispose();
						}else{	
						
                        if (next) {
                            var q = cm.getEventManager("EveryMap");
                            if (q == null) {
                                cm.sendOk("找不到腳本，請聯繫GM！");
								cm.dispose();
					
                            } else {
								var x = cm.getPlayer().getParty().getMembers().iterator();
			                    while(x.hasNext()){
				                    var p = x.next();
				                    var chr = MapleCharacter.getCharacterByName(p);
									if(chr !=null){
										chr.setOneTimeLog(todayp + "威爾");
									}
				                    
			                    }				
                                q.startInstance(cm.getParty(), cm.getMap());	
								cm.dispose();
                            }
                        } else {
                            cm.sendOk("全部隊友必須達到190等.");
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
			