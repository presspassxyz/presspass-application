import classNames from 'classnames';

const Card = ({
  children,
  className,
}: {
  children: React.ReactElement[];
  className: string;
}) => (
  <div className={classNames('max-w-xl', className)}>
    <div className="bg-white rounded-b-xl text-black">{children}</div>
  </div>
);

export default Card;
