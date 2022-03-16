load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.client);

var status;


function start(){
	status = -1;
	action(1,0,0);
}


var job = [
    [
	   [000], 
	   [
	      [100],  
		  [110,120,130], // 0/1/1/1
	      [111,121,131], 
	      [112,122,132], 
	   ],
	   [
	      [200], 
		  [210,220,230],
	      [211,221,231],
	      [212,222,232],
	   ],
	   [
	      [300],
		  [310,320],
	      [311,321],
	      [312,322],
	   ],
	   [
	      [400], //0/4/0/0
		  [410,420,430], //0/4/1/x
	      [411,421,431], //0/4/2/
	      [412,422,432],
		  [999,999,433],
		  [999,999,434],
	   ],
	   [
	      [500],
		  [510,520],
	      [511,521],
	      [512,522],
	   ],
	   [
	      [501],
		  [530],
	      [531],
	      [532],
	   ],
	   [
	      [2300],
		  [2310],
	      [2311],
	      [2312],
	   ],
	],
	
	[ 
	   [2001], //1/0/0/0
	   [
	      [2200], //1/1/0/0
	      [2210], //1/1/1/0
	      [2211],
	      [2212],
	      [2213],
	      [2214],
	      [2215],
	      [2216],
	      [2217],
	      [2218],
	   ],
	],
	
	[
	   [2000],
	   [
	      [2100], //2/1/0/0
		  [2110], //2/1/1/0
		  [2111],
	      [2112],
	   ],
	],
	
	[
	   [3000],
	   [
	      [3100],
		  [3110],
		  [3111],
		  [3112],
	   ],
	   [
	      [3300],
		  [3310],
		  [3311],
		  [3312],
	   ],
	   [
	      [3500],
		  [3510],
		  [3511],
		  [3512],
	   ],
	   [
	      [3200],
		  [3210],
		  [3211],
		  [3212],
	   ],
	],
	
	[
	   [1000],
	   [
	      [1100],
		  [1110],
		  [1111],
		  [1112],
	   ],
	   [
	      [1200],
		  [1210],
		  [1211],
		  [1212],
	   ],
	   [
	      [1300],
		  [1310],
		  [1311],
		  [1312],
	   ],
	   [
	      [1400],
		  [1410],
		  [1411],
		  [1412],
	   ],
	   [
	      [1500],
		  [1510],
		  [1511],
		  [1512],
	   ],
	],	
];


var level = [
    [
	   [0], 
	   [
	      [10],  
		  [30,30,30], 
	      [70,70,70], 
	      [120,120,120], 
	   ],
	   [
	      [10],  
		  [30,30,30], 
	      [70,70,70], 
	      [120,120,120], 
	   ],
	   [
	      [10],  
		  [30,30,30], 
	      [70,70,70], 
	      [120,120,120], 
	   ],
	   [
	      [10],
		  [30,30,20],
	      [70,70,30],
	      [120,120,55],
		  [999,999,70],
		  [999,999,120],
	   ],
	   [
	      [10],  
		  [30,30,30], 
	      [70,70,70], 
	      [120,120,120], 
	   ],
	   [
	      [10],
		  [30],
	      [70],
	      [120],
	   ],
	   [
	      [10],
		  [30],
	      [70],
	      [120],
	   ],
	],
	
	[ 
	   [0], 
	   [
	      [10], //1/1/0/0
	      [20], //1/1/1/0
	      [30],
	      [40],
	      [50],
	      [60],
	      [80],
	      [100],
	      [120],
	      [160],
	   ],
	],
	
	[
	   [0],
	   [
	      [10],
		  [30],
	      [70],
	      [120],
	   ],
	],
	
	[
	   [0],
	   [
	      [10],
		  [30],
	      [70],
	      [120],
	   ],
	   [
	      [10],
		  [30],
	      [70],
	      [120],
	   ],
	   [
	      [10],
		  [30],
	      [70],
	      [120],
	   ],
	   [
	      [10],
		  [30],
	      [70],
	      [120],
	   ],
	],
	
	[
	   [0],
	   [
	      [10],
		  [30],
	      [70],
	      [120],
	   ],
	   [
	      [10],
		  [30],
	      [70],
	      [120],
	   ],
	   [
	      [10],
		  [30],
	      [70],
	      [120],
	   ],
	   [
	      [10],
		  [30],
	      [70],
	      [120],
	   ],
	   [
	      [10],
		  [30],
	      [70],
	      [120],
	   ],
	],	
];


function action(mode, type, selection) {
    if (mode == 1) {
        status++;
		
    } else {
        status--;
    }
	if(mode == 0){
		cm.dispose();
	}
	
    if (status == 0){
		var t = cm.getPlayer().getJob();
		var tier1;
		var tier2;
		var tier3;
		var tier4;
		var msg = "";
		for(var a = 0 ; a < job.length ; a++){
			if(job[a].indexOf(t) == -1){
				for(var b = 0 ; b < job[a].length; b++){
					if(job[a][b].indexOf(t) == -1){
						for(var c = 0 ; c < job[a][b].length ; c++){
							if(job[a][b][c] != t){
								for(var d = 0 ; d < job[a][b][c].length ; d++){
									if(job[a][b][c][d] == t){
										tier1 = a;
										tier2 = b;
										tier3 = c;
										tier4 = d;
									}
								}
							}else{
								tier1 = a;
								tier2 = b;
								tier3 = c;
								tier4 = 0;
							}
						}
					}else{
						tier1 = a;
						tier2 = 0;
						tier3 = 0;
						tier4 = 0;
					}
				}
			}
		}
		
        if((tier3 == job[tier1][tier2].length-1 || t == 412 || t == 422) && tier2 != 0){
			cm.sendOk("您已完成最後階段的轉職!");
			cm.dispose();
	    }else{
		
		if(tier2 == 0){ 
			for(var o = 1 ; o < job[tier1].length ; o++){ 
			   msg += "#L" + job[tier1][o][0][0]  + "##r" + MapleJob.getName(MapleJob.getById(job[tier1][o][0][0])) + "#k\r\n";
		    }
		}else if(tier3 == 0){
			for(var s = 0 ; s < job[tier1][tier2][1].length ; s++){ 
			   msg += "#L" + job[tier1][tier2][1][s]  + "##r" + MapleJob.getName(MapleJob.getById(job[tier1][tier2][1][s])) + "#k\r\n";
		    }
			//msg += tier4;
		}else {
			msg += "#L" + job[tier1][tier2][tier3+1][tier4] + "##r" + MapleJob.getName(MapleJob.getById(job[tier1][tier2][tier3+1][tier4])) + "#k\r\n";
			//msg += tier3;
		}
	
		cm.sendSimple("《轉職中心》請決定你的未來!!\r\n#b重砲要記得把技能點都點完喔! #k\r\n" + msg); 
		}
		//cm.sendSimple(tier4);
	}else if(status == 1){
		var sel = selection
		var tier12;
		var tier22;
		var tier32;
		var tier42;
		var msg = "";
		for(var a2 = 0 ; a2 < job.length ; a2++){
			if(job[a2].indexOf(sel) == -1){
				for(var b2 = 0 ; b2 < job[a2].length; b2++){
					if(job[a2][b2].indexOf(sel) == -1){
						for(var c2 = 0 ; c2 < job[a2][b2].length ; c2++){
							if(job[a2][b2][c2] != sel){
								for(var d2 = 0 ; d2 < job[a2][b2][c2].length ; d2++){
									if(job[a2][b2][c2][d2] == sel){
										tier12 = a2;
										tier22 = b2;
										tier32 = c2;
										tier42 = d2;
									}
								}
							}else{
								tier12 = a2;
								tier22 = b2;
								tier32 = c2;
								tier42 = 0;
							}
						}
					}else{
						tier12 = a2;
						tier22 = 0;
						tier32 = 0;
						tier42 = 0;
					}
				}
			}
		}
		if(cm.getPlayer().getLevel() >= level[tier12][tier22][tier32][tier42]){
			
			if(sel>=430&&sel<=434){
				cm.getPlayer().setSubcategory(1);
			}else if(sel >= 501 && sel <= 532) {
			    cm.getPlayer().setSubcategory(2);
		    }else {
			    cm.getPlayer().setSubcategory(0);
			}
			
			if(sel == 3300){
				cm.getPlayer().changeSkillLevel(SkillFactory.getSkill(30001061), 1, 1);
				cm.gainItem(2100185);
				cm.gainItem(1462092);
			}else if(sel == 2300){
				cm.gainItem(1522000,1,false);
			}else if(sel == 501){
				cm.gainItem(1532000,1,false);
			}else if(sel == 100){
				cm.gainItem(1302007,1,false);
			}else if(sel == 2200){
				cm.gainItem(1372005,1,false);
			}else if(sel == 200){
				cm.gainItem(1372005,1,false);
				cm.gainItem(1382000,1,false);
			}else if(sel == 3200){
				cm.gainItem(1382000,1,false);
			}else if(sel == 300){
				cm.gainItem(1452002,1,false);
				cm.gainItem(1462001,1,false);
				cm.gainItem(1462092,1,false);
			}else if(sel == 400){
				cm.gainItem(1472000,1,false);
				cm.gainItem(1332007,1,false);
			}else if(sel == 500){
				cm.gainItem(1492000,1,false);
				cm.gainItem(1482000,1,false);
			}else if(sel == 3500){
				cm.gainItem(1492000,1,false);
			}else if(sel == 3100){
				cm.gainItem(1322005,1,false);
			}else if(sel == 2100){
				cm.gainItem(1442079,1,false);
			}
			
           
			cm.getPlayer().changeJob(sel);
			cm.getPlayer().maxSkillsByJob();
			cm.sendOk(cm.getPlayer().getRemainingSp());
			cm.getPlayer().reloadC();
		    cm.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, cm.getPlayer().getRemainingAp());
			cm.dispose();
			
		}else{
			cm.sendOk("需達到 :#r " + level[tier12][tier22][tier32][tier42] + " #k等 才能轉職!");			
			cm.dispose();
		}
		
	}
}