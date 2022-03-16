load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.client.inventory);
importPackage(Packages.constants);
importPackage(Packages.client);


var icon1 = "#fUI/UIWindow/Quest/icon0#"; //黃驚嘆
var icon5 = "#fItem/Etc/0422/04220176/info/iconRaw#"; //new
var icon2 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //藍圈
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var levelcap = 200;

var status = -1;
var Editing = false; //true=顯示維修;false=正常運作

var prize = [
    [
	  [1],
	  [1112127,1],
	  ["楓點",2,500],
	],
	
	[
	  [9],
	  [1112127,1],
	  [1112127,1],
	  [1112127,1],
	  [1112127,1],
	  [1112127,1],
	  [1112127,1],
	  [1112127,1],
	  [1112127,1],
	  [2450000,1],
	  [2049100,1],
	  [5062002,1],
	  [5220010,1],
	  ["紅利",2,500],
	],
]


var require = [

    [
	  ["初級轉生成就"],


	],

    [
	  ["初級轉生成就"],
	  [2450000,10],
	
	],
	
	[
	  ["高級轉生成就"],
	  [2450000,10],
	
	],


]

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection){
	var sname = cm.getPlayer().getClient().getChannelServer().getServerName();
	
	if (mode == 1) {
		status++;
	} else {
		if (status >= 2 || status == 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	
	if(status == 0){
		var intro = "";
		intro += "#L0#" + icon5 + " 查看轉生介紹#l\r\n";
		intro += "#L1#" + icon5 + " 查看轉生成就#l\r\n";
		intro += "#L2#" + icon5 + " 我要轉生#l\r\n";
		cm.sendSimple(icon3 + " #d【" + sname + "#k#r 轉生系統#k#d】#k#b 當前轉生數 : #k#r" + cm.getPlayer().getReborns() + "#k\r\n#d" + intro + "#k");
	}else if(status == 1){
		this. sela = selection;
		if(sela == 0){
			var intro = "";
			intro += icon3 + " #b玩家等級達#k#r " + levelcap + " #k#b後，即可選擇轉生#k\r\n";
			intro += icon3 + " #b達特定次數，可至#k#r 「轉生成就」#k #b領取成就獎勵#k\r\n" ;
			intro += icon3 + " #b轉生方式分3種，不同的任務將會給予不同的獎勵#k\r\n";
			cm.sendPrev(intro);
		}else if(sela == 1){
			viewPrize();
		}else if(sela == 2){
			var memo = "";
			memo += "#L0#" + icon5 + " 直接轉生\r\n";
			memo += "#L1#" + icon5 + " 初級轉生成就\r\n";
			memo += "#L2#" + icon5 + " 高級轉生成就\r\n";
			cm.sendSimple(icon3 + " #d【" + sname + "#k#r 轉生系統#k#d】#k#b 當前轉生數 : #k#r" + cm.getPlayer().getReborns() + "\r\n#d" + memo + "#k");
		}
	}else if(status == 2){
		this. selb = selection;
		if(sela == 1){
			prizeItem(selb);
		}else if(sela == 2){
			reborn(selection);
		}else{
			cm.dispose();
		}
	}else if(status == 3){
		if(sela == 1){
			getPrize(selb)
		}
	}
}

function reborn(selection){
	var sname = cm.getPlayer().getClient().getChannelServer().getServerName();
	var intro = "";
	for(var a = 1 ; a < require[selection].length ; a++){
		intro += icon5 + " #r需要#k #d#i" + require[selection][a][0] + "# #z" + require[selection][a][0] + "##k 共 #b" + require[selection][a][1] + "個#k\r\n";
	}
	cm.sendYesNo(icon3 + " #d【" + sname + "#k#r 轉生系統#k#d】#k #b" + require[selection][0][0] + "#k\r\n" + intro);
}

function rebornPrize(selection){
	var sname = cm.getPlayer().getClient().getChannelServer().getServerName();
	var intro = "";
}


function viewPrize(){
	var sname = cm.getPlayer().getClient().getChannelServer().getServerName();
	var intro = "";
	var iconx;
	for(var a = 0 ; a < prize.length; a++){
		iconx = cm.getPlayer().getOneTimeLog("轉生次數" + prize[a][0][0]) > 0 ? icon2 : icon1;
		intro += "#L" + a + "#" + iconx + " #d達#k #r" + prize[a][0][0] + "#k #d次轉生成就獎勵#k#l\r\n"; 
	}
	cm.sendSimple(icon3 + " #d【" + sname + "#k#r 轉生系統#k#d】#k#b 當前轉生數 : #k#r" + cm.getPlayer().getReborns() + "#k\r\n" + intro);
}

function prizeItem(selection){
	var sname = cm.getPlayer().getClient().getChannelServer().getServerName();
	var intro = "";
	
	for(var a = 1 ; a < prize[selection].length; a++){
		if(prize[selection][a][0] == "GASH"){
			intro += icon5 + " #rGASH#k #d共#k #b" + prize[selection][a][2] + " 點#k\r\n";
		}else if(prize[selection][a][0] == "楓點"){
			intro += icon5 + " #r楓點#k #d共#k #b" + prize[selection][a][2] + " 點#k\r\n";
		}else if(prize[selection][a][0] == "紅利"){
			intro += icon5 + " #r紅利#k #d共#k #b" + prize[selection][a][2] + " 點#k\r\n";
		}else{
			intro += icon5 + " #b#i" +  prize[selection][a][0] + "# #z" + prize[selection][a][0] + "##k #d共#k #r" + prize[selection][a][1] + " 個#k\r\n";
		}
	}
	cm.sendYesNo(icon3 + " #d【" + sname + "#k#r 轉生系統#k#d】#k#b 成就次數 : #k#r" + prize[selection][0][0] + " 獎勵#k\r\n" + intro);
}


function getPrize(selection){
	var sname = cm.getPlayer().getClient().getChannelServer().getServerName();
	var intro = "";
	var canhold = 0;
	var isitem = 0;
	var canthold = "";
	var ss1 = cm.getInventory(1).getNumFreeSlot(); //8
	var ss2 = cm.getInventory(2).getNumFreeSlot(); //1
	var ss3 = cm.getInventory(3).getNumFreeSlot(); //5
	var ss4 = cm.getInventory(4).getNumFreeSlot(); //4
	var ss5 = cm.getInventory(5).getNumFreeSlot(); //2
	for(var a = 1 ; a < prize[selection].length; a++){
		if(!isNaN(prize[selection][a][0])){ //如果他是數字
		    var sq = GameConstants.getInventoryType(prize[selection][a][0]);
			if(cm.canHold(prize[selection][a][0],prize[selection][a][1])){ //如果他的包包夠
			    if(sq.getType() == 1){
					ss1--;
					if(ss1 < 0){
						canthold += "您的背包已滿，將無法領取 #i" + prize[selection][a][0] + "# #z" + prize[selection][a][0] + "# 共" + prize[selection][a][1] + "個\r\n";
					}
				}else if(sq.getType() == 2){
					ss2--;
					if(ss2 < 0){
						canthold += "您的背包已滿，將無法領取 #i" + prize[selection][a][0] + "# #z" + prize[selection][a][0] + "# 共" + prize[selection][a][1] + "個\r\n";
					}
				}else if(sq.getType() == 3){
					ss3--;
					if(ss3 < 0){
						canthold += "您的背包已滿，將無法領取 #i" + prize[selection][a][0] + "# #z" + prize[selection][a][0] + "# 共" + prize[selection][a][1] + "個\r\n";
					}
				}else if(sq.getType() == 4){
					ss4--;
					if(ss4 < 0){
						canthold += "您的背包已滿，將無法領取 #i" + prize[selection][a][0] + "# #z" + prize[selection][a][0] + "# 共" + prize[selection][a][1] + "個\r\n";
					}
				}else if(sq.getType() == 5){
					ss5--;
					if(ss5 < 0){
						canthold += "您的背包已滿，將無法領取 #i" + prize[selection][a][0] + "# #z" + prize[selection][a][0] + "# 共" + prize[selection][a][1] + "個\r\n";
					}
				}
			}
            
		}
	}
	
	if(cm.getPlayer().getOneTimeLog("轉生次數" + prize[selection][0][0]) > 0){
		cm.sendOk("您已領取過此階段成就獎勵");
		cm.dispose();
	}else if(cm.getPlayer().getReborns() < prize[selection][0][0]){
	    cm.sendOk("您的轉生數不足 #r" + (prize[selection][0][0] - cm.getPlayer().getReborns()) + "#k 次");
		cm.dispose();
	}else if(canthold != ""){
		cm.sendOk("#r" + canthold + "#k");
		cm.dispose();
	}else{
	
	    for(var a = 1 ; a < prize[selection].length; a++){
		    if(prize[selection][a][0] == "GASH"){
			    cm.getPlayer().modifyCSPoints(prize[selection][a][1],prize[selection][a][2],true);
		    }else if(prize[selection][a][0] == "楓點"){
			    cm.getPlayer().modifyCSPoints(prize[selection][a][1],prize[selection][a][2],true);
		    }else if(prize[selection][a][0] == "紅利"){
			    cm.getPlayer().setPoints(cm.getPlayer().getPoints() + prize[selection][a][1]);
		    }else{
			    cm.gainItem(prize[selection][a][0],prize[selection][a][1]);
		    }
	    }
		
		cm.getPlayer().setOneTimeLog("轉生次數" + prize[selection][0][0]);
		cm.sendOk("已領取 #r轉生次數" + prize[selection][0][0] + " #k獎勵");
		cm.dispose();
	}
}