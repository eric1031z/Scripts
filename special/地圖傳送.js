var status = -1;
//依序添加地圖代碼
var town = [910000000,270000100,749050400,100000000,100000202,100000205,100030301,101000000,101000005,102000000,102000005,103000000,103000009,103040000,104000000,105000000,120000100,120000105,120000200,130000100,130000101,130000110,130000120,130000200,140000000,200000000,211000000,220000000,221000000,222000000,230000000,240000000,250000000,251000000,260000000,260000200,261000000,310000000,500000000,540000000,550000000,600000000,680000000,701000000,702000000,702200001,740000000,741000000,800000000,801000300,910001000,913050010,926100000,926110000,926130102,950100000,541010010,540000000];
var work = [749050502,100040100,105010000,540020100,103040400,541010010,197010000,541020200,551030100,800020130,251010402,541020500,211060100,240040511,980010000,261020401,271030310,801040002];
var boss = [105200000,270050000,272020110,271040000,220080000,551030100,240050400,230040420,800040410,541020800,702070400,800040206,801040003,741020100,211042400,100020301,100020401,102020500,103030300,103030400,104010200,105020400,105030500,120030500,209000000,211040101,211050000,221020701,221030601,221040301,222010300,222010310,230000003,230040420,240020101,240020102,240020401,240040401,250010304,250010503,250020300,251010102,260010201,261010003,261020300,261020401,261030000,270010500,270020500,270030500,749040001,749080116,749080116,749080116,749080127,749080127,749080127,749080128,749080128,749080128,749080129,749080129,749080129,749080130,749080130,749080130,749080131,749080131,749080131,749080132,749080132,749080132,749080133,749080133,749080133,749080134,749080134,749080134,749080135,749080135,749080135,749080136,749080136,749080136,749080137,749080137,749080137,749080138,749080138,749080138,749080139,749080139,749080139,749080140,749080141,749080141,749080141,800010100,800020110,800020130,800040208,800040410,801020000,801030000,801040003,801040004,801040100,802000611];
var newmap = [450001000];

var icon1 = "#fUI/UIWindow/Quest/icon0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";

var status = -1;

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
		//cm.openNpc(9010000,"功能專區");
	}
		
	
    if (status == 0) {
		var msg = "";
		msg += "                    " + icon5 + " #d#e地圖傳送#n#k\r\n\r\n";
		msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
		msg += "#L0#" + icon3 + " #e村莊地圖#n  ";
		msg += "#L1#" + icon3 + " #e練功地圖#n  ";
		msg += "#L2#" + icon3 + " #e王圖地圖#n  \r\n";
		//msg += "#L3#" + icon3 + " #b奧術之河#k\r\n";
		msg += "#L11#" + icon3 + " #e組隊傳送#k\r\n"
		msg += "#L9#" + icon3 + " #r#e回功能區#n#k\r\n";
		
		
		cm.sendSimple(msg);
	}else if(status == 1){
		this. s = selection;
		if(s == 10){
			cm.warp(710000000,0);
			cm.dispose();
		}else if(s == 9){
			cm.dispose();
			cm.openNpc(9010000,"功能專區");
		}else if(s == 11){
			cm.dispose();
			cm.openNpc(9010022,"次元之門");
		}else if(s == 0){
			var msg = "";
			msg += icon5 + " #d村莊地圖#k\r\n";
			for(var i = 0; i < town.length ; i++){

				var map = cm.getPlayer().getClient().getChannelServer().getMapFactory().getMap(town[i]).getMapName();
				var z = 10 - map.length;
				var adjust = "";
	            for(var p = 0 ; p < map.length ; p++){
					if(!isNaN(map.charAt(p))){
						adjust += " ";
					}else if(map.charAt(p) == "-"){
						adjust += " ";
					}
				}
					
				for(var a = 0 ; a < z ; a++){
					adjust += "  ";		
				}
				if(map != ""){
					msg += "#L" + i + "#" + icon3 + " " + map + "#l" + (i!=0 && i%2 == 1 ? "\r\n" : adjust) ;
					
					//k++;
				}
			}
			cm.sendSimple(msg + "\r\n");
		}else if(s == 1){
			var msg = "";
			msg += icon5 + " #d練功地圖#k\r\n";
			for(var i = 0; i < work.length ; i++){
				

			    msg += "#L" + i + "#" + icon3 + " #m" + work[i] + "##l" + "\r\n";
				
			}
			cm.sendSimple(msg);
		}else if(s == 2){
			var msg = "";
			msg += icon5 + " #dBOSS地圖#k\r\n";
			for(var i = 0; i < boss.length ; i++){
				var k;
				var map = cm.getPlayer().getClient().getChannelServer().getMapFactory().getMap(boss[i]).getMapName();
				var z = 10 - map.length;
				var adjust = "";
	            for(var p = 0 ; p < map.length ; p++){
					if(!isNaN(map.charAt(p))){
						adjust += " ";
					}else if(map.charAt(p) == "-"){
						adjust += " ";
					}else if(map.charAt(p) == "C"){
						adjust += " ";
					}
				}
					
				for(var a = 0 ; a < z ; a++){
					adjust += "  ";		
				}
			   
				if(map != ""){
					msg += "#L" + i + "#" + icon3 + " " + map + "#l" + (k!=0 && k%2 == 1 ? "\r\n" : adjust) ;
					k++;
				}
			}
			cm.sendSimple(msg+ "\r\n\r\n ");
		}else if(s == 3){
			var msg = "";
			msg += icon5 + " #d奧術之河#k\r\n";
			for(var i = 0; i < newmap.length ; i++){

				var map = cm.getPlayer().getClient().getChannelServer().getMapFactory().getMap(newmap[i]).getMapName();
				
				msg += "#L" + i + "#" + icon3 + " " + "無名村落" + "#l\r\n" ;
					
			}
			cm.sendSimple(msg+ "\r\n\r\n ");
		}
	}else if(status == 2){
		this. j = selection;

		
		if(s == 0){
			cm.sendYesNo("#b【村莊傳送】#k#d確定要前往 :#k #r" + cm.getPlayer().getClient().getChannelServer().getMapFactory().getMap(town[j]).getMapName() + "#k");
		}else if(s == 1){
			cm.sendYesNo("#b【練功傳送】#k#d確定要前往 :#k #r" + cm.getPlayer().getClient().getChannelServer().getMapFactory().getMap(work[j]).getMapName() + "#k");
		}else if(s == 2){
			cm.sendYesNo("#b【王圖傳送】#k#d確定要前往 :#k #r" + cm.getPlayer().getClient().getChannelServer().getMapFactory().getMap(boss[j]).getMapName() + "#k");
		}else if(s == 3){
			cm.sendYesNo("#b【奧術之河】#k#d確定要前往 :#k #r" + "無名村落" + "#k");
		}
	}else if(status == 3){
		if(s == 0){
			cm.dispose();
			cm.warp(town[j],0);
		}else if(s == 1){
			cm.dispose();
			cm.warp(work[j],0);
		}else if(s == 2){
			cm.dispose();
			cm.warp(boss[j],0);
		}else if(s == 3){
			cm.dispose();
			cm.warp(newmap[j],0);			
		}
	}    
	
}
	