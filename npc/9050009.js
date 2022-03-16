load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.tools.packet);
importPackage(Packages.server.life);
importPackage(Packages.client);


var icon1 = "#fUI/UIWindow/Quest/icon0#"; //黃驚嘆
var icon5 = "#fItem/Etc/0422/04220176/info/iconRaw#"; //new
var icon2 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //藍圈
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時


;;!//錯誤


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
		var em = cm.getEventManager("EveryMap");
	    this. time = em.getProperty("regis");
		var msg = "";
		msg += icon5 + " #b租借地圖服務NPC#k\r\n";
		msg += icon3 + " #d當前剩餘時間 : #k #b" + (600000 - time*10000)/1000 + " 秒#k\r\n";
		msg += "#L0#" + icon3 + " #r租借終極祈禱技能#k #b(50GASH)#k\r\n";
		msg += "#L1#" + icon3 + " #r租借會心之眼技能#k #b(50GASH)#k\r\n";
		msg += "#L2#" + icon3 + " #r租借英雄回響技能#k #b(50GASH)#k\r\n";
		cm.sendSimple(msg);
		//cm.dispose();
	}else if(status == 1){
		this. s = selection;
		if(cm.getPlayer().getCSPoints(0) < 50){
			cm.sendOk("#d您的GASH不足#k");
			cm.dispose();
		}else{
			if(s == 0){
				SkillFactory.getSkill(9001002).getEffect(1).applyTo(cm.getPlayer(),cm.getPlayer(),true,null,(600000 - time*5000));
			}else if(s == 1){
				SkillFactory.getSkill(3121002).getEffect(30).applyTo(cm.getPlayer(),cm.getPlayer(),true,null,(600000 - time*5000));
			}else if(s == 2){
				SkillFactory.getSkill(1005).getEffect(1).applyTo(cm.getPlayer(),cm.getPlayer(),true,null,(600000 - time*5000));
			}
			cm.sendOk("#b已成功施放!#k");
			cm.getPlayer().modifyCSPoints(0,-50,true);
			cm.dispose();
		}
	}
}