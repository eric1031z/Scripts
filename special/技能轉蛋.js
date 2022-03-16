load('nashorn:mozilla_compat.js');
importPackage(Packages.server);
importPackage(Packages.tools);



var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var need = "#fEffect/ItemEff/004/4#";

var ticket = 2430144; //轉蛋消耗物品
var typeg = 5; //第幾號轉蛋機



var giveback = 4036657;

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
		var msg = "";
		msg += icon1 + " #b當前#k #r#z" + ticket + "##k #b數量 : #k#r" + a + "#k\r\n" + icon1 + " #b抽取技能書轉蛋將給予一個 :#i" + giveback + "##k\r\n"; 
        if (cm.haveItem(ticket)) {
			cm.sendSimple(icon5 + " #d#e【技能書轉蛋機】#k\r\n" + msg + "#L0#" + icon3 + " 我要轉蛋\r\n#L4#" + icon3 + " 我要兌換技能書\r\n#L1#" + icon3 + " 查看轉蛋機內容物\r\n"  + (cm.getPlayer().isGM() ? ("\r\n#L2#" + icon3 + " 更新轉蛋機" ) : ""));
        } else {
            cm.sendSimple(icon5 + " #d#e【技能書轉蛋機】#k\r\n" + msg + "#L4#" + icon3 + " 我要兌換技能書\r\n#L1#" + icon3 + " 查看轉蛋機內容物\r\n"  + (cm.getPlayer().isGM() ? ("\r\n#L2#" + icon3 + " 更新轉蛋機") : ""));
        }
    }else if (status == 1) {
	  this. se = selection;
	  if(se == 0){
        var result = cm.gachapon(typeg);
        if (result !== -1) {
            cm.gainItem(ticket, -1);
			cm.gainItem(giveback,1);
            cm.sendOk("您已獲得 #i" + result +"#  #b#t" + result + "##k.");
			status = -1;
        } else {
            cm.sendOk("檢查一下背包是否已滿,或者所有設置的獎品已經發放完畢。");
			cm.dispose();
        }
        //cm.dispose();
	  }else if(se == 1){
		  cm.sendOk(cm.getGachaViewSkill(typeg));
		  status = -1;
	  }else if(se == 2){
		  var msg = "";
		  var ii = MapleItemInformationProvider.getInstance();
		  for(var i = 2290000 ; i < 2290412 ; i ++){
			  if(ii.itemExists(i) && cm.getItemName(i).contains("30")){
				  //cm.gachaponadditem(i,50*100,0,typeg);
				  msg += i + ","
			  }
		  }
		  FileoutputUtil.logToFile("logs/30技能.txt", msg);
		  cm.sendOk(msg);
		  cm.dispose();
		  //cm.sendSimple(cm.editGacha(typeg));
	  }else if(se == 3){
		  var a = 0;
		  for(var i = 3010000 ; i < 3018553 ; i++){
			  if(MapleItemInformationProvider.getInstance().itemExists(i) && !MapleItemInformationProvider.getInstance().isCash(i) && a < 50){
				  //if(MapleItemInformationProvider.getInstance().getReqLevel(i) < 120 && MapleItemInformationProvider.getInstance().getEquipById(i).getWatk() < 1){
					   //cm.gachaponadditem(i,8000,1,1);
					   //a++;
				  //}   
                  
			  }
		  }
		  cm.sendOk("已為您新增完畢");
		  cm.dispose();
	  }else if(se == 4){
		  cm.dispose();
		  cm.openNpc(9010000,"技能書兌換");
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
			    status = -1;
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