(function() {
    function rwAMO(link){
        if (/outgoing.prod.mozaws.net/i.test(link.href)){
            var tmp = link.href;
            link.href = "#";
            // we have to fight mozilla's replacing of direct redirect string with jquery events
            setTimeout(function(){ link.href = unescape(tmp.replace(/(http|https):\/\/outgoing.prod.mozaws.net\/v1\/[0-9a-zA-Z]+\//i,'')); }, 100);
        }
    }
    (function ()
    {
        if (/ok/i.test(loc))
            anchor = 'st.link=';
        else if (/pixiv/i.test(loc))
            anchor = 'jump.php?';
        else if (/deviantart/i.test(loc))
            anchor = 'outgoing?';
        else if (/(steam|reactor)/i.test(loc))
            anchor = 'url=';
        else if (/(kat|kickass)/i.test(loc))
            anchor = 'confirm/url/';
        else if (/4pda/i.test(loc))
            anchor = 'go/?u=';
        else if (/yaplakal/i.test(loc))
            anchor = "go/?";
        else if (/forumavia.ru/i.test(loc))
            anchor = '/e/?l=';
        else if (/picarto/i.test(loc))
            anchor = "referrer?go=";
        else if (/taker/i.test(loc))
            anchor = "phpBB2/goto/";
    })();
})();
