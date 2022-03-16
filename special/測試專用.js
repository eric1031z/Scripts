
load('nashorn:mozilla_compat.js');
importPackage(Packages.server);
importPackage(Packages.server.life);
importPackage(Packages.tools.packet);
importPackage(Packages.constants);

var status = -1;
var getDate = new Date();
var today = (getDate.getFullYear()) + '-' + ("0" + (getDate.getMonth() + 1)).slice(-2) + '-' +getDate.getDate();

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if(mode == 0){
		cm.dispose();
	}
	
    if (status == 0) {
		var msg = "";
		msg += "#b世界野王系統#k\r\n";
		msg += "#b距離上波野王#k : #r" +  cm.getNextWMTime() + "#k\r\n";
		msg += "#L1##d查看當前世界王#k\r\n";
		cm.sendSimple(msg);
	}else if(status == 1){
		this. s1 = selection;
		var msg ="";
		if(s1 == 0){
			cm.sendSimple(cm.getAllWM());
		}else{
			if(cm.getAllCurrentWM() == ""){
				cm.sendOk("#d目前尚無野王出現!,請注意上波野王出現時間!#k");
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
				var msg = "";
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
		