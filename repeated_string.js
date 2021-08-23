function repeatedString(s, n){
    s = s.toString().trim();
    if(!s.includes("a")){
        return 0;
    }
    if(s.length == 1 && s.includes("a")){
        return n;
    }

    var filtered = s.replace(/a/g, "");

    let pack = s.length - filtered.length,
        packs = n/s.length,
        rems = n % s.length;
    pack = Math.floor(packs) * pack;

    if(rems){
        let subs = s.substring(0, rems);

        filtered = subs.replace(/a/g, "");
        pack += subs.length - filtered.length;

    }

    return pack;
}

