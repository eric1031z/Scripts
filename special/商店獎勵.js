
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.constants);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
importPackage(Packages.handling.world);

var status ;


var icon1 = "#fUI/UIWindow/Quest/icon0#"; //黃驚嘆
var icon5 = "#fItem/Etc/0422/04220176/info/iconRaw#"; //new
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //藍圈
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時

var today = new Date();
var todayp = (today.getMonth()+1) + "/" + today.getDate(); 



function start(){
	status = -1;
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
		msg += icon3 + " #d玩家 :#k #r" + cm.getPlayer().getName() + "#k #d商店獎勵頁面#k\r\n";
		msg += icon3 + " #d當前累積時間#k : #r" + cm.shopTime() + "#k\r\n"
		msg += "#L0#" + icon1 + " #b查看獎勵規則#k\r\n";
		msg += "#L1#" + icon1 + " #b領取商店獎勵#k\r\n";
		cm.sendSimple(msg);
	}else if(status == 1){
		this. s = selection;
		if(s == 0){
			var msg = "";
			msg += icon1 + " #d商店獎勵規則#k\r\n";
			msg += icon3 + " #b每1小時累積#k #r10#k #bGASH(分鐘數不計)#k\r\n";
			msg += icon3 + " #b請務必在#k #r關閉商店後即刻領取#k #b重新開啟商店與重啟皆會清除時間紀錄\r\n";
	        cm.sendOk(msg);
			status = -1;
		}else if(s == 1){
			var msg = "";
			msg += icon1 + " #b簽到獎勵#k\r\n";
	
			
		    msg += icon3 + " #d當前累積時間#k : #r" + cm.getPlayer().getShopPrize(3600,0,0) + "#k #d小時#k\r\n";
			msg += icon3 + " #d可領取點數 :#k #r" + cm.getPlayer().getShopPrize(3600,0,0)*10 + "#k #dGASH#k\r\n";
			    
			
			cm.sendYesNo(msg);
		}
	}else if(status == 2){
		
		cm.getPlayer().modifyCSPoints(0,cm.getPlayer().getShopPrize(3600,0,0)*10,true);
		cm.getPlayer().setShopCheck(cm.getPlayer().getId(),0);
		cm.getPlayer().setShopTimeNow();
		cm.sendOk("#d已成功發放商店獎勵#k");
		cm.dispose();
			
	}
			
		
}
		





