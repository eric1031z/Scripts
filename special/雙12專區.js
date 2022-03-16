load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.tools.packet);
importPackage(Packages.constants);
importPackage(Packages.client.inventory);


var status ;
var enforce = 1; //灌水

var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var need = "#fEffect/ItemEff/004/4#";
var cash = "#fEffect/ItemEff/004/5#";


var prize = [

	 
	 
	 
	 


];
var status = -1;

function start(){
	
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
		cm.sendSimple("                " + icon5 + " #e#d雙12專區#k\r\n#L106#" + icon3 + " #b雙12贊助禮包(購買請洽GM)#l\r\n");
	}else if(status == 1){
		this. sel = selection;
		if(sel < 0){
			cm.dispose();
		}else if(sel == 99){
			cm.dispose();
			cm.openNpc(9010000,"實況");
		}else if(sel == 100){
			cm.dispose();
			cm.openNpc(9010000,"論壇");
		}else if(sel == 101){
			cm.dispose();
			cm.openNpc(9010000,"推薦");
		}else if(sel == 102){
			cm.dispose();
			cm.openNpc(9010000,"商店補償1");
		}else if(sel == 103){
			cm.dispose();
			cm.openNpc(9010000,"商店補償2");
		}else if(sel == 104){
			cm.dispose();
			cm.openNpc(9010000,"光棍補");	
		}else if(sel == 105){
			cm.dispose();
			cm.openNpc(9010000,"光棍禮包2");
		}else if(sel == 106){
			cm.dispose();
			cm.openNpc(9010000,"光棍禮包");
		}else{
		     cm.sendYesNo(menu(sel));
		}
	}else if(status == 2){
		getPrize(sel);
	}
}


function prizeMenu(){
	var memo = "";
	var allch = 0;
	var nex = 0;
	memo += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
	for(var para = 0 ; para < prize.length ; para ++ ){
		if(cm.getPlayer().getPrizeLog(prize[para][0][0]) > 0){
			allch ++;
			memo += "";
		}else {
		    memo += "#L" + para + "##b" + icon3 + " #r#e" + prize[para][0][0] + "#n#k #b" + prize[para][0][2] + "#k#l" + "\r\n";
		}
		
	}
	if(allch == prize.length){
		memo = "\r\n#d您已領取其他所有回饋!#k";
	}
	return memo;
}

function menu(sel){
	var msg = icon5 + " #e#r" + prize[sel][0][0] + " 內容#k  " + icon1 + " #b領取條件 #k #r達等級" + prize[sel][0][1] + "#k\r\n\r\n";
	msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
	for(var para = 1 ; para < prize[sel].length ; para ++ ){
		var date = prize[sel][para][2] == -1 ? "無期限" : (prize[sel][para][2] + "天"); 
		if(!isNaN(prize[sel][para][0])){
		    msg += get + " #d獲得 #k#i" + prize[sel][para][0] + "##b #z" + prize[sel][para][0] + "##k #d共 :#k#r" + prize[sel][para][1] + "個 #k #b(" + date + ")#k\r\n";
		}else{
			msg += "\r\n" + cash + " #d獲得#k #b" + prize[sel][para][0] + "#k #d共 :#k#r" + prize[sel][para][2] + " 點#k\r\n";  
		}
	}
	msg += "\r\n" + checkSlot(sel);
	return "#e" + msg + "#n";
}

function getPrize(sel){
	if(cm.getPlayer().getLevel() < prize[sel][0][1]){
		cm.sendOk("#d等級需達:#k #r" + prize[sel][0][1] + "#k");
	}else if(checkSlot(sel).match("不足")){
		cm.sendOk(checkSlot(sel));
	}else{
	    for(var ls = 1 ; ls < prize[sel].length ; ls++){
		    if(!isNaN(prize[sel][ls][0])){
			    cm.gainItemNoTrade(prize[sel][ls][0],prize[sel][ls][1],prize[sel][ls][2]);
		    }else{
			    cm.getPlayer().modifyCSPoints(prize[sel][ls][1],prize[sel][ls][2],true);
		    }
	    }
	    cm.getPlayer().setPrizeLog(prize[sel][0][0]);
	    cm.sendOk("已發放 #r" + prize[sel][0][0] + "#k補償");
	}
	status = -1;
}

function checkSlot(index){
	var msg = icon1 + " #b背包容量檢查 :#k ";
	var equip = 0;
	var use = 0;
	var etc = 0;
	var install = 0;
	var cash = 0;
	for(var i = 0 ; i < prize[index].length ; i++){
		if(!isNaN(prize[index][i][0])){
		    if(GameConstants.getInventoryType(prize[index][i][0]) == MapleInventoryType.EQUIP){
			    equip++;
		    }else if(GameConstants.getInventoryType(prize[index][i][0]) == MapleInventoryType.USE){
				use++;
			}else if(GameConstants.getInventoryType(prize[index][i][0]) == MapleInventoryType.ETC){
				etc++;
			}else if(GameConstants.getInventoryType(prize[index][i][0]) == MapleInventoryType.SETUP){
				install++;
			}else if(GameConstants.getInventoryType(prize[index][i][0]) == MapleInventoryType.CASH){
				cash++;
			}
		}
	}
	if(cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getNumFreeSlot() < equip){
		msg += "#d您的#k #r裝備欄#k #d不足格數 :#k #r" + (equip - cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getNumFreeSlot()) + "#k\r\n";
	}else if(cm.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() < use){
		msg += "#d您的#k #r消耗欄#k #d不足格數 :#k #r" + (use - cm.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot()) + "#k\r\n";
	}else if(cm.getPlayer().getInventory(MapleInventoryType.ETC).getNumFreeSlot() < etc){
		msg += "#d您的#k #r其他欄#k #d不足格數 :#k #r" + (etc - cm.getPlayer().getInventory(MapleInventoryType.ETC).getNumFreeSlot()) + "#k\r\n";
	}else if(cm.getPlayer().getInventory(MapleInventoryType.SETUP).getNumFreeSlot() < install){
		msg += "#d您的#k #r裝飾欄#k #d不足格數 :#k #r" + (install - cm.getPlayer().getInventory(MapleInventoryType.SETUP).getNumFreeSlot()) + "#k\r\n";
	}else if(cm.getPlayer().getInventory(MapleInventoryType.CASH).getNumFreeSlot() < cash){
		msg += "#d您的#k #r裝飾欄#k #d不足格數 :#k #r" + (cash - cm.getPlayer().getInventory(MapleInventoryType.CASH).getNumFreeSlot()) + "#k\r\n";
	}else{
		msg += "#r獎勵物品可正常領取#k\r\n";
	}
	return msg;
	
}