const name = {
    uz: `Umrzoq`,
    ru: 'Умрзок',
    en: 'Umrzok',
}

const category = [
   { uz: `Bosh Sahifa`, ru: 'Дом', en: 'Home', slag:'#header'},
   { uz: `Men haqimda`, ru: 'Обо мне', en: 'About Me', slag:'#about'},
   { uz: `Xizmatlar`, ru: 'Услуги', en: 'Services', slag: '#services'},
   { uz: `Portfolio`, ru: 'Портфолио', en: 'Portfolio', slag: '#portfolio'},
   { uz: `Aloqa`, ru: 'Контакт', en:'Contact', slag:'#contact'}
]

const hello ={
    uz: 'Salom, Men ',
    ru: 'Привет, я ',
    en: `Hi, I'm `,
}


const loc = {
    uz: `O'zbekistonlikman`,
    ru: 'из Узбекистона.',
    en: 'from Uzbekistan'
}

const technology = {
    uz: `Frontend dasturchi`,
    ru: 'Фронтенд-разработчик',
    en: 'Frontend developer',
}

const aboutText = {
    uz:`Men Yo‘ldoshov Umrzoq 2002 yilda Samarqand viloyati Ishtixon tumanida tug‘ilganman. 2009-2020 yillarda Ishtxon tumanidagi 51-maktabni tamomlagan. Hozirda 3-kurs talabasiman Toshkent axborot texnologiyalari universiteti. 2022-yil dekabr oyida men Frontend kursini tamomladim GITA Developer Akademiyasida.`,
    ru: `Меня звали Юлдошов Умрзок, 2002 года рождения, в Иштиханском районе Самаркандской области. В 2009-2020 годах я окончил 51-ю школу Иштханского района. На данный момент я учусь на 3 курсе Ташкентский университет информационных технологий. В декабре 2022 года я прошла курс Frontend в Академии разработчиков GITA.`,
    en: `I was Yuldoshov Umrzok, born in 2002 in Ishtikhon district of Samarkand region. In 2009-2020, I graduated from the 51st school in Ishtkhan district. Currently, I am a 3nd year student of Tashkent University of Information Technology. In December 2022, I completed the Frontend course at the GITA Developer Academy.`
}


const tabTitle = [
    {uz: `Ko'nikmalar`, ru: `Навыки`, en: `Skills`, link: 'skills'},
    {uz: `Tajriba`, ru: `Опыт`, en: `Experience`, link: 'experience'},
    {uz: `Ta'lim`, ru: `Образование`, en: `Education`, link: 'education'},
]

const serviceList = [
    {
        icon: 'fas fa-code',
        title:{
            uz: 'Frontend dasturchi',
            ru: 'Фронтенд-разработчик',
            en: 'Frontend developer',
        },
        uz: `Men turli veb-ilovalarning front qismini yarataman. Men onlayn do'konning old qismini, Kredit tizimi, Ta'lim tizimi va boshqa turdagi veb-saytlarni yarataman`,
        ru: `Создаю Front часть различных веб-приложений. Создам фронтальную часть интернет-магазина, Кредитной системы, Образовательной системы и других типов сайтов.`,
        en: `I create the Front part of various web applications. I will create the front part of the online store, Credit system, Educational system and other types of websites`,
        more: {
            uz: 'Batafsil',
            ru: 'Узнать больше',
            en: 'Learn more'
        }
    },
    {
        icon: 'fa-brands fa-react',
        title:{
            uz: 'React dasturchi',
            ru: 'Разработчик React',
            en: 'React developer',
        },
        uz: `Men React js-da kuchli tajribaga egaman, men react js-da veb-saytlarni tez va samarali yozaman. Ko'p sahifali saytlarni javascriptdan ko'ra reaksiya yoki vue formatida yaratishni tavsiya etaman.`,
        ru: `Имею большой опыт работы на React js, пишу сайты на React Js быстро и качественно. Я рекомендую создавать многостраничные сайты на React или Vue, а не на JavaScript.`,
        en: ` I have strong experience in React js, I write websites in react js quickly and efficiently. I recommend making multipage sites in react or vue rather than javascript.`,
        more: {
            uz: 'Batafsil',
            ru: 'Узнать больше',
            en: 'Learn more'
        }
    },
    {
        icon: 'fa-brands fa-vuejs',
        title:{
            uz: 'Vue dasturchi',
            ru: 'Vue-разработчик',
            en: 'Vue developer',
        },
        uz: `Men Vue js-da kuchli tajribaga egaman, men vue js-da veb-saytlarni tez va samarali yozaman. Ko'p sahifali saytlarni javascriptdan ko'ra react yoki vue formatida yaratishni tavsiya etaman.`,
        ru: `Имею большой опыт работы на Vue js, пишу сайты на Vue Js быстро и качественно. Я рекомендую создавать многостраничные сайты на React или Vue, а не на JavaScript.`,
        en: ` I have strong experience in Vue js, I write websites in vue js quickly and efficiently. I recommend making multipage sites in react or vue rather than javascript.`,
        more: {
            uz: 'Batafsil',
            ru: 'Узнать больше',
            en: 'Learn more'
        }
    },
]



const learnMore = {
    uz: 'Batafsil',
    ru: 'Узнать больше',
    en: 'Learn more'
}


const workList = [
    {
        img: './img/fud.jpg',
        title:{
            uz: 'Pentagol ilvasi',
            ru: 'Приложение Пентагол',
            en: 'Pentagol App'
        },
        text:{
            uz: `Men bu loyihani Reactjs-da Najot ta'limi bo'yicha musobaqa bo'lganida jamoa bilan amalga oshirdim. Bu loyiha menga jamoa bilan ishlash va git bo'yicha bilimimni oshirish imkonini berdi. Keyinchalik men bu loyihani Vue js da yozdim, uni o'zim ham vue da yozdim va Vue js haqidagi bilimimni oshirdim. Men backendga yuborish kabi vazifalarni bajardim.`,
            ru: `Я делал этот проект на Reactjs с командой, когда проходило соревнование по обучению спасению. Этот проект позволил мне поработать с командой и улучшить свои знания git. Позже я тоже написал этот проект на Vue js, сам написал на vue и расширил свои знания Vue js. я выполнял такие задачи, как отправка на бэкэнд.`,
            en: `I did this project in Reactjs with the team when there was a competition in Salvation Education. This project allowed me to work with the team and improve my knowledge of git. Later, I also wrote this project in Vue js, I wrote it myself in vue and increased my knowledge of Vue js. i did tasks like send to backend.`,
        }
    },
    {
        img: './img/work-2.png',
        title:{
            uz: 'Nisa ilvasi',
            ru: 'Приложение Ниса',
            en: 'Nisa App'
        },
        text:{
            uz: `Men ushbu loyihada React js haqidagi bilimimni oshirdim. Ushbu loyihada men formadagi ma'lumotlarni elektron pochtaga yubordim. Ushbu loyihada men Scss, Bootstrap bilan ishladim. Men fayl tuzilishini yanada yashirishni va qisqa kod yozishni o'rgandim.`,
            ru: `В этом проекте я еще больше расширил свои знания о React js. В этом проекте я отправил данные из формы на электронную почту. В этом проекте я работал с Scss, Bootstrap. Я научился дальше скрывать файловую структуру и писать короткий код.`,
            en: `I further increased my knowledge of React js in this project. In this project, I sent the data from the form to email. In this project I worked with Scss, Bootstrap. I learned to hide the file structure further and write short code.`,
        }
    },
    {
        img: './img/work-3.png',
        title:{
            uz: 'Newbozor.uz',
            ru: 'Newbozor.uz',
            en: 'Newbozor.uz'
        },
        text:{
            uz: `Ushbu loyiha davomida men cookie-fayllar bilan ishlashni xohlayman va ularning ma'lum bir qismini, ya'ni keyinroq qo'shilganlarini ko'rsatish uchun backendga juda ko'p ma'lumotlar kelganda va agar foydalanuvchi ularning barchasini olib tashlamoqchi bo'lsa, men element qachon so'radim. massivda keladi .Shuningdek, Splidejs yordamida ID dan maʼlumotlarni olish, savat boʻlimiga qoʻshish, men mahsulotlarni qanday filtrlash va koʻrsatishni oʻrgandim. Kategoriya bo'limida mahsulotlarni saralash va mahsulotga sharh yozish kabi bo'limlarni yaratdim.`,
            ru: `В ходе этого проекта я хочу работать с файлами cookie, и когда на сервер поступает много данных, чтобы показать определенную их часть, то есть те, которые были добавлены позже, и если пользователь хочет удалить их все, я спросил, когда элемент поставляется в виде массива. Также используя Splidejs для извлечения данных из идентификатора, добавления в раздел корзины, я научился фильтровать и отображать продукты. Я сделал такие разделы, как сортировка товаров по категориям и написание комментария к товару.`,
            en: `During this project I want to work with cookies and when there is a lot of data coming to the backend to show a certain part of them, i.e. the ones that were added later, and if the user wants to remove them all i asked when item comes in array .Also using Splidejs to extract data from ID, add to cart section, I learned how to filter and display products. I made sections such as sorting products in the category section and writing a comment on the product.`,
        }
    },
]



const down = {
    uz: 'CVni yuklash',
    ru: 'Скачать резюме',
    en: 'Download CV'
}
const submit = {
    uz: 'Yuborish',
    ru: 'Отправка',
    en: 'Submit'
}




// translate page



const setLang = (l) => {
    document.getElementById('name').innerText = name[l];

    document.getElementById('technology').innerText = technology[l];
    document.getElementById('hello').innerText = hello[l];
    document.getElementById('location').innerText = loc[l];
    document.getElementById('about-title').innerText = category[1][l];
    document.getElementById('sub-title').innerText = category[2][l];
    document.getElementById('work-title').innerText = category[3][l];
    document.getElementById('contact-title').innerText = category[4][l];
    document.getElementById('about-text').innerText = aboutText[l];
    document.getElementById('btnMore').innerText = learnMore[l];
    document.getElementById('btn2').innerText = down[l];
    document.getElementById('sub').innerText = submit[l];
   


    // category translate

    document.getElementById('sidemenu').innerHTML = ''
    category.forEach(item => {
        document.getElementById('sidemenu').innerHTML += `
        <i class="fas fa-times" onclick="closeMenu()"></i>
        <li>
            <a href="${item.slag}">${item[l]}</a>
        </li>
        
        `
    });

    //end category translate


    //tab title 
    document.getElementById('tab-titles').innerHTML = ''
    tabTitle.forEach(item => {
        document.getElementById('tab-titles').innerHTML += `
        <p class="tab-links" onclick="opentab('${item.link}')">
            ${item[l]}
        </p>
        `
    })
    //tab title  end



    //service 
    document.getElementById('services-list').innerHTML = ''
    serviceList.forEach(item => {
        document.getElementById('services-list').innerHTML += `
         <div>
            <i class="${item.icon}"></i>
            <h2>
                ${item.title[l]}
            </h2>
            <p class="mb-3">
            ${item[l]}
            </p>
            <a href="#">${item.more[l]}</a>
          </div>
        `
    })
    //service  end



    //work
    document.getElementById('work-list').innerHTML = ''
    workList.forEach(item => {
        document.getElementById('work-list').innerHTML += `
        <div class="work">
            <img src="${item.img}" alt="">
            <div class="layer">
                <h3>${item.title[l]}</h3>
                <p>${item.text[l]}</p>
                <a href="https://t.me/front_umrzoq">
                    <i class="fas fa-external-link-alt">

                    </i>
                </a>
            </div>
        </div>
        `
    })
    //work end
}



// default category translate

category.forEach(item => {
    document.getElementById('sidemenu').innerHTML += `
    <li>
        <a href="${item.slag}">${item.uz}</a>
    </li>
    `
});


// default category translate end





const setDarkMode = () => {
    
}