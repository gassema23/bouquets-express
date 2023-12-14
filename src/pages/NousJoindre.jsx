import PageBanner from "../components/PageBanner";
import Button from "../components/Button";
import Input from "../components/Input";
import TextArea from "../components/TextArea";

function NousJoindre() {
  return (
    <>
      <PageBanner
        pageTitle={"Nous joindre"}
        breadcrumb={["Nous joindre"]}
        banner="./img/annie-spratt-_XdU9Q5iFRE-unsplash.jpg"
      />
      <div className="md:container md:mx-auto px-4 md:px-0 my-10">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-1/2">
            <h3>Trouvez notre boutique</h3>
            <iframe
              className="w-full h-[450px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88090.40896839037!2d-72.67818963583953!3d46.372854401737705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc7c8cfcf1f467d%3A0xb9d6b0325e28c3d2!2sTrois-Rivi%C3%A8res%2C%20QC!5e0!3m2!1sfr!2sca!4v1700605771475!5m2!1sfr!2sca"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="flex w-1/2 flex-col order-1 md:order-2">
            <div className="mb-4">
              <h3>Prenez contact avec nous</h3>
            </div>
            <div className="w-full flex flex-col gap-4">
              <Input name="name" placeholder="Nom complet" />
              <Input name="email" placeholder="Adresse courriel" type="email" />
              <Input name="subject" placeholder="Votre sujet" />
              <TextArea name="message" placeholder="Votre message" />
            </div>
            <div className="flex justify-start my-4">
              <Button>Envoyer</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NousJoindre;
