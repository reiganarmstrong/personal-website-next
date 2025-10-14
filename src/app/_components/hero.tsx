import Image from "next/image";
import headshot from "../../assets/headshot.jpeg";
export default () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center ">
        <div className="max-w-md join join-vertical">
          <div className="text-center flex items-start justify-center">
            <Image
              src={headshot}
              width={200}
              height={200}
              alt="Picture of the author"
              className="rounded-full mb-10 border-4 bg-base-content"
            />
          </div>
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.Provident cupiditate voluptatem et in.
            Quaerat fugiat ut assumenda excepturi exercitationem quasi. In et
            in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};
