load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.tools.packet);
importPackage(Packages.server.life);
importPackage(Packages.client);



var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var need = "#fEffect/ItemEff/004/4#";

var mount = [1930000,1930001,1930004,1932000,1932001,1932002,1932003,1932004,1932005,1932006,1932007,1932008,1932009,1932010,1932011,1932012,1932013,1932014,1932015,1932016,1932018,1932019,1932022,1932023,1932025,1932026,1932027,1932028,1932029,1932030,1932031,1932032,1932033,1932034,1932035,1932036,1932038,1932041,1932043,1932044,1932045,1932046,1932047,1932048,1932049,1932050,1932051,1932052,1932053,1932054,1932055,1932056,1932057,1932058,1932059,1932060,1932061,1932062,1932063,1932064,1932065,1932066,1932071,1932072,1932078,1932080,1932081,1932083,1932084,1932085,1932086,1932087,1932088,1932089,1932090,1932091,1932092,1932093,1932094,1932095,1932096,1932097,1932098,1932099,1932100,1932102,1932103,1932105,1932106,1932107,1932109,1932110,1932112,1932113,1932114,1932115,1932116,1932117,1932118,1932120,1932121,1932122,1932123,1932124,1932126,1932127,1932128,1932129,1932130,1932131,1932132,1932133,1932134,1932135,1932136,1932137,1932138,1932139,1932140,1932141,1932143,1932144,1932145,1932146,1932147,1932148,1932149,1932150,1932151,1932152,1932153,1932154,1932156,1932157,1932158,1932159,1932161,1932162,1932163,1932164,1932165,1932166,1932167,1932168,1932169,1932170,1932171,1932172,1932173,1932174,1932175,1932176,1932177,1932178,1932179,1932180,1932181,1932182,1932183,1932184,1932185,1932186,1932187,1932188,1932189,1932190,1932191,1932192,1932193,1932194,1932195,1932196,1932197,1932198,1932199,1932200,1932201,1932202,1932203,1932204,1932205,1932206,1932207,1932208,1932211,1932212,1932214,1932215,1932216,1932217,1932218,1932219,1932220,1932221,1932222,1932223,1932224,1932225,1932226,1932227,1932228,1932230,1932231,1932232,1932235,1932236,1932237,1932238,1932239,1932240,1932241,1932242,1932243,1932244,1932245,1932247,1932248,1932250,1932251,1932252,1932253,1932254,1932255,1932256,1932258,1932259,1932261,1932262,1932263,1932264,1932265,1932266,1932267,1932268,1932269,1932270,1932271,1932272,1932273,1932274,1932275,1932276,1932278,1932279,1932280,1932281,1932282,1932283,1932284,1932285,1932286,1932287,1932288,1932289,1932290,1932294,1932295,1932296,1932297,1932298,1932299,1932300,1932301,1932304,1932305,1932306,1932307,1932310,1932311,1932314,1932319,1932320,1932321,1932323,1932324,1932325,1932332,1932333,1932334,1932335,1932336,1932337,1932338,1932339,1932341,1932342,1932343,1932344,1932345,1932346,1932347,1932348,1932349,1932353,1932354,1932357,1932358,1932359,1932360,1932361,1932362,1932363,1932365,1932367,1932368,1932369,1932370,1932371,1932372,1932373,1932374,1932375,1932377,1932378,1932379,1932380,1932381,1932382,1932383,1932384,1932385,1932386,1932387,1932388,1932389,1932390,1932391,1932392,1932393,1932394,1932395,1932396,1932397,1932398,1932399,1932400,1932401,1932402,1932403,1932404,1932405,1932406,1932407,1932408,1932409,1932410,1932411,1932412,1932413,1932414,1932415,1932416,1932417,1932418,1932419,1932420,1932421,1932422,1932423,1932424,1932425,1932426,1932427,1932428,1932429,1932430,1932431,1932432,1932433,1932434,1932435,1932436,1932437,1932438,1932439,1932440,1932441,1932442,1932443,1932444,1932445,1932446,1932447,1932448,1932449,1932450,1932451,1932452,1932453,1932454,1932455,1932456,1932457,1932458,1932459,1932460,1932461,1932462,1932463,1932464,1932465,1932466,1932467,1932468,1932469,1932470,1932471,1932472,1932473,1932474,1932475,1932476,1932477,1932478,1932479,1932480,1932481,1932482,1932483,1932484,1932485,1932486,1932487,1932488,1932489,1932490,1932491,1932492,1932493,1932494,1932495,1932496,1932497,1932498,1932499,1932500,1932501,1932502,1932503,1932504,1932505,1932506,1932507,1932508,1932509,1932510,1932511,1932512,1932513,1932514,1932515,1932516,1932517,1932518,1932519,1932520,1932521,1932522,1932523,1932524,1932525,1932526,1932527,1932528,1932529,1932530,1932531,1932532,1932533,1932534,1932535,1932536,1932537,1932538,1932539,1932540,1932541,1932542,1932543,1932544,1932545,1932546,1932547,1932548,1932549,1932550,1932551,1932552,1932553,1932554,1932555,1932556,1932557,1932558,1932559,1932560,1932561,1932562,1932563,1932564,1932565,1932566,1932567,1932569,1932570,1932571,1932572,1932573,1932574,1932575,1932576,1932577,1932578,1932579,1932580,1932581,1932582,1932583,1932584,1932585,1932586,1932589,1932590,1932591,1932592,1932593,1932594,1932595,1932596,1932597,1932598,1932599,1932600,1932601,1932602,1932603,1932606,1932607,1932608,1932609,1932610,1932612,1932613,1932614,1932615,1932616,1932617,1932618,1932619,1932620,1932621,1932622,1932623,1932624,1932625,1932626,1932627,1932628,1932629,1932630,1932631,1932632,1932633,1932634,1932635,1932636,1932637,1932638,1932639,1932640,1932641,1932642,1932643,1932644,1932645,1932646,1932649,1932652,1939000,1939001,1939002,1939003,1939004,1939005,1939006,1939007,1939008,1939009,1939010,1939011,1939012,1939013,1939014,1939015,1939016,1939017];

var cost = 5220082;
var modes = 0;

function start(){
	status = -1
	action(1,0,0);
}


function action(mode,type,selection){
	if(mode==1){
		status ++ ;
	}else {
		status --;
	}
	
	if(mode == 0){
		status = 0;
	}
	
	if(status == 0){
		var msg = "";
		msg += "     " + icon5 + " #e#d【騎寵倉庫】#k" + icon1 + " #r騎寵無法爬梯子/繩子#n#k\r\n\r\n";
		msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
		msg += "       #L999#" + need + " #d離開頁面#k#l   #L9999#" + need + " #d回造型區#k#l\r\n\r\n";
		msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n#e";
		msg += "#L0#" + icon3 + " #b抽取騎寵#k#l ";
		msg += "#L1#" + icon3 + " #b我的騎寵#k#l ";
		msg += "#L2#" + icon3 + " #b騎寵圖鑑#k#n#l ";
		
		cm.sendSimple(msg);
	}else if(status == 1){
		this. k = selection;
		if(k == 999){
			cm.dispose();
		}else if(k == 9999){
			cm.dispose();
			cm.openNpc(9010000,"造型專區");
		}else if(k == 0){
			if(modes == 0){
			    var msg = "";
			    msg += icon5 + " #d【抽取提示】#k\r\n"
			    msg += icon3 + " #b抽取一次需消耗一張 :#k #i" + cost + "#\r\n";
			    msg += icon3 + " #b抽取完成後可至#k #r「我的騎寵」#k #b更換騎寵#k\r\n";
			    msg += "#L0#" + icon1 + " #d關閉抽取提示#k #r(連續抽取請關閉)#k\r\n";
			    msg += "#L1#" + icon1 + " #d我要抽取#k\r\n";
			    cm.sendSimple(msg);
			}else if(modes == 1){
				if(!cm.haveItem(cost)){
				    cm.sendOk("#b抽取一次需消耗 :#k #i" + cost + "#\r\n");
				    status = -1;
			    }else{
				    var x = Math.floor(Math.random()*mount.length);
				    var nm = mount[x];
				    cm.getPlayer().addMount(cm.getPlayer().getId(),nm);
				    cm.sendOk("#d恭喜您抽取到#k #i" + nm + "#");
					cm.gainItem(cost,-1);
				    //cm.getPlayer().modifyCSPoints(0,-cost,true);
					status = -1;
			    }
			}
		}else if(k == 1){
			var msg = "";
			msg += icon5 + " #d【我的騎寵】#k\\r\n";
			msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
			var cc = cm.getPlayer().getCurrentMount(cm.getPlayer().getId()) == -1 ? "#r尚無資料#k" : ("#i" + cm.getPlayer().getCurrentMount(cm.getPlayer().getId()) + "#");
			msg += icon3 + " #b當前騎寵 :#k" + cc + " #b當前蒐集度 :#k #r(" + cm.getPlayer().getMountSize(cm.getPlayer().getId()) + "/597)#k\r\n";
			msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
			cm.sendSimple(msg + "" + cm.getPlayer().getAllMount(cm.getPlayer().getId()));
		}else if(k == 2){
			var msg = "";
			msg += icon5 + " #d【騎寵圖鑑】#k\r\n";
			for(var i = 0; i < mount.length; i++){
				msg += "#i" + mount[i] + "#";
			}
			/*if(cm.getPlayer().isGM()){
				for(var x = 0 ; x < mount.length ; x++){
					cm.getPlayer().addMount(cm.getPlayer().getId(),mount[x]);
				}
			}*/
			cm.sendOk(msg);
			status = -1;
		}
	}else if(status == 2){
		this. p = selection;
		if(k == 0){
			if(p == 1){
			    if(!cm.haveItem(cost,1)){
				    cm.sendOk("#b抽取一次需消耗 :#k #i" + cost + "#\r\n");
				    status = -1;
			    }else{
				    var x = Math.floor(Math.random()*mount.length);
				    var nm = mount[x];
				    cm.getPlayer().addMount(cm.getPlayer().getId(),nm);
				    cm.sendOk("#d恭喜您抽取到#k #i" + nm + "#");
				    cm.gainItem(cost,-1);
				    status = -1;
			    }
			}else if(p == 0){
				modes = 1;
				cm.sendOk("#d已為您關閉抽取提示#k#r(跳出NPC後會重新開啟)#k");
				status = -1;
			}
		}else if(k == 1){
			if( p < 0){
				cm.dispose();
			}else{
			    var msg = "";
				var cc = cm.getPlayer().getCurrentMount(cm.getPlayer().getId()) == -1 ? "#r尚無資料#k" : ("#i" + cm.getPlayer().getCurrentMount(cm.getPlayer().getId()) + "#");
			    msg += "#b確定要將當前騎寵從#k " + cc + " #b更換至#k #i" + p + "# #b嗎#k?";
			    cm.sendYesNo(msg);
			}
		}else{
			cm.dispose();
		}
		
	}else if(status == 3){
		if(k == 1){
		    cm.getPlayer().setCurrentMount(cm.getPlayer().getId(),p);
		    cm.sendOk("#b已為您將當前騎寵更換成#k #i" + p + "#");
		    status = -1;
		}else{
			cm.dispose();
		}
	}
}
		
