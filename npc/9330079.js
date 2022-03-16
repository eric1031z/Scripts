
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.constants);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
importPackage(Packages.handling.world);

var status ;


var icon1 = "#fUI/UIWindow/Quest/icon0#"; //黃驚嘆
var icon5 = "#fItem/Etc/0422/04220176/info/iconRaw#"; //new
var icon2 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //藍圈
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時

var today = new Date();
var todayp = (today.getMonth()+1) + "/" + today.getDate(); 

var cost = 4460003;
;;!//錯誤

var items = [


   [5220000,50,1],
   [1003174,1,5],
   [1052316,1,5],
   [1072487,1,5],
   [1082297,1,5],
   [1102277,1,5],
   [1152111,1,5],
   [1442116,1,5],
   [1452111,1,5],
   [1462099,1,5],
   [1522018,1,5],
   [1152111,1,5],
   [1302152,1,5],
   [1312065,1,5],
   [1322096,1,5],
   [1402095,1,5],
   [1412065,1,5],
   [1422066,1,5],
   [1432086,1,5],
   [1442116,1,5],
   [1372084,1,5],
   [1382104,1,5],
   [1332130,1,5],
   [1342036,1,5],
   [1472122,1,5],
   [1452111,1,5],
   [1462099,1,5],
   [1522018,1,5],
   [1482084,1,5],
   [1492085,1,5],
   [1532018,1,5],
   [1003172,1,5],
   [1003173,1,5],
   [1003174,1,5],
      [1003175,1,5],
	     [1003176,1,5],
		    [1052314,1,5],
			[1052315,1,5],
			[1052316,1,5],
			[1052317,1,5],
			[1052318,1,5],
			[1072485,1,5],
			[1072486,1,5],
			[1072487,1,5],
			[1072488,1,5],
			[1072489,1,5],
			[1082295,1,5],
			[1082296,1,5],
			[1082297,1,5],
			[1082298,1,5],
			[1082299,1,5],
			[1102275,1,5],
			[1102276,1,5],
			[1102277,1,5],
			[1102278,1,5],
			[1102279,1,5],
			[1152108,1,5],
			[1152110,1,5],
			[1152111,1,5],
			[1152112,1,5],
			[1152113,1,5],
   

];

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
		msg += icon3 + " #d女皇轉蛋#k\r\n";
		msg += icon3 + " #d需消耗一個 :#k #r#z" + cost + "##k\r\n";
		msg += "#L1#" + icon1 + " #b查看獎勵內容#k\r\n";
		msg += "#L2#" + icon1 + " #b抽取女皇轉蛋#k\r\n";
		cm.sendSimple(msg);
	}else if(status == 1){
		this. s = selection;
		if(s == 0){
			var msg = "";
			msg += icon1 + " #d簽到規則#k\r\n";
			msg += icon3 + " #b每日皆可簽到一次#k\r\n";
			msg += icon3 + " #b簽到會隨機獲得#k #r10~100#k #bGASH\r\n";
			msg += icon3 + " #b簽到會隨機獲得隨機道具#k #r(可至專區查看)#k\r\n";
			msg += icon3 + " #b簽到有低機率獲得#k #r南瓜魔卡與超級轉蛋卷#k\r\n";
	        cm.sendOk(msg);
			status = -1;
		}else if(s == 1){
			var msg = "";
			msg += icon1 + " #b女皇轉蛋獎勵#k\r\n";
	
			
			for(var i = 0 ; i < items.length ; i++){
				var adjust = "";
				
				var q = MapleItemInformationProvider.getInstance().getName(items[i][0]) + "" + items[i][1];
				var m = 0;
				var z = q;
				for(var a = 0 ; a < z.length ; a++){
					if(!isNaN(z.charAt(a))){
				        m++;
					}else{
						m++;
						m++;
					}
			    }
				for(var x = 0 ; x < 20-m ; x++){
					adjust += " ";
				}
				
				msg += icon3 + " #d#z" + items[i][0] + "##k#r" + items[i][1] + "#k#d個#k" + (i!=0 && i%2 == 1 ? "\r\n" : adjust);
			    
			}
			cm.sendOk(msg);
			status = -1;
		}else if(s == 2){
			var msg = "";
			var get = Array();
			while(get.length == 0){
			    for(var i = 0 ; i < items.length ; i++){
					if(items[i][2] > Math.floor(Math.random()*100)){
					    get.push(i);
					}
				}

			}
			var x = get[Math.floor(Math.random()*get.length)];
			
			if(cm.getPlayer().getItemQuantity(cost,false) < 1){
				cm.sendOk("#d您的#k#r#z" + cost + "##k#d不足喔!#k");
				status = -1;
			}else{
				var mp = (Math.floor(Math.random()*90)+10);
			    cm.gainItem(items[x][0], items[x][1]);
			    cm.sendOk("#d恭喜獲得#r#t" + items[x][0] + "##k #b" + items[x][1] + "個#k");
			
				cm.gainItem(cost,-1);
			    status = -1;
			}
		}
			
		
	}
		
}




