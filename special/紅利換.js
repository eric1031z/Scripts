
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.util);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
var status;

var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var need = "#fEffect/ItemEff/004/4#";



var topic = "紅利兌換";

var pack = [
   [
    ["紅利 50點",50],
	[5640001,1],
   ],
   
   [
	["紅利 100點",100],
	[5640002,1],
   ],
   
   [
	["紅利 150點",150],
	[5640003,1],
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
		var msg =  "                   " + icon5 + " #d#e【" + topic + "】#n#k \r\n\r\n";
		msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
		for(var a = 0 ; a < pack.length ; a++){
			msg += "#L" + a + "#"+icon3+" #b《兌換 #k#r#e" + pack[a][0][0] + "#n#k#b》#k#l\r\n";
		}
		cm.sendSimple(msg + " \r\n ");
	}else if(status == 1){
		this. sel = selection;
		if(sel == -1){
			cm.dispose();
	    }else{
		    var memo = icon5 + " #e#b【此兌換詳細需要內容物為】 :#k#n\r\n\r\n";
		    var needs = "";
		    for(var b = 1 ; b < pack[sel].length ; b++) {
			    needs += need + " #e#i" + pack[sel][b][0] + " # #z" + pack[sel][b][0] + "# 共 : #r" + pack[sel][b][1] + " 個#k#n\r\n";
		    }
		    memo += needs + "\r\n";
		
		    memo += get + " #e#r可兌換  : #k#d" + pack[sel][0][0] + " #z" + pack[sel][0][0] + "##k#n"; 

		
		    cm.sendYesNo(memo);
		}
	}else if(status == 2){
		cm.sendGetNumber("#d請輸入想兌換的組數 :#k",0,0,9999);
	}else if(status == 3){
		var xx = selection;
		var checkitems = 1;
		var notice = icon5 + " #b您欲兌換#k #r" + pack[sel][0][0] + " #k #b出現以下錯誤 ：\r\n\r\n";
		for(var cc = 1 ; cc < pack[sel].length ; cc ++){
			if(!cm.haveItem(pack[sel][cc][0],pack[sel][cc][1]*xx)){
				checkitems ++;
				notice += icon1 + " #b缺少材料#k :#i" + pack[sel][cc][0] + "# #z" + pack[sel][cc][0] + "# 共 #r " + pack[sel][cc][1]*xx + "個#k\r\n";
			}
			
			if(pack[sel][cc][1]*xx >= 30000){
				checkitems ++;
				notice += icon1 + " #b材料#k :#i" + pack[sel][cc][0] + "# #z" + pack[sel][cc][0] + "# #r總需求不得高於30000#k\r\n";
			}
		}
		
		if(checkitems > 1){
			cm.sendOk(notice);
			status = -1;
		}else {
			var x = cm.getPlayer().getPoints();
			cm.getPlayer().setPoints(x + pack[sel][0][1]*xx);
			for(var c = 1 ; c < pack[sel].length ; c++){
				cm.gainItem(pack[sel][c][0],-pack[sel][c][1]*xx);
			}
			
			cm.sendOk("#e#b謝謝您的兌換!\r\n#e#d您的紅利已從 :#k #r" + x + "#k #d提升至#k : #r" +  (x + pack[sel][0][1]*xx));
			status = -1;
		}
    }
}

		