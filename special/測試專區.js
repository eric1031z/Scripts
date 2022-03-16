
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.server);
importPackage(Packages.client.inventory);


function start(){
	var a = 0;
	for(var i = 1115004 ; i < 1115198 ; i++){
		if(MapleItemInformationProvider.getInstance().itemExists(i) && a < 500){
	        cm.newCashItem(i,100,2,1,5);
			a++;
		}
		
	}
		
	 cm.dispose();
}