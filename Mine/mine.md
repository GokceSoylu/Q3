Bu klasörde eğitim dışında kendi çalışmalarımı. eğitime ek olaraa kullandığım örnekleri topluyorum :))
Aşşağıda da aldığım bir takımnotlar var. konuların öğrenci kalvyesinden özetlenmiş hali :))

# Display

````css
    element{
        display:value;
    }
````
* inline
* block
* inline-block
* table
* flex
* grid
* inherit
* inside


## display:inline 
hocam inline dediğimiz olay şu in line yani aynı satırda.
yazdığın elemanları aynı satırda bulundurur. yeni satıra geçmez. arkadaşın kötü özellliği zaten aynı satırda bulunuyor diye 
height width ayarlamana izin vernez. EE aynı satır height i width i mi olur cnm bunun diyor :)

## display:block
hocam buda yine adı üstünde block block. elemanları üst üste dizer. haliyle height width ayarlanabilir.

## display:inline-block
bu da tamamen ihtiyaç üzerine doğmuş bir arkadaş. hocam inline nın heaght width ayarlanabilir hali :))

## display:table
hocam ben ömrümde bu saçma bu salak bir şey görmedim. şimdi biz table tag i ile tr td fln kullanıp table yapıyoruz ya
işte table tagi kullanmıyorsun onun  yerine iç içe sınıflar yazıyosun sonra bunları en dıştan en içe doğru css display özellikleini table, table-row, table-column olarak belirtiyosun. örnekten daha net anlaşışır.
```html
    <div class="table">
        <div class="row">
            <div class="data"></div>
            <div class="data"></div>
        </div>
        <div class="row">
            <div class="data"></div>
            <div class="data"></div>
        </div>
    </div>
```
```css
    .table{
        display:table;
    }
    .row{
        display:table-row;
    }
    .data{
        display:table-cell;
    }
```
çok saçma di mi😅 yaaz iişte direkt table ne diye şekil yapıyon ki

## display:flex
flex rahat işte. istediğin gibi verdiğin size a göre şekillendiirsin

## display:grid
grid özelliini kullanmaanı sağlar. nedir bu grid. adı üstünde ızgara sistemi yapıyorsun. web siteyi istediğin sayıda rows 
coulumns a bölüyorsun. 
hocam diyelim ki üst kısım tek parç aolsun ortası üç parç aolsun alt kısımd aiki parç alsun istedin ya o zaman 3 row üç column yaparsın. çok olana göre hrkt edilir yani. 
grid-templete taslağı belirlersin. burada yazdığın px değeri yüksekliği beliritr
grid-area bahsi geçen attributan hangi grid alanına karşılık geldiğini söylersin

geri kalan display değerlerinş yazmıcam adam olana çok bile.

#  justify content
* flex-start: Bu seçenek, öğeleri container’ın sol tarafına hizalar.

* flex-end: Bu seçenek, öğeleri container’ın sağ tarafına hizalar.


* center: Bu seçenek, öğeleri container’ın ortasına hizalar.

* space-between: Bu seçenek, öğeleri container içinde eşit aralıklarla hizalar.

* space-around: Bu seçenek, öğeleri container içinde eşit aralıklarla hizalar ancak ilk ve son öğeler container kenarlarına daha fazla boşluk bırakır.

# align items
* flex-start: Öğeler, konteynerin üst kısmına hizalanır.

* flex-end: Öğeler, konteynerin alt kısmına hizalanır.

* center: Öğeler, konteynerin dikey ortasına hizalanır.

* stretch: Öğeler, konteynerin tam yüksekliğine yayılır.

not:kral align-itmes ile justfy-content arasındaki farkı anladık mı? anlamadıysan yandık çünkü bende anlamadım😂
şaka şaka ben sen miyim tabiki anladım.  align içeriğin dikey olaka yerini belirler. justify yatay olarak :))
