import ListLogo from '../components/TodoLogo';
import Content from '../components/Content';

export default () => (
  <Content title="About the Project">
    <div className="">
      <div className="container">
        <h1 className="display-4">About this App</h1>
        <ListLogo />
        <p className="lead">This Application is a simple demonstrator React App</p>
      </div>
    </div>
  </Content>
);
