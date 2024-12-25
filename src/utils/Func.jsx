// ondalık işlemleri karşılaştırmak için fonksiyon
export const checkSign = number => {
  if (number > 0) {
    return true;
  } else if (number < 0) {
    return false;
  } else {
    return null;
  }
};

// para birimleri
export const currencies = [
  { code: "USD", name: "Amerikan Doları" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "İngiliz Sterlini" },
  { code: "CHF", name: "İsviçre Frangı" },
  { code: "CAD", name: "Kanada Doları" },
  { code: "RUB", name: "Rus Rublesi" },
  { code: "AED", name: "Birleşik Arap Emirlikleri Dirhemi" },
  { code: "AUD", name: "Avustralya Doları" },
  { code: "DKK", name: "Danimarka Kronası" },
  { code: "SEK", name: "İsveç Kronası" },
  { code: "NOK", name: "Norveç Kronası" },
  { code: "JPY", name: "Japon Yeni" },
  { code: "KWD", name: "Kuveyt Dinarı" },
  { code: "ZAR", name: "Güney Afrika Randı" },
  { code: "BHD", name: "Bahreyn Dinarı" },
  { code: "LYD", name: "Libya Dinarı" },
  { code: "SAR", name: "Suudi Riyali" },
  { code: "IQD", name: "Irak Dinarı" },
  { code: "ILS", name: "İsrail Şekeli" },
  { code: "IRR", name: "İran Riyali" },
  { code: "INR", name: "Hindistan Rupisi" },
  { code: "MXN", name: "Meksika Pesosu" },
  { code: "HUF", name: "Macar Forinti" },
  { code: "NZD", name: "Yeni Zelanda Doları" },
  { code: "BRL", name: "Brezilya Reali" },
  { code: "IDR", name: "Endonezya Rupiahı" },
  { code: "CZK", name: "Çek Korunası" },
  { code: "PLN", name: "Polonya Zlotisi" },
  { code: "RON", name: "Romanya Leyi" },
  { code: "CNY", name: "Çin Yuanı" },
  { code: "ARS", name: "Arjantin Pesosu" },
  { code: "ALL", name: "Arnavutluk Leki" },
  { code: "AZN", name: "Azerbaycan Manatı" },
  { code: "BAM", name: "Bosna-Hersek Konvertibl Markı" },
  { code: "CLP", name: "Şili Pesosu" },
  { code: "COP", name: "Kolombiya Pesosu" },
  { code: "CRC", name: "Kosta Rika Kolonu" },
  { code: "DZD", name: "Cezayir Dinarı" },
  { code: "EGP", name: "Mısır Lirası" },
  { code: "HKD", name: "Hong Kong Doları" },
  { code: "ISK", name: "İzlanda Kronası" },
  { code: "JOD", name: "Ürdün Dinarı" },
  { code: "KRW", name: "Güney Kore Wonu" },
  { code: "KZT", name: "Kazakistan Tengesi" },
  { code: "LBP", name: "Lübnan Lirası" },
  { code: "LKR", name: "Sri Lanka Rupisi" },
  { code: "MAD", name: "Fas Dirhemi" },
  { code: "MDL", name: "Moldova Leyi" },
  { code: "MKD", name: "Kuzey Makedonya Dinarı" },
  { code: "MYR", name: "Malezya Ringgiti" },
  { code: "OMR", name: "Umman Riyali" },
  { code: "PEN", name: "Peru Yeni Solu" },
  { code: "PHP", name: "Filipinler Pesosu" },
  { code: "PKR", name: "Pakistan Rupisi" },
  { code: "QAR", name: "Katar Riyali" },
  { code: "RSD", name: "Sırp Dinarı" },
  { code: "SGD", name: "Singapur Doları" },
  { code: "SYP", name: "Suriye Lirası" },
  { code: "THB", name: "Tayland Bahtı" },
  { code: "TWD", name: "Tayvan Doları" },
  { code: "UAH", name: "Ukrayna Grivnası" },
  { code: "UYU", name: "Uruguay Pesosu" },
  { code: "GEL", name: "Gürcistan Lari" },
  { code: "TND", name: "Tunus Dinarı" },
  { code: "BGN", name: "Bulgar Levası" },
];

// try format

export const formatToTRY = amount => {
  try {
    const formattedAmount = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
    }).format(amount);
    return formattedAmount;
  } catch (error) {
    console.error("Türk Lirası formatlama sırasında bir hata oluştu:", error);
    return amount;
  }
};
