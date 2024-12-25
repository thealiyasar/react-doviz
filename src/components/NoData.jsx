const NoData = () => {
  return (
    <>
      <p className="text-red-700">Veri bulunamadı.</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Sayfayı Yenile
      </button>
    </>
  );
};

export default NoData;
