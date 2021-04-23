
const data =[
    {
        name:'Арагорн',
        gender:'Мужской',
        img:'https://upload.wikimedia.org/wikipedia/ru/thumb/0/09/Aragorn_3.jpg/267px-Aragorn_3.jpg',
        race:'Нуменорцы',
        actor:'Вигго Мортенсена',
        life:'1 марта 2931 г. Т.Э. — 120 г. Ч.Э. (210 лет)',
        link:'https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%80%D1%82%D0%B5%D0%BD%D1%81%D0%B5%D0%BD,_%D0%92%D0%B8%D0%B3%D0%B3%D0%BE'
    },
    {
        name:'Гэндальф Серый',
        gender:'Мужской',
        img:'https://upload.wikimedia.org/wikipedia/ru/thumb/1/1c/Gandalf_the_White.jpg/274px-Gandalf_the_White.jpg',
        actor:'сэра Иэна Маккеллена',
        race:'Майар',
        life:'Бессмертен',
        link:'https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BA%D0%BA%D0%B5%D0%BB%D0%BB%D0%B5%D0%BD,_%D0%98%D1%8D%D0%BD'
    },
    {
        name:'Голлум',
        gender:'Мужской',
        img:'https://upload.wikimedia.org/wikipedia/ru/thumb/8/8d/Gollum.jpg/274px-Gollum.jpg',
        race:'	хоббит',
        actor:'Питера Джексона',
        life:'2430 Т.Э. — 25 марта 3019 Т.Э',
        link:'https://ru.wikipedia.org/wiki/%D0%94%D0%B6%D0%B5%D0%BA%D1%81%D0%BE%D0%BD,_%D0%9F%D0%B8%D1%82%D0%B5%D1%80E'
    },
    {
        name:'Леголас',
        gender:'Мужчина',
        img:'https://static.wikia.nocookie.net/lotr/images/e/e4/%D0%9B%D0%B0%D1%8D%D0%B3%D0%BE%D0%BB%D0%B0%D1%81.jpg/revision/latest/scale-to-width-down/347?cb=20151002113304&path-prefix=ru',
        race:'Эльф',
        actor:'Орландо Блум',
        life:'? Т. Э. - наши дни',
        link:'https://lotr.fandom.com/ru/wiki/%D0%9E%D1%80%D0%BB%D0%B0%D0%BD%D0%B4%D0%BE_%D0%91%D0%BB%D1%83%D0%BC'
    },
    {
        name:'Саурон',
        gender:'Мужской',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Morgoth_by_SpentaMainyu.jpg/220px-Morgoth_by_SpentaMainyu.jpg',
        race:'Майар',
        actor:'Сала Бейкер  ',
        life:'Бессмертен',
        link:'https://ru.wikipedia.org/w/index.php?title=%D0%A1%D0%B0%D0%BB%D0%B0_%D0%91%D0%B5%D0%B9%D0%BA%D0%B5%D1%80&action=edit&redlink=1'
    },
    {
        name:'Фродо Бэггинс',
        gender:'Мужской',
        img:'https://static.wikia.nocookie.net/lotr/images/4/41/%D0%A4%D1%80%D0%BE%D0%B4%D0%BE_%D0%91%D1%8D%D0%B3%D0%B3%D0%B8%D0%BD%D1%81.jpg/revision/latest/scale-to-width-down/350?cb=20141209145510&path-prefix=ru',
        race:'Хоббит',
        actor:'Элайджа Вуд ',
        life:'22 сентября 2968 Т. Э. — неизвестно',
        link:'https://lotr.fandom.com/ru/wiki/%D0%AD%D0%BB%D0%B0%D0%B9%D0%B4%D0%B6%D0%B0_%D0%92%D1%83%D0%B4'
    },
    {
        name:'Эовин',
        gender:'Женский',
        img:'https://upload.wikimedia.org/wikipedia/ru/thumb/6/6d/Eovin.jpg/200px-Eovin.jpg',
        race:'Человек',
        actor:'Миранды Отто ',
        life:'2995 г. Т.Э. — ? (дата смерти неизвестна)',
        link:'https://ru.wikipedia.org/wiki/%D0%9E%D1%82%D1%82%D0%BE,_%D0%9C%D0%B8%D1%80%D0%B0%D0%BD%D0%B4%D0%B0'
    },
    {
        name:'Арвен',
        gender:'женский',
        img:'https://upload.wikimedia.org/wikipedia/ru/7/70/Arwen.jpg',
        race:'полуэльфийка ',
        actor:'Лив Тайлер',
        life:'241 г. Т.Э. — 121 г. Ч.Э.',
        link:'https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D0%B9%D0%BB%D0%B5%D1%80,_%D0%9B%D0%B8%D0%B2'
    },
    {
        name:'Бильбо Бэггинс',
        gender:'Мужской',
        img:'https://upload.wikimedia.org/wikipedia/ru/c/c2/Bilbo_B.jpg',
        race:'Хоббит',
        actor:'Иэн Холм ',
        life:'22 сентября 2890 г. Т.Э. — 29 сентября 3021 г. Т.Э. (131 год)',
        link:'https://ru.wikipedia.org/wiki/%D0%A5%D0%BE%D0%BB%D0%BC,_%D0%98%D1%8D%D0%BD'
    },
    {
        name:'Сэмуайз Гэмджи',
        gender:'Мужской',
        img:'https://static.wikia.nocookie.net/lotr/images/5/59/%D0%A1%D1%8D%D0%BC.jpg/revision/latest/scale-to-width-down/350?cb=20160127151444&path-prefix=ru',
        race:'Хоббит',
        actor:' Шон Астин',
        life:'2983 Т. Э. — ?',
        link:'https://lotr.fandom.com/ru/wiki/%D0%A8%D0%BE%D0%BD_%D0%90%D1%81%D1%82%D0%B8%D0%BD'
    },
    {
        name:'Гимли',
        gender:'Мужской',
        img:'https://upload.wikimedia.org/wikipedia/ru/thumb/5/54/%D0%93%D0%B8%D0%BC%D0%BB%D0%B8.jpg/274px-%D0%93%D0%B8%D0%BC%D0%BB%D0%B8.jpg',
        race:'Гном',
        actor:'Джон Рис-Дэвис ',
        life:'	2879 Т. Э. — ?',
        link:'https://ru.wikipedia.org/wiki/%D0%A0%D0%B8%D1%81-%D0%94%D1%8D%D0%B2%D0%B8%D1%81,_%D0%94%D0%B6%D0%BE%D0%BD'
    },
    {
        name:'Боромир',
        gender:'Мужской',
        img:'https://static.wikia.nocookie.net/lotr/images/8/89/0_561f4_77ec11f0_XL.jpg/revision/latest/scale-to-width-down/343?cb=20120307140245&path-prefix=ru',
        race:'Человек',
        actor:' Шон Бин',
        life:'2978 Т. Э. — 26 февраля 3019 Т. Э. (41 год)',
        link:'https://lotr.fandom.com/ru/wiki/%D0%A8%D0%BE%D0%BD_%D0%91%D0%B8%D0%BD'
    },
    {
        name:'Галадриэль',
        gender:'Женщина',
        img:'https://static.wikia.nocookie.net/lotr/images/b/ba/%D0%93%D0%B0%D0%BB%D0%B0%D0%B4%D1%80%D0%B8%D1%8D%D0%BB%D1%8C_%D0%B8%D0%BD%D1%84%D0%BE%D0%B1%D0%BE%D0%BA%D1%81.jpg/revision/latest/scale-to-width-down/322?cb=20151015204256&path-prefix=ru',
        race:'Эльф',
        actor:'Кейт Бланшетт',
        life:'1362 Э. Д. – 3021 Т. Э.',
        link:'https://lotr.fandom.com/ru/wiki/%D0%9A%D0%B5%D0%B9%D1%82_%D0%91%D0%BB%D0%B0%D0%BD%D1%88%D0%B5%D1%82%D1%82'
    },
    {
        name:'Саруман',
        gender:'Мужской',
        img:'https://upload.wikimedia.org/wikipedia/ru/thumb/3/30/Saruman_LOTR.jpg/274px-Saruman_LOTR.jpg',
        race:'	Майар',
        actor:'Кристофер Ли. ',
        life:'Бессмертен',
        link:'https://ru.wikipedia.org/wiki/%D0%9B%D0%B8,_%D0%9A%D1%80%D0%B8%D1%81%D1%82%D0%BE%D1%84%D0%B5%D1%80'
    },
    {
        name:'Перегрин Тук',
        gender:'Мужской',
        img:'https://static.wikia.nocookie.net/lotr/images/4/4b/Pippin.jpg/revision/latest/scale-to-width-down/339?cb=20100124140924&path-prefix=ru',
        race:'Хоббит',
        actor:' Билли Бойд',
        life:'2990 Т. Э. – примерно 65 Ч. Э.',
        link:'https://lotr.fandom.com/ru/wiki/%D0%91%D0%B8%D0%BB%D0%BB%D0%B8_%D0%91%D0%BE%D0%B9%D0%B4'
    },
    {
        name:'Фарамир',
        gender:'Мужской',
        img:'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b5/Faramir2.jpg/274px-Faramir2.jpg',
        race:'человек',
        actor:' Дэвид Уэнэм',
        life:'2983 г. Т.Э. — 82 г. Ч.Э. (120 лет)',
        link:'https://ru.wikipedia.org/wiki/%D0%A3%D1%8D%D0%BD%D1%8D%D0%BC,_%D0%94%D1%8D%D0%B2%D0%B8%D0%B4'
    },
    {
        name:'Эомер',
        gender:'Мужской',
        img:'https://static.wikia.nocookie.net/lotr/images/5/59/Eomer.jpg/revision/latest/scale-to-width-down/350?cb=20151116143458&path-prefix=ru',
        race:'Человек',
        actor:'Карл Урбан',
        life:'2991 Т. Э. — 63 Ч. Э. (92 года)',
        link:''
    },
    {
        name:'Элронд',
        gender:'Мужской ',
        img:'https://upload.wikimedia.org/wikipedia/ru/thumb/d/da/Elrond.jpg/274px-Elrond.jpg',
        race:'Полуэльф',
        actor:'Хьюго Уивинг',
        life:'р. 532 П.Э. — отплыл в Валинор 29 сентября 3021 Т.Э.',
        link:'https://ru.wikipedia.org/wiki/%D0%A3%D0%B8%D0%B2%D0%B8%D0%BD%D0%B3,_%D0%A5%D1%8C%D1%8E%D0%B3%D0%BE'
    },
    {
        name:'Мериадок Брендибак',
        gender:'Мужской',
        img:'https://static.wikia.nocookie.net/lotr/images/7/7c/%D0%9C%D0%B5%D1%80%D1%80%D0%B8.jpg/revision/latest/scale-to-width-down/350?cb=20130103154642&path-prefix=ru',
        race:'Хоббит',
        actor:'Доминик Монаган',
        life:'2982 Т. Э. - 65 Ч. Э.',
        link:'https://lotr.fandom.com/ru/wiki/%D0%94%D0%BE%D0%BC%D0%B8%D0%BD%D0%B8%D0%BA_%D0%9C%D0%BE%D0%BD%D0%B0%D0%B3%D0%B0%D0%BD'
    },
    {
        name:'Король-чародей Ангмара',
        gender:'Мужской',
        img:'https://upload.wikimedia.org/wikipedia/ru/thumb/5/59/Witch-king.jpg/274px-Witch-king.jpg',
        race:' назгул',
        actor:' ',
        life:'2251 В.Э. — 3019 Т.Э. (4209 лет)',
        link:''
    },
    {
        name:'Теоден',
        gender:'Мужской',
        img:'https://upload.wikimedia.org/wikipedia/ru/thumb/3/3c/Theoden.png/274px-Theoden.png',
        race:'Человек',
        actor:'Бернарда Хилла ',
        life:'	2948 — 15 марта 3019 Т.Э.',
        link:'https://ru.wikipedia.org/wiki/%D0%A5%D0%B8%D0%BB%D0%BB,_%D0%91%D0%B5%D1%80%D0%BD%D0%B0%D1%80%D0%B4'
    },
    {
        name:'Халдир',
        gender:'Мужской',
        img:'https://static.wikia.nocookie.net/lotr/images/5/51/Haldir04.jpg/revision/latest/scale-to-width-down/350?cb=20130208152750&path-prefix=ru',
        race:'Эльф',
        actor:' Крейг Паркер',
        life:'',
        link:'https://lotr.fandom.com/ru/wiki/%D0%9A%D1%80%D0%B5%D0%B9%D0%B3_%D0%9F%D0%B0%D1%80%D0%BA%D0%B5%D1%80'
    },
    {
        name:'Дэнетор',
        gender:'Мужской',
        img:'https://static.wikia.nocookie.net/lotr/images/d/d9/%D0%94%D0%B5%D0%BD%D0%B5%D1%82%D0%BE%D1%80.jpg/revision/latest/scale-to-width-down/332?cb=20160731212505&path-prefix=ru',
        race:'Человек',
        actor:'Джон Ноубл',
        life:'2930 — 3019 Т. Э.',
        link:'https://lotr.fandom.com/ru/wiki/%D0%94%D0%B6%D0%BE%D0%BD_%D0%9D%D0%BE%D1%83%D0%B1%D0%BB'
    },
    {
        name:'Келеборн',
        gender:'Мужской',
        img:'https://static.wikia.nocookie.net/lotr/images/4/46/Celeborn.jpg/revision/latest/scale-to-width-down/350?cb=20110516175424&path-prefix=ru',
        race:'эльф линда',
        actor:'Мартон Чокаш',
        life:'? (Э.Д. / П.Э.) - наши дни',
        link:''
    },
    {
        name:'Луртц',
        gender:'Мужской',
        img:'https://static.wikia.nocookie.net/lotr/images/6/6e/%D0%9B%D1%83%D1%80%D1%86.jpg/revision/latest/scale-to-width-down/350?cb=20150729100944&path-prefix=ru',
        race:'Урук-хай',
        actor:'Лоуренс Макор ',
        life:'',
        link:'https://lotr.fandom.com/ru/wiki/%D0%9B%D0%BE%D1%83%D1%80%D0%B5%D0%BD%D1%81_%D0%9C%D0%B0%D0%BA%D0%BE%D1%80'
    },
    {
        name:'Голос Саурона',
        gender:'Мужской',
        img:'https://static.wikia.nocookie.net/lotr/images/0/0c/The_Mouth_of_Sauron.jpg/revision/latest/scale-to-width-down/350?cb=20110204173106&path-prefix=ru',
        race:'Человек',
        actor:'Брюс Спенс',
        life:'',
        link:'https://lotr.fandom.com/ru/wiki/%D0%91%D1%80%D1%8E%D1%81_%D0%A1%D0%BF%D0%B5%D0%BD%D1%81'
    },
    {
        name:'Древобород ',
        gender:'Мужской',
        img:'https://upload.wikimedia.org/wikipedia/ru/1/14/Treebeard2.jpg',
        race:'Энт',
        actor:' ',
        life:'Точно неизвестно, возможно древнейший житель Средиземья',
        link:''
    },
    {
        name:'Те́одред',
        gender:'Мужской',
        img:'https://static.wikia.nocookie.net/lotr/images/2/2d/LaZ4KsubFa4.jpg/revision/latest/scale-to-width-down/263?cb=20130317165357&path-prefix=ru',
        race:'Человек',
        actor:'Пэрис Хоу Стрю ',
        life:'2978 г. Т. Э. — 3019 г. Т. Э.',
        link:''
    },
    {
        name:'Гиль-галад',
        gender:'Мужской',
        img:'https://static.wikia.nocookie.net/lotr/images/c/c8/Armas_aeglos_01.jpg/revision/latest/scale-to-width-down/255?cb=20150812212603&path-prefix=ru',
        race:'Эльф',
        actor:'Марк Фергюсон',
        life:'Первая Эпоха — 3441 В. Э',
        link:'https://lotr.fandom.com/ru/wiki/%D0%9C%D0%B0%D1%80%D0%BA_%D0%A4%D0%B5%D1%80%D0%B3%D1%8E%D1%81%D0%BE%D0%BD?action=edit&redlink=1'
    },
    {
        name:'Роуз Коттон',
        gender:'Женский ',
        img:'https://static.wikia.nocookie.net/lotr/images/6/60/%D0%A0%D0%BE%D1%83%D0%B7%D0%B8.jpg/revision/latest/scale-to-width-down/220?cb=20130310071341&path-prefix=ru',
        race:'Хоббит',
        actor:'Сара МакЛауд ',
        life:'2984 Т.Э — 61 Ч.Э.',
        link:'https://lotr.fandom.com/ru/wiki/%D0%A1%D0%B0%D1%80%D0%B0_%D0%9C%D0%B0%D0%BA%D0%9B%D0%B0%D1%83%D0%B4'
    },
    {
        name:'Грима Червеуст',
        gender:'Мужской',
        img:'https://static.wikia.nocookie.net/lotr/images/8/85/Biotoppic.jpg/revision/latest/scale-to-width-down/229?cb=20110207143238&path-prefix=ru',
        race:'человек, рохиррим',
        actor:'Брэд Дуриф',
        life:'2974 Т. Э, – 3 ноября 3019 Т. Э.',
        link:'https://lotr.fandom.com/ru/wiki/%D0%91%D1%80%D1%8D%D0%B4_%D0%94%D1%83%D1%80%D0%B8%D1%84'
    },
    {
        name:'Элендил',
        gender:'Мужской',
        img:'https://upload.wikimedia.org/wikipedia/ru/thumb/4/45/%D0%AD%D0%BB%D0%B5%D0%BD%D0%B4%D0%B8%D0%BB.jpg/274px-%D0%AD%D0%BB%D0%B5%D0%BD%D0%B4%D0%B8%D0%BB.jpg',
        race:'Человек',
        actor:' Питера Маккензи',
        life:'	3119 г. В.Э. — 3441 г. В.Э. (322 года)',
        link:''
    },
    {
        name:'Гришнак',
        gender:'мужской',
        img:'https://static.wikia.nocookie.net/lotr/images/c/cb/B_fa00655b9a69e9a01ae0b54f084444d8.jpg/revision/latest/scale-to-width-down/350?cb=20130127093831&path-prefix=ru',
        race:'Орк',
        actor:'Стефан Уре ',
        life:'2544—2645 Т.Э.',
        link:''
    },
    {
        name:'Маухур',
        gender:'мужской',
        img:'https://static.wikia.nocookie.net/lotr/images/0/07/Mauhur.png/revision/latest/scale-to-width-down/350?cb=20180117192953&path-prefix=ru',
        race:'Урук-хай',
        actor:'Робби Магасива',
        life:'? — 29 февраля 3019 Т. Э.',
        link:''
    },
    {
        name:'Готмог',
        gender:'мужской',
        img:'https://static.wikia.nocookie.net/lotr/images/9/99/Gothmog.png/revision/latest/scale-to-width-down/350?cb=20180124110343&path-prefix=ru',
        race:'Орк Мораннона',
        actor:'Лоуренс Макор',
        life:'? — 15 марта 3019 Т. Э.',
        link:'https://lotr.fandom.com/ru/wiki/%D0%9B%D0%BE%D1%83%D1%80%D0%B5%D0%BD%D1%81_%D0%9C%D0%B0%D0%BA%D0%BE%D1%80'
    },
    {
        name:'Деагол',
        gender:'мужской',
        img:'https://static.wikia.nocookie.net/lotr/images/c/cc/220px-Deagol.png/revision/latest/scale-to-width-down/220?cb=20121103164534&path-prefix=ru',
        race:'Хоббит',
        actor:'Томас Робинс',
        life:'',
        link:'https://lotr.fandom.com/ru/wiki/%D0%A2%D0%BE%D0%BC%D0%B0%D1%81_%D0%A0%D0%BE%D0%B1%D0%B8%D0%BD%D1%81?action=edit&redlink=1'
    },
    {
        name:'Мадрил',
        gender:'мужской',
        img:'https://static.wikia.nocookie.net/lotr/images/d/de/294px-Madril.jpg/revision/latest/scale-to-width-down/294?cb=20120516213716&path-prefix=ru',
        race:'человек',
        actor:' Джон Бах',
        life:'?-март 3019 Т. Э.',
        link:''
    }
    
]



const cardss=document.querySelector('.cards')
function showCard(arr){
    const cards=arr.map(({name, img, race, actor, life, link,gender}) =>{
        return`
        <div class="card">
        <div class="title"><h1>${name}</h1></div>
        <div style="background: url('${img}') top /cover; width:100%; heght:100%;" class="img"><a class="abtn" href=""><i class="fas fa-heart he"></i></a></div>
        <div class="text">
            <p>Пол:${gender}</p>
            <p>Актёр:<a href="${link}">${actor}</a></p>
            <p>Раса:${race}</p>
            <p>Годы жизни:${life}</p>
        </div>
    </div>
`
    }).join('');

    cardss.innerHTML=cards;
}
showCard(data)

const inputN=document.querySelector('.name')
const inputT=document.querySelector('.type')

inputN.addEventListener('input' , e =>{
    const search=e.target.value.toUpperCase();
    inputT.value=''

    const fel=data.filter(({name}) => name.toUpperCase().includes(search));
    showCard(fel)
})

inputT.addEventListener('input' , e =>{
    const search=e.target.value.toUpperCase();

    const fell=data.filter(({race}) => race.toUpperCase().includes(search));
    showCard(fell)


    inputN.value=''
})



