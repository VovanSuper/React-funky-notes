import Form from '../components/Form';
import Alert from '../components/Alert';
import Notes from '../components/Notes';

export default () => (
  <>
    <Alert />
    <div className="container pt-5">
      <div className="row">
        <div className="col-12">
          <Form />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-12">
          <Notes />
        </div>
      </div>
    </div>
  </>
);
