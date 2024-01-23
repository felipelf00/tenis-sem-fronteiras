const Title: React.FC<{ children: string; size?: string }> = (props) => {
  return (
    <div className="relative">
      <h2
        className={`font-bold z-30 relative italic ${
          props.size === "m" ? "text-3xl" : "text-5xl"
        } md:text-5xl`}
      >
        {props.children}
      </h2>
      <div className="w-full bg-blue-tsf p-2 z-0 absolute bottom-0"></div>
    </div>
  );
};

export default Title;
