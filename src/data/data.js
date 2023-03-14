export default {
  // Наборы
  kits: [
    {
      name: "Цветок потерянного рая",
      images: [
        { blossom: "/Цветок потерянного рая/blossom.png" },
        { feather: "/Цветок потерянного рая/feather.png" },
        { watch: "/Цветок потерянного рая/watch.png" },
        { goblet: "/Цветок потерянного рая/goblet.png" },
        { hat: "/Цветок потерянного рая/hat.png" }
      ],
      location: { name: "Город золота", image: "/Цветок потерянного рая/dungeon.png" },
      description: "",
      bonusX2: "Увеличивает мастерство стихий на 80 ед.",
      bonusX4:
        "Увеличивает урон реакций Бутонизация, Вегетация и Цветение экипированного этим набором персонажа на 40%. Кроме того, активация реакций Бутонизация, Вегетация и Цветение экипированным этим набором персонажем усилит этот эффект на 25%. Каждое суммирование длится 10 сек. Эффект складывается до 4 раз, может возникнуть раз в 1 сек. и активируется, даже если экипированный этим набором персонаж не активен."
    },
    {
      name: "Хроники Чертогов в пустыне",
      images: [
        { blossom: "/Хроники Чертогов в пустыне/blossom.png" },
        { feather: "/Хроники Чертогов в пустыне/feather.png" },
        { watch: "/Хроники Чертогов в пустыне/watch.png" },
        { goblet: "/Хроники Чертогов в пустыне/goblet.png" },
        { hat: "/Хроники Чертогов в пустыне/hat.png" }
      ],
      location: { name: "Город золота", image: "/Хроники Чертогов в пустыне/dungeon.png" },
      description: "",
      bonusX2: "Увеличивает бонус Анемо урона на 15%.",
      bonusX4:
        "Попадание заряженной атакой на 15 сек. повышает скорость обычной атаки на 10%, а урон обычной атаки, заряженной атаки и атаки в падении – на 40%."
    },
    {
      name: "Позолоченные сны",
      images: [
        { blossom: "/Позолоченные сны/blossom.png" },
        { feather: "/Позолоченные сны/feather.png" },
        { watch: "/Позолоченные сны/watch.png" },
        { goblet: "/Позолоченные сны/goblet.png" },
        { hat: "/Позолоченные сны/hat.png" }
      ],
      location: { name: "Шпиль одинокого просветления", image: "/Позолоченные сны/dungeon.png" },
      description: "",
      bonusX2: "Увеличивает мастерство стихий на 80 ед.",
      bonusX4:
        "На 8 сек. после вызова элементальной реакции согласно элементам других персонажей в отряде экипированный персонаж получает следующие усиления:\n· Сила атаки повышается на 14% за каждого персонажа с таким же элементом.\n· Мастерство стихий повышается на 50 ед. за каждого персонажа с иным элементом. Каждое из этих усилений при подсчёте включает до 3 персонажей. Эффект может возникнуть один раз в 8 сек. и срабатывает, даже если экипированный персонаж не на поле боя."
    },
    {
      name: "Воспоминания дремучего леса",
      images: [
        { blossom: "/Воспоминания дремучего леса/blossom.png" },
        { feather: "/Воспоминания дремучего леса/feather.png" },
        { watch: "/Воспоминания дремучего леса/watch.png" },
        { goblet: "/Воспоминания дремучего леса/goblet.png" },
        { hat: "/Воспоминания дремучего леса/hat.png" }
      ],
      location: { name: "Шпиль одинокого просветления", image: "/Воспоминания дремучего леса/dungeon.png" },
      description: "",
      bonusX2: "Увеличивает бонус Дендро урона на 15%.",
      bonusX4:
        "Попадание элементальным навыком или взрывом стихии снижает Дендро сопротивление врага на 30% на 8 сек. Этот эффект срабатывает, даже если экипированный персонаж не на поле боя."
    },
    {
      name: "Отголоски подношения",
      images: [
        { blossom: "/Отголоски подношения/blossom.png" },
        { feather: "/Отголоски подношения/feather.png" },
        { watch: "/Отголоски подношения/watch.png" },
        { goblet: "/Отголоски подношения/goblet.png" },
        { hat: "/Отголоски подношения/hat.png" }
      ],
      location: { name: "Затерянная долина", image: "/Отголоски подношения/dungeon.png" },
      description: "",
      bonusX2: "Увеличивает силу атаки на 18%.",
      bonusX4:
        "Попадания обычной атакой с 36% шансом активируют Ритуал долины: урон обычной атаки повышается на 70% от силы атаки. Через 0,05 сек. после нанесения урона обычной атакой эффект исчезает. Если обычной атаке не удалось активировать этот эффект, шанс его активации следующим попаданием возрастает на 20%. Шанс активации возникает не чаще одного раза в 0,2 сек."
    },
    {
      name: "Киноварное загробье",
      images: [
        { blossom: "/Киноварное загробье/blossom.png" },
        { feather: "/Киноварное загробье/feather.png" },
        { watch: "/Киноварное загробье/watch.png" },
        { goblet: "/Киноварное загробье/goblet.png" },
        { hat: "/Киноварное загробье/hat.png" }
      ],
      location: { name: "Затерянная долина", image: "/Киноварное загробье/dungeon.png" },
      description: "",
      bonusX2: "Увеличивает силу атаки на 18%.",
      bonusX4:
        "После активации взрыва стихии на 16 сек. создаёт Скрытое сияние, которое повышает силу атаки на 8%. Сила атаки персонажа увеличивается ещё на 10%, когда он теряет HP. Этот эффект может возникнуть максимум 4 раза и не чаще, чем раз в 0,8 сек. Скрытое сияние исчезает, когда персонаж покидает поле боя. При повторной активации взрыва стихии существующее Скрытое сияние снимается."
    },
    {
      name: "Моллюск морских красок",
      images: [
        { blossom: "/Моллюск морских красок/blossom.png" },
        { feather: "/Моллюск морских красок/feather.png" },
        { watch: "/Моллюск морских красок/watch.png" },
        { goblet: "/Моллюск морских красок/goblet.png" },
        { hat: "/Моллюск морских красок/hat.png" }
      ],
      location: { name: "Дремлющий сад", image: "/Моллюск морских красок/dungeon.png" },
      description: "",
      bonusX2: "Повышает бонус лечения на 15%.",
      bonusX4:
        "Экипированный этим набором артефактов персонаж при лечении соратников создаёт Пузырь морских красок. Пузырь регистрирует восстановленные при лечении HP (в том числе избыточные - когда лечение превышает максимум здоровья). После окончания действия Пузырь взрывается и наносит окружающим врагам урон в размере 90% записанного объёма лечения (урон рассчитывается так же, как для эффектов Заряжен и Сверхпроводник, но на него не действуют бонусы мастерства стихий, уровня и реакций). Пузырь морских красок можно создавать не чаще, чем раз в 3,5 сек. Пузырь может записать до 30 000 восстановленных HP, в том числе HP избыточного лечения. В отряде не может существовать больше одного Пузыря морских красок одновременно. Этот эффект может быть активирован, даже если персонаж, экипированный набором артефактов, не находится на поле боя."
    },
    {
      name: "Кокон сладких грёз",
      images: [
        { blossom: "/Кокон сладких грёз/blossom.png" },
        { feather: "/Кокон сладких грёз/feather.png" },
        { watch: "/Кокон сладких грёз/watch.png" },
        { goblet: "/Кокон сладких грёз/goblet.png" },
        { hat: "/Кокон сладких грёз/hat.png" }
      ],
      location: { name: "Дремлющий сад", image: "/Кокон сладких грёз/dungeon.png" },
      description: "",
      bonusX2: "Увеличивает защиту на 30%",
      bonusX4:
        "Персонаж, экипированный этим набором артефактов, получает эффект Любопытства. 1 уровень Любопытства даётся активному персонажу после попадания по противнику атакой Гео (не чаще чем раз в 0,3 сек.). Когда персонаж находится вне поля боя, он получает 1 ур. Любопытства каждые 3 сек. Любопытство может складываться до 4 ур., каждый ур. прибавляет 6% к защите и 6% к Гео урону. Если персонаж не получает Любопытства в течение 6 сек., то теряет 1 накопленный уровень Любопытства."
    },
    {
      name: "Эмблема рассечённой судьбы",
      images: [
        { blossom: "/Эмблема рассечённой судьбы/blossom.png" },
        { feather: "/Эмблема рассечённой судьбы/feather.png" },
        { watch: "/Эмблема рассечённой судьбы/watch.png" },
        { goblet: "/Эмблема рассечённой судьбы/goblet.png" },
        { hat: "/Эмблема рассечённой судьбы/hat.png" }
      ],
      location: { name: "Кленовый зал", image: "/Эмблема рассечённой судьбы/dungeon.png" },
      description: "",
      bonusX2: "Увеличивает скорость восстановления энергии на 20%.",
      bonusX4:
        "Увеличивает урон взрыва стихий на величину, равную 25% от значения восстановления энергии. Эффект можно увеличить максимум до 75%."
    },
    {
      name: "Воспоминания Симэнавы",
      images: [
        { blossom: "/Воспоминания Симэнавы/blossom.png" },
        { feather: "/Воспоминания Симэнавы/feather.png" },
        { watch: "/Воспоминания Симэнавы/watch.png" },
        { goblet: "/Воспоминания Симэнавы/goblet.png" },
        { hat: "/Воспоминания Симэнавы/hat.png" }
      ],
      location: { name: "Кленовый зал", image: "/Воспоминания Симэнавы/dungeon.png" },
      description: "",
      bonusX2: "Увеличивает силу атаки на 18%.",
      bonusX4:
        "При использовании элементального навыка, если у персонажа 15 или более единиц энергии, он теряет 15 единиц энергии, а урон обычной атаки, заряженной атаки и атаки в падении увеличивается на 50% в течение 10 сек."
    },
    {
      name: "Бледный огонь",
      images: [
        { blossom: "/Бледный огонь/blossom.png" },
        { feather: "/Бледный огонь/feather.png" },
        { watch: "/Бледный огонь/watch.png" },
        { goblet: "/Бледный огонь/goblet.png" },
        { hat: "/Бледный огонь/hat.png" }
      ],
      location: { name: "Горный дозор", image: "/Бледный огонь/dungeon.png" },
      description: "",
      bonusX2: "Увеличивает физ. урон на 25%",
      bonusX4:
        "Когда элементальный навык попадает по врагу, атака увеличивается на 9% в течение 7 секунд. Эффект может складываться до 2 раз и срабатывает каждые 0.3 секунды. Как только будет наложено 2 эффекта, бонусов 2 предметов увеличится до 100%."
    },
    {
      name: "Стойкость Миллелита",
      images: [
        { blossom: "/Стойкость Миллелита/blossom.png" },
        { feather: "/Стойкость Миллелита/feather.png" },
        { watch: "/Стойкость Миллелита/watch.png" },
        { goblet: "/Стойкость Миллелита/goblet.png" },
        { hat: "/Стойкость Миллелита/hat.png" }
      ],
      location: { name: "Горный дозор", image: "/Стойкость Миллелита/dungeon.png" },
      description: "",
      bonusX2: "Увеличивает макс. HP на 20%",
      bonusX4:
        "Когда элементальный навык попадает по врагу, атака всех членов отряда, которые находятся рядом, увеличивается на 20%, а прочность щитов увеличивается на 30% на 3 секунды. Эффект можно активировать каждых 0.5 секунд. Также эффект срабатывает даже в том случае, если использующий этот артефакт персонаж не находится на поле боя."
    },
    {
      name: "Сердце глубин",
      images: [
        { blossom: "/Сердце глубин/blossom.png" },
        { feather: "/Сердце глубин/feather.png" },
        { watch: "/Сердце глубин/watch.png" },
        { goblet: "/Сердце глубин/goblet.png" },
        { hat: "/Сердце глубин/hat.png" }
      ],
      location: { name: "Пик Виндагнира", image: "/Сердце глубин/dungeon.png" },
      description: "",
      bonusX2: "Увеличивает бонус Гидро урона на 15%.",
      bonusX4:
        "Увеличивает урон обычной и заряженной атаки на 30% в течение 15 сек. после использования элементального навыка."
    },
    {
      name: "Заблудший в метели",
      images: [
        { blossom: "/Заблудший в метели/blossom.png" },
        { feather: "/Заблудший в метели/feather.png" },
        { watch: "/Заблудший в метели/watch.png" },
        { goblet: "/Заблудший в метели/goblet.png" },
        { hat: "/Заблудший в метели/hat.png" }
      ],
      location: { name: "Пик Виндагнира", image: "/Заблудший в метели/dungeon.png" },
      description: "",
      bonusX2: "Увеличивает бонус Крио урона на 15%.",
      bonusX4:
        "Атаки по противникам с эффектом Крио увеличивают шанс крит. попадания на 20%. Если противник имеет статус Заморозка, то дополнительно увеличивает шанс крит. попадания на 20%."
    },
    {
      name: "Горящая алая ведьма",
      images: [
        { blossom: "/Горящая алая ведьма/blossom.png" },
        { feather: "/Горящая алая ведьма/feather.png" },
        { watch: "/Горящая алая ведьма/watch.png" },
        { goblet: "/Горящая алая ведьма/goblet.png" },
        { hat: "/Горящая алая ведьма/hat.png" }
      ],
      location: { name: "Скрытый дворец Уван", image: "/Горящая алая ведьма/dungeon.png" },
      description: "",
      bonusX2: "Увеличивает бонус Пиро урона на 15%.",
      bonusX4:
        "Увеличивает Урон статусов Перегрузка и Горение на 40%, а урон статусов Пар и Таяние - на 15%. Использование элементального навыка увеличивает эффекты набора из двух вещей на 50% в течении 10 сек. Может складываться до 3 раз."
    },
    {
      name: "Ступающий по лаве",
      images: [
        { blossom: "/Ступающий по лаве/blossom.png" },
        { feather: "/Ступающий по лаве/feather.png" },
        { watch: "/Ступающий по лаве/watch.png" },
        { goblet: "/Ступающий по лаве/goblet.png" },
        { hat: "/Ступающий по лаве/hat.png" }
      ],
      location: { name: "Скрытый дворец Уван", image: "/Ступающий по лаве/dungeon.png" },
      description: "",
      bonusX2: "Пиро сопротивление +40%",
      bonusX4: "Увеличивает урон против врагов, находящихся под действием Пиро, на 35%."
    },
    {
      name: "Громогласный рёв ярости",
      images: [
        { blossom: "/Громогласный рёв ярости/blossom.png" },
        { feather: "/Громогласный рёв ярости/feather.png" },
        { watch: "/Громогласный рёв ярости/watch.png" },
        { goblet: "/Громогласный рёв ярости/goblet.png" },
        { hat: "/Громогласный рёв ярости/hat.png" }
      ],
      location: { name: "Июльские сады", image: "/Громогласный рёв ярости/dungeon.png" },
      description: "",
      bonusX2: "Увеличивает бонус Электро урона на 15%.",
      bonusX4:
        "Увеличивает урон реакций Перегрузка, Заряжен, Сверхпроводник и Вегетация на 40%. Урон от реакции Обострение увеличивается на 20%. При активации этих реакций, а также реакции Стимуляция, время отката элементального навыка уменьшается на 1 сек. Эффект может возникнуть не чаще 1 раза за 0.8 сек."
    },
    {
      name: "Усмиряющий гром",
      images: [
        { blossom: "/Усмиряющий гром/blossom.png" },
        { feather: "/Усмиряющий гром/feather.png" },
        { watch: "/Усмиряющий гром/watch.png" },
        { goblet: "/Усмиряющий гром/goblet.png" },
        { hat: "/Усмиряющий гром/hat.png" }
      ],
      location: { name: "Июльские сады", image: "/Усмиряющий гром/dungeon.png" },
      description: "",
      bonusX2: "Повышает Электро сопротивление на +40%.",
      bonusX4: "Увеличивает урон против врагов, находящихся под действием Электро, на 35%."
    },
    {
      name: "Встречная комета",
      images: [
        { blossom: "/Встречная комета/blossom.png" },
        { feather: "/Встречная комета/feather.png" },
        { watch: "/Встречная комета/watch.png" },
        { goblet: "/Встречная комета/goblet.png" },
        { hat: "/Встречная комета/hat.png" }
      ],
      location: { name: "Владения Гуюнь", image: "/Встречная комета/dungeon.png" },
      description: "",
      bonusX2: "Увеличивает прочность щита на 35%.",
      bonusX4: "Под защитой щита увеличивает урон обычной и заряженной атаки на 40%."
    },
    {
      name: "Архаичный камень",
      images: [
        { blossom: "/Архаичный камень/blossom.png" },
        { feather: "/Архаичный камень/feather.png" },
        { watch: "/Архаичный камень/watch.png" },
        { goblet: "/Архаичный камень/goblet.png" },
        { hat: "/Архаичный камень/hat.png" }
      ],
      location: { name: "Владения Гуюнь", image: "/Архаичный камень/dungeon.png" },
      description: "",
      bonusX2: "Увеличивает бонус Гео урона на 15%.",
      bonusX4:
        "Подобранные осколки, образованные реакцией Кристалл, увеличивают бонус элементального урона всех членов отряда на 35% в течение 10 сек. Одновременно можно иметь бонус урона только одного элемента."
    },
    {
      name: "Изумрудная тень",
      images: [
        { blossom: "/Изумрудная тень/blossom.png" },
        { feather: "/Изумрудная тень/feather.png" },
        { watch: "/Изумрудная тень/watch.png" },
        { goblet: "/Изумрудная тень/goblet.png" },
        { hat: "/Изумрудная тень/hat.png" }
      ],
      location: { name: "Долина воспоминаний", image: "/Изумрудная тень/dungeon.png" },
      description: "",
      bonusX2: "Увеличивает бонус Анемо урона на 15%.",
      bonusX4:
        "Увеличивает урон Рассеивания на 60%. При взаимодействии Рассеивания с другим элементом, также понижает сопротивление противника к соответствующему элементу на 40% в течении 10 сек."
    },
    {
      name: "Возлюбленная юная дева",
      images: [
        { blossom: "/Возлюбленная юная дева/blossom.png" },
        { feather: "/Возлюбленная юная дева/feather.png" },
        { watch: "/Возлюбленная юная дева/watch.png" },
        { goblet: "/Возлюбленная юная дева/goblet.png" },
        { hat: "/Возлюбленная юная дева/hat.png" }
      ],
      location: { name: "Долина воспоминаний", image: "/Возлюбленная юная дева/dungeon.png" },
      description: "",
      bonusX2: "Увеличивает лечение персонажа на 15%.",
      bonusX4:
        "Увеличивает получаемое лечение всех членов отряда на 20% в течении 10 сек. после использования элементального навыка или взрыва стихии."
    },
    {
      name: "Рыцарь крови",
      images: [
        { blossom: "/Рыцарь крови/blossom.png" },
        { feather: "/Рыцарь крови/feather.png" },
        { watch: "/Рыцарь крови/watch.png" },
        { goblet: "/Рыцарь крови/goblet.png" },
        { hat: "/Рыцарь крови/hat.png" }
      ],
      location: { name: "Чистая вода и горная пещера", image: "/Рыцарь крови/dungeon.png" },
      description: "",
      bonusX2: "Увеличивает физ. урон на 25%.",
      bonusX4:
        "После победы над противником увеличивает урон заряженной атаки на 50% и обнуляет стоимость выносливости заряженной атаки на 10 сек."
    },
    {
      name: "Церемония древней знати",
      images: [
        { blossom: "/Церемония древней знати/blossom.png" },
        { feather: "/Церемония древней знати/feather.png" },
        { watch: "/Церемония древней знати/watch.png" },
        { goblet: "/Церемония древней знати/goblet.png" },
        { hat: "/Церемония древней знати/hat.png" }
      ],
      location: { name: "Чистая вода и горная пещера", image: "/Церемония древней знати/dungeon.png" },
      description: "",
      bonusX2: "Увеличивает урон взрыва стихии на 20%.",
      bonusX4:
        "Активация взрыва стихии увеличивает силу атаки всех членов отряда на 20% в течении 12 сек. Эффект не складывается."
    },
    {
      name: "Странствующий ансамбль",
      images: [
        { blossom: "/Странствующий ансамбль/blossom.png" },
        { feather: "/Странствующий ансамбль/feather.png" },
        { watch: "/Странствующий ансамбль/watch.png" },
        { goblet: "/Странствующий ансамбль/goblet.png" },
        { hat: "/Странствующий ансамбль/hat.png" }
      ],
      location: { name: "", image: "" },
      description: "",
      bonusX2: "Увеличивает мастерство стихий на 80 ед.",
      bonusX4: "Увеличивает урон заряженной атаки на 35%, если персонаж использует катализатор или стрелковое оружие."
    },
    {
      name: "Конец гладиатора",
      images: [
        { blossom: "/Конец гладиатора/blossom.png" },
        { feather: "/Конец гладиатора/feather.png" },
        { watch: "/Конец гладиатора/watch.png" },
        { goblet: "/Конец гладиатора/goblet.png" },
        { hat: "/Конец гладиатора/hat.png" }
      ],
      location: { name: "", image: "" },
      description: "",
      bonusX2: "Увеличивает силу атаки на 18%.",
      bonusX4:
        "Увеличивает урон обычной атаки на 35%, если персонаж использует одноручное, двуручное или древковое оружие."
    }
  ],
  // Типы артефактов
  artifactTypes: [{ type: "Цветок" }, { type: "Перо" }, { type: "Часы" }, { type: "Кубок" }, { type: "Шапка" }],
  // Верхние статы
  mainStats: [
    { value: "Бонус Гео урона" },
    { value: "Бонус Крио урона" },
    { value: "Бонус Пиро урона" },
    { value: "Бонус Анемо урона" },
    { value: "Бонус Электро урона" },
    { value: "Бонус Гидро урона" },
    { value: "Бонус Дендро урона" },
    { value: "Бонус Физ урона" },
    { value: "Бонус Лечения" },
    { value: "Крит урон" },
    { value: "Шанс крита" },
    { value: "Сила атаки %" },
    { value: "Мастерство стихий" },
    { value: "Восстановление энергии" },
    { value: "HP %" },
    { value: "Защита %" },
    { value: "Сила атаки" },
    { value: "HP" }
  ],
  // Доп статы
  dopStats: [
    { value: "HP %" },
    { value: "Защита %" },
    { value: "Крит урон" },
    { value: "Шанс крита" },
    { value: "Сила атаки %" },
    { value: "Мастерство стихий" },
    { value: "Восстановление энергии" }
  ],
  // Фильтры для каждого типа артефакта
  filters: {
    Кубок: ["Бонус Лечения", "Восстановление энергии", "HP", "Сила атаки", "Крит урон", "Шанс крита"],
    Часы: [
      "Бонус Лечения",
      "Крит урон",
      "Шанс крита",
      "Бонус Гео урона",
      "Бонус Крио урона",
      "Бонус Пиро урона",
      "Бонус Дендро урона",
      "Бонус Гидро урона",
      "Бонус Анемо урона",
      "Бонус Электро урона",
      "Бонус Физ урона",
      "HP",
      "Сила атаки"
    ],
    Шапка: [
      "Бонус Гео урона",
      "Бонус Крио урона",
      "Бонус Пиро урона",
      "Бонус Дендро урона",
      "Бонус Гидро урона",
      "Бонус Анемо урона",
      "Бонус Электро урона",
      "Бонус Физ урона",
      "Восстановление энергии",
      "HP",
      "Сила атаки"
    ]
  }
};
