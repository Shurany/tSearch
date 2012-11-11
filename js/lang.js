var _lang = (GetSettings('lang') !== undefined) ? GetSettings('lang') : 'ru';
if (_lang != 'ru')
    _lang = {
        t : 'en',
        'categorys' : [
        [3,'Films'],
        [0,'Serials'],
        [7,'Anime'],
        [8,'Doc. and humor'],
        [1,'Music'],
        [2,'Games'],
        [5,'Books'],
        [4,'Cartoons'],
        [6,'Software'],
        [9,'Sport'],
        [10,'XXX'],
        [-1,'Other']
        ],
        cat_all : 'All',
        'btn_form' : 'Search',
        'btn_main' : 'Main',
        'btn_history' : 'Search history',
        'btn_up' : 'Up!',
        'tracker_list' : 'Trackers',
        'btn_tracker_list' : 'Setup',
        'filter' : 'Filter',
        'btn_filter' : 'Clean',
        'table' : {
            time : 'Old',
            quality : ['Q','Quality'],
            title : 'Title',
            size : 'Size',
            seeds : ['S','Seeders'],
            leechs : ['P','Peers']
        },
        btn_login : 'Login',
        size_list : ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'],
        times : {
            yest : 'Yesterday',
            today : 'Today',
            week1 : 'week',
            week2 : 'week',
            week3 : 'weeks',
            week4 : 'week',
            day1 : 'day',
            day2 : 'day',
            day3 : 'days',
            day4 : 'day',
            hour1 : 'hour',
            hour2 : 'hour',
            hour3 : 'hours',
            hour4 : 'hour',
            min : 'min.',
            sec : 'sec',
            old : 'ago'
        },
        exp_favorites : 'Favorites',
        exp_games : 'Games',
        exp_in_cinima : 'Now in the movie',
        exp_films : 'Movies',
        exp_serials : 'TV Series',
        exp_setup_view : 'Setup view',
        exp_in_fav : 'Add to favorites',
        exp_rm_fav : 'Remove from favorites',
        exp_more : 'More',
        exp_default : 'Default',
        his_title : 'Search history',
        his_h1 : 'History',
        his_no_his : 'The search history yet',
        his_rm_btn : 'Remove',
        stp_title : 'Search setup',
        stp_setup : 'Setup',
        stp_save_btn : 'Save',
        stp_legend_1 : 'Trackers',
        stp_legend_7 : 'Options',
        stp_legend_16 : 'Filters the list',
        stp_th_2 : 'Torrent tracker',
        stp_th_3 : 'Description',
        stp_th_4 : 'On',
        stp_th_5 : 'Off',
        stp_th_6 : 'Default',
        stp_span_8 : 'Show icons torrent trackers to issue',
        stp_span_9 : 'Hide sharing without seeders (distributed)',
        stp_span_10 : 'Hide column leechers (downloaders)',
        stp_span_11 : 'Hide column seeders (distributed)',
        stp_span_12 : 'Automatically move to the category when your choice movie/series etc in the main page',
        stp_span_13 : 'Do not show teasers/trailers in search results',
        stp_span_14 : 'Add a quick search in the address bar (write "tms" then press Tab)',
        stp_span_15 : 'Add search in the context menu (select text, right click - Search torrent)',
        stp_span_17 : 'Seeking complete coincidence phrases (more than 1 phrases may be separated by commas.)',
        stp_span_18 : 'Seeking coincidence with one from entered words',
        stp_span_19 : 'Seeking coincidence all entered words',
        stp_legend_20 : 'Language',
        stp_opt_21 : 'Russian',
        stp_opt_22 : 'English',
        stp_opt_23 : 'Show search popup, when you click on extension icon',
        ctx_title : 'Search torrent',
        label_profile : 'Profile',
        label_def_profile : 'Default',
        spn_26 : 'Title',
        btn_25 : 'Remove',
        btn_27 : 'Add',
        exp_q_fav : 'Get quality',
        flag : {
            cirilic : 'Unsupport cyrillic',
            auth: 'Requires authorization',
            rus: 'Russian language tracker'
        },
        stp_span_24 : 'Enable AutoComplete from Google'
    };
if (_lang == 'ru')
    _lang = {
        t : 'ru',
        'categorys' : [
        [3,'Фильмы'],
        [0,'Сериалы'],
        [7,'Анимэ'],
        [8,'Док. и юмор'],
        [1,'Музыка'],
        [2,'Игры'],
        [5,'Книги'],
        [4,'Мультфильмы'],
        [6,'ПО'],
        [9,'Спорт'],
        [10,'XXX'],
        [-1,'Прочее']
        ],
        cat_all : 'Всё',
        'btn_form' : 'Найти',
        'btn_main' : 'Главная',
        'btn_history' : 'История поиска',
        'btn_up' : 'Вверх!',
        'tracker_list' : 'Трекеры',
        'btn_tracker_list' : 'Настройки',
        'filter' : 'Фильтр',
        'btn_filter' : 'Очистить',
        'table' : {
            time : 'Добавлено',
            quality : ['К','Качество'],
            title : 'Название',
            size : 'Размер',
            seeds : ['С','Раздают'],
            leechs : ['Л','Скачивают']
        },
        btn_login : 'Войти',
        size_list : ['б', 'Кб', 'Мб', 'Гб', 'Тб', 'Пб', 'Eb', 'Zb', 'Yb'],
        times : {
            yest : 'Вчера',
            today : 'Сегодня',
            week1 : 'недель',
            week2 : 'неделя',
            week3 : 'недели',
            week4 : 'недель',
            day1 : 'дней',
            day2 : 'день',
            day3 : 'дня',
            day4 : 'дней',
            hour1 : 'часов',
            hour2 : 'час',
            hour3 : 'часа',
            hour4 : 'часов',
            min : 'мин.',
            sec : 'сек',
            old : 'назад'
        },
        exp_favorites : 'Избранное',
        exp_games : 'Игры',
        exp_in_cinima : 'Сейчас в кино',
        exp_films : 'Фильмы',
        exp_serials : 'Сериалы',
        exp_setup_view : 'Настроить вид',
        exp_in_fav : 'В избранное',
        exp_rm_fav : 'Удалить из избранного',
        exp_more : 'Подробнее',
        exp_default : 'По умолчанию',
        his_title : 'История поиска',
        his_h1 : 'История',
        his_no_his : 'Истории поиска пока нет',
        his_rm_btn : 'Удалить',
        stp_title : 'Настройки поиска',
        stp_setup : 'Настройки',
        stp_save_btn : 'Сохранить',
        stp_legend_1 : 'Трекеры',
        stp_legend_7 : 'Опции',
        stp_legend_16 : 'Фильтрация списка',
        stp_th_2 : 'Торрент трекер',
        stp_th_3 : 'Описание',
        stp_th_4 : 'Вкл',
        stp_th_5 : 'Выкл',
        stp_th_6 : 'Станд.',
        stp_span_8 : 'Показывать иконки торрент-трекеров в выдаче',
        stp_span_9 : 'Скрывать раздачи без сидеров (раздающих)',
        stp_span_10 : 'Скрыть столбец личеров (скачивающих)',
        stp_span_11 : 'Скрыть столбец сидов (раздающих)',
        stp_span_12 : 'Автоматически переходить в соотв. категорию при выборе фильма/сериала итп на главной',
        stp_span_13 : 'Не показывать тизеры/трейлеры в результатах поиска',
        stp_span_14 : 'Добавить быстрый поиск в строку адреса (пишем tms потом жмем Tab)',
        stp_span_15 : 'Добавить поиск в контекстное меню (выделяем текст, жмем правй кнопкой мыши - Найти торрент)',
        stp_span_17 : 'Ищет полное совпадение фразы (более 1 фразы можно разделить запятой)',
        stp_span_18 : 'Ищет совпадение с одним из введенных слов',
        stp_span_19 : 'Ищет совпадение всех введенных слов',
        stp_legend_20 : 'Язык / Language',
        stp_opt_21 : 'Русский',
        stp_opt_22 : 'English',
        stp_opt_23 : 'Показывать поиск при нажатии на иконку расширения',
        ctx_title : 'Найти торрент',
        label_profile : 'Профиль',
        label_def_profile : 'Стандартный',
        spn_26 : 'Название',
        btn_25 : 'Удалить',
        btn_27 : 'Добавить',
        exp_q_fav : 'Узнать качество',
        flag : {
            cirilic : 'Не поддерживает кириллицу',
            auth: 'Требуется авторизация',
            rus: 'Русскоязычный трекер'
        },
        stp_span_24 : 'Включить автозаполнение от Google'
    };