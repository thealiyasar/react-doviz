import { useEffect, useState } from "react";
import axios from "axios";
import Updated from "./components/Updated";
import CurrencyCard from "./components/CurrencyCard";
import { currencies } from "./utils/Func";
import NoData from "./components/NoData";
import GoldCard from "./components/GoldCard";

const App = () => {
  const [currency, setCurrency] = useState([]);
  const [gold, setGold] = useState([]);
  const [updateDate, setUpdateDate] = useState("Bekleniyor...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currency.length === 0) {
      const fetchCurrency = async () => {
        try {
          const response = await axios.get(
            "https://finans.truncgil.com/v4/today.json"
          );
          if (response.data) {
            // güncelleme tarih saat
            const date = response.data.Update_Date;
            setUpdateDate(date);
            // döviz kurları
            const fetchedCurrency = Object.entries(response.data)
              .filter(
                ([key, value]) =>
                  key !== "Update_Date" &&
                  value?.Type &&
                  value?.Type === "Currency"
              )
              .map(([key, value]) => ({
                Currency: key,
                CurrencyName:
                  currencies.find(currency => currency.code === key)?.name ||
                  key,
                Type: value.Type,
                Buying: value.Buying,
                Selling: value.Selling,
                Change: value.Change || 0,
              }));
            setCurrency(fetchedCurrency);

            // altın kurları
            const fetchedGold = Object.entries(response.data)
              .filter(
                ([key, value]) =>
                  key !== "Update_Date" && value?.Type && value?.Type === "Gold"
              )
              .map(([key, value]) => ({
                Currency: key,
                GoldName: value.name,
                Type: value.Type,
                Buying: value.Buying,
                Selling: value.Selling,
                Change: value.Change || 0,
              }));
            setGold(fetchedGold);
          } else {
            console.error("API yanıtı beklenmedik formatta:", response.data);
          }
        } catch (error) {
          console.error("Döviz kurları alınırken hata oluştu:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchCurrency();
    }
  }, [currency]);

  return (
    <div className="bg-gray-100 py-5">
      <div className="container mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Doviz - Altın Kurları
        </h1>
        <div className="text-gray-600 text-center">
          <p>
            Döviz ve altın kurları, güncel olarak{" "}
            <a
              className="text-teal-900"
              target="_blank"
              href="https://finans.truncgil.com/"
            >
              finans.truncgil.com
            </a>{" "}
            sitesinde yayınlanan json url üzerinden çekilerek bu sayfada
            gösterilmektedir.
          </p>
          <p className="text-red-700">
            Verilerin güncelliği yada doğruluğu konusunda garanti
            verilmemektedir. Maddi zararlarınızda sorumluluk kabul
            edilmemektedir.
          </p>
          <p>
            Kodlar için{" "}
            <a
              target="_blank"
              className="text-teal-900"
              href="https://github.com/thealiyasar/react-doviz"
            >
              Github Adresini Ziyaret Edin.
            </a>
          </p>
        </div>
      </div>
      <div className="container space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Doviz / TRY</h2>
        {updateDate && <Updated updateDate={updateDate} />}
        {loading ? (
          <div className=" text-gray-600">Yükleniyor...</div>
        ) : currency ? (
          <div className="grid grid-cols-12 gap-6">
            {currency.map((rate, index) => (
              <CurrencyCard key={index} rate={rate} />
            ))}
          </div>
        ) : (
          <NoData />
        )}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Altın / TRY</h2>
        {updateDate && <Updated updateDate={updateDate} />}
        {loading ? (
          <div className=" text-gray-600">Yükleniyor...</div>
        ) : currency ? (
          <div className="grid grid-cols-12 gap-6">
            {gold.map((gold, index) => (
              <GoldCard key={index} gold={gold} />
            ))}
          </div>
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default App;
