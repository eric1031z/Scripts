
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


var topic = "限購商店";

var today = new Date();
var todayp = (today.getMonth()+1) + "/" + today.getDate(); 

var pack = [



	
	[
	  [200],
	  [5640006,3],
	],
	
	[
	  [200],
	  [5062002,200],
	],
	
	[
	  [100],
	  [2430144,5],
	],
	
	[
	  [100],
	  [5220040,1],
	],
	
	[
	  [300],
	  [5220010,1],
	],
	
	[
	  [250],
	  [5640005,1],
	],
	
	[
	  [500],
	  [4310255,3],
	],
	
	[
	  [300],
	  [5640008,1],
	
	]
	
	
  
   
   
   
];



function start(){
	status = -1;
	action(1,0,0);
}




function action(mode, type, selection) {
	
	var points;
	var points2;
	var discount = (Math.floor(cm.getPlayer().getDonate()/10000))*5 > 30 ? 30 : (Math.floor(cm.getPlayer().getDonate()/10000))*5	;
	
	
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if(mode == 0){
		
		cm.dispose();
		//cm.openNpc(9010000,"購買專區");
	
	}
	
    if (status == 0) {
		var msg =  "     " + icon5 + " #d#e【" + topic + "】#k #b日期 :#k #r" + todayp + "#k\r\n\r\n";
		msg += icon1 + " 當前紅利 : #r" + cm.getPlayer().getPoints() + "#k\r\n";
		msg += icon1 + " 累積總額 : #r" + cm.getPlayer().getDonate() + "#k\r\n";
        msg += icon1 + " 購買折扣 : #r" + discount + " %#k (每累積10000折5%,至多30%)\r\n\r\n";
		msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
		for(var a = 0 ; a < pack.length ; a++){
			if(cm.getPlayer().getPrizeLog(todayp + "限購" + pack[a][1][0]) == 0){
			    msg += "#L" + a + "#"+icon3+" #b《限購 #k#r#e#z" + pack[a][1][0] + "##k#b》#k#l\r\n";
		    }
		}
		if(msg == icon3 + " #d【" + topic + "】#k #b日期 :#k #r" + todayp + "#k\r\n"){
			msg += icon1 + " #r當日商品皆已售完#k\r\n";
			cm.sendOk(msg);
			cm.dispose();
		}else{
		    cm.sendSimple(msg);
		}
	}else if(status == 1){
		this. sel = selection;
		if(sel < 0){
			cm.dispose();
	    }else{
		    var memo = icon5 + " #e#b【此限購內容物為】 :#k#n\r\n\r\n";
		    var needs = "";
		    for(var b = 1 ; b < pack[sel].length ; b++) {
			    needs += get + " #e#i" + pack[sel][b][0] + " # #z" + pack[sel][b][0] + "# 共 : #r" + pack[sel][b][1] + " 個#k#n\r\n";
		    }
		    memo += needs;
		    memo += "\r\n" + need + " #e#r需要  : #k#d" + pack[sel][0][0]*(100-discount)/100 + "#k #r 紅利#n#k"; 
		    cm.sendYesNo(memo);
		}
	}else if(status == 2){
		
		var notice = "#b您欲購買#k #d#i" + pack[sel][1][0] + " # #z" + pack[sel][1][0] + " ##k#r 需要的紅利點數不足 #r" + (pack[sel][0][0]*(100-discount)/100 - cm.getPlayer().getPoints()) + "#k 點";
		if(cm.getPlayer().getPoints() < pack[sel][0][0]){
			cm.sendOk(notice);
			cm.dispose();
		}else {
			cm.getPlayer().setPoints(cm.getPlayer().getPoints() - (pack[sel][0][0]*(100-discount)/100));
			for(var c = 1 ; c < pack[sel].length ; c++){
				cm.gainItemNoTrade(pack[sel][c][0],pack[sel][c][1],-1);
			}   
			cm.sendOk("#e謝謝您的購買!\r\n#d當前剩餘紅利 :#k #r" + cm.getPlayer().getPoints() + "#k");
			cm.getPlayer().setPrizeLog(todayp + "限購" + pack[sel][1][0]);
			cm.dispose();
		}

	}
}
		