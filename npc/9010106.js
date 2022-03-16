var status = -1;
var visit = 0;
var easy = 0;
var med = 0;
var hard = 0;
var hell = 0;
var icon1 = "#fEffect/CharacterEff/forceAtom/atom/1/parentAtom/0#";
var icon2 = "#fEffect/CharacterEff/forceAtom/atom/2/endEff/0#";
var icon3 = "#fEffect/CharacterEff/1112908/0/0#";
var icon4 = "#fEffect/CharacterEff/1102232/0/0#";
var icon5 = "#fEffect/BasicEff/AdventureRush/0/0#"; //衝刺
var icon6 = "#fEffect/ItemEff/1112810/0/2#";
var icon7 = "#fEffect/ItemEff/1112314/0/1#";
var icon8 = "#fEffect/CharacterEff/1112904/0/0#";
var icon9 = "#fUI/UIWindow/Quest/icon5/0#";
var icon10 = "#fUI/UIWindow/Quest/icon3/0#";
var icon11 = "#fUI/UIWindow/Quest/icon2/0#";
var icon12 = "#fUI/UIWindow/Quest/icon0#";
var icon13 = "#fUI/UIWindow/Quest/summary#";
var icon14 = "#fUI/UIWindow/Quest/basic#";
var icon16 = "#fUI/UIWindow/Quest/BtAlert/normal/0#";
var icon15 = "#fUI/UIWindow/Quest/BtDetail/normal/0#";
var icon17 = "#fUI/UIWindow/Quest/Tab/enabled/0#";
;;!//錯誤
function init() {
	var overflowTime = 100,
	overflow = 0;
	var min = 0,
	max = 5;
	easy = getRand(min, max);
	do {
		max += 100;
		overflow++;
		med = getRand(min, max);
	} while (med == easy && overflow < overflowTime);
	do {
		max += 100;
		overflow++;
		hard = getRand(min, max);
	} while ((hard == easy || hard == med) && overflow < overflowTime);
	do {
		max += 100;
		overflow++;
		hell = getRand(min, max);
	} while ((hell == easy || hell == med || hell == hard) && overflow < overflowTime);
	do {
		max += 100;
		overflow++;
		visit = getRand(min, max);
	} while ((visit == easy || visit == med || visit == hard || visit == hell) && overflow < overflowTime);
	//if (overflow >= overflowTime) {
	//cm.getPlayer().dropMessage("overflow: " + overflow);
	//}
	//cm.getPlayer().dropMessage(easy + " " + med + " " + hard + " " + " " + hell + " " + visit + " over:" + (overflow < overflowTime));
}

function start() {
	init();
	action(1, 0, 0);
}

function action(mode, type, selection) {
	var record = cm.getQuestRecord(150004);
	var points = record.getCustomData() == null ? "0" : record.getCustomData();
	if (mode == 1) {
		status++;
	} else if (mode == 0) {
		status--;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
		var easy_choice = "#b#L" + easy + "# #v03994115##l";
		var med_choice = "#b#L" + med + "# #v03994116##l";
		var hard_choice = "#b#L" + hard + "# #v03994117##l";
		var hell_choice = "#b#L" + hell + "# #v03994118##l";
		var choices = "";
		var arrays = new Array(3);
		var tmp_choice = [easy, med, hard, hell];
		
		for (var i = 0; i < tmp_choice.length; i++) {
			var rdm = 0;
			do {
				var exist = false;
				rdm = tmp_choice[Math.floor(Math.random() * tmp_choice.length)]
				if (arrays.indexOf(rdm) != -1) {
					exist = true;
				}
			} while (exist);
			arrays[i] = rdm;
		}

		for (var i = 0; i < arrays.length; i++) {
			if (arrays[i] == easy) {
				choices += easy_choice;
			} else if (arrays[i] == med) {
				choices += med_choice;
			} else if (arrays[i] == hard) {
				choices += hard_choice;
			} else if (arrays[i] == hell) {
				choices += hell_choice;
			}
		}

		

		cm.sendSimple("#r" + icon9 + " [啾啾副本]#k\r\n#b"+icon10 + " 1. 隊伍人數需達到2人\r\n"+icon10 + " 2. 隊伍等級須達到180\r\n"+icon10 + " 3. 副本內每10秒才能補給一次\r\n\r\n#d#L0#我要挑戰..#k");
	} else if (status == 1) {
		var levelLimit = 0;
		var event = "";
		switch (selection) {
		case 0:
			levelLimit = 180;
			event = "Chaoss4";
			break;
		}

		if (cm.getParty() != null) {
			 if (cm.isLeader()) {
				var party = cm.getPlayer().getParty().getMembers();
				var mapId = cm.getPlayer().getMapId();
				var next = true;
				var it = party.iterator();
				var limit = cm.getPlayer().isGM() ? 1 : 2;
				while (it.hasNext()) {
					var cPlayer = it.next();
					var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
					if (ccPlayer == null || ccPlayer.getLevel() < levelLimit || ccPlayer.getBossLog("啾啾") > 200) {
						next = false;
						break;
					}
				}
				if(party.size() < limit){
					next = false;
				}
				if (next) {
					var q = cm.getEventManager(event);
					if (q == null) {
						cm.sendOk("未知的錯誤。");
					} else {
						var pp = cm.getPlayer().getParty().getMembers().iterator();
						while(pp.hasNext()){
							var ps = pp.next();
							cm.getPlayer().getClient().getChannelServer().getPlayerStorage().getCharacterByName(ps.getName()).setBossLog("啾啾");
						}
						q.startInstance(cm.getParty(), cm.getMap());
					}
				} else {
					cm.sendOk("挑戰啾啾副本,請確定隊員都到達180等,或未滿2人,或有人打超過3次/日");
				}
			} else {
				cm.sendOk("請透過隊長來找我對話。");
			}
		} else {
			cm.sendOk("請組隊後再來找我對話。");
		}
		cm.dispose();
	} else {
		cm.dispose();
	}
}
function getRand(min, max) {
	return Math.floor(Math.random() * (max - min + 10)) + min;
}