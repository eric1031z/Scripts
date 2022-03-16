
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.constants);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
importPackage(Packages.handling.world);

var status ;


var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";

var today = new Date();
var todayp = (today.getMonth()+1) + "/" + today.getDate(); 

var mth = (today.getMonth()+1);


var items = [

   [1114000,1,0], //血盟
   [5220010,1,0], //超級轉蛋
   [5062002,5,10], //傳說方塊
   [5062001,10,15], //超奇方塊  
   [5062000,20,15], //奇幻方塊   
   [2022179,15,5], //蘋果
   [2022567,20,10], //鮮奶油蛋糕   
   [2340000,5,5], //祝福   
   [2450000,3,30], //獵人
   [2022530,3,30], //連翹花
   [5220000,50,15], //轉蛋   
   [2250000,5,20], //500W
   [2250001,5,5], //5000W
   [2250002,2,1], //2E

];

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
		//cm.openNpc(9010000,"獎勵專區");
	}
	
	if(status == 0){
		this. grade = cm.getPlayer().getLevel();
		this. sname = cm.getPlayer().getClient().getChannelServer().getServerName();
		this. pname = cm.getPlayer().getName();
		var msg = "";
		msg += icon5 + " #e#d玩家 :#k #r#e" + pname + "#k #d簽到獎勵頁面#k\r\n";
		msg += icon5 + " #d當前日期 :#k #r#e" + todayp + "#k\r\n";
		msg += "#L0#" + icon3 + " #b查看簽到規則#k\r\n";
		//msg += "#L1#" + icon3 + " #b查看簽到獎勵#k\r\n";
		msg += "#L2#" + icon3 + " #b完成今日簽到#k\r\n";
		cm.sendSimple(msg);
	}else if(status == 1){
		this. s = selection;
		if(s == 0){
			var msg = "#e";
			msg += icon1 + " #d簽到規則#k\r\n\r\n";
			msg += icon3 + " #r70等#k #b以上才能進行簽到\r\n";
			msg += icon3 + " #b每日皆可簽到一次#k#r(於0:00重置)#k\r\n";
			msg += icon3 + " #b簽到將必定獲得一個 #i5640001#\r\n";
			//msg += icon3 + " #b簽到會隨機獲得隨機道具#k #r(可至專區查看)#k\r\n";
			//msg += icon3 + " #b簽到有低機率獲得#k #r血盟戒指與超級轉蛋卷#k\r\n";
	        cm.sendOk(msg);
			status = -1;
		}else if(s == 1){
			var msg = "";
			msg += icon5 + " #b簽到獎勵#k\r\n";
	
			
			for(var i = 0 ; i < items.length ; i++){
				var adjust = "";
				
				var q = MapleItemInformationProvider.getInstance().getName(items[i][0]) + "" + items[i][1];
				var m = 0;
				var z = q;
				for(var a = 0 ; a < z.length ; a++){
					if(!isNaN(z.charAt(a))){
				        m++;
					}else{
						m++;
						m++;
					}
			    }
				for(var x = 0 ; x < 20-m ; x++){
					adjust += " ";
				}
				
				msg += icon3 + " #d#z" + items[i][0] + "##k#r" + items[i][1] + "#k#d個#k" + (i!=0 && i%2 == 1 ? "\r\n" : adjust);
			    
			}
			cm.sendOk(msg);
			status = -1;
		}else if(s == 2){
			var msg = "";
			if(cm.getPlayer().getLevel() < 70){
				cm.sendOk("#e70等以上才能簽到喔!");
				cm.dispose();
			}else if(cm.getPlayer().getPrizeLog(todayp + "簽到") > 0 && !cm.getPlayer().isGM()){
				cm.sendOk("#d您今日已經簽到過囉!#k");
				status = -1;
			}else if(cm.getMacLog(todayp) >= 3){
				cm.sendOk("#d同一台電腦只能簽到一次#k");
				status = -1;
			}else{
				var msg = "#e簽到成功!!\r\n#r發送的禮物包可至贊助專區兌換成紅利#k\r\n";
				cm.gainItem(5640001,1);
				cm.getPlayer().setChronosphere(cm.getPlayer().getChronosphere() + 500);
				if(cm.getPlayer().getPrizeLog(mth + "傳說方塊禮包") > 0){
					cm.gainItem(5062002,100);
					msg += "#b已發送傳說方塊禮包獎勵!\r\n";
				}
				
				if(cm.getPlayer().getPrizeLog(mth + "一百紅利禮包") > 0){
					cm.gainItem(5640002,1);
					msg += "#b已發送一百紅利禮包獎勵!\r\n";
				}
				
				if(cm.getPlayer().getPrizeLog(mth + "強化藥水禮包") > 0){
					cm.gainItem(5640005,1);
					msg += "#b已發送強化藥水禮包獎勵!\r\n";
				}
				
				if(cm.getPlayer().getPrizeLog(mth + "頂級寶石禮包") > 0){
					cm.gainItem(4470014,1);
					msg += "#b已發送頂級寶石禮包獎勵!\r\n";
				}
				
				if(cm.getPlayer().getPrizeLog(mth + "Ｘ卷寶箱禮包") > 0){
					cm.gainItem(4280001,1);
				    cm.gainItem(5490001,1);
					msg += "#b已發送Ｘ卷寶箱禮包獎勵!\r\n";
				}
				cm.sendOk(msg);
				cm.getPlayer().setPrizeLog(todayp + "簽到");
				cm.setMacLog(todayp);
				World.Broadcast.broadcastMessage(CWvsContext.serverNotice(6, "【暖光簽到】玩家「" + cm.getPlayer().getName() + "」簽到成功獲得50紅利！"));
			    status = -1;
			}
		}
			
		
	}
		
}




