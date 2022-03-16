
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.util);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
var status;
var icon1 = "#fUI/UIWindow/Quest/icon0#"; //黃驚嘆
var icon5 = "#fItem/Etc/0422/04220176/info/iconRaw#"; //new
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //藍圈
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時



var topic = "書!!給我書!!";

var pack = [
   [
   [2049405,1],
    [4460002,3],
    [4460001,3],
	[4460000,3],
	[2430453,10],
   ],
   [
   [1102041,1],
    [4460002,1],
    [4460001,1],
	[4460000,1],
	[5800002,1],
	[5800001,1],
   ],
   [
   [2340000,2],
	[4460001,1],
   ],
      [
   [2340000,2],
	[4460002,1],
   ],
      [
   [2340000,2],
	[4460000,1],
   ],
      [
   [1102042,1],
    [4460002,1],
    [4460001,1],
	[4460000,1],
		[5800002,1],
	[5800001,1],
   ],

      [
    [2049700,1],
	[4460001,2],
   ],
        [
    [2531000,1],
	[4460002,2],
   ],
   [
      [5062000,8],
	[4460001,1],
   ],
      [
   [5062000,8],
	[4460002,1],
   ],
      [
   [5062000,8],
	[4460000,1],
   ],
   [
         [5062001,5],
	[4460001,1],
   ],
      [
   [5062001,5],
	[4460002,1],
   ],
      [
   [5062001,5],
	[4460000,1],
   ],
  
   


    
];



function start(){
	status = -1;
	action(1,0,0);
}




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
		var msg =  icon3 + " #d【" + topic + "】#k \r\n";
		for(var a = 0 ; a < pack.length ; a++){
			msg += "#L" + a + "#"+icon5+"#b《兌換 #k#r#z" + pack[a][0][0] + "##r#b》#k #d 查看需要物品#k\r\n";
		}
		cm.sendSimple(msg);
	}else if(status == 1){
		this. sel = selection;
		if(sel == -1){
			cm.dispose();
	    }else{
		    var memo = "#b【此兌換詳細需要內容物為】 :#k\r\n";
		    var needs = "";
		    for(var b = 1 ; b < pack[sel].length ; b++) {
			    needs += "#i" + pack[sel][b][0] + " # #z" + pack[sel][b][0] + "# 共 : #r" + pack[sel][b][1] + " 個#k\r\n";
		    }
		    memo += needs;
		
		    memo += "#r可兌換  : #k#d#i" + pack[sel][0][0] + "# #z" + pack[sel][0][0] + "##k 共 : #r" + pack[sel][0][1] + " 個#k"; 

		
		    cm.sendYesNo(memo);
		}
	}else if(status == 2){
		cm.sendGetNumber("#d請輸入想兌換的組數 :#k",0,0,999);
	}else if(status == 3){
		var xx = selection;
		var checkitems = 1;
		var notice = "#b您欲兌換#k #r#i" + pack[sel][0][0] + " # #z" + pack[sel][0][0] + " #缺少以下材料 ：\r\n";
		for(var cc = 1 ; cc < pack[sel].length ; cc ++){
			if(!cm.haveItem(pack[sel][cc][0],pack[sel][cc][1]*xx)){
				checkitems ++;
				notice += "#b缺少材料#k :#i" + pack[sel][cc][0] + "# #z" + pack[sel][cc][0] + "# 共 #r " + pack[sel][cc][1]*xx + "個#k\r\n";
			}
		}
		if(checkitems > 1){
			cm.sendOk(notice);
			cm.dispose();
		}else {
			cm.getPlayer().gainItem(pack[sel][0][0],pack[sel][0][1]*xx);
			for(var c = 1 ; c < pack[sel].length ; c++){
				cm.gainItem(pack[sel][c][0],-pack[sel][c][1]*xx);
			}
			
			cm.sendOk("謝謝您的兌換!");
			cm.dispose();
		}
    }
}

		