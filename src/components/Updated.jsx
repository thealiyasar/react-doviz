const Updated = updateDate => {
  const date = new Date(updateDate.updateDate);

  const formattedDate = date.toLocaleString("tr-TR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <div className="text-gray-600 mt-4">
      <p>Son Güncelleme: {formattedDate} </p>
    </div>
  );
};

export default Updated;
