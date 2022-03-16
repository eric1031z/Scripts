
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.constants);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
importPackage(Packages.handling.world);
importPackage(Packages.client.inventory);
importPackage(Packages.client);

var status ;
;;!//錯誤

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
		//cm.openNpc(9010000,"獎勵專區");
	}
	
	if(status == 0){
		this. grade = cm.getPlayer().getLevel();
		this. reborn = cm.getPlayer().getReborns();
		this. pname = cm.getPlayer().getName();
		this. apgain = (reborn+1)*10 + 49;
		var msg = "";
		msg += icon3 + " #d玩家 :#k #r" + pname + "#k #d轉生頁面#k\r\n";
		msg += icon3 + " #d當前轉生數 :#k #r" +  reborn + "#k\r\n";
		msg += "#L0#" + icon1 + " #b查看轉生規則#k\r\n";
		msg += "#L1#" + icon1 + " #b我要進行轉生#k\r\n";
		msg += "#L2#" + icon1 + " #b領取轉生好禮#k\r\n";
		if(cm.getPlayer().getPrizeLog("轉生補償") == 0 && cm.getPlayer().getReborns() > 0 && cm.getPlayer().getPrizeLog("已轉生") == 0){
			msg += "#L3#" + icon1 + " #b領取轉生補償#k\r\n";
		}
	    
		cm.sendSimple(msg);
	}else if(status == 1){
		this. s = selection;
		if(s == 0){
			var msg = "";
			msg += icon1 + " #d轉生規則#k\r\n";
			msg += icon3 + " #b玩家達#k #r200級#k #b後始可轉生#k\r\n";
			msg += icon3 + " #b每一次轉生皆不會保留鍵盤技能\r\n";
			msg += icon3 + " #b轉生後會獲得隨轉生數成長的能力點數#k\r\n";
			//msg += icon3 + " #b達#k #r10轉#k #b後每日打點上限提高至#k #r5000#k\r\n";
			//msg += icon3 + " #b達#k #r30轉#k #b後打怪實際傷害提升#k#r8%#k\r\n";
			msg += icon3 + " #b每一次轉生獲得#k #r500GASH/5張獵人/1個普通附魔/10個傳方/1個轉生道具/一千萬楓幣#k\r\n";
	        cm.sendOk(msg);
			status = -1;
		}else if(s == 1){
			if(cm.getPlayer().getLevel() < 200){
				cm.sendOk("#d您尚未達到轉生等級#k #r200等#k");
				status = -1;
			}else{
				var msg = "";
				msg += icon5 + " #d您目前轉生數為#k : #r" + reborn + "#k\r\n";
                msg += icon1 + " #b此次轉生後您可以獲得#k : #r" + apgain + "#k #b點能力值#k\r\n";
				msg += icon3 + " #d您確定要轉生嗎?#k\r\n";
                cm.sendYesNo(msg);				
			}
		}else if(s == 2){
			cm.dispose();
			cm.openNpc(9010000,"轉生");
		}else if(s == 3){
			var xx = cm.getPlayer().getReborns();
			cm.gainItem(2250001,xx);
			cm.getPlayer().setPrizeLog("轉生補償");
			cm.sendOk("已補償");
			cm.dispose();
		}
	}else if(status == 2){
		var msg = icon1 + " #b請選擇您的初始職業#k\r\n";
		msg += "#L0#" + icon3 + " #d初心者(包含精靈/重砲)#k\r\n";
		msg += "#L1000#" + icon3 + " #d皇家騎士團#k\r\n";
		msg += "#L2000#" + icon3 + " #d狂狼勇士#k\r\n";
		msg += "#L2001#" + icon3 + " #d龍魔島士#k\r\n";
		msg += "#L3000#" + icon3 + " #d末日反抗軍#k\r\n";
		cm.sendSimple(msg);	
	}else if(status == 3){
		this. s1 = selection;		
		if(s1 == 0){
			var msg = " #d您確定要轉職為初心者(包含精靈/重砲)嗎?#k\r\n";
		    cm.sendYesNo(msg);
	
		}else if(s1 == 1000){
			var msg = " #d您確定要轉職為皇家騎士團嗎?#k\r\n";
			cm.sendYesNo(msg);
	
		}else if(s1 == 2000){
			var msg = " #d您確定要轉職為狂狼勇士嗎?#k\r\n";
			cm.sendYesNo(msg);

		}else if(s1 == 2001){
			var msg = " #d您確定要轉職為龍魔導士嗎?#k\r\n";
			cm.sendYesNo(msg);
	
		}else if(s1 == 3000){
			var msg = " #d您確定要轉職為末日反抗軍嗎?#k\r\n";
			cm.sendYesNo(msg);
				
		}	
	}else if(status == 4){
		this. s2 = s1;
		if (cm.getPlayer().getReborns() > 0 && cm.getPlayer().getPrizeLog("轉生補償") == 0 && cm.getPlayer().getPrizeLog("已轉生") == 0){
			cm.sendOk("請先領取轉生補償");
			status = -1;
        }else if (!cm.hasSubwpn()) {
			cm.sendOk("#d請先把副武器移除#k #r@取下副武器#k");
			status = -1;
		}else{
			if(cm.getPlayer().getOneTimeLog("開始轉生") == 0){
				cm.getPlayer().setOneTimeLog("開始轉生");
			}
			cm.getPlayer().cancelAllBuffs();
			cm.gainItem(2250001,1);
            cm.gainItem(2450000,5);
            cm.gainItem(5064501,1);
			cm.gainItem(5062002,10);
			cm.gainItem(4036074,1);
			cm.getPlayer().modifyCSPoints(0,500,true);
		    cm.clearSkills(); //清除技能
		    cm.getPlayer().setJob(s2); //職業設定為新手
		    //cm.getPlayer().setSubcategory(0); //設定Sub(影武者/重砲專用，轉職時使用)
		    cm.getPlayer().setExp(0); //經驗設定為0
		    cm.getPlayer().setLevel(10); //等級設定為10
		    cm.getPlayer().setReborns(1); //增加一轉身
		    cm.getPlayer().setStr(4); //設定力量4
		    cm.getPlayer().setDex(4); //設定敏捷4
		    cm.getPlayer().setInt(4); //設定智力4
		    cm.getPlayer().setLuk(4); //設定幸運4
		    cm.getPlayer().setRemainingAp(apgain);
		    cm.getPlayer().saveToDB(false, false); //存檔
		    cm.getPlayer().reloadC(); //重新載入角色
		    cm.getPlayer().updateAP();
		    cm.getPlayer().levelUp();
		    cm.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, cm.getPlayer().getRemainingAp());
            cm.worldMessage(6, "[轉生提示] 恭喜 " + pname + " 完成轉生！");
			cm.getPlayer().setPrizeLog("已轉生");
		    cm.dispose();
			cm.openNpc(9010000,"快速轉職");
		}
	}
		
}




