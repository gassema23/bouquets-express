import Breadcrumb from "./Breadcrumb";
function PageBanner({ banner, pageTitle, breadcrumb }) {
  return (
    <div
      className={` bg-blend-hue h-[350px] md:h-[450px] justify-around items-center relative bg-fixed bg-no-repeat w-full mb-10`}
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div
        className={`w-full h-full absolute left-0 top-0 blur bg-dark/10`}
      ></div>
      <div className="container mx-auto h-full flex items-center justify-center ">
        <div className="flex flex-col space-y-2 align-start px-4 lg:px-0 mt-[96px] z-10">
          <h1 className="text-white text-shadow">{pageTitle}</h1>
          <Breadcrumb items={breadcrumb} />
        </div>
      </div>
    </div>
  );
}

export default PageBanner;
