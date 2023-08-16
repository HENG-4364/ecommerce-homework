import ContentAdmin from '../ContentAdmin';
import Sidebar from '../../Sidebar';

export default function Dasboard(props: any) {
  return (
    <>
      <div className="row p-0 m-0">
        <div className="col-1 p-0">
          <Sidebar />
        </div>
        <div className="col-11 p-0">
          <ContentAdmin />
          {props.children}
        </div>
      </div>
    </>
  );
}
