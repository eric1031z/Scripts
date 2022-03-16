
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



var topic = "普轉幣兌換";

var pack = [

    [
	   [1113132,1],
	   [4470000,500],		
	],
	
	[
	   [4470008,1],
	   [4470000,3],		
	],
	
	[
	   [4470009,1],
	   [4470000,3],		
	],
	
	[
	   [4470010,1],
	   [4470000,3],		
	],
	
	[
	   [4470011,1],
	   [4470000,3],		
	],
	
	[
	   [5220082,1],
	   [4470000,3],		
	],
	
	[
	   [2040041,1],
	   [4470000,15],		
	],
	
	[
	   [2040042,1],
	   [4470000,15],		
	],
	
	[
	   [2040334,1],
	   [4470000,15],		
	],
	
	[
	   [2040430,1],
	   [4470000,15],		
	],
	
	[
	   [2040538,1],
	   [4470000,15],		
	],
	
	[
	   [2040539,1],
	   [4470000,15],		
	],
	
	[
	   [2040630,1],
	   [4470000,15],		
	],
	
	[
	   [2040740,1],
	   [4470000,15],		
	],
	
	[
	   [2040741,1],
	   [4470000,15],		
	],
	
	[
	   [2040742,1],
	   [4470000,15],		
	],
	
	[
	   [2040829,1],
	   [4470000,15],		
	],
	
	[
	   [2040830,1],
	   [4470000,20],		
	],
	
	[
	   [2040936,1],
	   [4470000,15],		
	],
	
	[
	   [2041066,1],
	   [4470000,15],		
	],
	
	[
	   [2041067,1],
	   [4470000,15],		
	],
	
	[
	   [2043023,1],
	   [4470000,20],		
	],
	
	[
	   [2043117,1],
	   [4470000,20],		
	],
	
	[
	   [2043217,1],
	   [4470000,20],		
	],
	
	[
	   [2043312,1],
	   [4470000,20],		
	],
	
	[
	   [2043712,1],
	   [4470000,20],		
	],
	
	[
	   [2043812,1],
	   [4470000,20],		
	],
	
	[
	   [2044025,1],
	   [4470000,20],		
	],
	
	[
	   [2044117,1],
	   [4470000,20],		
	],
	
	[
	   [2044217,1],
	   [4470000,20],		
	],
	
	[
	   [2044317,1],
	   [4470000,20],		
	],
	
	[
	   [2044417,1],
	   [4470000,20],		
	],
	
	[
	   [2044512,1],
	   [4470000,20],		
	],
	
	[
	   [2044612,1],
	   [4470000,20],		
	],
	
	[
	   [2044712,1],
	   [4470000,20],		
	],
	
	[
	   [2044821,1],
	   [4470000,20],		
	],
	
	[
	   [2044914,1],
	   [4470000,20],		
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
			msg += "#L" + a + "#"+icon3+" #b《兌換 #k#r#e#z" + pack[a][0][0] + "##n#k#b》#k#l\r\n";
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
		    memo += needs;
		
		    memo += get + " #e#r可兌換  : #k#d#i" + pack[sel][0][0] + "# #z" + pack[sel][0][0] + "##k 共 : #r" + pack[sel][0][1] + " 個#k#n"; 

		
		    cm.sendYesNo(memo);
		}
	}else if(status == 2){
		cm.sendGetNumber("#d請輸入想兌換的組數 :#k",0,0,9999);
	}else if(status == 3){
		var xx = selection;
		var checkitems = 1;
		var notice = icon5 + " #b您欲兌換#k #r#i" + pack[sel][0][0] + " # #z" + pack[sel][0][0] + "##k #b出現以下錯誤 ：\r\n";
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
			cm.getPlayer().gainItem(pack[sel][0][0],pack[sel][0][1]*xx);
			for(var c = 1 ; c < pack[sel].length ; c++){
				cm.gainItem(pack[sel][c][0],-pack[sel][c][1]*xx);
			}
			
			cm.sendOk("謝謝您的兌換!");
			status = -1;
		}
    }
}

		