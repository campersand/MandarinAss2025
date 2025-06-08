const questions = [
  // Soal vocab biasa (kata + arti)
  { word: "有意思", choices: ["Menarik", "Membosankan", "Penting", "Serius"], answer: "Menarik" },
  { word: "但是", choices: ["Tapi", "Karena", "Dan", "Atau"], answer: "Tapi" },
  { word: "虽然", choices: ["Walaupun", "Sebab", "Jadi", "Tetapi"], answer: "Walaupun" },
  { word: "次", choices: ["Kali", "Hari", "Minggu", "Bulan"], answer: "Kali" },
  { word: "玩儿", choices: ["Bermain", "Berjalan", "Bekerja", "Belajar"], answer: "Bermain" },
  { word: "晴", choices: ["Cerah", "Mendung", "Hujan", "Berangin"], answer: "Cerah" },
  { word: "百", choices: ["Ratus", "Puluh", "Seribu", "Sepuluh"], answer: "Ratus" },
  { word: "日", choices: ["Hari", "Malam", "Bulan", "Tahun"], answer: "Hari" },
  { word: "新年", choices: ["Tahun baru", "Hari ulang tahun", "Musim panas", "Musim dingin"], answer: "Tahun baru" },
  { word: "票", choices: ["Ticket", "Kartu", "Surat", "Uang"], answer: "Ticket" },
  { word: "火车站", choices: ["Stasiun kereta", "Terminal bus", "Bandara", "Restoran"], answer: "Stasiun kereta" },
  { word: "大家", choices: ["Semua", "Beberapa", "Sedikit", "Tidak"], answer: "Semua" },
  { word: "更", choices: ["Lebih", "Kurang", "Sama", "Tidak"], answer: "Lebih" },
  { word: "阴", choices: ["Mendung", "Cerah", "Hujan", "Berangin"], answer: "Mendung" },

  // Soal kalimat pilihan ganda biasa
  { sentence: "他觉得这本书很 ______。", choices: ["新年", "有意思", "票", "火车站"], answer: "有意思" },
  { sentence: "今天天气很 ______。", choices: ["晴", "阴", "雨", "风"], answer: "晴" },
  { sentence: "我们一起去 ______ 玩儿。", choices: ["公园", "商店", "学校", "饭馆"], answer: "公园" },
  { sentence: "请给我两张 ______。", choices: ["票", "钱", "纸", "笔"], answer: "票" },

  // Soal susun kata (arrange)
  {
    type: "arrange",
    words: ["他", "觉得", "这本书", "有意思"],
    choices: [
      "他这本书觉得有意思",
      "他觉得这本书有意思",
      "觉得他有意思这本书",
      "有意思觉得他这本书"
    ],
    answer: "他觉得这本书有意思"
  },
  {
    type: "arrange",
    words: ["我们", "一起", "去", "玩儿"],
    choices: [
      "我们一起去玩儿",
      "一起我们去玩儿",
      "我们去玩儿一起",
      "去玩儿我们一起"
    ],
    answer: "我们一起去玩儿"
  },
  {
    type: "arrange",
    words: ["今天", "天气", "很", "晴"],
    choices: [
      "今天天气很晴",
      "天气今天很晴",
      "今天很晴天气",
      "天气很晴今天"
    ],
    answer: "今天天气很晴"
  },
  {
    type: "arrange",
    words: ["我", "喜欢", "吃", "苹果"],
    choices: [
      "我喜欢吃苹果",
      "喜欢我苹果吃",
      "吃苹果我喜欢",
      "苹果我喜欢吃"
    ],
    answer: "我喜欢吃苹果"
  },
  {
    type: "arrange",
    words: ["你", "叫什么", "名字"],
    choices: [
      "你叫什么名字",
      "叫什么你名字",
      "名字你叫什么",
      "叫什么名字你"
    ],
    answer: "你叫什么名字"
  }
];
