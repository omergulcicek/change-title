var title = document.title;
var alttitle = "";
var kontrol = false;

var saniye = 0, dakika = 0, saat = 0;

function hane(x)
{
    if (x < 10)
    {
        return "0" + String(x);
    }
    else
    {
        return x;
    }
}

function sayac()
{
    if (saniye < 59)
    {
        saniye = saniye + 1;
    }
    else
    {
        saniye = 0;
        if (dakika < 59)
        {
            dakika = dakika + 1;
        }
        else
        {
            dakika = 0;
            saat = saat + 1;
        }
    }

    alttitle = hane(saat) + ":" + hane(dakika) + ":" + hane(saniye);

    if (kontrol)
    {
        document.title = alttitle;
    }

    window.onblur = function()
    {
    document.title = alttitle;
    kontrol = true;
    };

    window.onfocus = function()
    {
        document.title = title;
        kontrol = false;
        saniye = 0;
        dakika = 0;
        saat = 0;
    };
}

setInterval(sayac, 1000);
