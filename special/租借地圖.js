load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.tools.packet);
importPackage(Packages.server.life);
importPackage(Packages.client);

var icon1 = "#fUI/UIWindow/Quest/icon0#"; //黃驚嘆
var icon5 = "#fItem/Etc/0422/04220176/info/iconRaw#"; //new
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //藍圈
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時


var cost = 50;
var work = [100040100,105010000,540020100,103040400,541010010,197010000,260020610,541020200,551030100,261020300,261020401,800020130,251010402,541020500,211060100,240040511,980010000];

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
		cm.openNpc(9010000,"系統專區");
	}
	
	if(status == 0){
		var msg = "";
		msg += icon5 + " #d歡迎使用租用地圖功能，以下為注意事項:#k\r\n";
		//msg += icon3 + " #r0.#k #r目前測試僅開放練功地圖(拍賣/地圖傳送)#k\r\n";
		msg += icon3 + " #r1.#k #b租用地圖為獨立空間,可供單人使用#k\r\n";
		msg += icon3 + " #r2.#k #b租用地圖內使用以10分鐘為限#k\r\n";
		msg += icon3 + " #r3.#k #b租用地圖內生成怪物速度大幅提高#k\r\n";
		msg += icon3 + " #r4.#k #b進入時會消除所有BUFF狀態!#k#r消耗物品請進入後使用!#k\r\n";
		msg += icon3 + " #r5.#k #b租用地圖使用一次須花費#k #r" + cost + "#k #bGASH#k\r\n";
		cm.sendYesNo(msg);
	}else if(status == 1){
        //if(work.indexOf(cm.getPlayer().getMapId()) != -1){

		if (cm.getParty() != null) {
            if (cm.getDisconnected("EveryMap") != null) {
                cm.getDisconnected("EveryMap").registerPlayer(cm.getPlayer());
             } else if (cm.isLeader()) {
						
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
						if (cm.getParty().getMembers().size() != 1) {
                            cm.sendNext("此副本只可以單人使用!您目前隊伍人數不能打副本。");
                            cm.dispose();
           
                        }
						
						if(cm.getPlayer().getCSPoints(0) < cost){
							cm.sendOk("#b使用地圖租借功能需要#k #r" + cost + "#k #bGASH#k");
							cm.dispose();
						}
						
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 10) {
                                next = false;
                         
                            }
                        }	
                        if (next) {
                            var q = cm.getEventManager("EveryMap");
                            if (q == null) {
                                cm.sendOk("找不到腳本，請聯繫GM！");
								cm.dispose();
					
                            } else {
                                q.startInstance_Party(cm.getMap().getId(),cm.getPlayer());
								cm.getPlayer().modifyCSPoints(0,-cost,true);
								cm.getPlayer().cancelAllBuffs();
								cm.dispose();
                            }
                        } else {
                            cm.sendOk("全部隊友必須達到10等.");
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
		//}else{
		//	cm.sendOk("目前測試僅開放練功地圖(拍賣/地圖傳送)");
		//	cm.dispose();
		//}
	
   }
}
			