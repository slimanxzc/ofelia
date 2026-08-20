(function () {
  'use strict';

  /* =========================================================
     1. Translations
     ========================================================= */
  var translations = {
    ar: {
      skip_link: 'تخطَّ إلى المحتوى',
      brand_ar: 'مطعم اوفيليا',
      brand_en: 'Ofelia',
      nav_menu: 'القائمة',
      nav_info: 'أوقات الدوام',
      nav_location: 'الموقع',
      nav_contact: 'تواصل معنا',
      nav_aria: 'التنقل الرئيسي',
      order_now: 'اطلب الآن',
      hero_eyebrow: 'مشاوي ووجبات سريعة',
      reviews: 'تقييم',
      price_range: '10,000 - 15,000 د.ع للشخص',
      svc_dinein: 'جلوس داخلي',
      svc_takeaway: 'استلام من المطعم',
      svc_delivery: 'توصيل',
      cta_talabat: 'اطلب عبر طلبات',
      cta_call: 'اتصل بنا',
      menu_title: 'قائمة الطعام',
      filter_aria: 'تصنيف القائمة',
      cat_all: 'الكل',
      cat_sandwiches: 'ساندويتش',
      cat_steaks: 'ستيك',
      cat_grills: 'مشاوي',
      cat_drinks: 'مشروبات',
      item_chicken_sandwich: 'ساندويتش دجاج',
      item_chicken_roll: 'رول دجاج',
      item_special_burger: 'برغر سبيشل',
      item_chicken_steak: 'ستيك دجاج',
      item_ofelia_steak: 'ستيك اوفيليا',
      item_alan_steak: 'ستيك آلان ميت',
      item_milan_steak: 'ستيك ميلان',
      item_beef_kebab: 'كباب بولو لحم',
      item_ofelia_chicken: 'دجاج اوفيليا',
      item_chicken_box: 'بوكس دجاج',
      item_tea: 'چای',
      menu_empty: 'لا توجد عناصر في هذا التصنيف.',
      hours_title: 'أوقات الدوام',
      hours_caption: 'جدول أوقات دوام المطعم الأسبوعي',
      col_day: 'اليوم',
      col_hours: 'الساعات',
      day_sat: 'السبت',
      day_sun: 'الأحد',
      day_mon: 'الاثنين',
      day_tue: 'الثلاثاء',
      day_wed: 'الأربعاء',
      day_thu: 'الخميس',
      day_fri: 'الجمعة',
      hours_normal: '10:00 ص - 1:00 ص',
      hours_friday: '2:00 م - 1:00 ص',
      busiest_note: 'أكثر وقت ازدحاماً: مساء الخميس',
      location_title: 'الموقع',
      address_text: 'VX4G+PXG، دهوك، محافظة دهوك، العراق',
      map_title: 'خريطة موقع مطعم اوفيليا',
      get_directions: 'احصل على الاتجاهات',
      footer_call_aria: 'اتصل بنا',
      footer_whatsapp_aria: 'واتساب',
      footer_instagram_aria: 'انستغرام',
      footer_talabat_aria: 'طلبات',
      footer_rights: '© مطعم اوفيليا. جميع الحقوق محفوظة.',
      status_open: 'مفتوح الآن - يغلق الساعة 1:00 ص',
      status_closed_normal: 'مغلق - يفتح الساعة 10:00 ص',
      status_closed_friday: 'مغلق - يفتح الساعة 2:00 م',
      lang_switch_label: 'اختر اللغة'
    },

    ku: {
      skip_link: 'دەربازببه بۆ ناڤەرۆکێ',
      brand_ar: 'خارنگەها ئۆفیلیا',
      brand_en: 'Ofelia',
      nav_menu: 'مینیو',
      nav_info: 'دەمهێن کارکرنێ',
      nav_location: 'جهـ',
      nav_contact: 'پەیوەندیێ ب مە بكە',
      nav_aria: 'گەڕیانا سەرەکی',
      order_now: 'نوکە داخواز بکە',
      hero_eyebrow: 'گۆشتێ برژاهی و خوارنا لەزگین',
      reviews: 'هەلسەنگاندن',
      price_range: '10,000 - 15,000 د.ع بۆ هەر کەسەکی',
      svc_dinein: 'ڕوونشتنا ناڤخۆیی',
      svc_takeaway: 'برنا خوارنێ',
      svc_delivery: 'گەهاندن',
      cta_talabat: 'ب ڕێكا تەلەبات داخواز بکە',
      cta_call: 'پەیوەندیێ ب مە بكە',
      menu_title: 'مینیویا خوارنێ',
      filter_aria: 'پۆلینکرنا پێڕستێ',
      cat_all: 'همی',
      cat_sandwiches: 'سەندویچ',
      cat_steaks: 'ستیک',
      cat_grills: 'برژاهی',
      cat_drinks: 'ڤەخوارن',
      item_chicken_sandwich: 'سەندویچا مریشکی',
      item_chicken_roll: 'رۆلا مریشکی',
      item_special_burger: 'بەرگەرا سپێشەل',
      item_chicken_steak: 'ستیکا مریشکی',
      item_ofelia_steak: 'ستیکا ئۆفیلیا',
      item_alan_steak: 'ستیکا ئالان میت',
      item_milan_steak: 'ستیکا میلان',
      item_beef_kebab: 'کەبابا بۆلۆ یا گۆشتی',
      item_ofelia_chicken: 'مریشکا ئۆفیلیا',
      item_chicken_box: 'بۆکسا مریشکی',
      item_tea: 'چای',
      menu_empty: 'هیچ تشتەک د ڤێ پۆلینێ دا نینە.',
      hours_title: 'دەمهێن کارکرنێ',
      hours_caption: 'خشتەیێ دەمهێن کارکرنا حەفتیانە یا چێشتخانێ',
      col_day: 'ڕۆژ',
      col_hours: 'دەژمێر',
      day_sat: 'شەمبی',
      day_sun: 'ئێکەشەمبی',
      day_mon: 'دوشەمبی',
      day_tue: 'سێشەمبی',
      day_wed: 'چارشەمبی',
      day_thu: 'پێنجشەمبی',
      day_fri: 'ئینی',
      hours_normal: '10:00 سپێدێ - 1:00 شەڤ',
      hours_friday: '2:00 پشتی نیڤڕۆ - 1:00 شەڤ',
      busiest_note: 'قەرەبالغترین دەم: شەڤا پێنجشەمبیێ',
      location_title: 'جهـ',
      address_text: 'VX4G+PXG، دهۆک، پارێزگەها دهۆکێ، عیراق',
      map_title: 'نەخشەیێ جهێ خارنگەها ئۆفیلیا',
      get_directions: 'ئاراستەیان وەربگرە',
      footer_call_aria: 'پەیوەندیێ ب مە بكە',
      footer_whatsapp_aria: 'واتساپ',
      footer_instagram_aria: 'ئینستاگرام',
      footer_talabat_aria: 'تەلەبات',
      footer_rights: '© چێشتخانا ئۆفیلیا. همی ماف پاراستینە.',
      status_open: 'نوکە ڤەکرییە - دەمژمێر 1:00 شەڤ تێتە گرتن',
      status_closed_normal: 'گرتییە - دەمژمێر 10:00 سپێدێ ڤەدبێت',
      status_closed_friday: 'گرتییە - دەمژمێر 2:00 پشتی نیڤڕۆ ڤەدبێت',
      lang_switch_label: 'زمان هەلبژێرە'
    },
    en: {
      skip_link: 'Skip to content',
      brand_ar: 'مطعم اوفيليا',
      brand_en: 'Ofelia Restaurant',
      nav_menu: 'Menu',
      nav_info: 'Hours',
      nav_location: 'Location',
      nav_contact: 'Contact',
      nav_aria: 'Main navigation',
      order_now: 'Order Now',
      hero_eyebrow: 'Grill & Fast Food',
      reviews: 'reviews',
      price_range: 'IQD 10,000 - 15,000 per person',
      svc_dinein: 'Dine-in',
      svc_takeaway: 'Takeaway',
      svc_delivery: 'Delivery',
      cta_talabat: 'Order on Talabat',
      cta_call: 'Call us',
      menu_title: 'Our Menu',
      filter_aria: 'Menu categories',
      cat_all: 'All',
      cat_sandwiches: 'Sandwiches',
      cat_steaks: 'Steak Dishes',
      cat_grills: 'Grills',
      cat_drinks: 'Drinks',
      item_chicken_sandwich: 'Chicken Sandwich',
      item_chicken_roll: 'Chicken Roll Sandwich',
      item_special_burger: 'Special Burger',
      item_chicken_steak: 'Chicken Steak Dish',
      item_ofelia_steak: 'Ofelia Steak Dish',
      item_alan_steak: 'Alan Meat Steak Dish',
      item_milan_steak: 'Milan Steak Dish',
      item_beef_kebab: 'Beef Polo Kebab',
      item_ofelia_chicken: 'Ofelia Chicken',
      item_chicken_box: 'Chicken Box',
      item_tea: 'Tea',
      menu_empty: 'No items in this category.',
      hours_title: 'Opening Hours',
      hours_caption: 'Weekly restaurant opening hours',
      col_day: 'Day',
      col_hours: 'Hours',
      day_sat: 'Saturday',
      day_sun: 'Sunday',
      day_mon: 'Monday',
      day_tue: 'Tuesday',
      day_wed: 'Wednesday',
      day_thu: 'Thursday',
      day_fri: 'Friday',
      hours_normal: '10:00 AM - 1:00 AM',
      hours_friday: '2:00 PM - 1:00 AM',
      busiest_note: 'Busiest time: Thursday evening',
      location_title: 'Location',
      address_text: 'VX4G+PXG, Unnamed Road, Duhok, Duhok Governorate, Iraq',
      map_title: 'Map of Ofelia Restaurant location',
      get_directions: 'Get directions',
      footer_call_aria: 'Call us',
      footer_whatsapp_aria: 'WhatsApp',
      footer_instagram_aria: 'Instagram',
      footer_talabat_aria: 'Talabat',
      footer_rights: '© Ofelia Restaurant. All rights reserved.',
      status_open: 'Open now - closes at 1:00 AM',
      status_closed_normal: 'Closed - opens at 10:00 AM',
      status_closed_friday: 'Closed - opens at 2:00 PM',
      lang_switch_label: 'Choose language'
    }
  };

  var RTL_LANGS = { ar: true, ku: true };
  var SUPPORTED_LANGS = { ar: true, en: true, ku: true };
  var TITLES = {
    ar: 'مطعم اوفيليا | Ofelia Restaurant - دهوك',
    en: 'Ofelia Restaurant | مطعم اوفيليا - Duhok',
    ku: 'چێشتخانا ئۆفیلیا | Ofelia Restaurant - دهۆک'
  };

  var LANG_KEY = 'ofelia-lang';
  var htmlEl = document.documentElement;

  function getStoredLang() {
    var stored = null;
    try { stored = localStorage.getItem(LANG_KEY); } catch (e) { stored = null; }
    return SUPPORTED_LANGS[stored] ? stored : 'ar';
  }

  function applyLanguage(lang) {
    if (!SUPPORTED_LANGS[lang]) lang = 'ar';
    var dict = translations[lang];
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', RTL_LANGS[lang] ? 'rtl' : 'ltr');

    document.title = TITLES[lang];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria-label');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      if (dict[key] !== undefined) el.setAttribute('title', dict[key]);
    });

    var langSelect = document.getElementById('langSelect');
    if (langSelect && langSelect.value !== lang) langSelect.value = lang;

    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* storage unavailable */ }

    updateOpenStatus();
  }

  function initLanguageToggle() {
    var lang = getStoredLang();
    applyLanguage(lang);

    var select = document.getElementById('langSelect');
    if (!select) return;
    select.value = lang;
    select.addEventListener('change', function () {
      applyLanguage(select.value);
    });
  }

  /* =========================================================
     2. Open / Closed status (Asia/Baghdad timezone)
     ========================================================= */

  var WEEKDAY_INDEX = {
    Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3,
    Thursday: 4, Friday: 5, Saturday: 6
  };

  // Returns { weekday: 0-6 (Sun-Sat), hour: 0-23, minute: 0-59 } for Asia/Baghdad,
  // regardless of the visitor's own local timezone.
  function getBaghdadNow() {
    var formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Baghdad',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hourCycle: 'h23'
    });

    var parts = formatter.formatToParts(new Date());
    var map = {};
    parts.forEach(function (p) { map[p.type] = p.value; });

    var hour = parseInt(map.hour, 10);
    if (isNaN(hour) || hour === 24) hour = 0;

    return {
      weekday: WEEKDAY_INDEX[map.weekday],
      hour: hour,
      minute: parseInt(map.minute, 10)
    };
  }

  function computeStatus() {
    var now = getBaghdadNow();
    var currentMinutes = now.hour * 60 + now.minute;

    var CLOSE_THRESHOLD = 1 * 60; // 01:00 — the shift that started the previous day ends here
    var isFriday = now.weekday === 5;
    var openThresholdToday = isFriday ? 14 * 60 : 10 * 60;

    // Open if we are still inside yesterday's overnight shift (00:00-00:59),
    // OR if today's shift has already started.
    var isOpen = currentMinutes < CLOSE_THRESHOLD || currentMinutes >= openThresholdToday;

    return {
      isOpen: isOpen,
      isFriday: isFriday,
      weekday: now.weekday
    };
  }

  function updateOpenStatus() {
    var lang = htmlEl.getAttribute('lang');
    if (!SUPPORTED_LANGS[lang]) lang = 'ar';
    var dict = translations[lang];
    var status = computeStatus();

    var text = status.isOpen
      ? dict.status_open
      : (status.isFriday ? dict.status_closed_friday : dict.status_closed_normal);

    var dots = [document.getElementById('statusDot'), document.getElementById('statusDotHero')];
    var texts = [document.getElementById('statusText'), document.getElementById('statusTextHero')];

    dots.forEach(function (dot) {
      if (!dot) return;
      dot.classList.toggle('is-open', status.isOpen);
      dot.classList.toggle('is-closed', !status.isOpen);
    });

    texts.forEach(function (el) {
      if (el) el.textContent = text;
    });

    highlightToday(status.weekday);
  }

  function highlightToday(weekday) {
    var rows = document.querySelectorAll('#hoursTable tbody tr');
    rows.forEach(function (row) {
      var day = parseInt(row.getAttribute('data-day'), 10);
      row.classList.toggle('is-today', day === weekday);
    });
  }

  /* =========================================================
     3. Menu filtering
     ========================================================= */
  function initMenuFilter() {
    var buttons = document.querySelectorAll('.filter-btn');
    var cards = document.querySelectorAll('.menu-card');
    var emptyMsg = document.getElementById('menuEmpty');

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');

        var filter = btn.getAttribute('data-filter');
        var visibleCount = 0;

        cards.forEach(function (card) {
          var match = filter === 'all' || card.getAttribute('data-category') === filter;
          card.classList.toggle('is-hidden', !match);
          if (match) visibleCount++;
        });

        if (emptyMsg) emptyMsg.hidden = visibleCount !== 0;
      });
    });
  }

  /* =========================================================
     4. Mobile navigation toggle
     ========================================================= */
  function initMobileNav() {
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('main-nav-mobile');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* =========================================================
     5. Footer year
     ========================================================= */
  function initFooterYear() {
    var el = document.getElementById('copyYear');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* =========================================================
     Init
     ========================================================= */
  document.addEventListener('DOMContentLoaded', function () {
    initLanguageToggle();
    initMenuFilter();
    initMobileNav();
    initFooterYear();
    updateOpenStatus();
    setInterval(updateOpenStatus, 60000);
  });
})();
