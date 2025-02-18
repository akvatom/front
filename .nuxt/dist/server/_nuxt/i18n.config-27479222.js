const i18n_config = () => ({
  legacy: false,
  locale: "uz",
  messages: {
    uz: {
      hello: "Salom",
      title: "ClinDoc - shifokorlar va tibbiy xizmatlarni topish xizmati",
      description: "Toshkent shahri bo‘ylab 70 526 dan ortiq shifokorlar va 1 100 dan ortiq poliklinikalar. Shifokorlar qabuliga yozilish va ular haqida sharhlar",
      sortTitle: "Saralash",
      sort: ["Ommabop", "Reyting", "Tajriba", "Hamyonbop", "Ko'p sharhlar"],
      filterTitle: "Filter",
      reset: "Filterni tozalash",
      specialtiesTitle: "Mutaxassislik",
      nomatter: "Barchasi",
      days: {
        today: "Bugun",
        tomorrow: "Ertaga"
      },
      firstFree: ["Shifokor yaqin kunlarda band", "{date} uchun taqvim"],
      submitApplication: [
        "Bu shifokorning onlayn jadvali yo'q yoki yaqin kunlarda hamma narsa band",
        "Ariza qoldirish"
      ],
      weekdays: [
        "Yakshanba",
        "Dushanba",
        "Seshanba",
        "Chorshanba",
        "Payshanba",
        "Juma",
        "Shanba"
      ],
      weekdaysShort: ["Ya", "Du", "Se", "Cho", "Pay", "Ju", "Sha"],
      months: [
        "{day}-yanvar",
        "{day}-fevral",
        "{day}-mart",
        "{day}-aprel",
        "{day}-may",
        "{day}-iyun",
        "{day}-iyul",
        "{day}-avgust",
        "{day}-sentabr",
        "{day}-oktabr",
        "{day}-noyabr",
        "{day}-dekabr"
      ],
      receptionType: ["Uyda", "Shifoxonada"],
      gender: ["Ayol", "Erkak"],
      userGender: ["Ayol", "Erkak"],
      genderTitle: "Shifokor jinsi",
      userGenderTitle: "Jinsingiz",
      metroTitle: "Metro",
      allMetro: "Barcha stansiyalar",
      alldates: "Boshqa kunni tanlash",
      select: "Tanlash",
      meter: "m",
      kilometer: "km",
      header: {
        map: "Xaritada ko‘rish",
        location: "Toshkent",
        profile: "Shaxsiy kabinet"
      },
      banner: {
        title: "Shifokorlar qabuliga onlayn yozilish",
        description: "Ideal shifokoringizni toping - hoziroq qabuliga yoziling!",
        input: "Mutaxassislik nomini yoki shifokor ismini kiriting"
      },
      clinic: {
        title: "Klinikangizning imkoniyatlarini kengaytiring",
        add: "Klinika qo‘shish"
      },
      found: "Topilgan shifokorlar",
      input: {
        name: "Ismingiz",
        surname: "Familiyangiz",
        gender: "Jins",
        birth: "Tug‘ilgan sana",
        phone: "Telefon raqamingiz",
        clinicPhone: "Telefon raqamingiz*",
        secondPhone: "Qo‘shimcha telefon raqam",
        clinic: "Klinika nomi*",
        specialty: "Yo'nalish",
        address: "Manzil",
        contact: "Siz bilan qanday bog'lanishimiz mumkin?",
        search: "Shifokor yoki mutaxassislik nomini kiriting"
      },
      error: {
        first: "Ismingizni kiriting",
        last: "Familiyangizni kiriting",
        gender: "Jins",
        birth: "Tug‘ilgan sana (KK.OO.YYYY)"
      },
      loginTitle: {
        default: "Shaxsiy kabinetga kirish",
        comment: "Sharh qoldirish uchun hisobingizga kiring",
        book: "Qabulga yozilish uchun hisobgingizga kiring"
      },
      toast: {
        registered: "Muvaffaqiyatli ro‘yxatdan o‘tdingiz",
        error: "Xatolik yuz berdi",
        changed: "O'zgarishlar saqlandi!",
        phoneChanged: "Telefon raqamingiz o'zgartirildi"
      },
      rating: ["Juda yomon", "Yomon", "O‘rta", "Yaxshi", "A’lo"],
      privacy: {
        title: "Maxfiylik siyosati",
        description: "Ushbu maxfiylik siyosati klinika qabullariga yozilish uchun mobil ilovamizdan va veb-saytimizdan foydalanganingizda shaxsiy maʼlumotlaringizni qanday yig‘ishimiz, foydalanishimiz va oshkor qilishimizni tavsiflaydi.",
        list: [
          {
            title: "Ma'lumot to'plash va ulardan foydalanish",
            description: "Shifokor qabuliga yozilish uchun ilovamizdan foydalanganingizda, ismingiz, elektron pochta manzilingiz, telefon raqamingiz va uchrashuvni rejalashtirish maʼlumotlari kabi baʼzi shaxsiy maʼlumotlarni toʻplashimiz mumkin. Bu maʼlumotlardan faqat uchrashuvlarni rejalashtirish xizmati va tegishli funksiyalarni taqdim etish uchun foydalaniladi."
          },
          {
            title: "Axborotni oshkor qilish",
            description: "Biz sizning shaxsiy ma'lumotlaringizni sizning roziligingizsiz tomonlar bilan baham ko'rmaymiz, xizmat ko'rsatish, qonunlarga rioya qilish yoki uchinchi huquqlarimizni himoya qilish talab qilinadigan hollar bundan mustasno."
          },
          {
            title: "Xavfsizlik",
            description: "Biz sizning shaxsiy ma'lumotlaringizni ruxsatsiz kirish, o'zgartirish yoki yo'q qilishdan himoya qilish uchun barcha zarur choralarni ko'ramiz."
          }
        ]
      },
      experience: "{year} yillik tajriba",
      ratingsCount: "{count} ta izoh",
      price: "Qabul narxi",
      narxi: "Narxi",
      selectDate: "Qabul kunini tanlang:",
      allbusy: "Shifokor band",
      language: "Sayt tili",
      main: "Bosh sahifa",
      city: "Shahar",
      tashkent: "Toshkent",
      help: "Qo‘llab-quvvatlash xizmati",
      call: "Telefon",
      notfound: "So‘rovingiz bo‘yicha hech narsa topilmadi",
      doctors: "Shifokorlar",
      specialties: "Mutaxassisliklar",
      filter: {
        date: "Qabul sanasi",
        metro: "Metro",
        specialty: "Mutaxassislik"
      },
      about: "Shifokor haqida",
      book: "Qabulga yozilish",
      sum: "so‘m",
      dateTime: "Qabul sanasi va vaqti",
      phoneToConfirm: "Qabulni tasdiqlash uchun telefon raqami",
      phoneInfo: "Uchrashuvni tasdiqlash va ma’lumot berish uchun ushbu raqamga qo‘ng‘iroq qilamiz.",
      booking: "Qabulga yozilish",
      bookSuccess: "Arizangiz uchun rahmat!",
      bookSuccessInfo: "Shifokor qabuliga yozilish uchun arizangiz muvaffaqiyatli qabul qilindi. Mutaxassislarimiz tez orada siz bilan bog'lanib, uchrashuvingizni tasdiqlaydi va ma'lumot beradi.",
      nice: "Tushunarli",
      bookError: "Xatolik yuz berdi",
      bookErrorInfo: "Kechirasiz, soʻrovingizni koʻrib chiqishda xatolik yuz berdi. Keyinroq qayta urinib ko‘ring yoki qo‘shimcha yordam olish uchun qo‘llab-quvvatlash xizmatimizga murojaat qiling.",
      retry: "Qayta urinib ko‘rish",
      moreAbout: "Shifokor haqida ko‘proq",
      bookTime: "{date}, {time} da qabulga yozilish",
      comments: "Izohlar",
      overallRating: "Shifokor reytingi",
      numberRating: "Reytinglar soni",
      leaveComment: "Izoh qoldirish",
      qrcode: "Yuklab olish uchun kamerangizni QR kodga qarating",
      app: "Ilovada ancha qulayroq",
      slider: [
        {
          title: "Qulaylik va ishonchlilik",
          desc: "Clindoc Toshkent shahrida malakali shifokorlarni topish va rejalashtirishda ishonchli yordamchingizdir"
        },
        {
          title: "Shifokorlar qabuliga yozilish",
          desc: "Clindocdan foydalaning va o‘zingizga qulay bo‘lganda tibbiy yordam oling"
        }
      ],
      getcode: "Kodni olish",
      entercode: "SMS dan kodni kiriting",
      sentto: "{phone} raqamiga tasdiqlovchi kod yuborildi",
      sendagain: "Kodni qayta yuborish",
      sec: "sek.",
      confirm: "Tasdiqlash",
      fillInfo: "Ma’lumotlaringizni to‘ldiring",
      logout: "Chiqish",
      profile: "Shaxsiy kabinet",
      profileInfo: "Bu maʼlumotlar shifokor qabuliga yozilishda avtomatik ravishda toʻldiriladi.",
      save: "O‘zgarishlarni saqlash",
      backMain: "Bosh sahifaga qaytish",
      sureLogout: "Shaxsiy hisobingizdan chiqmoqchimisiz?",
      cancel: "Bekor qilish"
    },
    ru: {
      hello: "Привет",
      title: "ClinDoc - сервис по поиску врачей и медицинских услуг",
      description: "Более 70526 врачей и 1100 клиник в Ташкенте. Запись на прием и отзывы о врачах",
      sortTitle: "Сортировка",
      sort: [
        "Популярные",
        "Высокий рейтинг",
        "Большой стаж",
        "Сначала дешевле",
        "Много отзывов"
      ],
      filterTitle: "Фильтры",
      reset: "Сбросить",
      specialtiesTitle: "Специальность",
      nomatter: "Любой",
      days: {
        today: "Сегодня",
        tomorrow: "Завтра"
      },
      firstFree: ["У врача все занято в ближайшие дни", "Расписание на {date}"],
      submitApplication: [
        "У данного врача нет онлайн расписания или все занято в ближайшие дни",
        "Оставить заявку"
      ],
      weekdays: [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
      ],
      weekdaysShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      months: [
        "{day} января",
        "{day} февраля",
        "{day} марта",
        "{day} апреля",
        "{day} мая",
        "{day} июня",
        "{day} июля",
        "{day} августа",
        "{day} сентября",
        "{day} октября",
        "{day} ноября",
        "{day} декабря"
      ],
      receptionType: ["На дому", "В клинике"],
      gender: ["Женщина", "Мужчина"],
      userGender: ["Женский", "Мужской"],
      genderTitle: "Пол врача",
      userGenderTitle: "Пол",
      metroTitle: "Метро",
      allMetro: "Все станции",
      alldates: "Выбрать другой день",
      select: "Выбрать",
      meter: "м",
      kilometer: "км",
      header: {
        map: "Показать на карте",
        location: "Ташкент",
        profile: "Личный кабинет"
      },
      banner: {
        title: "Онлайн запись к врачам",
        description: "Найдите своего идеального врача - Запишитесь на прием прямо сейчас!",
        input: "Введите специальность или имя врача"
      },
      clinic: {
        title: "Расширьте возможности вашей клиники",
        add: "Добавить клинику"
      },
      found: "Врачей найдено",
      input: {
        name: "Ваше имя",
        surname: "Фамилия",
        gender: "Пол",
        birth: "Дата рождение",
        phone: "Номер телефона",
        clinicPhone: "Номер телефона*",
        secondPhone: "Дополнительный номер",
        clinic: "Название клиники*",
        specialty: "Направление",
        address: "Адрес",
        contact: "Как к вам обращаться?",
        search: "Введите специальность или имя врача"
      },
      error: {
        first: "Укажите имя",
        last: "Укажите фамилия",
        gender: "Укажите пол",
        birth: "Укажите дату рождения (ДД.ММ.ГГГГ)"
      },
      loginTitle: {
        default: "Вход в личный кабинет",
        comment: "Чтобы оставить отзыв, войдите в личный кабинет",
        book: "Чтобы записаться на прием, войдите в личный кабинет"
      },
      toast: {
        registered: "Вы успешно зарегистрировались",
        error: "Произошла ошибка",
        changed: "Изменения сохранены!",
        phoneChanged: "Номер телефона изменён"
      },
      rating: ["Ужасно", "Плохо", "Средне", "Хорошо", "Отлично"],
      privacy: {
        title: "Политика конфиденциальности",
        description: "Эта политика конфиденциальности описывает, как мы собираем, используем и раскрываем вашу личную информацию при использовании нашего мобильного приложения для записи на клинику.",
        list: [
          {
            title: "Сбор и использование информации",
            description: "Мы можем собирать определенную личную информацию, когда вы используете наше приложение для записи на клинику, такую как ваше имя, адрес электронной почты, номер телефона и информация о записях на приемы. Эта информация используется исключительно для целей предоставления услуги записи на приемы и связанных функций."
          },
          {
            title: "Раскрытие информации",
            description: "Мы не будем делиться вашей личной информацией с третьими сторонами без вашего согласия, за исключением случаев, когда это необходимо для предоставления услуги, соблюдения закона или защиты наших прав."
          },
          {
            title: "Безопасность",
            description: "Мы принимаем все необходимые меры для защиты вашей личной информации от несанкционированного доступа, изменения или уничтожения."
          }
        ]
      },
      experience: "стаж {year} лет",
      ratingsCount: "{count} отзывов",
      price: "Стоимость приема в клинике",
      narxi: "Стоимость",
      selectDate: "Выберите время приёма для записи:",
      allbusy: "У врача все занято",
      language: "Язык сайта",
      main: "Главная",
      city: "Город",
      tashkent: "Ташкент",
      help: "Сужба поддержки",
      call: "Позвонить",
      notfound: "По запросу ничего не найдено!",
      doctors: "Врачи",
      specialties: "Специальность",
      filter: {
        date: "Дата приёма",
        metro: "Метро",
        specialty: "Врач"
      },
      about: "О враче",
      book: "Запись на приём",
      sum: "сум",
      dateTime: "Дата и время приёма",
      phoneToConfirm: "Телефон для подтверждения записи",
      phoneInfo: "Мы будем звонить на этот номер для подтверждения записи и предоставления информации",
      booking: "Записаться",
      bookSuccess: "Спасибо за вашу заявку!",
      bookSuccessInfo: "Ваша заявка на запись к врачу успешно принята. Наша команда специалистов скоро свяжется с вами для подтверждения записи и предоставления информации",
      nice: "Хорошо",
      bookError: "Произошла ошибка",
      bookErrorInfo: "Извините, произошла ошибка при обработке вашей заявки на запись к врачу. Пожалуйста, попробуйте еще раз позже, или свяжитесь с нашей службой поддержки для получения дополнительной помощи.",
      retry: "Повторить",
      moreAbout: "Узнать подробнее о враче",
      bookTime: "Записаться {date}, в {time}",
      comments: "Отзывы пациентов",
      overallRating: "Рейтинг врача",
      numberRating: "Количество отзывов",
      leaveComment: "Оставить отзыв",
      qrcode: "Наведите камеру на QR-код, чтобы скачать",
      app: "В приложении гораздо удобнее",
      slider: [
        {
          title: "Удобство и надежность",
          desc: "Clindoc - ваш надежный помощник в поиске и записи квалифицированных врачей в Ташкенте"
        },
        {
          title: "Доступная запись к врачам",
          desc: "Воспользуйтесь Clindoc и получите медицинскую помощь в любое удобное время"
        }
      ],
      getcode: "Получить код",
      entercode: "Введите код из СМС",
      sentto: "Отправили код подтверждения на номер {phone}",
      sendagain: "Отправить код повторно",
      sec: "сек.",
      confirm: "Подтвердить",
      fillInfo: "Заполните данные о себе",
      logout: "Выйти",
      profile: "Личный кабинет",
      profileInfo: "Эти данные будут автоматически заполняться при каждой записи к врачу, чтобы не приходилось вводить их заново.",
      save: "Сохранить изменения",
      backMain: "Вернуться на главный экран",
      sureLogout: "Вы уверены, что хотите выйти?",
      cancel: "Отмена"
    }
  }
});
export {
  i18n_config as default
};
//# sourceMappingURL=i18n.config-27479222.js.map
