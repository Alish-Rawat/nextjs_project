import Feed from "@components/Feed";
import ShimmerMain from "@components/Shimmer";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center text-blue-500">
        Discover & share
        <br className="max-md:hidden" />
        <span className="text-white text-center"> AI-Powered prompts</span>
      </h1>
      <p className="desc text-center">
        Prompt-AI is an open-source AI Prompting tool for modern world to
        discover , create and share creative prompts
      </p>
      {/* <ShimmerMain /> */}
      <Feed />
    </section>
  );
};

export default Home;
