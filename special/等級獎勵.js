
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.constants);
importPackage(Packages.client.inventory);

var status ;

var level = [

    [
	   [8],
	   [5062002,500,-1],
	],

    [
	   [10],
	   [1143199,1,-1],
	   [2000005,1,-1],
	   [3010038,1,-1],
	   [3010014,1,-1],
	   [2022179,20,-1],
	   [2022220,3,-1],
	   [2450000,10,-1],
	   [1112127,1,-1],
	   [1122017,1,-1],
	   [1202193,1,-1],
	   [4030003,1,-1],
	   //[5002005,1,-1],
	   [2250000,1,-1],
	   [1703022,1,-1],
	   [1012723,1,-1],
	   [1082748,1,-1],
	   [5450000,1,-1],
	   ["楓點",1,10000],
	],

	[
	   [30],
	   [4470001,3,-1],
	   [2450000,5,-1],
	   [2022179,5,-1],
	   [4470010,2,-1],
	   [2431965,2,-1],
	   ["楓點",1,2000],
	],	
	[
	   [70],
	   [2450000,5,-1],
       [2022179,5,-1],
	   [4470002,2,-1],
       [5640002,1,-1],	   
	   ["楓點",1,2000],
	],
	[
	   [120],
	   [2450000,10,-1],
	   [4470002,3,-1],
	   [2022179,10,-1],
	   [5640006,1,-1],
	   [5220040,1,-1],
	   [5640007,1,-1],
	   ["楓點",1,2000],
	],
	[
	   [150],
	   [2450000,10,-1],
       [2022179,10,-1],
       [5062002,100,-1],
	   [4470002,3,-1],
       [2430144,3,-1],	   
	   ["楓點",1,2000],
	],
	[
	   [200],
	   [2028092,2,-1],
	   [5220040,1,-1],
	   [5640006,1,-1],
	   //[5640005,1,-1],
	   [4470003,2,-1],
	   [5640003,1,-1],
	   [5062002,100,-1],
	   ["楓點",1,2000],
	],
	
];

var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var cash = "#fEffect/ItemEff/004/5#";

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
		msg += icon5 + " #e#d玩家 :#k #r" + pname + "#k #d等級獎勵頁面#k\r\n";
		msg += icon5 + " #d當前等級 :#k #r#e" + grade + "#k\r\n";
		msg += "#L0#" + icon3 + " #b查看各階段等級獎勵#k\r\n";
		msg += "#L1#" + icon3 + " #b獲得可領取等級獎勵#k\r\n";
		cm.sendSimple(msg);
	}else if(status == 1){
		this. s = selection;
		if(s == 0){
			cm.sendOk(viewPrize());
			status = -1;
		}else if(s == 1){
			cm.sendSimple(getPrize(grade));
		}else{
			cm.sendOk("#d領取好禮可使你更強大喔!#k");
			cm.dispose();
			//status = -1;
		}
	}else if(status == 2){
		this. s2 = selection;
		if(s2 == -1){
			cm.sendOk("#d已無獎勵可獲取#k");
			status = -1;
		}else{
		    var msg = icon5 + " #e#b選擇等級 : #k#r" + level[s2][0][0] + "#k\r\n";
		    msg += icon5 + " " + checkSlot(s2) + "\r\n";
		    msg += "#d-----------------------------------------#k\r\n";
		    cm.sendYesNo(msg + "" + viewGradePrize(s2));
		}

	}else if(status == 3){
        

		sendPrize(s2);
		cm.sendOk("#d已成功發放#k #r" + level[s2][0][0] + "#k #d等獎勵!#k");
		status = -1;


	}
		
}


function viewPrize(){

	var msg = "#e";
	for(var p1 = 0 ; p1 < level.length ; p1++){
		msg += icon5 + " #r【" + level[p1][0][0] + " 等獎勵】#k\r\n"
		for (var p2 = 1 ; p2 < level[p1].length ; p2++){
			var date = level[p1][p2][2] == -1 ? "無期限" : (level[p1][p2][2] + "天");
			if(!isNaN(level[p1][p2][0])){
			    msg += get + " #d獲得 #i" + level[p1][p2][0] + "# #z" + level[p1][p2][0] + "# 共#k #r" + level[p1][p2][1] + "個 #k #b(" + date + ")#k\r\n"; 
			}else{
				msg += cash + " #d獲得" + level[p1][p2][0] + " 共 #r" + level[p1][p2][2] + " 點#k\r\n";
			}
		}
		msg += "#b----------------------------------------------#k\r\n";	
	}
    	
	return msg;
}

function viewGradePrize(type){

	var msg = "#e";
	for(var i = 1 ; i < level[type].length ; i++){
		var date = level[type][i][2] == -1 ? "無期限" : (level[type][i][2] + "天");
		if(!isNaN(level[type][i][0])){
		    msg += get + " #d獲得 #i" + level[type][i][0] + "# #z" + level[type][i][0] + "# 共#k #r" + level[type][i][1] + "個 #k #b(" + date + ")#k\r\n"; 
		}else{
			msg += cash + " #d獲得" + level[type][i][0] + " 共 #r" + level[type][i][2] + " 點#k\r\n";
		}
	}
    	
	return msg;
}

function getPrize(grade){
	var msg = icon5 + " #b可領取獎勵 :#k\r\n";
	for(var i = 0; i < level.length ; i++){
		if(level[i][0][0] <= grade && cm.getPlayer().getPrizeLog("等級獎勵" + level[i][0][0]) == 0){
			msg += "#L" + i + "#" + icon3 + " #d#e領取 #k#r【" + level[i][0][0] + "】#k #d等獎勵#n#k\r\n"; 
		}
	}
	
	
	return msg;
}

function sendPrize(grade){
	if(checkSlot(s2).contains("不足")){
		cm.sendOk(checkSlot(grade));
		status = -1;
	}else{
		for(var i = 1 ; i < level[grade].length ; i++){
		    if(!isNaN(level[grade][i][0])){
				if(GameConstants.isPet(level[grade][i][0])){
				   cm.gainPet(level[grade][i][0],"可愛太陽",1,1,100,300,1);
			    }else{
			       cm.gainItemNoTrade(level[grade][i][0],level[grade][i][1],level[grade][i][2]);
			    }
		    }else{
				cm.getPlayer().modifyCSPoints(level[grade][i][1],level[grade][i][2],true);
		    }
		}
		cm.getPlayer().setPrizeLog("等級獎勵" + level[grade][0][0]);
		if(level[grade][0][0] == 10 ){
			cm.getPlayer().getClient().setDonate(3000);
		}
	}
	
}

function checkSlot(index){
	var msg = "#e#b背包容量檢查 :#k ";
	var equip = 0;
	var use = 0;
	var etc = 0;
	var install = 0;
	var cash = 0;
	for(var i = 0 ; i < level[index].length ; i++){
		if(!isNaN(level[index][i][0])){
		    if(GameConstants.getInventoryType(level[index][i][0]) == MapleInventoryType.EQUIP){
			    equip++;
		    }else if(GameConstants.getInventoryType(level[index][i][0]) == MapleInventoryType.USE){
				use++;
			}else if(GameConstants.getInventoryType(level[index][i][0]) == MapleInventoryType.ETC){
				etc++;
			}else if(GameConstants.getInventoryType(level[index][i][0]) == MapleInventoryType.SETUP){
				install++;
			}else if(GameConstants.getInventoryType(level[index][i][0]) == MapleInventoryType.CASH){
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
