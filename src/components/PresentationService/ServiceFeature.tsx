export interface ServiceFeatureProps {
  title: string;
  paragraphs: string[];
}

export function ServiceFeature({ paragraphs, title }: ServiceFeatureProps) {
  return (
    <div className="flex flex-col ">
      <h3 className="font-poppins font-medium text-lg text-center md:text-start">
        {title}:
      </h3>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="font-inter font-light text-lg text-center md:text-start"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
