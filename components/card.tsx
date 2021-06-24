import React from 'react'

interface Company {
  name: string;
  link: string;
};

interface CardProps {
  company: Company;
  title: string;
  start: string;
  technologies: Array<string>;
  end?: string;
};

const Card = (props: React.PropsWithChildren<CardProps>) => {
  const technologies = [];
  for (const tech of props.technologies) {
    technologies.push(<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</span>)
  }

  return (
    <div className="flex flex-col pl-10 justify-between">
      <div className="max-w-lg h-60 rounded-lg overflow-hidden shadow-lg bg-gray-700">
        <div className="px-6 py-4">
          <div className="font-bold text-lg text-center text-green-300 mb-2">
            <a href={props.company.link}>{props.company.name}</a>
          </div>
          <div className="text-base mb-2 text-blue-300">{props.title} ({props.start + " - " + (props.end !== undefined ? props.end : "present")})</div>
          <p className="text-white text-sm">
            {props.children}
          </p>
        </div>
        <div className="px-6 pb-2 bottom-0 absolute">
          {technologies}
        </div>
      </div>
    </div>
  )
}

export default Card;
