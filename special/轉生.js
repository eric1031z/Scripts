
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.constants);
importPackage(Packages.client.inventory);

var status ;

var level = [
    
	[
	   [3],
	   [5062002,100,-1],
	   [4470004,1,-1],
	   [4034232,1,-1],
	   [5640001,1,-1],
	],
	[
	   [6],
	   [5062002,100,-1],
	   [5640005,1,-1],
	   [4034232,1,-1],
	   [5640001,1,-1],
	],
	[
	   [10],
	   [5062002,100,-1],
	   [4470004,1,-1],
	   [4034232,1,-1],
	   [4310255,3,-1],
       [5640007,1,-1],
	],
		[
	   [13],
	   [5062002,100,-1],
	   [5640005,1,-1],
	   [4034232,1,-1],
       [4470012,10,-1],
	],
	[
	   [16],
	   [5062002,100,-1],
	   [4470004,1,-1],
	   [4034232,1,-1],
       [5220010,1,-1],
	],
	[
	   [20],
	   [5062002,100,-1],
	   [4470004,1,-1],
	   [4034232,1,-1],
	   [4310255,3,-1],
	    [5640007,1,-1],
	],
	[
	   [23],
	   [5062002,200,-1],
	   [4470004,3,-1],
	   [4034232,1,-1],
       [4310039,3,-1],
	],
	[
	   [26],
	   [5062002,200,-1],
	   [4470005,2,-1],
	   [4034232,1,-1],
       [4310255,3,-1],
	],
		[
	   [30],
	   [5062002,200,-1],
	   [4470006,1,-1],
	   [4034232,1,-1],
       [4310044,3,-1],
	],
	[
	   [35],
	   [5062002,300,-1],
	   [5220010,1,-1],
	   [4034232,1,-1],
       [4310044,3,-1],
	   [4470010,3,-1],
	   [5640005,1,-1],
	],
	[
	   [40],
	   [5062002,300,-1],
	   [5220010,1,-1],
	   [4034232,1,-1],
       [5220082,3,-1],
	   [4470010,3,-1],
	   [5640001,1,-1],
	   [4310044,3,-1],
	],
	[
	   [45],
	   [5062002,300,-1],
	   [5220010,1,-1],
	   [4034232,1,-1],
       [4310044,3,-1],
	   [4470010,5,-1],
	   [5220082,5,-1],
	   [5640001,1,-1],
	   [5640007,1,-1],
	   [2431965,3,-1],
	],
	[
	   [50],
	   [1032220,1,-1],
	   [5062002,400,-1],
	   [5220010,1,-1],
	   [4034232,1,-1],
       [4310044,3,-1],
	   [4470010,5,-1],
	   [5220082,5,-1],
	   [5640001,1,-1],
	   [5640007,1,-1],
	   [2431965,3,-1],
	],
	[
	   [55],
	   [1122264,1,-1],
	   [5062002,400,-1],
	   [5220010,1,-1],
	   [4034232,1,-1],
       [4310044,3,-1],
	   [4470010,5,-1],
	   [5220082,5,-1],
	   [5640001,1,-1],
	   [5640007,1,-1],
	   [2431965,3,-1],
	],
	[
	   [60],
	   [1132243,1,-1],
	   [5062002,500,-1],
	   [5220010,1,-1],
	   [4034232,1,-1],
       [4310044,3,-1],
	   [4470010,5,-1],
	   [5220082,5,-1],
	   [5640001,1,-1],
	   [5640007,1,-1],
	   [2431965,3,-1],
	],
	[
	   [65],
	   [1032221,1,-1],
	   [5062002,500,-1],
	   [5220010,1,-1],
	   [4034232,1,-1],
       [4310044,3,-1],
	   [4470010,5,-1],
	   [5220082,5,-1],
	   [5640001,1,-1],
	   [5640007,1,-1],
	   [2431965,3,-1],
	],
	[
	   [75],
	   [1122265,1,-1],
	   [5062002,600,-1],
	   [5220010,1,-1],
	   [4034232,1,-1],
       [4310044,3,-1],
	   [4470010,5,-1],
	   [5220082,5,-1],
	   [5640001,1,-1],
	   [5640007,1,-1],
	   [2431965,3,-1],
	],
	[
	   [80],
	   [1132244,1,-1],
	   [5062002,600,-1],
	   [5220010,1,-1],
	   [4034232,1,-1],
       [4310044,3,-1],
	   [4470010,5,-1],
	   [5220082,5,-1],
	   [5640001,1,-1],
	   [5640007,1,-1],
	   [2431965,3,-1],
	],
	[
	   [85],
	   [1032222,1,-1],
	   [5062002,600,-1],
	   [5220010,1,-1],
	   [4034232,1,-1],
       [4310044,3,-1],
	   [4470010,5,-1],
	   [5220082,5,-1],
	   [5640001,1,-1],
	   [5640007,1,-1],
	   [2431965,3,-1],
	],
	[
	   [90],
	   [1122266,1,-1],
	   [5062002,700,-1],
	   [5220010,1,-1],
	   [4034232,1,-1],
       [4310044,3,-1],
	   [4470010,5,-1],
	   [5220082,5,-1],
	   [5640001,1,-1],
	   [5640007,1,-1],
	   [2431965,3,-1],
	],
	[
	   [95],
	   [1132245,1,-1],
	   [5062002,700,-1],
	   [5220010,1,-1],
	   [4034232,1,-1],
       [4310044,3,-1],
	   [4470010,5,-1],
	   [5220082,5,-1],
	   [5640001,1,-1],
	   [5640007,1,-1],
	   [2431965,3,-1],
	],
	[
	   [100],
	   [1032223,1,-1],
	   [5062002,800,-1],
	   [5220010,1,-1],
	   [4034232,1,-1],
       [4310044,3,-1],
	   [4470010,5,-1],
	   [5220082,5,-1],
	   [5640002,1,-1],
	   [5640007,1,-1],
	   [2431965,3,-1],
	],
	[
	   [110],
	   [1122267,1,-1],
	   [5062002,900,-1],
	   [5220010,1,-1],
	   [4034232,1,-1],
       [4310044,3,-1],
	   [4470010,5,-1],
	   [5220082,5,-1],
	   [5640002,1,-1],
	   [5640007,1,-1],
	   [2431965,3,-1],
	],
	[
	   [120],
	   [1132246,1,-1],
	   [5062002,1000,-1],
	   [5220010,1,-1],
	   [4034232,1,-1],
       [4310044,3,-1],
	   [4470010,5,-1],
	   [5220082,5,-1],
	   [5640002,1,-1],
	   [5640007,1,-1],
	   [2431965,3,-1],
	],

];

var icon1 = "#fEffect/ItemEff/004/0#"; //?????????
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //?????????
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //??????
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var need = "#fEffect/ItemEff/004/4#";

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
		//cm.openNpc(9010000,"????????????");
	}
	
	if(status == 0){
		this. grade = cm.getPlayer().getReborns();
		this. sname = cm.getPlayer().getClient().getChannelServer().getServerName();
		this. pname = cm.getPlayer().getName();
		var msg = "";
		msg += icon3 + " #d?????? :#k #r" + pname + "#k #d??????????????????#k\r\n";
		msg += icon3 + " #d???????????? :#k #r" + grade + "#k\r\n";
		msg += "#L0#" + icon1 + " #b???????????????????????????#k\r\n";
		msg += "#L1#" + icon1 + " #b???????????????????????????#k\r\n";
		cm.sendSimple(msg);
	}else if(status == 1){
		this. s = selection;
		if(s == 0){
			cm.sendOk(viewPrize());
			status = -1;
		}else if(s == 1){
			cm.sendSimple(getPrize(grade));
		}else{
			cm.sendOk("#d?????????????????????????????????!#k");
			cm.dispose();
			//status = -1;
		}
	}else if(status == 2){
		this. s2 = selection;
		if(s2 == -1){
			cm.sendOk("#d?????????????????????#k");
			status = -1;
		}else{
		    var msg = icon3 + " #b???????????? : #k#r" + level[s2][0][0] + "#k\r\n";
		    msg += icon3 + " " + checkSlot(s2) + "\r\n";
		    msg += "#d-----------------------------------------#k\r\n";
		    cm.sendYesNo(msg + "" + viewGradePrize(s2));
		}

	}else if(status == 3){
        

		sendPrize(s2);
		cm.sendOk("#d???????????????#k #r" + level[s2][0][0] + "#k #d?????????!#k");
		status = -1;


	}
		
}


function viewPrize(){

	var msg = "";
	for(var p1 = 0 ; p1 < level.length ; p1++){
		msg += icon3 + " #r???" + level[p1][0][0] + " ????????????#k\r\n"
		for (var p2 = 1 ; p2 < level[p1].length ; p2++){
			var date = level[p1][p2][2] == -1 ? "?????????" : (level[p1][p2][2] + "???");
			
			if(!isNaN(level[p1][p2][0])){
			    msg += "#d??????#i" + level[p1][p2][0] + "##z" + level[p1][p2][0] + "# ???#k #r" + level[p1][p2][1] + "??? #k #b(" + date + ")#k\r\n"; 
			}else{
				if(level[p1][p2][0] == "??????"){
					msg += "#d??????" + "????????????" + " : #r" + level[p1][p2][1] + " #k\r\n";
				}else{
				    msg += "#d??????" + level[p1][p2][0] + " ??? #r" + level[p1][p2][2] + " ???#k\r\n";
				}
			}
		}
		msg += "#b----------------------------------------------#k\r\n";	
	}
    	
	return msg;
}

function viewGradePrize(type){

	var msg = "";
	for(var i = 1 ; i < level[type].length ; i++){
		var date = level[type][i][2] == -1 ? "?????????" : (level[type][i][2] + "???");
		if(!isNaN(level[type][i][0])){
		    msg += "#d??????#i" + level[type][i][0] + "##z" + level[type][i][0] + "# ???#k #r" + level[type][i][1] + "??? #k #b(" + date + ")#k\r\n"; 
		}else{
			if(level[type][i][0] == "??????"){
				msg += "#d??????" + "????????????" + " : #r" + level[type][i][1] + " #k\r\n";
			}else{
			    msg += "#d??????" + level[type][i][0] + " ??? #r" + level[type][i][2] + " ???#k\r\n";
			}
		}
	}
    	
	return msg;
}

function getPrize(grade){
	var msg = icon5 + " #b??????????????? :#k\r\n";
	for(var i = 0; i < level.length ; i++){
		if(level[i][0][0] <= grade && cm.getPlayer().getPrizeLog("????????????" + level[i][0][0]) == 0){
			msg += "#L" + i + "#" + icon3 + " #d?????? #k#r" + level[i][0][0] + "#k #d?????????#k\r\n"; 
		}
	}
	
	
	return msg;
}

function sendPrize(grade){
	if(checkSlot(s2).contains("??????")){
		cm.sendOk(checkSlot(grade));
		status = -1;
	}else{
		for(var i = 1 ; i < level[grade].length ; i++){
		    if(!isNaN(level[grade][i][0])){
				if(GameConstants.isPet(level[grade][i][0])){
				   cm.gainPet(level[grade][i][0],"?????????",1,1,100,300,1);
			    }else{
			       cm.gainItemPeriod(level[grade][i][0],level[grade][i][1],level[grade][i][2]);
			    }
		    }else{
				if(level[grade][i][0] == "??????"){
					cm.setPCount(cm.getPlayer().getId(),level[grade][i][2],1,4);
				}else{
				    cm.getPlayer().modifyCSPoints(level[grade][i][1],level[grade][i][2],true);
				}
		    }
		}
		cm.getPlayer().setPrizeLog("????????????" + level[grade][0][0]);
	}
	
}

function checkSlot(index){
	var msg = "#b?????????????????? :#k ";
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
		msg += "#d??????#k #r?????????#k #d???????????? :#k #r" + (equip - cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getNumFreeSlot()) + "#k\r\n";
	}else if(cm.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() < use){
		msg += "#d??????#k #r?????????#k #d???????????? :#k #r" + (use - cm.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot()) + "#k\r\n";
	}else if(cm.getPlayer().getInventory(MapleInventoryType.ETC).getNumFreeSlot() < etc){
		msg += "#d??????#k #r?????????#k #d???????????? :#k #r" + (etc - cm.getPlayer().getInventory(MapleInventoryType.ETC).getNumFreeSlot()) + "#k\r\n";
	}else if(cm.getPlayer().getInventory(MapleInventoryType.SETUP).getNumFreeSlot() < install){
		msg += "#d??????#k #r?????????#k #d???????????? :#k #r" + (install - cm.getPlayer().getInventory(MapleInventoryType.SETUP).getNumFreeSlot()) + "#k\r\n";
	}else if(cm.getPlayer().getInventory(MapleInventoryType.CASH).getNumFreeSlot() < cash){
		msg += "#d??????#k #r?????????#k #d???????????? :#k #r" + (cash - cm.getPlayer().getInventory(MapleInventoryType.CASH).getNumFreeSlot()) + "#k\r\n";
	}else{
		msg += "#r???????????????????????????#k\r\n";
	}
	return msg;
	
}
