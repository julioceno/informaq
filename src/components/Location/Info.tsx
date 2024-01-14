export interface InfoProps {
  title: string;
  paragraphs: string[];
}

export function Info({ paragraphs, title }: InfoProps) {
  return (
    <div>
      <h2 className="font-poppins text-center md:text-start text-lg sm:text-xl font-semibold">
        {title}
      </h2>
      <div>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="font-inter font-light text-sm sm:text-base text-center md:text-start"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
