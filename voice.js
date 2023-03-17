(async () => {
    await $.getScript("https://cdn.jsdelivr.net/gh/parseml/many-deobf@latest/deobf.js");
playertext=Deobfuscator.object(ig.game.player, "player", true);
textlist=Deobfuscator.keyBetween(SpeechDisplay.prototype.update, ")this.", "[b].u");
thetext=Deobfuscator.keyBetween(SpeechDisplayLine.prototype.draw, "c=this.", ";\n");
pasteUrl=Deobfuscator.function(ml.Misc, "sP", true);
setInterval(()=>{
    try {
    if (ig.game.player.screenName=="kel"&&ig.game.player[playertext][textlist][ig.game.player[playertext][textlist].length-1].moving==true&&ig.game.player[playertext][textlist][ig.game.player[playertext][textlist].length-1][thetext]=="yo") {
            ig.game.player[playertext][textlist][ig.game.player[playertext][textlist].length-1][thetext]="";ml.Misc[pasteUrl]("https://soundcloud.com/snek-142111766/yo-1", ig.game.player.O7906, null, !0)
    } else if (ig.game.player.screenName=="aubrey"&&ig.game.player[playertext][textlist][ig.game.player[playertext][textlist].length-1].moving==true&&ig.game.player[playertext][textlist][ig.game.player[playertext][textlist].length-1][thetext]=="hi") {
            ig.game.player[playertext][textlist][ig.game.player[playertext][textlist].length-1][thetext]="";ml.Misc[pasteUrl]("https://soundcloud.com/snek-142111766/hii", ig.game.player.O7906, null, !0)
    } else if (ig.game.player.screenName=="hero"&&ig.game.player[playertext][textlist][ig.game.player[playertext][textlist].length-1].moving==true&&ig.game.player[playertext][textlist][ig.game.player[playertext][textlist].length-1][thetext]=="hey") {
            ig.game.player[playertext][textlist][ig.game.player[playertext][textlist].length-1][thetext]="";ml.Misc[pasteUrl]("https://soundcloud.com/snek-142111766/hey", ig.game.player.O7906, null, !0)
    }
} catch (error) {
    //xd
}
}, 0)
})();
