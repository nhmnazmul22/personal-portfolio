import InitialTransition from "./animation/InitialTransition";

type PageHeadingProps = {
  title: string;
  subTitle: string;
};

const PageHeading: React.FC<PageHeadingProps> = ({ title, subTitle }) => {
  return (
    <InitialTransition>
      <h2 className="text-3xl font-semibold text-center">{title}</h2>
      <p className="text-muted-foreground text-center text-sm sm:text-base mt-2 max-w-[460px] mx-auto">
        {subTitle}
      </p>
    </InitialTransition>
  );
};

export default PageHeading;
