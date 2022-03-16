/*
	NPC Name: 		Adobis
	Map(s): 		El Nath : Entrance to Zakum Altar
	Description: 		Zakum battle starter
*/
var status = 0;

load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.tools.packet);
importPackage(Packages.server.life);
importPackage(Packages.client);

var today = new Date();
var todayp = (today.getMonth()+1) + "/" + today.getDate(); 

function action(mode, type, selection) {
	if (cm.getPlayer().getOneTimeLog(todayp + "炎魔") >= 30){
		cm.sendOk("一天只能打30次喔");
		cm.dispose();
	}else if (cm.getPlayer().getMapId() == 211042200) {
		if (selection < 100) {
			cm.sendSimple("#r#L100#殘暴炎魔#l\r\n#L101#混沌殘暴炎魔#l\r\n#b目前挑戰次數 :#k" +  cm.getPlayer().getBossLog("炎魔"));
		} else {
			if (selection == 100) {
				cm.warp(211042300,0);
			} else if (selection == 101) {
				cm.warp(211042301,0);
			}
			cm.dispose();
		}
		return;
	 
	} else {
    switch (status) {
	case 0:
		if (cm.getPlayer().getLevel() < 50) {
			cm.sendOk("50等才能打炎魔,滾吧");
			cm.dispose();
			return;
		}
	    var em = cm.getEventManager("ZakumBattle");

	    if (em == null) {
		cm.sendOk("The event isn't started, please contact a GM.");
		cm.safeDispose();
		return;
	    }
	var prop = em.getProperty("state");
	    var marr = cm.getQuestRecord(160101);
	    var data = marr.getCustomData();
	    if (data == null) {
		marr.setCustomData("0");
	        data = "0";
	    }
	    var time = parseInt(data);
	if (prop == null || prop.equals("0")) {
	    var squadAvailability = cm.getSquadAvailability("ZAK");
	    if (squadAvailability == -1) {
		status = 1;
	    
		cm.sendYesNo("你想要成為遠征隊的領導人嗎？");

	    } else if (squadAvailability == 1) {
	   
		var type = cm.isSquadLeader("ZAK");
		if (type == -1) {
		    cm.sendOk("The squad has ended, please re-register.");
		    cm.safeDispose();
		} else if (type == 0) {
		    var memberType = cm.isSquadMember("ZAK");
		    if (memberType == 2) {
			cm.sendOk("你被BANG了");
			cm.safeDispose();
		    } else if (memberType == 1) {
			status = 5;
			cm.sendSimple("啊你現在是要幹嘛?? \r\n#b#L0#查看送死名單#l \r\n#b#L1#加入敢死隊#l \r\n#b#L2#先逃了掰#l");
		    } else if (memberType == -1) {
			cm.sendOk("The squad has ended, please re-register.");
			cm.safeDispose();
		    } else {
			status = 5;
			cm.sendSimple("啊你現在是要幹嘛?? \r\n#b#L0#查看送死名單#l \r\n#b#L1#加入敢死隊#l \r\n#b#L2#先逃了掰#l");
		    }
		} else { // Is leader
		    status = 10;
		    cm.sendSimple("啊你現在是要幹嘛? \r\n#b#L0#查看名單#l \r\n#b#L1#踢掉低能兒#l \r\n#b#L2#編輯名單#l \r\n#r#L3#進去送死#l");
		// TODO viewing!
		}
	    } else {
			var eim = cm.getDisconnected("ZakumBattle");
			if (eim == null) {
				var squd = cm.getSquad("ZAK");
				if (squd != null) {
					cm.sendYesNo("已經開打了啦\r\n" + squd.getNextPlayer());
					status = 3;
				} else {
					cm.sendOk("已經開打了啦");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("你回來啦,讚喔");
				status = 1;
			}
	    }
	} else {
			var eim = cm.getDisconnected("ZakumBattle");
			if (eim == null) {
				var squd = cm.getSquad("ZAK");
				if (squd != null) {
					cm.sendYesNo("已經開打了啦\r\n" + squd.getNextPlayer());
					status = 3;
				} else {
					cm.sendOk("已經開打了啦");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("你回來啦,讚喔");
				status = 1;
			}
	}
	    break;
	case 1:
	    	if (mode == 1) {
			if (cm.registerSquad("ZAK", 5, " 已經成為炎魔遠征隊隊長,快加入他一起去送死")) {
				cm.sendOk("您已成為遠征隊隊長,讚喔");
			} else {
				cm.sendOk("An error has occurred adding your squad.");
			}
	    	} else {
			cm.sendOk("如果你想成為遠征隊的領導人，再來告訴我。")
	    	}
	    cm.safeDispose();
	    break;
	case 2:
		if (!cm.reAdd("ZakumBattle", "ZAK")) {
			cm.sendOk("Error... please try again.");
		}
		cm.safeDispose();
		break;
	case 3:
		if (mode == 1) {
			var squd = cm.getSquad("ZAK");
			if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
				squd.setNextPlayer(cm.getPlayer().getName());
				cm.sendOk("You have reserved the spot.");
			}
		}
		cm.dispose();
		break;
	case 5:
	    if (selection == 0) {
		if (!cm.getSquadList("ZAK", 0)) {
		    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		    cm.safeDispose();
		} else {
		    cm.dispose();
		}
	    } else if (selection == 1) { // join
		var ba = cm.addMember("ZAK", true);
		if (ba == 2) {
		    cm.sendOk("The squad is currently full, please try again later.");
		    cm.safeDispose();
		} else if (ba == 1) {
		    cm.sendOk("You have joined the squad successfully");
		    cm.safeDispose();
		} else {
		    cm.sendOk("You are already part of the squad.");
		    cm.safeDispose();
		}
	    } else {// withdraw
		var baa = cm.addMember("ZAK", false);
		if (baa == 1) {
		    cm.sendOk("You have withdrawed from the squad successfully");
		    cm.safeDispose();
		} else {
		    cm.sendOk("You are not part of the squad.");
		    cm.safeDispose();
		}
	    }
	    break;
	case 10:
	    if (selection == 0) {
		if (!cm.getSquadList("ZAK", 0)) {
		    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		}
		cm.safeDispose();
	    } else if (selection == 1) {
		status = 11;
		if (!cm.getSquadList("ZAK", 1)) {
		    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		cm.safeDispose();
		}

	    } else if (selection == 2) {
		status = 12;
		if (!cm.getSquadList("ZAK", 2)) {
		    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		cm.safeDispose();
		}

	    } else if (selection == 3) { // get insode
		if (cm.getSquad("ZAK") != null) {
		    var dd = cm.getEventManager("ZakumBattle");
			var it = cm.getSquad("ZAK").getMembers().iterator();
			while(it.hasNext()){
				var ito = it.next();
				MapleCharacter.getCharacterByName(ito).setOneTimeLog(todayp + "炎魔");
			}
		    dd.startInstance(cm.getSquad("ZAK"), cm.getMap(), 160101);
		    cm.dispose();
		} else {
		    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		    cm.safeDispose();
		}
	    }
	    break;
	case 11:
	    cm.banMember("ZAK", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("ZAK", selection);
	    }
	    cm.dispose();
	    break;
    }
	}
}