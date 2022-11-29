function viewDiv1(){
    document.getElementById("div1").style.display = "flex";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
  };

  function viewDiv2(){
    document.getElementById("div2").style.display = "flex";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div1").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
  };

  function viewDiv3(){
    document.getElementById("div3").style.display = "flex";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div1").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
  };

  function viewDiv4(){
    document.getElementById("div4").style.display = "flex";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div1").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div5").style.display = "none";
  };

  function viewDiv5(){
    document.getElementById("div5").style.display = "flex";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div1").style.display = "none";
    document.getElementById("div3").style.display = "none";
  };

const item1 = `Опис предметної області
У сучасному світі достатньо розповсюджена стала доставка їжі, як частина життя нинішньої людини. Важко уявити сучасне життя без швидких та сучасних сервісів доставки їжі та напоїв. Мільйони людей по всьому світу замовляють їжу додому та до офісів. Тому дуже важливо надати якісний сервіс, який буде заощаджувати час та гроші клієнтів. Вже існує багато проектів, які спеціалізуються на доставці їжі та напоїв, але і під час здавалось би налагодженої роботи можуть виникати складності.

Метою цієї роботи є: розробка простого , зручного інтерфейсу і функціоналу онлайн-доставки. Він полегшить роботу кур’єрів та адміністраторів сайту, а також зробить процес замовлення товару зручним. Кур’єри швидше будуть доставляти, адміністратори – керувати внутрішніми процесами, користувачі – оформлювати і отримувати товар.

Об’єктом дослідження є: робота онлайн-доставки.

Предметом дослідження є: огляд існуючих сайтів та додатків для доставки для замовників.

Постановка задачі є: розробка застосування, яке дасть користувачам можливість замовляти доставку, автоматизувати процес створення замовлення, дозволить з мінімальними зусиллями змінювати деталі доставки.

Бізнес логіка:

Коритсувач:
- Реєстрація
- Авторизація
- Перегляд
- Добавляння категорій у кошик
- Видалення категорій з кошика
- Спосіб оплати
Адміністратор:
- Додавання категорій
- Видалення категорій
- Редагування категорій
- Прийняття замовлень`;

const item2 = `Тема: онлайн-доставка.

Метою цієї роботи є: розробка простого , зручного інтерфейсу і функціоналу онлайн-доставки. Він полегшить роботу кур’єрів та адміністраторів сайту, а також зробить процес замовлення товару зручним. Кур’єри швидше будуть доставляти, адміністратори – керувати внутрішніми процесами, користувачі – оформлювати і отримувати товар.`;

const item3 = `<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Main page</title>
</head>
<body>
    <header class="block--header">
        <div class="block--header-text">
            <h1>
                Звіти з лабораторних робіт З дисципліни "ІНТЕРНЕТ-ТЕХНОЛОГІЇ та ПРОЕКТУВАННЯ WEB-ЗАСТОСУВАНЬ"
            </h1>
            <h2>
                Студентки групи ІС-13 Завадецької Валерії Ігорівни
            </h2>
        </div>
        <img src="./image/my-photo.jpg" alt="my photo" height="210" width="150" class="image--my">
    </header>
    <div class="block--lab">
        <form class="nav">
            <input type="button" value="Лаб. р. №1" onmousedown="viewDiv1()" class="nav__link">
            <input type="button" value="Лаб. р. №2" onmousedown="viewDiv2()" class="nav__link">
            <input type="button" value="Лаб. р. №3" onmousedown="viewDiv3()" class="nav__link">
            <input type="button" value="Лаб. р. №4" onmousedown="viewDiv4()" class="nav__link">
            <input type="button" value="Лаб. р. №5" onmousedown="viewDiv5()" class="nav__link">
            <input type="button" value="Лаб. р. №6" onmousedown="viewDiv6()" class="nav__link">
            <input type="button" value="Лаб. р. №7" onmousedown="viewDiv7()" class="nav__link">
            <input type="button" value="Лаб. р. №8" onmousedown="viewDiv8()" class="nav__link">
            <input type="button" value="Лаб. р. №9" onmousedown="viewDiv9()" class="nav__link">
        </form>
    </div>
    <div class="block--description block--lab">
        <div class="block--button" id="div1">
            <button class="button--description" onclick="push(this, 'put', item1)">
                Опис предметного середовища
            </button>
            <button class="button--description" onclick="push(this, 'put', item2)">
                Тема, мета, місце розташування лаби
            </button>
            <button class="button--description" onclick="push(this, 'put','Головна сторінка')">
                Структура документа
            </button>
            <button class="button--description" onclick="push(this, 'put','хтмл')">
                HTML-код
            </button>
            <button class="button--description" onclick="push(this, 'put','Я навчилась')">
                Висновок
            </button>
        </div>
        <!--2-->
        <div class="block--button" id="div2">
            <button class="button--description" id="fs" onclick="push(this, 'put','придбати практичні навички роботи з селекторами, ідентифікаторами,списками, різноманітними властивостями кольору і фону, зовнішними та внутрішними відступами, плаваючими елементами, оформленням текстових елементів')">
                Постановка задачі 2 лаб
            </button>
            <button class="button--description" onclick="push(this, 'put','Тема: онлайн-доставка. Метою цієї роботи є: розробка простого , зручного інтерфейсу і функціоналу онлайн-доставки. Він полегшить роботу кур’єрів та адміністраторів сайту, а також зробить процес замовлення товару зручним. Кур’єри швидше будуть доставляти, адміністратори – керувати внутрішніми процесами, користувачі – оформлювати і отримувати товар.')">
                Списки
            </button>
            <button class="button--description" onclick="push(this, 'put', item_HTMLCode1)">
            Ідентифікатори
            </button>
            <button class="button--description" onclick="push(this, 'put','Я навчилась розробляти простий та зручний інтерфейс за допомогою HTML та CSS, який значно полегшить роботу користувачеві.')">
             Відступи
            </button>
          <button class="button--description" onclick="push(this, 'put','Я навчилась розробляти простий та зручний інтерфейс за допомогою HTML та CSS, який значно полегшить роботу користувачеві.')">
            Плаваючі елементи
            </button>  
            <button class="button--description" onclick="push(this, 'put','Я навчилась розробляти простий та зручний інтерфейс за допомогою HTML та CSS, який значно полегшить роботу користувачеві.')">
            Селектори
            </button>
        </div>
        <textarea class="textarea" id="put"></textarea>
    </div>
    <script type="text/javascript" src="./app.js"></script>
</body>
</html>`;

const item4 = `Я навчилась розробляти простий та зручний інтерфейс за допомогою HTML та CSS, який значно полегшить роботу користувачеві.`;

const item2_1 = `Придбати практичні навички роботи з селекторами, ідентифікаторами,списками, різноманітними властивостями кольору і фону, зовнішними та внутрішними відступами, плаваючими елементами, оформленням текстових елементів
1. У програмному коді лабораторної работи №2 застосувати селектори тегу
i класу на свій розсуд. Вміти пояснити викладачу. Програмний код
даного пункту відобразити у звітному HTML-документі
2. У програмному коду лабораторної роботи №2 застосувати
ідентифікатори. Вміти пояснити викладачу. Програмний код даного
пункту відобразити у звітному HTML-документі.
3. На свій розсуд застосувати сусідні, дочірні селектори, селектор атрибута
та універсальний селектор. Програмні коди даного пункту відобразити у
звітному HTML-документі.
4. За допомогою каскадних таблиць стилів виконати на свій розсуд стильове
оформлення текстових елементів. Показати як оформлюються:
⎯ списки,
⎯ різноманітні властивості кольору i фону,
⎯ зовнішні та внутрішні відступи,
Програмні коди даного пункту відобразити у звітному HTML-документі.
5. У звітному HTML-документі оформити звіт лабораторної роботи №2`;

const item2_2 = `                  КОД HTML:

<div class="list">
<ol>
    <li>Кава</li>
    <li>Чай
      <ol>
        <li class="item">Чорний чай</li>
        <li class="item">Зелений чай</li>
      </ol>
    </li>
    <li>Молоко</li>
  </ol>
  <ul>
    <li>Preheat oven to 425&deg;F</li>
    <li>Mix all the ingredients
      <ul>
        <li>Dump in bowl</li>
        <li>Stir with whisk</li>
      </ul>
    </li>
    <li>Dump it all into a greased pan</li>
    <li>Bake for 40 minutes</li>
    <li>Take out and let cool 30 mintes</li>
    <li>Eat</li>
</ul>
</div>

                      КОД CSS:

.list{
    color: purple;
    border-bottom: 1px solid #000;
    font-size: 14px;
    padding: 10px 0 10px 40px;
    background-color: pink;
}

.item{
    list-style-type:square;
    color: blueviolet;
    margin-left: 15px;
}

.item:hover{
    color: black;
    font-size: 20px;
}

ul{
    list-style: none;
}

ul li {
    counter-increment: steps;
}

ul li::before {
    content: counter(steps);
    margin-right: 0.5rem;
    background: #ff6f00;
    color: white;
    width: 1.2em;
    height: 1.2em;
    border-radius: 50%;
    display: inline-grid;
    place-items: center;
    line-height: 1.2em;
}

ul ul li::before {
    background: darkorchid;
}

ЗНИЗУ СИЛКА НА РЕЗУЛЬТАТ`;

const item2_3 = `                  КОД HTML:

<p id="lorem"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, doloribus.</p>

                     КОД CSS:

#lorem{
    color: blue;
    font-size: large;
    font-style: inherit;
}

ЗНИЗУ СИЛКА НА РЕЗУЛЬТАТ`;

const item2_4 = `                  КОД HTML:

<div class="backdown">
<h1>Lorem, ipsum dolor.</h1>
<p>Lorem ipsum dolor sit amet.</p>
</div>

                    КОД CSS:

.backdown{
    margin: 50px;
    padding: 20px;
    background-color: yellow;
    opacity: 0.5;
}

h1{
    padding: 30px;
    color: orangered;
}

ЗНИЗУ СИЛКА НА РЕЗУЛЬТАТ`;

const item2_5 = `                  КОД HTML:

<section class="block clearfix">
<div class="wrapper clearfix">
  <div class="big-block block-left">
    <p>
      1
    </p>
  </div>
  <div class="big-block block-right">
    <p>
      2
    </p>
  </div>
</div>
</section>

                 КОД CSS:

.wrapper{
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
}

.block{
    background-color: #E6E6E6;
    margin-bottom: 50px;
    margin-top: 50px;
}

.clearfix::after{
    content: '';
    display: block;
    clear: both;
}

.big-block{
    background-color:  #FC8F8F;
    width: 200px;
    height: 200px;
    color:#FFFFFF;
    font-weight: 700;
    font-size: 64px;
    line-height: 75px;
    text-align: center;
}

.block-left{
    float: left;
}

.block-right{
    float: right;
}

ЗНИЗУ СИЛКА НА РЕЗУЛЬТАТ`;

const item2_6 = `                  КОД HTML:

<li class="item">Чорний чай</li>
<li class="item">Зелений чай</li>
<div class="list">
<p id="lorem"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, doloribus.</p>
<div class="backdown">
<section class="block clearfix">
<div class="wrapper clearfix">
<div class="big-block block-left">
<div class="big-block block-right">

                       КОД CSS:
*{
    box-sizing: border-box;
}

.list{
    color: purple;
    border-bottom: 1px solid #000;
    font-size: 14px;
    padding: 10px 0 10px 40px;
    background-color: pink;
}

.item{
    list-style-type:square;
    color: blueviolet;
    margin-left: 15px;
}

.item:hover{
    color: black;
    font-size: 20px;
}
ul li::before {
    content: counter(steps);
    margin-right: 0.5rem;
    background: #ff6f00;
    color: white;
    width: 1.2em;
    height: 1.2em;
    border-radius: 50%;
    display: inline-grid;
    place-items: center;
    line-height: 1.2em;
}

ul ul li::before {
    background: darkorchid;
}

#lorem{
    color: blue;
    font-size: large;
    font-style: inherit;
}

.backdown{
    margin: 50px;
    padding: 20px;
    background-color: yellow;
    opacity: 0.5;
}
.wrapper{
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
}

.block{
    background-color: #E6E6E6;
    margin-bottom: 50px;
    margin-top: 50px;
}

.clearfix::after{
    content: '';
    display: block;
    clear: both;
}

.big-block{
    background-color:  #FC8F8F;
    width: 200px;
    height: 200px;
    color:#FFFFFF;
    font-weight: 700;
    font-size: 64px;
    line-height: 75px;
    text-align: center;
}

.block-left{
    float: left;
}

.block-right{
    float: right;
}`;

const item3_1 = `Тема:ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА. ВЕРСТКА
ЗАСОБАМИ CSS та FLEXBOX.

Мета:
⎯ придбати практичні навички роботи верстки сторінок засобами CSS, верстки на
основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-
сторінок
⎯ придбати практичні навички роботи верстки сторінок засобами CSS та FLEXBOX`;

const item3_2 = `                  КОД HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <title>Wave-sushi</title>
</head>
<body>
    <header>
            <div class="block--header-top">
                <div class="block--text-header-top">
                    <a href="/" class="text--header-top">
                        Про нас 
                    </a>
                    <a href="/" class="text--header-top">
                        Доставка 
                    </a>
                    <a href="/" class="text--header-top">
                        Контакти 
                    </a>
                </div>
                <div class="block--text-header-top">
                    <img src="./image/header-worktime.png" alt="worktime" width="55" height="55">
                    <div class="block--header-text-time">
                        <p class="text--header-time">
                            Нд-Чт: з 9:00 до 21:00
                        </p>
                        <p class="text--header-time">
                            Пт-Сб: з 9:00 до 21:00
                        </p>
                    </div>
                </div>
                <div class="block--text-header-top">
                    <img src="./image/header-phone.png" alt="phone" width="55" height="55">
                    <div class="block--header-text-phone">
                        <a href="tel:+38(093)7259191" class="text--header-phone">
                            +38 (093) 725 91 91
                        </a>
                        <a href="tel:+38(068)7259191"class="text--header-phone">
                            +38 (068) 725 91 91
                        </a>
                        <a href="tel:+38(050)7259191"class="text--header-phone">
                            +38 (050) 725 91 91
                        </a>
                    </div>
                </div>
                <div class="block--text-header-top">
                    <div class="block--header-reg">
                        <a href="/" class="text--header-reg">
                            Реєстрація
                        </a>
                        <a href="/" class="text--header-reg">
                            Увійти
                        </a>
                    </div>
                    <a href="/">
                        <img src="./image/backet.png" alt="backet" width="55" height="55">
                    </a>
                </div>
            </div>
            <div class="block--header-bottom">
                <nav class="block--header-nav">
                    <a href="/" class="link--header"><img src="./image/new.png" alt="new" class="image--header-bottom">Новинки</a>
                    <a href="/" class="link--header"><img src="./image/roll.png" alt="roll" class="image--header-bottom">Роли</a>
                    <a href="/" class="link--header"><img src="./image/sushi.png" alt="sushi" class="image--header-bottom">Суші</a>
                    <a href="/" class="link--header"><img src="./image/seti.png" alt="seti" class="image--header-bottom">Сети</a>
                </nav>
            </div>
    </header>
    <main class="block--main">
            <h2 class="text--subtitle-main">Усі</h2>
            <div class="block--items">
                <div class="block--item">
                    <img src="./image/dzumandzy.jpg" alt="dzumandzy" class="image--item">
                    <h2 class="text-title">Джуманджі</h2>
                    <h3>Склад:</h3>
                    <p class="text--storage">Набір на 2 персони із 24 шматочків: Камітай (8 шт), Філадельфія з лососем в ікрі (8 шт.), Філадельфія сурімі в кунжуті (8 шт.)</p>
                    <p class="text--price">389грн. / 555гр.</p>
                    <button class="button--main">До кошика</button>
                </div>
                <div class="block--item">
                    <img src="./image/arigato.jpg" alt="arigato" class="image--item">
                    <h2 class="text-title">Арігато</h2>
                    <h3>Склад:</h3>
                    <p class="text--storage">Набір на 4 персони із 48 шматочків Філадельфия Масаго (8шт), Філадельфія з лососем в кунжуті (8шт), Ямото (8шт), Техас (8шт), Ізумі Унагі (8шт), Філадельфія сяке в ікрі (8шт)</p>
                    <p class="text--price">749грн. / 1160гр.</p>
                    <button class="button--main">До кошика</button>
                </div>
                <div class="block--item">
                    <img src="./image/gurman.jpg" alt="gurman" class="image--item">
                    <h2 class="text-title">Гурман</h2>
                    <h3>Склад:</h3>
                    <p class="text--storage">На 3 персони 40 шт. Філадельфія Класик(8 шт.) Футомак зі смаженим лососем(8 шт.) Філадельфія сурімі в кунжуті (8 шт.) Ямото (8 шт.) Крейзи Чікен (8 шт.)</p>
                    <p class="text--price">629грн. / 1005гр.</p>
                    <button class="button--main">До кошика</button>
                </div>
                <div class="block--item block--reletive">
                    <p class="text--new text--new-two">
                        Новинка
                    </p>
                    <img src="./image/nabor_guliver.jpg" alt="guliver" class="image--item">
                    <h2 class="text-title">Гулівер</h2>
                    <h3>Склад:</h3>
                    <p class="text--storage">На 4 персони 64 шматочка Філадельфія Класик (16 шт.), Маямі (8 шт.), Техас (8 шт.), Філадельфія з сурімі в ікрі (8 шт.), Чікен Чіз (8шт.), Ямото (8шт.), Ізумі Унаги (8 шт.)</p>
                    <p class="text--price">1099грн. / 1640гр.</p>
                    <button class="button--main">До кошика</button>
                </div>
                <div class="block--item">
                    <img src="./image/fila-hit.jpg" alt="fila-hit" class="image--item">
                    <h2 class="text-title">Філа Хіт</h2>
                    <h3>Склад:</h3>
                    <p class="text--storage">Філадельфія Класична (8 шт ), Маямі (8 шт ), Футомак Ізумі (8 шт ), Філадельфія з сурімі в кунжуті (8 шт ).</p>
                    <p class="text--price">539грн. / 855гр.</p>
                    <button class="button--main">До кошика</button>
                </div>
                <div class="block--item block--reletive">
                    <p class="text--new text--new-one">
                        Новинка
                    </p>
                    <img src="./image/lososeviy_miks.jpg" alt="lososeviy_miks" class="image--item">
                    <h2 class="text-title">Лососевий мікс</h2>
                    <h3>Склад:</h3>
                    <p class="text--storage">48 шт. на 4 персони Філадельфія Класік (8 шт.), Ясай (8 шт.), Філадельфія з лососем в кунжуті (8 шт.), Маямі (8 шт.), Каліфорнія з лососем в ікрі (8 шт.), Техас (8 шт.)</p>
                    <p class="text--price">999грн. / 1240гр.</p>
                    <button class="button--main">До кошика</button>
                </div>
                <div class="block--item">
                    <img src="./image/simeiniy.jpg" alt="simeiniy" class="image--item">
                    <h2 class="text-title">Сімейний</h2>
                    <h3>Склад:</h3>
                    <p class="text--storage">Філадельфія з жареним лососем в кунжуті( 8 шт.), Сирний з ікрою масаго ( 8 шт.) ,Ямото ( 8 шт.), Маямі ( 8 шт.). Філадельфія Класик ( 8 шт.), Філадельфія з лососем в ікрі ( 8 шт.)</p>
                    <p class="text--price">599грн. / 1190гр.</p>
                    <button class="button--main">До кошика</button>
                </div>
                <div class="block--item">
                    <img src="./image/smailset.jpg" alt="smailset" class="image--item">
                    <h2 class="text-title">Смайл сет</h2>
                    <h3>Склад:</h3>
                    <p class="text--storage">Філадельфія лососем в кунжуті( 8 шт.), Сирний з ікрою масаго ( 8 шт.) ,Маямі ( 8 шт.), Філадельфія з лососем в ікрі ( 8 шт.).</p>
                    <p class="text--price">399грн. / 780гр.</p>
                    <button class="button--main">До кошика</button>
                </div>
            </div>
    </main>
    <footer class="block--footer">
        <div class="block--footer-content">
            <div class="block--footer-logo">
                <img src="./image/footer-logo.png" alt="logo">
                <p class="text--footer-save">© Wave sushi 2013-2022. Всі права захищено.</p>
            </div>
            <div class="block--footer-self">
                <p class="text-footer-sushi">
                    Wave Sushi
                </p>
                <a href="/" class="link--footer-sushi">Про нас</a>
                <a href="/" class="link--footer-sushi">Доставка</a>
                <a href="/" class="link--footer-sushi">Контакти</a>
            </div>
            <div class="block--footer-self">
                <p class="text-footer-sushi">
                    Наше меню
                </p>
                <a href="/" class="link--footer-sushi">Новинки</a>
                <a href="/" class="link--footer-sushi">Сети</a>
                <a href="/" class="link--footer-sushi">Суші</a>
                <a href="/" class="link--footer-sushi">Роли</a>
            </div>
            <div class="block--footer-contact">
                <div class="block--tel">
                    <a href="tel:+38(093)7259191" class="text-footer-sushi">
                        +38 (093) 725 91 91
                    </a>
                    <a href="tel:+38(068)7259191" class="text-footer-sushi">
                        +38 (068) 725 91 91
                    </a>
                    <a href="tel:+38(050)7259191" class="text-footer-sushi">
                        +38 (050) 725 91 91
                    </a>
                </div>
                <p class="text-footer-sushi">Часи праці:</p>
                <p class="text--header-time">
                    Нд-Чт: з 9:00 до 21:00
                </p>
                <p class="text--header-time">
                    Пт-Сб: з 9:00 до 21:00
                </p>
            </div>
        </div>
    </footer>
</body>
</html>`;

const item3_3 = `                  КОД HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style3_1.css">
    <title>Table</title>
</head>
<body>
    <table>
        <tr>
            <td colspan="5" class="block-one"></td>
        </tr>
        <tr>
            <td rowspan="3" class="block-two"></td>
            <td colspan="4"class="block-three"></td>
        </tr>
        <tr>
            <td colspan="2" class="block-four"></td>
            <td colspan="2" class="block-five" rowspan="2"></td>
        </tr>
        <tr>
            <td colspan="2" class="block-six"></td>
        </tr>
        <tr>
            <td colspan="5" class="block-one"></td>
        </tr>
    </table>
</body>
</html>

КОД CSS:

table{
    table-layout: fixed;
    table-layout: auto;
    border: 1px solid black;
}

.block-one{
    width: 245px;
    height: 70px;
    background-color: yellow;
}

.block-two{
    width: 85px;
    height: 400px;
    background-color: blue;
}

.block-three{
    background-color: red;
    width: 65px;
    height: 50px;
    border: 25px solid white;
    padding: 0;
}

.block-four{
    background-color: antiquewhite;
    width: 100px;
    height: 200px;
    border-left: 25px solid white;

}

.block-five{
    background-color: blue;
    border: 25px solid white;
    width: 100px;
    height: 250px;
    border-top: 0;
}

.block-six{
    background-color: red;
    border-left: 25px solid white;
    border-bottom: 25px solid white;
}
`;

const item3_4 = `                  КОД HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style3_1.2.css">
    <title>Table</title>
</head>
<body>
    <table>
        <tr>
            <td colspan="5" class="block-one"></td>
        </tr>
        <tr>
            <td rowspan="3" class="block-two"></td>
            <td colspan="4"class="block-three"></td>
        </tr>
        <tr>
            <td colspan="2" class="block-four"></td>
            <td colspan="2" class="block-five" rowspan="2"></td>
        </tr>
        <tr>
            <td colspan="2" class="block-six"></td>
        </tr>
        <tr>
            <td colspan="5" class="block-one"></td>
        </tr>
    </table>
</body>
</html>

КОД CSS:

table{
    table-layout: fixed;
    table-layout: auto;
    border: 1px solid black;
    width: 100%;
}

.block-one{
    width: 100%;
    height: 70px;
    background-color: yellow;
}

.block-two{
    width: 25%;
    height: 400px;
    background-color: blue;
}

.block-three{
    background-color: red;
    width: 22%;
    height: 50px;
    border: 25px solid white;
    padding: 0;
}

.block-four{
    background-color: antiquewhite;
    width: 30%;
    height: 200px;
    border-left: 25px solid white;

}

.block-five{
    background-color: blue;
    border: 25px solid white;
    width: 30%;
    height: 250px;
    border-top: 0;
}

.block-six{
    background-color: red;
    border-left: 25px solid white;
    border-bottom: 25px solid white;
}
`;

const item3_5 = `                  КОД HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style3_2.css">
    <title>task 2.1</title>
</head>
<body>
    <div class="block">
        <div class="block--one"></div>
        <div class="block-two">
            <div class="block-two-one"></div>
            <div class="block-two-two">
                <div class="block-mini-one"></div>
                <div class="block-mini-two">
                    <div class="block-mini-mini-one">
                        <div class="block--end-one"></div>
                        <div class="block--end-two"></div>
                    </div>
                    <div class="block-mini-mini-two"></div>
                </div>
            </div>
        </div>
        <div class="block--one"></div>
    </div>
</body>
</html>

КОД CSS:

.block{
    width: 500px;
    border: 1px solid #000;
}

.block--one{
    background-color: orange;
    width: 500px;
    height: 100px;
}

.block-two{
    display: flex;
    justify-content: space-between;
}

.block-two-one{
    background-color: blue;
    width: 100px;
    height: 500px;
}

.block-two-two{
    display: flex;
    flex-direction: column;
    padding: 25px;
}

.block-mini-one{
    background-color: red;
    height: 50px;
    width: 350px ;
    margin: 0 0 25px 0;
}

.block-mini-two{
    display: flex;
    justify-content: space-between;
}

.block-mini-mini-two{
    background-color: blue;
    width: 150px;
    height: 375px;
    margin-left: 25px;
}

.block-mini-mini-one{
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    height: 375px;
}

.block--end-one{
    background-color: antiquewhite;
    width: 175px;
    height: 325px;
}

.block--end-two{
    background-color: red;
    width: 175px;
    height: 50px;
}
`;

const item3_6 = `                  КОД HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style3_2.2.css">
    <title>task 2.1</title>
</head>
<body>
    <div class="block">
        <div class="block--one"></div>
        <div class="block-two">
            <div class="block-two-one"></div>
            <div class="block-two-two">
                <div class="block-mini-one"></div>
                <div class="block-mini-two">
                    <div class="block-mini-mini-one">
                        <div class="block--end-one"></div>
                        <div class="block--end-two"></div>
                    </div>
                    <div class="block-mini-mini-two"></div>
                </div>
            </div>
        </div>
        <div class="block--one"></div>
    </div>
</body>
</html>

КОД CSS:

.block{
    width: 100%;
    border: 1px solid #000;
}

.block--one{
    background-color: orange;
    width: 100%;
    height: 100px;
}

.block-two{
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.block-two-one{
    background-color: blue;
    width: 20%;
    height: 500px;
}

.block-two-two{
    display: flex;
    flex-direction: column;
    padding: 25px;
    width: 75%;
}

.block-mini-one{
    background-color: red;
    height: 50px;
    width: 100%;
    margin: 0 0 25px 0;
}

.block-mini-two{
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.block-mini-mini-two{
    background-color: blue;
    width: 50%;
    height: 375px;
    margin-left: 25px;
}

.block-mini-mini-one{
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    height: 375px;
    width: 50%;
}

.block--end-one{
    background-color: antiquewhite;
    width: 100%;
    height: 325px;
}

.block--end-two{
    background-color: red;
    width: 100%;
    height: 50px;
}
`;

const item3_7 = `                  КОД HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style3_3.css">
    <title>task 3</title>
</head>
<body>
    <header>
            <h2 class="subtitle--header">
                ПОПУЛЯРНІ НАПРЯМКИ
            </h2>
            <h1 class="title--header">
                КУРСІВ ПРОГРАМУВАННЯ
            </h1>
            <div class="block--items">
                <div class="block--item">
                    <h2 class="subtitle--header">
                        JAVASCRIPT
                    </h2>
                    <p class="text-item">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. it ipsa fugiat porro est magnam nihil? Porro rerum, impedit asperiores consectetur explicabo assumenda magni, eum tenetur facilis, odit dolorum ex. Eligendi, commodi amet. Maxime, mollitia cumque!
                    </p>
                    <p class="text--item">
                        Залишилось 3 місця
                    </p>
                </div>
                <div class="block--item">
                    <h2 class="subtitle--header">
                        JAVA
                    </h2>
                    <p class="text-item">
                        Lorem ipsum dolor sit amet consectetur adipisicing elipsa? Hic accusamus quod soluta magni ipsa ipsum eligendi sint natus, sit quae sunt delectus, obcaecati alias velit modi. Voluptatibus, labore illo? Eius odit cumque vero.
                    </p>
                    <p class="text--item">
                        Залишилось 3 місця
                    </p>
                </div>
                <div class="block--item">
                    <h2 class="subtitle--header">
                        PYTHON
                    </h2>
                    <p class="text-item">
                       Lorem ipsum dolor error? Voluptates sequi quaerat dolores reprehenderit. Eligendi totam nesciunt neque quas deleniti doloribus vero porro voluptatem reiciendis placeat exercitationem nisi, eaque praesentium architecto vitae sunt molestias quaerat rerum. Eum neque facilis odit ipsa.
                    </p>
                    <p class="text--item">
                        Залишилось 3 місця
                    </p>
                </div>
            </div>
    </header>
    <main>
        <div class="block--items-main">
            <div class="block--item-main"></div>
            <div class="block--item-main"></div>
            <div class="block--item-main"></div>
            <div class="block--item-main"></div>
        </div>
        <div class="block--items-three">
            <img src="../image/js.jpeg" alt="js" class="foto">
            <div class="block--item-three">
                <h2 class="title-three">
                    ВІД НОВАЧКА ДО PRO-РОЗРОБНИКА
                </h2>
                <p class="text--three">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente distinctio voluptatibus delectus laudantium modi aperiam quos veniam expedita inventore, totam saepe recusandae, rerum voluptates repudiandae deleniti ratione dicta, adipisci ullam. Veritatis consequuntur dolore in veniam optio eius labore tempore cumque nisi facilis, corrupti, eos voluptates sit quidem. Harum incidunt natus cum labore odit iusto. Reiciendis maxime eligendi veniam reprehenderit nostrum!
                </p>
            </div>
        </div>
        <div class="block--items-four">
            <p class="text-title-four"> НАВЧАЙСЯ ЗАРАЗ, СПЛАЧУЙ ПОТІМ</p>
            <p class="text-four">РОЗТЕРМІНУВАННЯ НА 24 МІСЯЦІ</p>
        </div>
    </main>
</body>
</html>

КОД CSS:

*{
    box-sizing: border-box;
}

header{
    background-color: rgb(30, 29, 29);
    width: 100%;
    padding: 25px;
}

.wrapper{
    width: 1400px;
    margin-left: auto;
    margin-right: auto;
}

.subtitle--header{
    text-align: center;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
}

.title--header{
    text-align: center;
    font-size: 22px;
    color: orange;
    font-weight: bold;
    margin-bottom: 50px;
}

.block--items{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
}

.block--item{
    width: 25%;
    display: flex;
    flex-wrap: nowrap;
    border: 1px solid gray;
    flex-direction: column;
    padding: 20px;
    border-radius: 20px;
    height: 350px;
}

.text-item{
    color: #fff;
    font-size: 14px;
    padding: 25px 0;
}

.text--item{
    text-align: center;
    font-size: 12px;
    color: blue;
}

.block--items-main{
    background-color: rgb(43, 49, 232);
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
}

.block--item-main{
    width: 22%;
    background-color: black;
    height: 200px;
    border: 2px solid #fff;
    border-radius: 20px;
}

.block--items-three{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 50px;
}

.block--item-three{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.title-three{
    color: orange;
    font-size: 24px;
    font-weight: bold;
}

.text--three{
    width: 40%;
}

.foto{
    width: 30%;
    height: 300px;
}

.block--items-four{
    background-color: orange;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 20px 70px;
}

.text-title-four{
    color: #fff;
    font-size: 26px;
    font-weight: bold;
    width: 35%;
    margin: 0;
}

.text-four{
    color: #000;
    font-size: 14px;
    font-weight: bolder;
    width: 35%;
    text-align: center;
    margin: 0;
    display: flex;
    align-self: center;
}
`;

const item3_8 = ` На даній лабораторній роботі я придбала практичні навички роботи верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок також з роботи верстки сторінок засобами CSS та FLEXBOX`;

const item4_1 =`Тема: ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ.
КЛАСИ,ОБ’ЄКТИ, ФУНКЦІЇ, В МОВІ JAVASCRIPT. ПОДІЇ ТА ОБРОБКА ПОДІЙ.
ПРОГРАМНА ВЗАЄМОДІЯ З HTML ДОКУМЕНТАМИ НА ОСНОВІ DOM АРІ

.

Мета: придбати практичні навички роботи маніпулювання інформаційним
вмістом Web-документа засобами мови JavaScript`;

const item4_2 = `ВАРІАНТ 3 

ЗАВДАННЯ 1
Заданий одновимірний масив А, кількість елементів якого задана користувачем.
Побудувати масив В, кожний елемент якого обчислюється за формулою :
bі = max*ai де - max це максимальний елемент масиву А. Надрукувати вхідний
та вихідний масиви.
Виконати сортування вихідного масиву за зменшенням методом вставки
Застосувати функції

ЗАВДАННЯ 2
Реалізувати калькулятор мовою JavaScript.
Обов‘язкові операції: +,-,*,/,%, корінь квадратний,
x^y. Кнопки з цифрами та знаками операцій мають
бути доступні у інтерфейсі вікна.

ЗАВДАННЯ 3
У власному сайті на свій розсуд застосувати сценарії на JavaScript.`;

const item4_3 = ` КОД JS

let arr = [];
let startArr, endArr_B, sortArr_B;
let arr_B = [];
let current;
let max;

function createStartArray(){
    arr.length = prompt("Введіть кількість елементів");
    for(let i = 0; i < arr.length; i++){
        arr[i] = prompt('Введіть елемент');
    }
    startArr = "Вхідний масив: " + arr;
}
function searchMaxElement(){
    for(i = 0; i < arr.length; i++){
        if(arr[i]> max){
            max = arr[i];
        }
    }
}
function createEndArray() {
    for(i = 0; i < arr.length; i++){
        arr_B[i] = max * arr[i];
    }
    endArr_B = "Вихідний масив: " + arr_B;
}
function sortArray(){
    for ( i = 0; i < arr_B.length; i++)
    { 
        var v = arr_B[ i ], j = i-1;
      while (j >= 0 && arr_B[j] < v)
       { 
        arr_B[j+1] =arr_B[j]; 
        j--; }
      arr_B[j+1] = v;
    }  
    sortArr_B = "Сортований масив: " + arr_B;
}
function task1(){
    createStartArray();
    max = arr[0];
    searchMaxElement();
    createEndArray();
    sortArray();
    alert(startArr +"\n" + endArr_B + "\n" +sortArr_B);
}

task1();`;

const item4_4 = `КОД HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Lab 4</title>
</head>
<body>
    <div class="calc">
        <div class="calc-screen">
            <p>0</p>
        </div>
        <div class="buttons">
            <div class="btn ac grey">ac</div>
            <div class="btn plus-minus grey">x^y</div>
            <div class="btn percent grey">%</div>
            <div class="btn division orange">/</div>
            <!---->
            <div class="btn seven">7</div>
            <div class="btn eight">8</div>
            <div class="btn nine">9</div>
            <div class="btn mult orange">x</div>
            <!---->
            <div class="btn four">4</div>
            <div class="btn five">5</div>
            <div class="btn six">6</div>
            <div class="btn minus orange">-</div>
             <!---->
            <div class="btn one">1</div>
            <div class="btn two">2</div>
            <div class="btn tree">3</div>
            <div class="btn plus orange">+</div>
            <!---->
            <div class="btn zero">0</div>
            <div class="btn dot">.</div>
            <div class="btn equal orange">=</div>
        </div>
    </div>
    <!---->
    <script type="text/javascript" src="./app_2.js"></script>
</body>
</html>

КОД CSS

.calc{
    margin: 50px auto;
    width: 300px;
    height: 500px;
    border-radius: 20px;
    background: #000;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    padding: 18px;
    box-shadow: 4px 4px 4px #4f4f4f;
}

.btn{
    width: 60px;
    height: 60px;
    background: #333;
    border-radius: 50%;
    text-align: center;
    line-height: 60px;
    font-size: 1.5rem;
    cursor: pointer;
    user-select: none;
}

.buttons{
    display: grid;
    grid-template-areas: 
    " ac plus-minus percent division"
    "seven eight nine mult"
    "four five six minus"
    "one two three plus"
    "zero zero dot equal";
    grid-gap: 7px;
    justify-items: center;
}

.btn:hover{
    filter: brightness(120%);
}

.btn:active{
    filter: brightness(90%);
}

.grey{
    background: #a6a6a6;
}

.orange{
    background: #ff9501;
}

.zero{
    grid-area: zero;
    width: 100%;
    border-radius: 34px;
}

.calc-screen{
    height: 125px;
    padding: 10px;
    display: grid;
    justify-items: end;
    align-items: end;
    margin-bottom: 20px;
}

p{
    text-align: right;
    font-size: 4rem;
    margin: 0;
}

КОД JS

let a = ''; // 1 число
let b = ''; //2 число 
let sign = ''; // знак операції
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-','+','x','/', 'x^y', '%'];

const out = document.querySelector('.calc-screen p');

function clearAll(){
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    //натиснута не кнопка
    if(!event.target.classList.contains('btn')) return;
    //натиснут очищувач
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    //отримую натиснуту кнопку
    const key = event.target.textContent;

    //якщо натиснута кнопка 0-9 або ,
    if(digit.includes(key)){
        if(b==='' && sign === ''){
            a += key;
            out.textContent = a;
        }
        else if( a!== '' && b !== ''&& finish){
            b = key;
            finish = false;
            out.textContent = b;
        }
        else{
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }

    // натиснуті знаки
    if(action.includes(key)){
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    //натиснути дорівнює
    if(key === "="){
        if( b === ''){
            b = a;
        }
        switch(sign){
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "x":
                a = a * b;
                break;
            case "/":
                if( b === "0"){
                    out.textContent = 'Помилка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
            case "x^y":
                a = Math.pow(a, b);
                break;
            case "%":
                 a = a/100;
            break;
        }
         finish = true;
         out.textContent = a;
         console.log(a, b, sign);
    }
}`;

const item4_5 = `На даній лабораторній роботі я придбала практичні навички роботи маніпулювання інформаційним вмістом Web-документа засобами мови JavaScript`;

const item5_1 = `ВИКОРИСТАННЯ В СЦЕНАРІЯХ JAVASCRIPT БІБЛІОТЕК КРОС-БРАУЗЕРНИХ
ІНТЕРФЕЙСІВ МЕТОДІВ DOM. БІБЛІОТЕКА JQUERY UI.
ЗАСОБИ НАЛАГОДЖЕННЯ I ТЕСТУВАННЯ СЦЕНАРІЇВ JAVASCRIPT.

Мета: придбати практичні навички роботи jQuery UI, вміти додавати до сайту
динамічні елементи цієї бібліотеки, плагін галереї UniteGallery, кнопки
соціальних мереж, інформери та інше.`;

const item5_2 = `КОД HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>  
    <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>  
    <link href="http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css" rel="stylesheet" type="text/css" />  
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/i18n/jquery-ui-i18n.min.js"></script> 
    <script type="text/javascript" src="./jquery.js"></script>
    <title>Document</title>
</head>
<body>
    <div class="container">
        <h3>Календар</h3>
        <div id="calendar"> </div>
    </div> 
    <p><label for="age">Your age:</label><input id="age" title="We ask for your age only for statistical purposes."></p>
    <div class="share_this">
        <a class="social_share vk" data-type="vk">ВКонтакте</a>
        <a  class="social_share fb" data-type="fb">Facebook</a>
        <a  class="social_share tw" data-type="tw">Twitter</a>
        <a  class="social_share ok" data-type="ok">Одноклассники</a>
        <a  class="social_share gg" data-type="gg">Google+</a>
        <a  class="social_share mr" data-type="mr">Mail.Ru</a>
        <a  class="social_share lj" data-type="lj">LiveJournal</a>
    </div>
</body>
</html>


КОД JQuery

$(document).ready(function() {
    var options = $.extend({}, // empty object    
        $.datepicker.regional["en-US"], {  
            dateFormat: "mm/dd/yy"  
        } // your custom options    
    );  
    $("#calendar").datepicker(options);  
});  

$( function() {
    $( document ).tooltip();
  } );

  $(document).ready(function(){
    $('.owl-carousel').owlCarousel();
});`;

const item5_3 = `КОД HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>  
    <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>  
    <link href="http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css" rel="stylesheet" type="text/css" />  
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/i18n/jquery-ui-i18n.min.js"></script> 
    <script type="text/javascript" src="./jquery.js"></script>
    <title>Document</title>
</head>
<body>
    <div class="container">
        <h3>Календар</h3>
        <div id="calendar"> </div>
    </div> 
    <p><label for="age">Your age:</label><input id="age" title="We ask for your age only for statistical purposes."></p>
    <div class="share_this">
        <a class="social_share vk" data-type="vk">ВКонтакте</a>
        <a  class="social_share fb" data-type="fb">Facebook</a>
        <a  class="social_share tw" data-type="tw">Twitter</a>
        <a  class="social_share ok" data-type="ok">Одноклассники</a>
        <a  class="social_share gg" data-type="gg">Google+</a>
        <a  class="social_share mr" data-type="mr">Mail.Ru</a>
        <a  class="social_share lj" data-type="lj">LiveJournal</a>
    </div>
</body>
</html>


КОД JQuery

Share = {
    /**
     * ПОКАЗАТЬ ПОЛЬЗОВАТЕЛЮ ДИАЛОГ ШАРИНГА В СООВЕТСТВИИ С ОПЦИЯМИ
     * МЕТОД ДЛЯ ИСПОЛЬЗОВАНИЯ В INLINE-JS В ССЫЛКАХ
     * ПРИ БЛОКИРОВКЕ ВСПЛЫВАЮЩЕГО ОКНА ПОДСТАВИТ НУЖНЫЙ АДРЕС И ПОЛЗВОЛИТ БРАУЗЕРУ ПЕРЕЙТИ ПО НЕМУ
     *
     * @EXAMPLE <A HREF="" ONCLICK="RETURN SHARE.GO(THIS)">LIKE+</A>
     *
     * @PARAM OBJECT _ELEMENT - ЭЛЕМЕНТ DOM, ДЛЯ КОТОРОГО
     * @PARAM OBJECT _OPTIONS - ОПЦИИ, ВСЕ НЕОБЯЗАТЕЛЬНЫ
     */
    go: function(_element, _options) {
        var
            self = Share,
            options = $.extend(
                {
                    type:       'vk',    // ТИП СОЦСЕТИ
                    url:        location.href,  // КАКУЮ ССЫЛКУ ШАРИМ
                    count_url:  location.href,  // ДЛЯ КАКОЙ ССЫЛКИ КРУТИМ СЧЁТЧИК
                    title:      document.title, // ЗАГОЛОВОК ШАРИНГА
                    image:        '',             // КАРТИНКА ШАРИНГА
                    text:       '',             // ТЕКСТ ШАРИНГА
                },
                $(_element).data(), // ЕСЛИ ПАРАМЕТРЫ ЗАДАНЫ В DATA, ТО ЧИТАЕМ ИХ
                _options            // ПАРАМЕТРЫ ИЗ ВЫЗОВА МЕТОДА ИМЕЮТ НАИВЫСШИЙ ПРИОРИТЕТ
            );
  
        if (self.popup(link = self[options.type](options)) === null) {
            // ЕСЛИ НЕ УДАЛОСЬ ОТКРЫТЬ ПОПАП
            if ( $(_element).is('a') ) {
                // ЕСЛИ ЭТО <A>, ТО ПОДСТАВЛЯЕМ АДРЕС И ПРОСИМ БРАУЗЕР ПРОДОЛЖИТЬ ПЕРЕХОД ПО ССЫЛКЕ
                $(_element).prop('href', link);
                return true;
            }
            else {
                // ЕСЛИ ЭТО НЕ <A>, ТО ПЫТАЕМСЯ ПЕРЕЙТИ ПО АДРЕСУ
                location.href = link;
                return false;
            }
        }
        else {
            // ПОПАП УСПЕШНО ОТКРЫТ, ПРОСИМ БРАУЗЕР НЕ ПРОДОЛЖАТЬ ОБРАБОТКУ
            return false;
        }
    },
  
    // ВКОНТАКТЕ
    vk: function(_options) {
        var options = $.extend({
                url:    location.href,
                title:  document.title,
                image:  '',
                text:   '',
            }, _options);
  
        return 'http://vkontakte.ru/share.php?'
            + 'url='          + encodeURIComponent(options.url)
            + '&title='       + encodeURIComponent(options.title)
            + '&description=' + encodeURIComponent(options.text)
            + '&image='       + encodeURIComponent(options.image)
            + '&noparse=true';
    },
  
    // ОДНОКЛАССНИКИ
    ok: function(_options) {
        var options = $.extend({
                url:    location.href,
                text:   '',
            }, _options);
  
        return 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1'
            + '&st.comments=' + encodeURIComponent(options.text)
            + '&st._surl='    + encodeURIComponent(options.url);
    },
  
    // FACEBOOK
    fb: function(_options) {
        var options = $.extend({
                url:    location.href,
                title:  document.title,
                image:  '',
                text:   '',
            }, _options);
  
        return 'http://www.facebook.com/sharer.php?s=100'
            + '&p[title]='     + encodeURIComponent(options.title)
            + '&p[summary]='   + encodeURIComponent(options.text)
            + '&p[url]='       + encodeURIComponent(options.url)
            + '&p[images][0]=' + encodeURIComponent(options.image);
    },
  
    // ЖИВОЙ ЖУРНАЛ
    lj: function(_options) {
        var options = $.extend({
                url:    location.href,
                title:  document.title,
                text:   '',
            }, _options);
  
        return 'http://livejournal.com/update.bml?'
            + 'subject='        + encodeURIComponent(options.title)
            + '&event='         + encodeURIComponent(options.text + '<br/><a href="' + options.url + '">' + options.title + '</a>')
            + '&transform=1';
    },
  
    // ТВИТТЕР
    tw: function(_options) {
        var options = $.extend({
                url:        location.href,
                count_url:  location.href,
                title:      document.title,
            }, _options);
  
        return 'http://twitter.com/share?'
            + 'text='      + encodeURIComponent(options.title)
            + '&url='      + encodeURIComponent(options.url)
            + '&counturl=' + encodeURIComponent(options.count_url);
    },
  
// GOOGLE+
    gg: function (_options) {
        var options = $.extend({
            url: location.href          
        }, _options);
  
        return 'https://plus.google.com/share?url='
            + encodeURIComponent(options.url);
    },
  
    // MAIL.RU
    mr: function(_options) {
        var options = $.extend({
                url:    location.href,
                title:  document.title,
                image:  '',
                text:   '',
            }, _options);
  
        return 'http://connect.mail.ru/share?'
            + 'url='          + encodeURIComponent(options.url)
            + '&title='       + encodeURIComponent(options.title)
            + '&description=' + encodeURIComponent(options.text)
            + '&imageurl='    + encodeURIComponent(options.image);
    },
  
    // ОТКРЫТЬ ОКНО ШАРИНГА
    popup: function(url) {
        return window.open(url,'','toolbar=0,status=0,scrollbars=1,width=626,height=436');
    }
}

$(document).on('click', '.social_share', function(){
    Share.go(this);
});`;

const item5_4 = `КОД HTML годинник

<!DOCTYPE html>
<html>
  <head>
    <title>Digital Clock</title>
    <link rel="stylesheet" href="style.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="clock.js"></script>
  </head>
  <body><div id="jquery-script-menu">
    
    <div class="content">
      <div class="timeDiv">
        <span class="font-color" id="time"></span>
        <span class="font-color" id="sec"></span>
        <span class="font-color" id="med"></span>
      </div>
      <span class="font-color" id="full-date"></span>
    </div>
    
    <script src="script.js"></script>
  </body>
</html>

КОД HTML валюта

<!DOCTYPE html>
<html>
    <head>
        <title>Currency</title>
    </head>
    <body>
        <div id="minfin-informer-m1Fn-region">Завантажуємо 
           <a href="https://minfin.com.ua/ua/currency/" target="_blank">курси валют</a> від minfin.com.ua</a>
        </div>
        <script src="script.js"></script>
    </body>
</html>

КОД JQuery годинник

$(document).ready(function () {
    function currentTime() {
      var date = new Date();
      var day = date.getDay();
      var hour = date.getHours();
      var min = date.getMinutes();
      var sec = date.getSeconds();
      var month = date.getMonth();
      var currDate = date.getDate();
      var year = date.getFullYear();
      var monthName = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      var showDay = $('.dayDiv span')
      var midDay= "AM"
      midDay = (hour>=12)? "PM":"AM";
      hour = (hour==0)?12:((hour<12)? hour:(hour-12));
      hour = updateTime(hour);
      min = updateTime(min);
      sec = updateTime(sec);
      currDate= updateTime(currDate);
      $("#time").html({hour}:{min});
      $("#sec").html({sec});
      $("#med").html({midDay});
      $("#full-date").html({monthName[month]} {currDate} {year});
      showDay.eq(day).css('opacity','1')
    }
    updateTime = function(x){
      if(x<10){
        
        return "0"+x
      }
      else{
        
        return x;
      }
      
    }
    setInterval(currentTime,1000);
  });
  
  КОД JQuery валюта
  var iframe = '<ifra'+'me width="500" fram'+'eborder="0" src="https://informer.minfin.com.ua/ua/gen/region/0/?color=blue" vspace="0" scrolling="no" hspace="0" allowtransparency="true"style="width:500px;ove'+'rflow:hidden;"></iframe>';
  var cl = 'minfin-informer-m1Fn-region';
  document.getElementById(cl).innerHTML = iframe;
  `;

  const item5_5 = `КОД HTML мультимедіа відео

  <!DOCTYPE html>
<html>
  <head>
    <title>Vide</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="vide.js"></script>
  </head>
  <body>
    <div id="block2" style="width: 100%; height: 500px;"
      data-vide-bg="mp4: ocean"
      data-vide-options="position: 0% 50%">
    </div>
    <script src="script.js"></script>
  </body>
</html>

КОД HTML мультимедіа фото

<!DOCTYPE html>
<html>
    <head>
        <title>RowGrid</title>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
        <script src="jquery.row-grid.js"></script>
        <link rel="stylesheet" type="text/css" href="style.css"">
    </head>
    <body>  
        <div class="container">
            <div class="item">
                <img src="http://loremflickr.com/220/200/nature?1" width="220" height="200" />
              </div>
              <div class="item">
                <img src="http://loremflickr.com/180/200/nature?2" width="180" height="200" />
              </div>
              <div class="item">
                <img src="http://loremflickr.com/200/200/nature?4" width="200" height="200" />
              </div>
              <div class="item">
                <img src="http://loremflickr.com/240/200/nature?5" width="240" height="200" />
              </div>
              <div class="item">
                <img src="http://loremflickr.com/210/200/nature?6" width="210" height="200" />
              </div>
        </div>
        <script src="script.js"></script>
    </body>
</html>

КОД JQuery мультимедіа відео

!(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      define(['jquery'], factory);
    } else if (typeof exports === 'object') {
      factory(require('jquery'));
    } else {
      factory(root.jQuery);
    }
  })(this, function($) {
  
    'use strict';
  
    /**
     * Name of the plugin
     * @private
     * @const
     * @type {String}
     */
    var PLUGIN_NAME = 'vide';
  
    /**
     * Default settings
     * @private
     * @const
     * @type {Object}
     */
    var DEFAULTS = {
      volume: 1,
      playbackRate: 1,
      muted: true,
      loop: true,
      autoplay: true,
      position: '50% 50%',
      posterType: 'detect',
      resizing: true,
      bgColor: 'transparent',
      className: ''
    };
  
    /**
     * Not implemented error message
     * @private
     * @const
     * @type {String}
     */
    var NOT_IMPLEMENTED_MSG = 'Not implemented';
  
    /**
     * Parse a string with options
     * @private
     * @param {String} str
     * @returns {Object|String}
     */
    function parseOptions(str) {
      var obj = {};
      var delimiterIndex;
      var option;
      var prop;
      var val;
      var arr;
      var len;
      var i;
  
      // Remove spaces around delimiters and split
      arr = str.replace(/\s*:\s*/g, ':').replace(/\s*,\s*/g, ',').split(',');
  
      // Parse a string
      for (i = 0, len = arr.length; i < len; i++) {
        option = arr[i];
  
        // Ignore urls and a string without colon delimiters
        if (
          option.search(/^(http|https|ftp):\/\//) !== -1 ||
          option.search(':') === -1
        ) {
          break;
        }
  
        delimiterIndex = option.indexOf(':');
        prop = option.substring(0, delimiterIndex);
        val = option.substring(delimiterIndex + 1);
  
        // If val is an empty string, make it undefined
        if (!val) {
          val = undefined;
        }
  
        // Convert a string value if it is like a boolean
        if (typeof val === 'string') {
          val = val === 'true' || (val === 'false' ? false : val);
        }
  
        // Convert a string value if it is like a number
        if (typeof val === 'string') {
          val = !isNaN(val) ? +val : val;
        }
  
        obj[prop] = val;
      }
  
      // If nothing is parsed
      if (prop == null && val == null) {
        return str;
      }
  
      return obj;
    }
  
    /**
     * Parse a position option
     * @private
     * @param {String} str
     * @returns {Object}
     */
    function parsePosition(str) {
      str = '' + str;
  
      // Default value is a center
      var args = str.split(/\s+/);
      var x = '50%';
      var y = '50%';
      var len;
      var arg;
      var i;
  
      for (i = 0, len = args.length; i < len; i++) {
        arg = args[i];
  
        // Convert values
        if (arg === 'left') {
          x = '0%';
        } else if (arg === 'right') {
          x = '100%';
        } else if (arg === 'top') {
          y = '0%';
        } else if (arg === 'bottom') {
          y = '100%';
        } else if (arg === 'center') {
          if (i === 0) {
            x = '50%';
          } else {
            y = '50%';
          }
        } else {
          if (i === 0) {
            x = arg;
          } else {
            y = arg;
          }
        }
      }
  
      return { x: x, y: y };
    }
  
    /**
     * Search a poster
     * @private
     * @param {String} path
     * @param {Function} callback
     */
    function findPoster(path, callback) {
      var onLoad = function() {
        callback(this.src);
      };
  
      $('<img src="' + path + '.gif">').on('load', onLoad);
      $('<img src="' + path + '.jpg">').on('load', onLoad);
      $('<img src="' + path + '.jpeg">').on('load', onLoad);
      $('<img src="' + path + '.png">').on('load', onLoad);
    }
  
    /**
     * Vide constructor
     * @param {HTMLElement} element
     * @param {Object|String} path
     * @param {Object|String} options
     * @constructor
     */
    function Vide(element, path, options) {
      this.$element = $(element);
  
      // Parse path
      if (typeof path === 'string') {
        path = parseOptions(path);
      }
  
      // Parse options
      if (!options) {
        options = {};
      } else if (typeof options === 'string') {
        options = parseOptions(options);
      }
  
      // Remove an extension
      if (typeof path === 'string') {
        path = path.replace(/\.\w*$/, '');
      } else if (typeof path === 'object') {
        for (var i in path) {
          if (path.hasOwnProperty(i)) {
            path[i] = path[i].replace(/\.\w*$/, '');
          }
        }
      }
  
      this.settings = $.extend({}, DEFAULTS, options);
      this.path = path;
  
      // https://github.com/VodkaBears/Vide/issues/110
      try {
        this.init();
      } catch (e) {
        if (e.message !== NOT_IMPLEMENTED_MSG) {
          throw e;
        }
      }
    }
  
    /**
     * Initialization
     * @public
     */
    Vide.prototype.init = function() {
      var vide = this;
      var path = vide.path;
      var poster = path;
      var sources = '';
      var $element = vide.$element;
      var settings = vide.settings;
      var position = parsePosition(settings.position);
      var posterType = settings.posterType;
      var $video;
      var $wrapper;
  
      // Set styles of a video wrapper
      $wrapper = vide.$wrapper = $('<div>')
        .addClass(settings.className)
        .css({
          position: 'absolute',
          'z-index': -1,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          overflow: 'hidden',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
          '-o-background-size': 'cover',
          'background-size': 'cover',
          'background-color': settings.bgColor,
          'background-repeat': 'no-repeat',
          'background-position': position.x + ' ' + position.y
        });
  
      // Get a poster path
      if (typeof path === 'object') {
        if (path.poster) {
          poster = path.poster;
        } else {
          if (path.mp4) {
            poster = path.mp4;
          } else if (path.webm) {
            poster = path.webm;
          } else if (path.ogv) {
            poster = path.ogv;
          }
        }
      }
  
      // Set a video poster
      if (posterType === 'detect') {
        findPoster(poster, function(url) {
          $wrapper.css('background-image', 'url(' + url + ')');
        });
      } else if (posterType !== 'none') {
        $wrapper.css('background-image', 'url(' + poster + '.' + posterType + ')');
      }
  
      // If a parent element has a static position, make it relative
      if ($element.css('position') === 'static') {
        $element.css('position', 'relative');
      }
  
      $element.prepend($wrapper);
  
      if (typeof path === 'object') {
        if (path.mp4) {
          sources += '<source src="' + path.mp4 + '.mp4" type="video/mp4">';
        }
  
        if (path.webm) {
          sources += '<source src="' + path.webm + '.webm" type="video/webm">';
        }
  
        if (path.ogv) {
          sources += '<source src="' + path.ogv + '.ogv" type="video/ogg">';
        }
  
        $video = vide.$video = $('<video>' + sources + '</video>');
      } else {
        $video = vide.$video = $('<video>' +
          '<source src="' + path + '.mp4" type="video/mp4">' +
          '<source src="' + path + '.webm" type="video/webm">' +
          '<source src="' + path + '.ogv" type="video/ogg">' +
          '</video>');
      }
  
      // https://github.com/VodkaBears/Vide/issues/110
      try {
        $video
  
          // Set video properties
          .prop({
            autoplay: settings.autoplay,
            loop: settings.loop,
            volume: settings.volume,
            muted: settings.muted,
            defaultMuted: settings.muted,
            playbackRate: settings.playbackRate,
            defaultPlaybackRate: settings.playbackRate
          });
      } catch (e) {
        throw new Error(NOT_IMPLEMENTED_MSG);
      }
  
      // Video alignment
      $video.css({
        margin: 'auto',
        position: 'absolute',
        'z-index': -1,
        top: position.y,
        left: position.x,
        '-webkit-transform': 'translate(-' + position.x + ', -' + position.y + ')',
        '-ms-transform': 'translate(-' + position.x + ', -' + position.y + ')',
        '-moz-transform': 'translate(-' + position.x + ', -' + position.y + ')',
        transform: 'translate(-' + position.x + ', -' + position.y + ')',
  
        // Disable visibility, while loading
        visibility: 'hidden',
        opacity: 0
      })
  
      // Resize a video, when it's loaded
      .one('canplaythrough.' + PLUGIN_NAME, function() {
        vide.resize();
      })
  
      // Make it visible, when it's already playing
      .one('playing.' + PLUGIN_NAME, function() {
        $video.css({
          visibility: 'visible',
          opacity: 1
        });
        $wrapper.css('background-image', 'none');
      });
  
      // Resize event is available only for 'window'
      // Use another code solutions to detect DOM elements resizing
      $element.on('resize.' + PLUGIN_NAME, function() {
        if (settings.resizing) {
          vide.resize();
        }
      });
  
      // Append a video
      $wrapper.append($video);
    };
  
    /**
     * Get a video element
     * @public
     * @returns {HTMLVideoElement}
     */
    Vide.prototype.getVideoObject = function() {
      return this.$video[0];
    };
  
    /**
     * Resize a video background
     * @public
     */
    Vide.prototype.resize = function() {
      if (!this.$video) {
        return;
      }
  
      var $wrapper = this.$wrapper;
      var $video = this.$video;
      var video = $video[0];
  
      // Get a native video size
      var videoHeight = video.videoHeight;
      var videoWidth = video.videoWidth;
  
      // Get a wrapper size
      var wrapperHeight = $wrapper.height();
      var wrapperWidth = $wrapper.width();
  
      if (wrapperWidth / videoWidth > wrapperHeight / videoHeight) {
        $video.css({
  
          // +2 pixels to prevent an empty space after transformation
          width: wrapperWidth + 2,
          height: 'auto'
        });
      } else {
        $video.css({
          width: 'auto',
  
          // +2 pixels to prevent an empty space after transformation
          height: wrapperHeight + 2
        });
      }
    };
  
    /**
     * Destroy a video background
     * @public
     */
    Vide.prototype.destroy = function() {
      delete $[PLUGIN_NAME].lookup[this.index];
      this.$video && this.$video.off(PLUGIN_NAME);
      this.$element.off(PLUGIN_NAME).removeData(PLUGIN_NAME);
      this.$wrapper.remove();
    };
  
    /**
     * Special plugin object for instances.
     * @public
     * @type {Object}
     */
    $[PLUGIN_NAME] = {
      lookup: []
    };
  
    /**
     * Plugin constructor
     * @param {Object|String} path
     * @param {Object|String} options
     * @returns {JQuery}
     * @constructor
     */
    $.fn[PLUGIN_NAME] = function(path, options) {
      var instance;
  
      this.each(function() {
        instance = $.data(this, PLUGIN_NAME);
  
        // Destroy the plugin instance if exists
        instance && instance.destroy();
  
        // Create the plugin instance
        instance = new Vide(this, path, options);
        instance.index = $[PLUGIN_NAME].lookup.push(instance) - 1;
        $.data(this, PLUGIN_NAME, instance);
      });
  
      return this;
    };
  
    $(document).ready(function() {
      var $window = $(window);
  
      // Window resize event listener
      $window.on('resize.' + PLUGIN_NAME, function() {
        for (var len = $[PLUGIN_NAME].lookup.length, i = 0, instance; i < len; i++) {
          instance = $[PLUGIN_NAME].lookup[i];
  
          if (instance && instance.settings.resizing) {
            instance.resize();
          }
        }
      });
  
      // https://github.com/VodkaBears/Vide/issues/68
      $window.on('unload.' + PLUGIN_NAME, function() {
        return false;
      });
  
      // Auto initialization
      // Add 'data-vide-bg' attribute with a path to the video without extension
      // Also you can pass options throw the 'data-vide-options' attribute
      // 'data-vide-options' must be like 'muted: false, volume: 0.5'
      $(document).find('[data-' + PLUGIN_NAME + '-bg]').each(function(i, element) {
        var $element = $(element);
        var options = $element.data(PLUGIN_NAME + '-options');
        var path = $element.data(PLUGIN_NAME + '-bg');
  
        $element[PLUGIN_NAME](path, options);
      });
    });
  
  });

  $('#block').vide('ocean');

  var instance = $('#block').data('vide');
  var video = instance.getVideoObject();
  instance.destroy();

  $('#block2').vide({
    'mp4': 'ocean',
  });

  КОД Jquery мультимедіа фото

  (function($){
    $.fn.rowGrid = function( options ) {
      return this.each(function() {
        var $this = $(this);
        if(options === 'appended') {
          options = $this.data('grid-options');
          var $lastRow = $this.children('.' + options.lastRowClass);
          var items = $lastRow.nextAll(options.itemSelector).add($lastRow);
          layout(this, options, items);
        } else {
          options = $.extend( {}, $.fn.rowGrid.defaults, options );
          $this.data('grid-options', options);
          layout(this, options);
  
          if(options.resize) {
            $(window).on('resize.rowGrid', {container: this}, function(event) {
              layout(event.data.container, options);
            });
          }
        }
      });
    };
  
    $.fn.rowGrid.defaults = {
      minMargin: null,
      maxMargin: null,
      resize: true,
      lastRowClass: 'last-row',
      firstItemClass: null,
      lastItemClass: null
    };
  
    function layout(container, options, items) {
      var rowWidth = 0,
          rowElems = [],
          items = jQuery.makeArray(items || container.querySelectorAll(options.itemSelector)),
          itemsSize = items.length;
          
      // read
  
      var containerBoundingRect = container.getBoundingClientRect();
      var containerWidth = Math.floor(containerBoundingRect.right - containerBoundingRect.left)-parseFloat($(container).css('padding-left'))-parseFloat($(container).css('padding-right'));
      var itemAttrs = [];
      var theImage, w, h;
      for(var i = 0; i < itemsSize; ++i) {
        theImage = items[i].getElementsByTagName('img')[0];
        if (!theImage) {
          items.splice(i, 1);
          --i;
          --itemsSize;
          continue;
        }
        
        // get width and height via attribute or js value
        if (!(w = parseInt(theImage.getAttribute('width')))) {
          theImage.setAttribute('width', w = theImage.offsetWidth);
        }
        if (!(h = parseInt(theImage.getAttribute('height')))) {
          theImage.setAttribute('height', h = theImage.offsetHeight);
        }
  
        itemAttrs[i] = {
          width: w,
          height: h
        };
      }
      itemsSize = items.length;
  
      // write
      for(var index = 0; index < itemsSize; ++index) {
        if (items[index].classList) {
          items[index].classList.remove(options.firstItemClass);
          items[index].classList.remove(options.lastItemClass);
          items[index].classList.remove(options.lastRowClass);
        } else {
          // IE <10
          items[index].className = items[index].className.replace(new RegExp('(^|\\b)' + options.firstItemClass + '|' + options.lastItemClass + '|' + options.lastRowClass + '(\\b|$)', 'gi'), ' ');
        }
  
        rowWidth += itemAttrs[index].width;
        rowElems.push(items[index]);
  
        // check if it is the last element
        if(index === itemsSize - 1) {
          for(var rowElemIndex = 0; rowElemIndex<rowElems.length; rowElemIndex++) {
            // if first element in row
            if(rowElemIndex === 0) {
              rowElems[rowElemIndex].className += ' ' + options.lastRowClass;
            }
            rowElems[rowElemIndex].style.cssText =
                'width: ' + itemAttrs[index+parseInt(rowElemIndex)-rowElems.length+1].width + 'px;' +
                'height: ' + itemAttrs[index+parseInt(rowElemIndex)-rowElems.length+1].height + 'px;' +
                'margin-right:' + ((rowElemIndex < rowElems.length - 1)?options.minMargin+'px' : 0);
          }
        }
  
        // check whether width of row is too high
        if(rowWidth + options.maxMargin * (rowElems.length - 1) > containerWidth) {
          var diff = rowWidth + options.maxMargin * (rowElems.length - 1) - containerWidth;
          var nrOfElems = rowElems.length;
          // change margin
          var maxSave = (options.maxMargin - options.minMargin) * (nrOfElems - 1);
          if(maxSave < diff) {
            var rowMargin = options.minMargin;
            diff -= (options.maxMargin - options.minMargin) * (nrOfElems - 1);
          } else {
            var rowMargin = options.maxMargin - diff / (nrOfElems - 1);
            diff = 0;
          }
          var rowElem,
            widthDiff = 0;
          for(var rowElemIndex = 0; rowElemIndex<rowElems.length; rowElemIndex++) {
            rowElem = rowElems[rowElemIndex];
            var rowElemWidth = itemAttrs[index+parseInt(rowElemIndex)-rowElems.length+1].width;
            var newWidth = rowElemWidth - (rowElemWidth / rowWidth) * diff;
            var newHeight = Math.round(itemAttrs[index+parseInt(rowElemIndex)-rowElems.length+1].height * (newWidth / rowElemWidth));
            if (widthDiff + 1 - newWidth % 1 >= 0.5 ) {
              widthDiff -= newWidth % 1;
              newWidth = Math.floor(newWidth);
            } else {
              widthDiff += 1 - newWidth % 1;
              newWidth = Math.ceil(newWidth);
            }
            rowElem.style.cssText =
                'width: ' + newWidth + 'px;' +
                'height: ' + newHeight + 'px;' +
                'margin-right: ' + ((rowElemIndex < rowElems.length - 1)?rowMargin : 0) + 'px';
            if(rowElemIndex === 0) {
              rowElem.className += ' ' + options.firstItemClass;
            }
            if(rowElemIndex == rowElems.length-1) {
              rowElem.className += ' ' + options.lastItemClass;
            }
          }
          rowElems = [],
            rowWidth = 0;
        }
      }
    }
  })(jQuery);

  
$(".container").rowGrid({
    minMargin: 15,
    maxMargin: 30,
    itemSelector: ".item"
});`;

const item5_6 = ` На даній лабораторній роботі я придбала практичні навички роботи jQuery UI, вміти додавати до сайту динамічні елементи цієї бібліотеки, плагін галереї UniteGallery, кнопки соціальних мереж, інформери та інше.`;


function push(but, id, tag) {
    document.getElementById(id).value = null;
    document.getElementById(id).value += tag;
    document.getElementById("textArea").value = "\t\t\t" + item1;
    document.getElementById("textArea").value = "\t\t\t" + item2;
    document.getElementById("textArea").value = "\t\t\t" + item3;
    document.getElementById("textArea").value = "\t\t\t" + item4;
    document.getElementById("textArea").value = "\t\t\t" + item2_1;
    document.getElementById("textArea").value = "\t\t\t" + item2_2;
    document.getElementById("textArea").value = "\t\t\t" + item2_3;
    document.getElementById("textArea").value = "\t\t\t" + item2_4;
    document.getElementById("textArea").value = "\t\t\t" + item2_5;
    document.getElementById("textArea").value = "\t\t\t" + item2_6;
    document.getElementById("textArea").value = "\t\t\t" + item3_1;
    document.getElementById("textArea").value = "\t\t\t" + item3_2;
    document.getElementById("textArea").value = "\t\t\t" + item3_3;
    document.getElementById("textArea").value = "\t\t\t" + item3_4;
    document.getElementById("textArea").value = "\t\t\t" + item3_5;
    document.getElementById("textArea").value = "\t\t\t" + item3_6;
    document.getElementById("textArea").value = "\t\t\t" + item3_7;
    document.getElementById("textArea").value = "\t\t\t" + item3_8;
    document.getElementById("textArea").value = "\t\t\t" + item4_1;
    document.getElementById("textArea").value = "\t\t\t" + item4_2;
    document.getElementById("textArea").value = "\t\t\t" + item4_3;
    document.getElementById("textArea").value = "\t\t\t" + item4_4;
    document.getElementById("textArea").value = "\t\t\t" + item4_5;
    document.getElementById("textArea").value = "\t\t\t" + item5_1;
    document.getElementById("textArea").value = "\t\t\t" + item5_2;
    document.getElementById("textArea").value = "\t\t\t" + item5_3;
    document.getElementById("textArea").value = "\t\t\t" + item5_4;
    document.getElementById("textArea").value = "\t\t\t" + item5_5;
    document.getElementById("textArea").value = "\t\t\t" + item5_6;
}

