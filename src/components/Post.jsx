import Button from "./Button";
function Post({ post }) {
  return (
    <article className="flex flex-col gap-4">
      <div className="relative h-[250px] overflow-hidden group">
        <div
          className="absolute w-full h-full transition-all duration-700 ease-in-out transform bg-center bg-cover group-hover:scale-110 group-hover:grayscale"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.4), rgba(30, 30, 30, 0.1)),url(./img/__jessie-daniella-aiNU4cA4UzQ-unsplash.jpg)`,
          }}
        ></div>
        <div className="text-sm font-bold absolute top-4 left-4 rounded-full h-16 w-16 bg-white flex flex-col divide-y gap-y-1 justify-center items-center">
          <div>10</div>
          <div>Jan</div>
        </div>
      </div>
      <span className="text-mute">Actualité</span>
      <h4>{post.title}</h4>
      <div className="h-[1px] w-1/5 bg-mute/30"></div>
      <p>{post.body}</p>
      <div>
        <Button>Lire plus</Button>
      </div>
    </article>
  );
}

export default Post;
