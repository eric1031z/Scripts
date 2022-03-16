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

var ticket = 2250001; //轉蛋消耗物品
var typeg = 8; //第幾號轉蛋機

var giveback = 4470000;

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
		var msg = "";
		msg += icon1 + " #b當前一千萬楓幣袋數量 : #k#r" + a + "#k\r\n"; 
		msg += icon1 + " #b抽取後皆會獲得 : #k#i" + giveback + "#\r\n"; 
        if (cm.haveItem(ticket)) {
			cm.sendSimple(icon5 + " #d#e【金幣轉蛋機】#k\r\n" + msg + "#L0#" + icon3 + " 我要轉蛋\r\n#L1#" + icon3 + " 查看轉蛋機內容物\r\n"  + (cm.getPlayer().isGM() ? ("\r\n#L2#" + icon3 + " 更新轉蛋機" ) : ""));
        } else {
            cm.sendSimple(icon5 + " #d#e【金幣轉蛋機】#k\r\n" + msg + "#L1#" + icon3 + " 查看轉蛋機內容物\r\n"  + (cm.getPlayer().isGM() ? ("\r\n#L2#" + icon3 + " 更新轉蛋機") : ""));
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
		  cm.sendOk(cm.getGachaView(typeg));
		  status = -1;
	  }else if(se == 2){
		  cm.sendSimple(cm.editGacha(typeg));
	  }else if(se == 3){
		  var a = 0;
		  //var x = new Array(1002511,1102071,1302058,1432037,1452043,1462038,1472050,1402038,1302063,1322051,1302110,1322028,1302049,1002723,1302022,1312012,1002441,1322031,1442025,1302067,1302013,1432008,1002418,1302024,1322003,1092022,1402014,1372031,1302061,1302021,1302031,1332020,1372008,1332021,1332053,1322012,1382038,1402013,1432009,1372017,1312014,1312013,1422036,1322009,1322006,1402037,1003055,1432013,1382037,1002812,1002596,1092008,1002971,1402029,1432039,1002989,1302111,1422011,1442039,1442023,1302132,1332032,1332112,1052191,1002931,1002728,1012011,1322070,1402044,1102061,1002436,1102440,1072275,1312002,1102666,1003526,1302087,1002799,1322001,1102173,1102234,1112922,1332101,1422068,1432015,1432016,1432017,1432018,1442012,1442013,1442014,1442015,1442016,1442017,1442030,1442046,1442157,1442011,1442054,1442055,1442056,1442057,1442186,1442187,1442188,1442189,1442190);
		  //var x = new Array(1402214,1432182,1422156,1382226,1452220,1462208,1472230,1332242,1342087,1492194,1482183,1532112);
		  var x = new Array(2040041,2040042,2040334,2040430,2040538,2040539,2040630,2040740,2040741,2040742,2040829,2040830,2040936,2041066,2041067,2043023,2043117,2043217,2043312,2043712,2043812,2044025,2044117,2043217,2043312,2043712,2043812,2044025,2044117,2044217,2044317,2044417,2044512,2044612,2044712,2044821,2044914);
		  for(var i = 0 ; i < x.length ; i++){
			  if(MapleItemInformationProvider.getInstance().itemExists(x[i]) ){
				  if(!MapleItemInformationProvider.getInstance().isCash(x[i]) /*&& MapleItemInformationProvider.getInstance().getReqLevel(i) < 150 && MapleItemInformationProvider.getInstance().getEquipById(i).getWatk() > 0 && MapleItemInformationProvider.getInstance().getEquipById(i).getWatk() <= 10*/){
					   cm.gachaponadditem(x[i],10000,0,8);
					   a++;
				  }   
                  
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