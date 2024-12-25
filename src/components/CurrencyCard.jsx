import classNames from "classnames";
import { checkSign } from "../utils/Func";

const CurrencyCard = rate => {
  return (
    <div
      className={classNames(
        "shadow-md rounded-lg p-4 flex flex-col items-start text-gray-600  font-semibold col-span-3",
        checkSign(rate.rate.Change) === null && "bg-white",
        checkSign(rate.rate.Change) === true && "bg-green-100",
        checkSign(rate.rate.Change) === false && "bg-red-100"
      )}
    >
      <div className="w-full flex gap-2 items-center text-lg font-medium text-gray-700 mb-2">
        <div>{rate.rate.Currency}</div>
        <div className="text-xs">
          [ {rate.rate.CurrencyName.toUpperCase()} ]
        </div>
      </div>
      <div className="w-full flex items-center justify-between gap-2">
        <div>
          Alış : <span>{rate.rate.Buying}</span>
        </div>
        <div>
          Satış : <span>{rate.rate.Selling}</span>
        </div>
      </div>
      <div className="w-full text-xs text-center">
        Değişim Oranı:
        <span> %{rate.rate.Change}</span>
      </div>
    </div>
  );
};

export default CurrencyCard;
