import { services } from "@/constants";

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 space-y-5 lg:space-x-4">
      {services.map(({ title, shortDes, longDes, icon, category }, index) => (
        <div
          key={index}
          className="bg-secondary p-5 rounded shadow-custom border border-foreground/10"
        >
          <div className="bg-custom-yellow w-18 h-18 rounded-full flex items-center justify-center mb-3">
            {icon}
          </div>
          <h2 className="text-xl">{title}</h2>
          <p className="text-muted-foreground text-sm">{shortDes}</p>
          <p className="text-foreground/70 mt-3">{longDes}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {category.map((cate, index) => (
              <p
                className="bg-custom-yellow px-2 py-1 rounded-full text-sm text-black font-medium shadow-sm"
                key={index}
              >
                {cate}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
