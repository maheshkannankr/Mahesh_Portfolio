import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Opps!!! Something went Wrong</h1>
    </div>
  );
};

export default Error;
