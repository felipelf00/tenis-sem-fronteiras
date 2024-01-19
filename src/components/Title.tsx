const Title: React.FC<{ children: string }> = (props) => {
  return (
    <div className="relative">
      <h2 className="text-5xl font-bold z-30 relative italic">
        {props.children}
      </h2>
      <div className="w-full bg-blue-tsf p-2 z-0 absolute bottom-0"></div>
    </div>
  );
};

export default Title;
