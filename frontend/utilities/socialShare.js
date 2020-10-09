export function ShareFacebook(url, text, image) {
    window.open('http://facebook.com/sharer.php?s=100&p[url]=' + url + '&p[images][0]=' + image + '&p[title]=' + text, 'fbshare', 'height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0');
}

export function ShareTwitter(url, text) {
    window.open('http://twitter.com/share?url=' + url + '&text=' + text, 'tshare', 'height=400,width=550,resizable=1,toolbar=0,menubar=0,status=0,location=0');  
}

export function ReloadWidgets() {
    const twttr = window.twttr;
    if (typeof twttr.widgets !== 'undefined') {
      twttr.widgets.load()
    }
}