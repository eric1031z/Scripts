
load('nashorn:mozilla_compat.js');
importPackage(Packages.server);
importPackage(Packages.server.life);
importPackage(Packages.tools.packet);
importPackage(Packages.constants);

var status = -1;
var getDate = new Date();
var today = (getDate.getFullYear()) + '-' + ("0" + (getDate.getMonth() + 1)).slice(-2) + '-' +getDate.getDate();

var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var need = "#fEffect/ItemEff/004/4#";


function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if(mode <= 0){
		cm.dispose();
		//cm.openNpc(9010000,"獎勵專區");
	}
	
    if (status == 0) {
		var msg = "";
		msg += icon5 + " #e#d【怪物入侵】#k\r\n";
		msg += icon1 + " #b上次來襲時間#k : #r" +  cm.getNextWMTime() + "#k\r\n";
		msg += "#L1#" + icon3 + " #d守護入侵地區!#k\r\n";
		cm.sendSimple(msg);
	}else if(status == 1){
		this. s1 = selection;
		var msg ="";
		if(s1 == 0){
			cm.sendSimple(cm.getAllWM());
		}else{
			if(cm.getAllCurrentWM() == ""){
				cm.sendOk("#d目前尚無襲擊!,請注意上次襲擊出現時間!#k");
				status = -1;
			}else{
			    cm.sendSimple(cm.getAllCurrentWM());
			}
		}
	}else if(status == 2){
		this. s = selection;
		if(s1 == 1){
			if(cm.getWM("hp",parseInt(s)) == 0){
				cm.sendOk("#d此野王尚待GM建置後推出,請稍候!#k");
				status = -1;
			}else{
				var msg = "#e";
			    msg += "#r#o" + s + "##k #d當前野王資料#k\r\n"
			    msg += "#d------------------------------------------#k\r\n";
			    msg += "#b#L0#當前位置(請換頻後點擊前往) :#k #d#m" + cm.getWM("currentmap",parseInt(s)) + "##k#l\r\n\r\n";
			    msg += "#d------------------------------------------#k\r\n";
			    msg += " #d野王怪物等級#k : #r" + MapleLifeFactory.getMonster(cm.getWM("mobid",parseInt(s))).getStats().getLevel() + "#k\r\n";
			    msg += " #d野王怪物血量#k : #r" + cm.getWM("hp",parseInt(s)) + " 千萬#k\r\n";
			    msg += " #d野王怪物魔量#k : #r" + cm.getWM("mp",parseInt(s)) + " 千萬#k\r\n";
			    msg += " #d野王怪物物攻#k : #r" + cm.getWM("watk",parseInt(s)) + "#k\r\n";
			    msg += " #d野王怪物魔攻#k : #r" + cm.getWM("matk",parseInt(s)) + "#k\r\n";
			    msg += " #d所需傷害占比#k : #r" + cm.getWM("prizeneed",parseInt(s)) + " %#k\r\n";
			    msg += " #d獲得獎勵道具#k : #i" + cm.getWM("prize",parseInt(s)) + "# #r#t" + cm.getWM("prize",parseInt(s)) + "##k\r\n";
			    msg += " #d獲得獎勵數量#k : #r" + cm.getWM("prizecount",parseInt(s)) + "#k\r\n";
			    msg += " #d最高傷害特獎#k : #i" + cm.getWM("bonus",parseInt(s)) + "# #r#t" + cm.getWM("bonus",parseInt(s)) + "##k\r\n";
			    msg += " #d特獎獲得數量#k : #r" + cm.getWM("bonuscount",parseInt(s)) + "#k\r\n";
			    cm.sendSimple(msg);
			}	
		}
	}else if(status == 3){
		this. s3 = selection;
		cm.sendYesNo("#d已確認換頻後要前往野王所在位置#k #r#m" + cm.getWM("currentmap",parseInt(s)) + " ##k#d嗎#k?");
	}else if(status == 4){
		this. s4 = selection;
		cm.getPlayer().changeMap(cm.getPlayer().getClient().getChannelServer().getMapFactory().getMap(cm.getWM("currentmap",parseInt(s))),cm.getPlayer().getClient().getChannelServer().getMapFactory().getMap(cm.getWM("currentmap",parseInt(s))).getPortal(0).getPosition());
		cm.sendOk("#d已成功傳送#k");
		cm.dispose();
	}
}
		