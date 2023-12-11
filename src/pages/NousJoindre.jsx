import PageBanner from "../components/PageBanner";
function NousJoindre() {
  return (
    <>
      <PageBanner
        pageTitle={"Nous joindre"}
        breadcrumb={["Nous joindre"]}
        banner="./img/annie-spratt-_XdU9Q5iFRE-unsplash.jpg"
      />
      <div className="md:container md:mx-auto px-4 md:px-0 my-10">
        <div>Nous-Joindre</div>
      </div>
    </>
  );
}

export default NousJoindre;
