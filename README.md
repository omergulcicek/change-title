<h1>Başlık Değiştirme (Change Title)</h1>

Tarayıcı üzerinde sayfa aktif ise varsayılan başlık görünür. Farklı sekmeye geçtiğinizde ise başlık değişir ve sayaç artmaya başlar.

<i>If the page is active on the browser, the default title appears. When you move to the different tab, the title changes and the counter starts to increase.</i>

<h2>Kullanımı (<i>Use of</i>)</h2>

Kodları sayfaya eklemeniz yeterlidir.

<i>It is enough to add the codes to the page.</i>

<h2>Özelleştirme (<i>Customize</i>)</h2>

Farklı sekmeye geçildiği zaman sayaç yerine belirlediğiniz bir metnin görünmesini istiyorsanız aşağıdaki kodlar yeterlidir.

<i>The following codes are sufficient if you want to see a text that you specify instead of the counter when switching to a different tab.</i>

<pre>
var title = document.title;
var alttitle = "Sayfa değişti!"; // "Page changed !"

window.onblur = function()
{
    document.title = alttitle;
};

window.onfocus = function()
{
    document.title = title;
};
</pre>

