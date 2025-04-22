const SectionHeader = ({ tag, title, description }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center text-center gap-2 max-w-lg">
        {tag && <h2>{tag}</h2>}
        <div className="flex flex-col items-center text-center gap-1">
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
