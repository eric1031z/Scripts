load('nashorn:mozilla_compat.js');
importPackage(Packages.tools.packet);
function enter(pi) {
    pi.playPortalSE();
    pi.warp(200090000, 5);
	if (pi.getPlayer().getClient().getChannelServer().getEventSM().getEventManager("Boats").getProperty("haveBalrog").equals("true")) {
		pi.changeMusic("Bgm04/ArabPirate");
		pi.getPlayer().getMap().broadcastMessage(CField.boatEffect(1034));
    } else if (pi.getPlayer().getClient().getChannelServer().getEventSM().getEventManager("Boats").getProperty("haveBalrog1").equals("true")) {
		pi.changeMusic("Bgm04/ArabPirate");
		pi.getPlayer().getMap().broadcastMessage(CField.boatEffect(1034));
	}
	return true;
}