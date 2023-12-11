import TeamCard from "../components/TeamCard";
import TeamMembers from "../datas/TeamMembers";
import PageBanner from "../components/PageBanner";

function About() {
  return (
    <>
      <PageBanner
        pageTitle={"À propos de nous"}
        breadcrumb={["À propos"]}
        banner="./img/annie-spratt-_XdU9Q5iFRE-unsplash.jpg"
      />
      <div className="md:container md:mx-auto px-4 md:px-0 my-10">
        <h2 className="mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem eius reiciendis tempora veritatis consequuntur?
          Officiis ab delectus deserunt veritatis unde natus fugiat, id quo a
          non. Dolor inventore alias dolorem.
        </p>
        <div className="my-28">
          <div className="text-center my-5">
            <h2>Rencontrez notre équipe</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
              ratione itaque at blanditiis reprehenderit quibusdam nobis.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {TeamMembers.map((team) => (
              <TeamCard
                key={team.teamId}
                picture={team.image}
                name={team.name}
                description={team.role}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
