load('nashorn:mozilla_compat.js');
importPackage(Packages.server);



var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var need = "#fEffect/ItemEff/004/4#";

var ticket = 5220010; //超轉
var ticket2 = 5220040; //無償


var giveback = 5640004; //回饋物品
var typeg = 2; //第幾號轉蛋機


var today = new Date();
var todayp = (today.getMonth()+1) + "/" + (today.getDate()); 


var status = -1;

function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }
	
	if(mode == 0){
		cm.dispose();
	}
    if (status == -1) {
        cm.dispose();
    } else if (status == 0) {
		var a = cm.getPlayer().itemQuantity(ticket);
		var b = cm.getPlayer().itemQuantity(ticket2);
		var msg = "";
		msg += icon1 + " #b當前#k#r【有償】#k#b超轉數量 :#k#r " + a + "\r\n" + icon1 + " #b當前#k#r【無償】#k#b超轉數量 :#k#r " + b + "#k\r\n" + icon1 + " #b抽取有償超轉將獲得一個#k #i" + giveback + "#\r\n\r\n" + icon1 + " #r凡使用任何無償卷軸衝裝,無論失敗與否裝備將無法交易/丟棄/販售#k\r\n" + icon1 + " #r本轉蛋機70等才能使用#k\r\n";
        if ((cm.haveItem(ticket) || cm.haveItem(ticket2)) && cm.getPlayer().getLevel() >= 70) {
			var have1 = cm.haveItem(ticket) ? "#L0#" + icon3 + " 我要轉蛋【有償】\r\n" : "";
			var have2 = cm.haveItem(ticket2) ? "#L4#" + icon3 + " 我要轉蛋【無償】\r\n" : "";
			cm.sendSimple(icon5 + " #e#d【超級轉蛋機】#k\r\n" + msg + "" + have1 + "" + have2 + "#L1#" + icon3 + " 查看轉蛋機內容物\r\n"  + (cm.getPlayer().isGM() ? ("\r\n#L2#" + icon3 + " 更新轉蛋機") : ""));
        } else {
            cm.sendSimple(icon5 + " #e#d【超級轉蛋機】#k\r\n" + msg + "#L1#" + icon3 + " 查看轉蛋機內容物\r\n"  + (cm.getPlayer().isGM() ? ("\r\n#L2#" + icon3 + " 更新轉蛋機") : ""));
        }
    }else if (status == 1) {
	  this. se = selection;
	  if(se == 0){
        var result = cm.gachapon(typeg,true);
        if (result !== -1) {
            cm.gainItem(ticket, -1);
			cm.gainItem(giveback,1);
			//cm.getPlayer().setPrizeLog(todayp + "有償超轉");
            cm.sendOk("恭喜您獲得 #i" + result +"#  #b#t" + result + "##k");
			status = -1;
        } else {
            cm.sendOk("檢查一下背包是否已滿,或者所有設置的獎品已經發放完畢。");
			cm.dispose();
        }
        //cm.dispose();
	  }else if(se == 1){
		  cm.sendOk(cm.getGachaView(typeg));
		  status = -1;
	  }else if(se == 2){
		  cm.sendSimple(cm.editGacha(typeg));
	  }else if(se == 4){
		var result = cm.gachapon(typeg,false);
        if (result !== -1) {
            cm.gainItem(ticket2, -1);
			//cm.gainItem(giveback,1);
			//cm.getPlayer().setPrizeLog(todayp + "無償超轉");
            cm.sendOk("恭喜您獲得 #i" + result +"#  #b#t" + result + "##k");
			status = -1;
        } else {
            cm.sendOk("檢查一下背包是否已滿,或者所有設置的獎品已經發放完畢。");
			cm.dispose();
        }
	  }else if(se == 3){
		  var a = 0;
		  var x = new Array(2040303,2040403,2040506,2040507,2040603,2040709,2040710,2040711,2040806,2040807,2040903,2043003,2043103,2043203,2043303,2043406,2043703,2043803,2044003,2044103,2044203,2044303,2044403,2044503,2044603,2044703,2044822,2044915);
		  for(var i = 0 ; i < x.length ; i++){
			  if(MapleItemInformationProvider.getInstance().itemExists(x[i]) && !MapleItemInformationProvider.getInstance().isCash((x[i]))){
				  //if(MapleItemInformationProvider.getInstance().getEquipById(i).getWatk() < 30 && MapleItemInformationProvider.getInstance().getEquipById(i).getWatk() > 10){
					   cm.gachaponadditem(x[i],10000,1,2);
					   a++;
		               
                  //}
			  }
		 }
		  cm.sendOk("已為您新增完畢");
		  cm.dispose();
	  }
    }else if(status == 2){
		this. sel1 = selection;
		if(se == 2){
		if(sel1!=30678){
			cm.sendGetNumber("修改物品 :#i" + sel1 + "##t" + sel1 + "# 您要設置其機率為多少(1% 輸入10)?",0,0,1000);
		}else {
			cm.sendGetNumber("請輸入您要新增的物品代碼 :", 1, 1, 9999999);
		}
		}
	}else if(status == 3){
		this. so = selection;
		if(se == 2){
		if(sel1!=30678){
		    this. sel2 = selection;
			if(sel2 == 0){
				cm.zerodelete(sel1,typeg);
				cm.sendOk("已為您刪除物品#i" + sel1 + "##t" + sel1 + "#");
				cm.reloadgacha();
			    cm.dispose();
			}else{
			    cm.newGachapon(sel1,sel2*100,typeg);
			    cm.sendOk("已為您將物品#i" + sel1 + "##t" + sel1 +"#更新機率至 :#r" + sel2/10 + "%#k");
			    cm.reloadgacha();
				status = -1
		    }
		}else{
			this. sel3 = selection;
			if(!MapleItemInformationProvider.getInstance().itemExists(sel3)){
				cm.sendOk("您輸入的物品代碼#r" + sel3 + "#k 物品不存在");
				cm.dispose();
			}else{
			    cm.sendGetNumber("您想要將物品#i" + sel3 + "##t" + sel3 +"#的機率設置為幾%(1% 輸入10) ?",0,0,1000);
			}
		}
		}
	}else if(status == 4){
		if(se == 2){
		if(sel1 == 30678){
			this. sel4 = selection;
			cm.sendGetNumber("您想要讓物品#i" + sel3 + "##t" + sel3 +"#上廣嗎?(輸入1代表上廣,0代表不要)",0,0,1);
		}
		}
	}else if(status == 5){
		if(se == 2){
		if(sel1 == 30678){
		   this. sel5 = selection;
		   cm.gachaponadditem(sel3,sel4*100,sel5,typeg);
		   cm.sendOk("已為您新增完畢");
		   cm.reloadgacha();
		   status = -1;
		}
		}
	}
}