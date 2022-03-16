
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.constants);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
importPackage(Packages.sever.fishing);

var status ;


var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";



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
	}
	
	if(status == 0){
		
		var msg = "#e";
		msg += "                    "  + icon5 + " #d#e廣播調整#k\r\n\r\n";
		msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
		
		if(cm.getPlayer().getSmega(6) == 0){
			msg += "#L6#" + icon3 + " #b關閉普轉廣播#k#l";
		}else{
			msg += "#L6#" + icon3 + " #r開啟普轉廣播#k#l";
		}
		
		if(cm.getPlayer().getSmega(7) == 0){
			msg += "#L7#" + icon3 + " #b關閉超轉廣播#k#l\r\n";
		}else{
			msg += "#L7#" + icon3 + " #r開啟超轉廣播#k#l\r\n";
		}
		
		if(cm.getPlayer().getSmega(9) == 0){
			msg += "#L9#" + icon3 + " #b關閉GASH廣播#k#l";
		}else{
			msg += "#L9#" + icon3 + " #r開啟GASH廣播#k#l";
		}
		
        if(cm.getPlayer().getSmega(0) == 0){
			msg += "#L0#" + icon3 + " #b關閉高效廣播#k#l\r\n";
		}else{
			msg += "#L0#" + icon3 + " #r開啟高效廣播#k#l\r\n";
		}
		
		if(cm.getPlayer().getSmega(1) == 0){
			msg += "#L1#" + icon3 + " #b關閉道具廣播#k#l";
		}else{
			msg += "#L1#" + icon3 + " #r開啟道具廣播#k#l";
		}
		
		if(cm.getPlayer().getSmega(2) == 0){
			msg += "#L2#" + icon3 + " #b關閉派餅廣播#k#l\r\n";
		}else{
			msg += "#L2#" + icon3 + " #r開啟派餅廣播#k#l\r\n";
		}
		
		if(cm.getPlayer().getSmega(3) == 0){
			msg += "#L3#" + icon3 + " #b關閉蛋糕廣播#k#l";
		}else{
			msg += "#L3#" + icon3 + " #r開啟蛋糕廣播#k#l";
		}
		
		if(cm.getPlayer().getSmega(4) == 0){
			msg += "#L4#" + icon3 + " #b關閉骷髏廣播#k#l\r\n";
		}else{
			msg += "#L4#" + icon3 + " #r開啟骷髏廣播#k#l\r\n";
		}
		
		if(cm.getPlayer().getSmega(5) == 0){
			msg += "#L5#" + icon3 + " #b關閉愛心廣播#k#l";
		}else{
			msg += "#L5#" + icon3 + " #r開啟愛心廣播#k#l";
		}
		
		if(cm.getPlayer().getSmega(8) == 0){
			msg += "#L8#" + icon3 + " #b關閉寶箱廣播#k#l\r\n";
		}else{
			msg += "#L8#" + icon3 + " #r開啟寶箱廣播#k#l\r\n";
		}
		
		
		
		
		
	
		cm.sendSimple(msg);
	}else if(status == 1){
		this. s = selection;
		if(s == 0){
			if(cm.getPlayer().getSmega(0) == 0){
				cm.getPlayer().setSmega(0,1);
				cm.sendOk("#d已為您#k #r關閉#k #d高效廣播#k");
			}else{
				cm.getPlayer().setSmega(0,0);
				cm.sendOk("#d已為您#k #r開啟#k #d高效廣播#k");
			}
		}else if(s == 1){
			if(cm.getPlayer().getSmega(1) == 0){
				cm.getPlayer().setSmega(1,1);
				cm.sendOk("#d已為您#k #r關閉#k #d道具廣播#k");
			}else{
				cm.getPlayer().setSmega(1,0);
				cm.sendOk("#d已為您#k #r開啟#k #d道具廣播#k");
			}
		}else if(s == 2){
			if(cm.getPlayer().getSmega(2) == 0){
				cm.getPlayer().setSmega(2,1);
				cm.sendOk("#d已為您#k #r關閉#k #d派餅廣播#k");
			}else{
				cm.getPlayer().setSmega(2,0);
				cm.sendOk("#d已為您#k #r開啟#k #d派餅廣播#k");
			}
		}else if(s == 3){
			if(cm.getPlayer().getSmega(3) == 0){
				cm.getPlayer().setSmega(3,1);
				cm.sendOk("#d已為您#k #r關閉#k #d蛋糕廣播#k");
			}else{
				cm.getPlayer().setSmega(3,0);
				cm.sendOk("#d已為您#k #r開啟#k #d蛋糕廣播#k");
			}
		}else if(s == 4){
			if(cm.getPlayer().getSmega(4) == 0){
				cm.getPlayer().setSmega(4,1);
				cm.sendOk("#d已為您#k #r關閉#k #d骷髏廣播#k");
			}else{
				cm.getPlayer().setSmega(4,0);
				cm.sendOk("#d已為您#k #r開啟#k #d骷髏廣播#k");
			}
		}else if(s == 5){
			if(cm.getPlayer().getSmega(5) == 0){
				cm.getPlayer().setSmega(5,1);
				cm.sendOk("#d已為您#k #r關閉#k #d愛心廣播#k");
			}else{
				cm.getPlayer().setSmega(5,0);
				cm.sendOk("#d已為您#k #r開啟#k #d愛心廣播#k");
			}
		}else if(s == 6){
			if(cm.getPlayer().getSmega(6) == 0){
				cm.getPlayer().setSmega(6,1);
				cm.sendOk("#d已為您#k #r關閉#k #d普通轉蛋廣播#k");
			}else{
				cm.getPlayer().setSmega(6,0);
				cm.sendOk("#d已為您#k #r開啟#k #d普通轉蛋廣播#k");
			}
		}else if(s == 7){
			if(cm.getPlayer().getSmega(7) == 0){
				cm.getPlayer().setSmega(7,1);
				cm.sendOk("#d已為您#k #r關閉#k #d超級轉蛋廣播#k");
			}else{
				cm.getPlayer().setSmega(7,0);
				cm.sendOk("#d已為您#k #r開啟#k #d超級轉蛋廣播#k");
			}
		}else if(s == 8){
			if(cm.getPlayer().getSmega(8) == 0){
				cm.getPlayer().setSmega(8,1);
				cm.sendOk("#d已為您#k #r關閉#k #d銀/金寶箱廣播#k");
			}else{
				cm.getPlayer().setSmega(8,0);
				cm.sendOk("#d已為您#k #r開啟#k #d銀/金寶箱廣播#k");
			}
		}else if(s == 9){
			if(cm.getPlayer().getSmega(9) == 0){
				cm.getPlayer().setSmega(9,1);
				cm.sendOk("#d已為您#k #r關閉#k #dGASH轉蛋廣播#k");
			}else{
				cm.getPlayer().setSmega(9,0);
				cm.sendOk("#d已為您#k #r開啟#k #dGASH轉蛋廣播#k");
			}
		}
		
		
		status = -1;
	}
}