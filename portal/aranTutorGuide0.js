function enter(pi) {
    if (pi.getInfoQuest(21002).equals("arr0=o;mo1=o;mo2=o;mo3=o")) {
        pi.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialGuide1");
        pi.playerMessage(5, "���UCtrl��i��Ǫ��i��@����� �C");
        pi.updateInfoQuest(21002, "normal=o;arr0=o;mo1=o;mo2=o;mo3=o");
    }
}