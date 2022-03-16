load('nashorn:mozilla_compat.js');
importPackage(Packages.util);
importPackage(Packages.client);

var status = -1;
var picked = 0;
var state = -1;



var icon1 = "#fUI/UIWindow/Quest/icon0#"; //黃驚嘆
var icon5 = "#fItem/Etc/0422/04220176/info/iconRaw#"; //new
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //藍圈
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時

var friend = [

   [
     [1],
	 [300,1],
   ],
   
   [
     [10],
	 [300,1],
   ],
   
   [
     [30],
	 [500,1],
   ],
   
   [
     [50],
	 [700,1],
   ],
   
   [
     [70],
	 [900,1],
   ],
   
   [
     [100],
	 [1500,0],
   ],
]




function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
	
	var buddy = cm.getPlayer().getBuddylist().getBuddies().size();
	
	
    if(mode==1){
		status ++ ;
	}else {
		status --;
	}
	
	if(mode == 0){
		cm.dispose();
		cm.openNpc(9010000,"獎勵專區");
	}
	
    if (status == 0) {
		var msg = "";
		for(var z = 0 ; z < friend.length ; z++){
			var point = friend[z][1][1] == 1 ? "楓點" : "GASH"
			msg += "#L" + z + "#" + icon3 + " 滿#k #r" + friend[z][0][0] + "#k #d好友#k　#b獲得 :#k #r" + friend[z][1][0] + " 點" + point + "#l#k\r\n"; 
		}
		
        cm.sendSimple(icon5 + "#b【好友獎勵】#k #d當前好友數 :#k #r" + buddy + "#k #d人#k\r\n" + msg);
    } else if (status == 1) {
		var sel = selection;
		if(buddy < friend[sel][0][0]){
			cm.sendOk("您目前的好友數還不足 #r" + friend[sel][0][0] + "#k 人喔!");
			cm.dispose();
		}else if(cm.getPlayer().getPrizeLog("好友" + friend[sel][0][0] + "獎勵") >0){
			cm.sendOk("您已經領取過此獎勵了!");
			cm.dispose();
		}else{
			cm.getPlayer().modifyCSPoints(friend[sel][1][1],friend[sel][1][0],true);
			cm.getPlayer().setPrizeLog("好友" + friend[sel][0][0] + "獎勵");
			cm.sendOk("已成功領取 :#r" + friend[sel][0][0] + " #k好友獎勵");
			cm.dispose();
		}
	}
}
