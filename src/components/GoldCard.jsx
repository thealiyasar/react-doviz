import classNames from "classnames";
import { checkSign } from "../utils/Func";

const GoldCard = gold => {
  console.log(gold);
  return (
    <div
      className={classNames(
        "shadow-md rounded-lg p-4 flex flex-col items-start text-gray-600  font-semibold col-span-3",
        checkSign(gold.gold.Change) === null && "bg-white",
        checkSign(gold.gold.Change) === true && "bg-green-100",
        checkSign(gold.gold.Change) === false && "bg-red-100"
      )}
    >
      <div className="w-full flex gap-2 items-center text-lg font-medium text-gray-700 mb-2">
        <div>{gold.gold.Currency}</div>
        <div className="text-xs">[ {gold.gold.GoldName} ]</div>
      </div>
      <div className="w-full flex items-center justify-between gap-2">
        <div>
          Alış : <span>{gold.gold.Buying}</span>
        </div>
        <div>
          Satış : <span>{gold.gold.Selling}</span>
        </div>
      </div>
      <div className="w-full text-xs text-center">
        Değişim Oranı:
        <span> %{gold.gold.Change}</span>
      </div>
    </div>
  );
};

export default GoldCard;
