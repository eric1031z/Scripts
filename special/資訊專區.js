
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
		
		var msg = "";
		msg += "                    " + icon5 + " #d#e資訊專區#n#k\r\n\r\n";
		msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
        msg += "#L0#" + icon3 + " #e潮流轉蛋瀏覽#k\r\n";
        msg	+= "#L1#" + icon3 + " #e超級轉蛋瀏覽#k\r\n";
		msg	+= "#L4#" + icon3 + " #eGASH轉蛋瀏覽#k\r\n";
		msg += "#L2#" + icon3 + " #e釣魚物品瀏覽#k\r\n";
		msg += "#L3#" + icon3 + " #e全域掉落瀏覽#k\r\n";
		cm.sendSimple(msg);
	}else if(status == 1){
		this. s = selection;
		if(s == 0){
			var msg = "";
			var normal = cm.getAllGachaView(1);
			for(var i = 0 ; i < normal.length ; i++){
				
				var adjust = "";
				
				var q = MapleItemInformationProvider.getInstance().getName(normal[i]);
				var m = 0;
				for(var a = 0 ; a < q.length ; a++){
					if(!isNaN(q.charAt(a))){
				        m++;
					}else{
						m++;
						m++;
					}
			    }
				for(var x = 0 ; x < 20-m ; x++){
					adjust += " ";
				}
				
				msg += icon3 + " " + "#z" + normal[i] + "#" + "" + "\r\n";
			    
			}
	        cm.sendOk(icon5 + " #d潮流轉蛋物品瀏覽#k\r\n" + msg);
			status = -1;
		}else if(s == 1){
			var msg = "";
			var normal = cm.getAllGachaView(2);
			for(var i = 0 ; i < normal.length ; i++){
				
				var adjust = "";
				
				//var q = MapleItemInformationProvider.getInstance().getName(normal[i]);
				var q = "#z" + normal[i] + "#";
				var m = 0;
				for(var a = 0 ; a < q.length ; a++){
					if(!isNaN(q.charAt(a))){
				        m++;
					}else{
						m++;
						m++;
					}
			    }
				for(var x = 0 ; x < 22-m ; x++){
					adjust += " ";
				}
				
				msg += icon3 + " " + "#z" + normal[i] + "#" + "" + ("\r\n");
			    
			}
	        cm.sendOk(icon5 + " #d超級轉蛋物品瀏覽#k\r\n" + msg);			
			cm.sendOk(msg);
			status = -1;
		}else if(s == 2){
			var msg = "";
			var normal = MapleFisherControl.getFishView();
			for(var i = 0 ; i < normal.length ; i++){
				
				var adjust = "";
				
				var q = MapleItemInformationProvider.getInstance().getName(normal[i]);
				var m = 0;
				for(var a = 0 ; a < q.length ; a++){
					if(!isNaN(q.charAt(a))){
				        m++;
					}else{
						m++;
						m++;
					}
			    }
				for(var x = 0 ; x < 20-m ; x++){
					adjust += " ";
				}
				
				msg += icon3 + " " + "#z" + normal[i] + "#" + "" + "\r\n";
			    
			}
	        cm.sendOk(icon5 + " #d釣魚物品瀏覽#k\r\n" + msg);			
			status = -1;
		}else if(s == 3){
			var msg = "";
			var normal = cm.getAllGlobalDropView();
			for(var i = 0 ; i < normal.length ; i++){
				
				var adjust = "";
				
				var q = MapleItemInformationProvider.getInstance().getName(normal[i]);
				var m = 0;
				for(var a = 0 ; a < q.length ; a++){
					if(!isNaN(q.charAt(a))){
				        m++;
					}else{
						m++;
						m++;
					}
			    }
				for(var x = 0 ; x < 20-m ; x++){
					adjust += " ";
				}
				
				msg += icon3 + " " + "#z" + normal[i] + "#" + "" + "\r\n";
			    
			}
	        cm.sendOk(icon5 + " #d全域掉落瀏覽#k\r\n" + msg);			
			status = -1;
		}else if(s == 4){
			var msg = "";
			var normal = cm.getAllGachaView(3);
			for(var i = 0 ; i < normal.length ; i++){
				
				var adjust = "";
				
				//var q = MapleItemInformationProvider.getInstance().getName(normal[i]);
				var q = "#z" + normal[i] + "#";
				var m = 0;
				for(var a = 0 ; a < q.length ; a++){
					if(!isNaN(q.charAt(a))){
				        m++;
					}else{
						m++;
						m++;
					}
			    }
				for(var x = 0 ; x < 22-m ; x++){
					adjust += " ";
				}
				
				msg += icon3 + " " + "#z" + normal[i] + "#" + "" + ("\r\n");
			    
			}
	        cm.sendOk(icon5 + " #dGASH轉蛋物品瀏覽#k\r\n" + msg);			
			cm.sendOk(msg);
			status = -1;
		}
			
		
	}
		
}




