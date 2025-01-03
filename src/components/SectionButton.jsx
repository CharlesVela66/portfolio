import Button from './Button';

const SectionButton = ({ name, className, containerClassName, href }) => {
  return (
    <div className={className}>
      <a href={href} className="w-fit">
        <Button
          name={name}
          isBeam
          containerClass={containerClassName}
          href={href}
        />
      </a>
    </div>
  );
};

export default SectionButton;
