
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.constants);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
importPackage(Packages.handling.world);
importPackage(Packages.client.inventory);
importPackage(Packages.client);

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
		msg += icon5 + " #e#d玩家 :#k #r#e" + pname + "#k #d轉生頁面#k\r\n";
		msg += icon5 + " #d當前轉生數 :#k #r#e" +  reborn + "#k\r\n";
		msg += "#L0#" + icon3 + " #b查看轉生規則#k\r\n";
		msg += "#L1#" + icon3 + " #b我要進行轉生#k\r\n";
		//msg += "#L2#" + icon3 + " #b領取轉生好禮#k\r\n";
		
		cm.sendSimple(msg);
	}else if(status == 1){
		this. s = selection;
		if(s == 0){
			var msg = "";
			msg += icon1 + " #e#d轉生規則#k\r\n";
			msg += icon3 + " #b玩家達#k #r200級#k #b後始可轉生#k\r\n";
			msg += icon3 + " #b每一次轉生皆不會保留鍵盤技能\r\n";
			msg += icon3 + " #b轉生後會獲得隨轉生數成長的能力點數#k\r\n";
			msg += icon3 + " #b每一次轉生會獲得一張#i5220040# #r#z5220040##k\r\n";
			msg += icon3 + " #b每#k#r10#k#b轉將提升初/中階附魔上限1次\r\n";
			msg += icon3 + " #b每#k#r10#k#b轉將提升傷害上限上限50萬\r\n";
	        cm.sendOk(msg);
			status = -1;
		}else if(s == 1){
			if(cm.getPlayer().getLevel() < 200){
				cm.sendOk("#d您尚未達到轉生等級#k #r200等#k");
				status = -1;
			}else{
				var msg = "";
				msg += icon5 + " #e#d您目前轉生數為#k : #r" + reborn + "#k\r\n";
				if(cm.getPlayer().getReborns() > 0 && cm.getPlayer().getReborns()%10 == 9){
                    msg += icon1 + " #b此次轉生後附魔上限(初/中階)將提升至 :#k #r" + (Math.ceil(cm.getPlayer().getReborns()/10) + 15) + "#k\r\n";
					msg += icon1 + " #b此次轉生後將獲得一個#i5640007#\r\n";
				}
				msg += icon3 + " #d您確定要轉生嗎?#k\r\n";
                cm.sendYesNo(msg);				
			}
		}else if(s == 2){
			cm.dispose();
			cm.openNpc(9010000,"轉生");
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
		if(!cm.hasSubwpn()) {
			cm.sendOk("#d請先把副武器移除#k #r@取下副武器#k");
			status = -1;
		}else{
			
			cm.getPlayer().cancelAllBuffs();
			cm.gainItem(5220040,1);
            
			//cm.getPlayer().modifyCSPoints(0,500,true);
		    cm.clearSkills(); //清除技能
		    cm.getPlayer().setJob(s2); //職業設定為新手
		    //cm.getPlayer().setSubcategory(0); //設定Sub(影武者/重砲專用，轉職時使用)
		    cm.getPlayer().setExp(0); //經驗設定為0
		    cm.getPlayer().setLevel(10); //等級設定為10
		    cm.getPlayer().setReborns(1); //增加一轉身
			if(cm.getPlayer().getReborns() > 0 && cm.getPlayer().getReborns()%10 == 0){
				cm.gainItem(5640007,1);
			}
		    cm.getPlayer().setStr(4); //設定力量4
		    cm.getPlayer().setDex(4); //設定敏捷4
		    cm.getPlayer().setInt(4); //設定智力4
		    cm.getPlayer().setLuk(4); //設定幸運4
		    cm.getPlayer().setRemainingAp(apgain);
			
			/*for(var o = 0 ; o < cm.getPlayer().getRemainingSps().length ; o ++){
				cm.getPlayer().setRemainingSp(0,o);
				cm.getPlayer().updateSingleStat(MapleStat.AVAILABLESP,
			}*/
		    cm.getPlayer().saveToDB(false, false); //存檔
		    cm.getPlayer().reloadC(); //重新載入角色
		    cm.getPlayer().updateAP();
		    cm.getPlayer().levelUp();
		    cm.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, cm.getPlayer().getRemainingAp());
            cm.worldMessage(6, "[轉生提示] 恭喜 " + pname + " 完成轉生！");
		    cm.dispose();
			cm.openNpc(9010000,"快速轉職");
		}
	}
		
}




