type Props = {
  title: string;
  path?: string;
  isPath?: boolean;
};

export function Title({ title, path, isPath }: Props) {
  return (
    <>
      <div className="content-title d-flex align-items-center justify-content-between p-3">
        <h4 className="p-0">{title}&nbsp;</h4>
        {!isPath ? <a href={path}>View All</a> : ''}
      </div>
    </>
  );
}
